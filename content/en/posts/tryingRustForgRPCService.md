---
title: "Trying Rust for gRPC service"
date: 2022-10-17
draft: false
---

## Trait or not trait?

I'm a big fan of [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), and coming from a backgound of `go`, when I think of using `rust` to write a gRPC service, I came up with the following folder structure of `/src`:

```
/controller
/entity
/repository
/usecase
main.rs
controller.rs
repository.rs
usecase.rs
``` 

For example, the `usecase.rs` file contain the trait `UseCase` and its implementation `UseCaseState`. Although the trait `UseCase` only have 1 implementation, I like to keep it as a trait for clearly showing all the interfaces of `UseCase`.

And because `UseCase` has only 1 implementation and the project will be a binary running on the server, the chance of another person use this trait is very low. So I want the trait to be static dispatching.

And the final code of `usecase.rs` looks like this:

```rust
use crate::repository::Repository;
use anyhow::Result;
use async_trait::async_trait;

mod delete;
mod get;
mod update;

#[async_trait]
pub trait UseCase {
	//comment goes here
    async fn get(&self, key: &str) -> Result<String>;
	//comment goes here
    async fn update(&self, k: &str, v: &str) -> Result<()>;
	//comment goes here
    async fn delete(&self, k: &str) -> Result<()>;
}

pub struct UseCaseState<Repository> {
    repo: Repository,
}

impl<T: Repository> UseCaseState<T> {
    pub async fn new(repo: T) -> Self {
        UseCaseState { repo, client }
    }
}

#[async_trait]
impl<T> UseCase for UseCaseState<T>
where
    T: Repository + Sync + Send,
{
    async fn get(&self, key: &str) -> Result<String> {
        Ok(self.get_uc(key).await?)
    }

    async fn update(&self, k: &str, v: &str) -> Result<()> {
        Ok(self.update_uc(k, v).await?)
    }
    async fn delete(&self, k: &str) -> Result<()> {
        Ok(self.delete_uc(k).await?)
    }
}
```

The `get_uc`, `update_uc` and `delete_uc` is implemented in the files under `/usecase` folder(three `mod` lines at the begining).

To avoid a one big file and make the code more readable, I want to seperate the `UseCase` implementation into seperated files, the result is a lot of boilderplate code.
I am only a beginner of `rust`, I must say it is definitely not pleasent to write the trait bounds and life time specifier for generic in trait implementation.
And the final docker image size is about `140Mb`.

So I told myself maybe I can remove all the `static dispatching` and `async_trait` stuff. I can tell after removing those things, the code become much cleaner and the final docker image size is only like `60Mb`, almost halve the build size.

The code without trait:

```rust
use crate::repository::RepositoryState;

mod delete;
mod get;
mod update;

pub struct UseCaseState {
    repo: RepositoryState,
}

impl UseCaseState {
    pub async fn new(repo: RepositoryState) -> Self {
        UseCaseState { repo, client }
    }
}
```

So the conclusion is, it seems no benifits of using trait with only 1 implementation.

## Error handling

I find a not good looking pattern in handling errors, just like this code snippet from [rust official doc](https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html):

```rust
use std::fs::File;
use std::io::ErrorKind;

fn main() {
    let greeting_file_result = File::open("hello.txt");

    let greeting_file = match greeting_file_result {
        Ok(file) => file,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => match File::create("hello.txt") {
                Ok(fc) => fc,
                Err(e) => panic!("Problem creating the file: {:?}", e),
            },
            other_error => {
                panic!("Problem opening the file: {:?}", other_error);
            }
        },
    };
}
```

It is kind of a `match hell`, instead of numerous `if err != nil` in `go`, it is a `match` with an `err` arm (good luck for another nested `match` and maybe another...).

At first I think the `?` operator will simplify the error handling, but it looks like it only works in simple cases. 