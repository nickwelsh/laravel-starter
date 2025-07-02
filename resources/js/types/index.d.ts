import type { Config } from 'ziggy-js';

import { type LucideIcon } from 'lucide-react';

import { type PaginationData } from '@/types/generated';

export interface Auth {
	user: null | User;
}

export interface BreadcrumbItem {
	href: string;
	title: string;
}

export interface NavGroup {
	items: NavItem[];
	title: string;
}

export interface NavItem {
	href: string;
	icon?: LucideIcon | null;
	isActive?: boolean;
	title: string;
}

export type Paginated<T> = Record<Exclude<string, 'pagination'>, T[]> & {
	pagination: PaginationData;
};

export type PaginatedWithKey<K extends string, T> = Record<K, T[]> & {
	pagination: PaginationData;
};

export interface SharedData {
	[key: string]: unknown;
	auth: Auth;
	name: string;
	quote: { author: string; message: string };
	sidebarOpen: boolean;

	ziggy: Config & { location: string };
}

export interface User {
	[key: string]: unknown; // This allows for additional properties...
	avatar?: string;
	created_at: string;
	email: string;
	email_verified_at: null | string;
	id: number;
	name: string;

	updated_at: string;
}

export type w<K extends Exclude<string, 'pagination'>, T> = Record<K, T[]> & {
	pagination: PaginationData;
};
