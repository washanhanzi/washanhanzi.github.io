interface Heading {
	id: string
	level: number
	text: string
}

export const Toc = ({ hs }: { hs: Heading[] }) => {
	return (
		<aside className="text-zinc-300 ">
			<div className="w-48 text-sm font-medium">
				{
					hs?.map((h) => (
						h.level !== 1 ?
							<a href={`#${h.id}`} className={`block py-1 ${getPl(h.level)}`} >
								{h.text}
							</a> :
							null
					))
				}
			</div>
			<a href="/">
				<p className="underline decoration-green-500">Back?</p>
			</a>
		</aside>
	)
}

function getPl(level: number) {
	switch (level) {
		case 2:
			return ""
		case 3:
			return "pl-4"
		case 4:
			return "pl-5"
		default:
			return "pl-6"

	}
}
// function calculateHeadings(hs: ContentHeading[] | undefined): CalculateHeadingsOutput[] {
// 	if (hs === undefined) {
// 		return []
// 	}
// 	const headings = hs.map((heading) => {
// 		const inPageHref = heading.level === 1 ? `#` : `#${heading.id}`
// 		const className = `block py-2 pl-${(heading.level - 1) * 4}`
// 		return {
// 			...heading,
// 			inPageHref,
// 			className
// 		}
// 	})
// 	return headings
// }
// hs.hs = calculateHeadings(headings)
// console.log("state change")