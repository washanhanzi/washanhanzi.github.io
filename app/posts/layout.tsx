import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
	return (
		<article className='prose dark:prose-invert prose-zinc md:prose-lg lg:prose-xl '>
			{children}
		</article>
	)

}