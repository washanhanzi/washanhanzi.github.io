import { component$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";

export const Menu = component$(() => {
	const { headings } = useContent()
	//[{text:string,id:string,level:number}]
	return (
		<aside class="text-zinc-300">
			{
				headings?.map((heading) => (
					<div>{heading.text}</div>
				))
			}
		</aside>
	)
})