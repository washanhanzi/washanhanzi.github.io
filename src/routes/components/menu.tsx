import type { IndexMenu } from '../entity';

export const Menu = (({ menu }: { menu: IndexMenu[] }) => {
	return (
		<div >
			{
				menu.map((item) => (
					<div key={item.href} >
						<a href={item.href} class="transition-colors duration-800 bg-slate-200 bg-clip-text text-transparent hover:bg-gradient-to-r from-cold-start via-cold-mid to-cold-end">
							<div class="inline-block pr-3">{item.date}</div>
							<div class="underline decoration-green-500 inline-block py-1">{item.name}</div>
						</a>
					</div>
				))
			}
		</div>
	);
});

