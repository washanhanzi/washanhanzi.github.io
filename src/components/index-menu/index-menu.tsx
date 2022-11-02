import { component$ } from '@builder.io/qwik';
import { IndexMenu } from '~/module/index/entity';

export default component$((props: { data: IndexMenu[] }) => {
	return (
		<div >
			{
				props.data?.map((item) => (
					<a href={item.href}>{item.date} {item.name}</a>
				))
			}
		</div>
	);
});
