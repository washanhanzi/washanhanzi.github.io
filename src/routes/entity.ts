export interface IndexMenu {
	name: string,
	href: string,
	date: string,
	type: IndexMenuType
}

export enum IndexMenuType {
	UNSPECIFIED = 0,
	POST,
	EXTERNAL_LINK,
}

export interface Page {
	menu: IndexMenu[],
	isNextPage: boolean,
	isPrevPage: boolean
}