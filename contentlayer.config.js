import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrism from "rehype-prism-plus"
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'


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
	},
}))

export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeAutolinkHeadings,
			[rehypePrism, { ignoreMissing: true }]
		],
	}
})