import { component$, useMount$, useStore } from "@builder.io/qwik";
import { ContentHeading, useContent } from "@builder.io/qwik-city";

interface CalculateHeadingsOutput extends ContentHeading {
	inPageHref: string,
	className: string
}

export const Menu = component$(() => {

	const { headings } = useContent()
	const hs = useStore<{ hs: CalculateHeadingsOutput[] }>({ hs: [] })
	useMount$(() => {
		function calculateHeadings(hs: ContentHeading[] | undefined): CalculateHeadingsOutput[] {
			if (hs === undefined) {
				return []
			}
			const headings = hs.map((heading) => {
				const inPageHref = heading.level === 1 ? `#` : `#${heading.id}`
				const className = `block py-2 pl-${(heading.level - 1) * 4}`
				return {
					...heading,
					inPageHref,
					className
				}
			})
			return headings
		}
		hs.hs = calculateHeadings(headings)
		console.log("state change")
	})
	return (
		<aside class="text-zinc-300 ">
			<div class="w-48 text-sm font-medium">
				{
					hs.hs?.map((h) => (
						<a href={h.inPageHref} class={h.className}>
							{h.text}
						</a>
					))
				}
			</div>
			<a href="/">
				<p class="underline decoration-green-500">Back?</p>
			</a>
		</aside>
	)
})

