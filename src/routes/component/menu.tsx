import { component$ } from '@builder.io/qwik';
import { IndexMenu } from '../entity';

export const Menu = component$(({ menu }: { menu: IndexMenu[] }) => {
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
