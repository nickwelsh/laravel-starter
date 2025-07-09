import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';

import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';

import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
	{
		href: '/dashboard',
		icon: LayoutGrid,
		title: 'Dashboard',
	},
];

const footerNavItems: NavItem[] = [
	{
		href: 'https://github.com/laravel/react-starter-kit',
		icon: Folder,
		title: 'Repository',
	},
	{
		href: 'https://laravel.com/docs/starter-kits#react',
		icon: BookOpen,
		title: 'Documentation',
	},
];

export function AppSidebar() {
	return (
		<Sidebar collapsible='icon' variant='inset'>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild size='lg'>
							<Link href={route('dashboard')} prefetch>
								<AppLogo />
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				<NavMain items={mainNavItems} />
			</SidebarContent>

			<SidebarFooter>
				<NavFooter className='mt-auto' items={footerNavItems} />
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	);
}
