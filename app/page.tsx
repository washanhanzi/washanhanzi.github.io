import { IndexMenu } from "./entity"
import { GithubIcon } from "./component"
import Menu from "./component/Menu";
export default function Home() {
	const menu: IndexMenu[] = [
		{
			name: "Pragmatic gRPC 1",
			href: "/posts/pragmaticgrpc1",
			date: "2021-05-30"
		}
	]
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-[1fr_600px_1.2fr] gap-4 text-zinc-300 pt-3">
				<div></div>
				<div>
					<p className="text-4xl py-4">N1ll</p>
					<a href="https://github.com/washanhanzi" target="_blank" rel="author" title="Github">
						<GithubIcon />
					</a>
					<p className="py-4">Garbberish</p>
					<Menu menu={menu}></Menu>
				</div>
				<div></div>
			</div>
		</>
	);
};