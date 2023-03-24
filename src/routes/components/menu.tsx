import type { IndexMenu } from '../entity';

export const Menu = (({ menu }: { menu: IndexMenu[] }) => {
	return (
		<div >
			{
				menu.map((item) => (
					<div key={item.href}>
						<a href={item.href}>
							<div class="inline-block cold pr-3">{item.date}</div>
							<div class="underline decoration-green-500 inline-block cold py-1">{item.name}</div>
						</a>
					</div>
				))
			}
		</div>
	);
});

