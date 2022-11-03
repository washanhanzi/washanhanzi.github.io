import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

export async function getStaticPaths() {
	const paths = allPosts.map((post) => { return { params: { slug: post.slug } } })
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const post = allPosts.find((post) => post.slug === params.slug)
	return {
		props: {
			post,
		},
	}
}

const PostLayout = ({ post }: { post: Post }) => {
	const MDXContent = useMDXComponent(post.body.code)

	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>
			<div className="grid grid-cols-1 md:grid-cols-[1fr_760px_1.3fr] gap-4 text-zinc-300">
				<div></div>
				<article className="prose dark:prose-invert p-4 overflow-x-hidden">
					<MDXContent />
				</article>
				<div className="invisible md:visible fixed top-24 right-10">
					<div >123</div>
				</div>
			</div>
		</>
	)
}

export default PostLayout