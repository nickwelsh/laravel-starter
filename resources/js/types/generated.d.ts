export type HttpMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
export type InertiaAuthData = {
	user: InertiaUserData | null;
};
export type InertiaData = {
	auth: InertiaAuthData;
	errors: { [key: string]: string } | null;
	name: string;
	quote: InertiaQuoteData;
	sidebarOpen: boolean;
};
export type InertiaQuoteData = {
	message: string;
	author: string;
};
export type InertiaTeamData = {
	id: number;
	name: string;
};
export type InertiaUserData = {
	id: number;
	name: string;
	email: string;
	avatar: string;
	currentTeam: InertiaTeamData | null;
	emailVerifiedAt: string | null;
};
export type InertiaZiggyData = {
	defaults: Record<string, unknown>;
	location: string;
	port: number | null;
	routes: Record<string, { uri: string; methods: HttpMethod[] }>;
	url: string;
	route: string | null;
};
export type PaginationData = {
	total: number;
	perPage: number;
	currentPage: number;
	lastPage: number;
	from: number | null;
	to: number | null;
	nextPageUrl: string | null;
	prevPageUrl: string | null;
	links: Array<PaginationLinkData>;
};
export type PaginationLinkData = {
	url: string | null;
	label: string;
	active: boolean;
};
