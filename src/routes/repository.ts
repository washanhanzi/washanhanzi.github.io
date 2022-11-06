import { IndexMenu, IndexMenuType } from "./entity";

export const repo: { [key: string]: IndexMenu } = {
	"5": {
		name: "A short journey with Rust in gRPC",
		href: "/",
		date: "2022-10-31",
		type: IndexMenuType.POST
	},
	"3": {
		name: "Show gRPC timeout with tests",
		href: "https://github.com/washanhanzi/grpc-go-timeout",
		date: "2022-10-31",
		type: IndexMenuType.EXTERNAL_LINK
	},
	"2": {
		name: "Decido!",
		href: "https://decido-theta.vercel.app",
		date: "2022-07-22",
		type: IndexMenuType.EXTERNAL_LINK
	},
	"1": {
		name: "Pragmatic gRPC 1",
		href: "/posts/pragmaticgrpc1",
		date: "2021-05-30",
		type: IndexMenuType.POST
	}
}