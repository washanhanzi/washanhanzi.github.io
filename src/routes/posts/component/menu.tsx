import { component$, useStyles$ } from "@builder.io/qwik";
import { ContentHeading, useContent } from "@builder.io/qwik-city";
import style from "../style/link.css"
export const Menu = component$(() => {
	useStyles$(style)
	const { headings } = useContent()
	return (
		<aside class=" text-zinc-300">
			<div class="w-48">
				{
					headings?.map((h) => (
						headingItem(h)
					))
				}
			</div>
			<a href="/">
				<div class="underline decoration-green-500 inline-block">Back?</div>
			</a>
		</aside>
	)
})

//heaingTiem generate the heading component
export function headingItem(h: ContentHeading) {
	if (h.level === 1 || h.level > 3) {
		return null
	}
	const inPageId = `#${h.id}`
	const className = `block ${getClassNames(h.level)}`
	return (
		<a href={inPageId} class={className}>
			<div class="inline-block magma">{h.text}</div>
		</a>
	)
}

//getPl calculate the headings' style
export function getClassNames(level: number) {
	switch (level) {
		case 2:
			return "font-bold text-cyan-500 text-base"
		case 3:
			return "pl-4 font-light text-red-500 text-sm"
		default:
			return ""

	}
}