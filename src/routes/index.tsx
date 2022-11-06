import { component$, Resource, useResource$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { GithubIcon, Menu } from './component';
import { IndexMenu, IndexMenuType, Page } from './entity';
import { repo } from './repository';

export default component$(() => {
  const pageState = useStore({ cur: 0, prev: false, pageSize: 1 })
  const keys = Object.keys(repo)
  const length = keys.length

  const page = useResource$<Page>(({ track }) => {
    track(() => pageState.cur)
    const res: Page = { menu: [], isNextPage: false, isPrevPage: false }
    for (let i = pageState.cur; i < pageState.cur + pageState.pageSize + 1; i++) {
      if (i < length) {
        res.menu.push(repo[keys[i]])
      } else {
        break
      }
    }
    return res
  })

  const menu: IndexMenu[] = [
    {
      name: "A short journey with Rust in gRPC",
      href: "/",
      date: "2022-10-31",
      type: IndexMenuType.UNSPECIFIED
    },
    {
      name: "Show gRPC timeout with tests",
      href: "https://github.com/washanhanzi/grpc-go-timeout",
      date: "2022-10-31",
      type: IndexMenuType.UNSPECIFIED
    },
    {
      name: "Decido!",
      href: "https://decido-theta.vercel.app",
      date: "2022-07-22",
      type: IndexMenuType.UNSPECIFIED
    },
    {
      name: "Pragmatic gRPC 1",
      href: "/posts/pragmaticgrpc1",
      date: "2021-05-30",
      type: IndexMenuType.UNSPECIFIED
    }
  ]
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-[1fr_600px_1.1fr] gap-4 text-zinc-300 pt-3">
        <div></div>
        <div class="px-6">
          <p class="text-4xl py-4">N1ll</p>
          <a href="https://github.com/washanhanzi" target="_blank" rel="author" title="Github">
            <GithubIcon />
          </a>
          <p class="py-4">Garbberish</p>
          <Menu menu={menu} />
          <Resource
            value={page}
            onPending={() => <div>Loading...</div>}
            onRejected={(e) => <div>Error: {e.message}</div>}
            onResolved={(page) => (
              <div>
                {
                  page.menu.map(p => (
                    <div>
                      <a key={p.href} href={p.href}>
                        {p.name}
                      </a>
                    </div>
                  ))
                }
                <button onClick$={() => pageState.cur++}>{'>'}</button>
              </div>
            )}
          ></Resource>
        </div>
        <div></div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'N1ll',
};
