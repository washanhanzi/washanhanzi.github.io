import Link from 'next/link';
import { IndexMenu } from '../entity';

export default function ({ menu }: { menu: IndexMenu[] }) {
	return (
		<div >
			{
				menu.map((item) => (
					<Link key={item.href} href={item.href} >
						<p className='underline decoration-green-500 decoration-1'>{item.date} {item.name}
						</p>
					</Link>
				))
			}
		</div>
	);
}
