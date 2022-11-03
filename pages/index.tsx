import Head from 'next/head'
import Link from 'next/link'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { GithubIcon } from './component/GithubIcon'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

function PostItem(p: Post) {
  return (
    <Link key={p.slug} href={`/posts/${p.slug}`} >
      <p className='underline decoration-green-500 decoration-1'>{p.date} {p.title}
      </p>
    </Link>
  )
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="text-zinc-300">
      <Head>
        <title>N1ll</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_600px_1.1fr] gap-4 text-zinc-300 pt-3">
        <div></div>
        <div>
          <p className="text-4xl py-4">N1ll</p>
          <a href="https://github.com/washanhanzi" target="_blank" rel="author" title="Github">
            <GithubIcon />
          </a>
          <p className="py-4">Garbberish</p>
          {
            posts.map(p => PostItem(p))
          }
        </div>
        <div></div>
      </div>
    </div >
  )
}
