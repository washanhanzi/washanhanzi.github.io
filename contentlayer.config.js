import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import rehypePrism from "rehype-prism-plus"
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import GithubSlugger from 'github-slugger'


const Heading = defineNestedType(() => ({
	name: "Heading",
	fields: {
		level: { type: "number", required: true },
		text: { type: "string", required: true },
		id: { type: "string", required: true }
	}
}))

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: {
			type: 'string',
			description: 'The title of the post',
			required: true,
		},
		date: {
			type: 'string',
			description: 'The date of the post',
			required: true,
		},
		slug: {
			type: "string",
			description: "The url of the post",
			required: true,
		}
	},
	computedFields: {
		headings: {
			type: "List",
			of: Heading,
			resolve: (post) => {
				const h = getHeadings(post.body.raw)
				return h
			}
		}
	},
}))

export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [
			remarkGfm,
		],
		rehypePlugins: [
			rehypeSlug,
			[rehypePrism, { ignoreMissing: true }]
		],
	}
})

export async function getHeadings(content) {
	const slugger = new GithubSlugger()
	const regXHeader = /(?<flag>#{1,6})\s+(?<content>.+)/g
	return Array
		.from(
			content.matchAll(regXHeader)
		)
		.map(({ groups: { flag, content } }) => ({
			level: flag.length,
			text: content,
			id: slugger.slug(content)
		}))
}