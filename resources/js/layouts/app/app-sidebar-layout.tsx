import { type PropsWithChildren } from 'react';

import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';

export default function AppSidebarLayout({ breadcrumbs = [], children }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
	return (
		<AppShell variant='sidebar'>
			<AppSidebar />
			<AppContent className='overflow-x-hidden' variant='sidebar'>
				<AppSidebarHeader breadcrumbs={breadcrumbs} />
				{children}
			</AppContent>
		</AppShell>
	);
}
