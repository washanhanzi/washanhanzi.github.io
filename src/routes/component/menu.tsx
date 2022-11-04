import { IndexMenu } from '../entity';

export const Menu = (({ menu }: { menu: IndexMenu[] }) => {
	return (
		<div >
			{
				menu.map((item) => (
					<a key={item.href} href={item.href}>
						<p class="underline decoration-green-500">{item.date} {item.name}</p>
					</a>
				))
			}
		</div>
	);
});
