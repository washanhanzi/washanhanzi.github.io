import { GithubIcon } from "./github-icon"

export const Header = () => (
	<div class="bg-base-200 rounded-lg shadow-lg">
		<div class="pl-4 py-4">
			<div class="py-2">
				<h1 class="text-5xl font-bold">N1ll</h1>
			</div>
			<div class="py-2" >
				<button >
					<a href="https://github.com/washanhanzi" target="_blank" rel="author" title="Github">
						<GithubIcon />
					</a>
				</button>
			</div>
			<p class="py-2">Garbberish</p>
		</div>
	</div>
)