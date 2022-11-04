import { component$ } from "@builder.io/qwik";
import { ContentHeading, useContent } from "@builder.io/qwik-city";


export const Menu = component$(() => {

	const { headings } = useContent()
	function headingItem(h: ContentHeading) {
		if (h.level === 1) {
			return null
		}
		const inPageId = `#${h.id}`
		const className = `block py-2 ${getPl(h.level)}`
		return (
			<a href={inPageId} class={className}>
				{h.text}
			</a>
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
	return (
		<aside class="text-zinc-300 ">
			<div class="w-48 text-sm font-medium">
				{
					headings?.map((h) => (
						headingItem(h)
					))
				}
			</div>
			<a href="/">
				<p class="underline decoration-green-500">Back?</p>
			</a>
		</aside>
	)
})

