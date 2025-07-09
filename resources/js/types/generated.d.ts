export type HttpMethod = 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE';
export interface InertiaAuthData {
	user: InertiaUserData | null;
}
export interface InertiaData {
	auth: InertiaAuthData;
	errors: null | Record<string, string>;
	name: string;
	quote: InertiaQuoteData;
	sidebarOpen: boolean;
}
export interface InertiaQuoteData {
	author: string;
	message: string;
}
export interface InertiaTeamData {
	id: number;
	name: string;
}
export interface InertiaUserData {
	avatar: string;
	currentTeam: InertiaTeamData | null;
	email: string;
	emailVerifiedAt: null | string;
	id: number;
	name: string;
}
export interface InertiaZiggyData {
	defaults: Record<string, unknown>;
	location: string;
	port: null | number;
	route: null | string;
	routes: Record<string, { methods: HttpMethod[]; uri: string; }>;
	url: string;
}
export interface PaginationData {
	currentPage: number;
	from: null | number;
	lastPage: number;
	links: PaginationLinkData[];
	nextPageUrl: null | string;
	perPage: number;
	prevPageUrl: null | string;
	to: null | number;
	total: number;
}
export interface PaginationLinkData {
	active: boolean;
	label: string;
	url: null | string;
}
