import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'


export async function getStaticPaths() {
	const paths = allPosts.map((post) => { return { params: { slug: post.slug } } })
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const post = allPosts.find((post) => post.slug === params.slug)
	return {
		props: {
			post,
		},
	}
}

const PostLayout = ({ post }) => {
	const MDXContent = useMDXComponent(post.body.code)

	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>
			<article className="mx-auto max-w-2xl py-16">
				<div className="mb-6 text-center">
					<Link href="/">
						<p className="text-center text-sm font-bold uppercase text-blue-700">Home</p>
					</Link>
				</div>
				<div className="mb-6 text-center">
					<h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
					<time dateTime={post.date} className="text-sm text-slate-600">
						{format(parseISO(post.date), 'LLLL d, yyyy')}
					</time>
				</div>
				<MDXContent />

			</article>
		</>
	)
}

export default PostLayout