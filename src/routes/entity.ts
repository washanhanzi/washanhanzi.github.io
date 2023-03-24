export interface IndexMenu {
	name: string,
	href: string,
	date: string,
	//IndexMenuType
	type: IndexMenuType
}

export type IndexMenuType =
	"UNSPECIFIED" |
	"POST" |
	"EXTERNAL_LINK"

export interface Page {
	cur: number,
	menu: IndexMenu[],
	curPage: number,
	isNextPage: boolean,
	isPrevPage: boolean
}