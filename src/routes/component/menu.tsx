import { IndexMenu } from '../entity';

export const Menu = (({ menu }: { menu: IndexMenu[] }) => {
	return (
		<div >
			{
				menu.map((item) => (
					<div>
						<a key={item.href} href={item.href}>
							<div class="underline decoration-green-500 inline-block cold">{item.date} {item.name}</div>
						</a>
					</div>
				))
			}
		</div>
	);
});
