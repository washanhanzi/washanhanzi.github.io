export interface IndexMenu {
	name: string,
	href: string,
	date: string,
	//IndexMenuType
	type: number
}

export enum IndexMenuType {
	UNSPECIFIED = 0,
	POST = 1,
	EXTERNAL_LINK = 2,
}

export interface Page {
	cur: number,
	menu: IndexMenu[],
	curPage: number,
	isNextPage: boolean,
	isPrevPage: boolean
}