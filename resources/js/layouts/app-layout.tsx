import { type ReactNode } from 'react';

import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';

interface AppLayoutProps {
	breadcrumbs?: BreadcrumbItem[];
	children: ReactNode;
}

const AppLayout = ({ breadcrumbs, children, ...props }: AppLayoutProps) => (
	<AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
		{children}
	</AppLayoutTemplate>
);

export default AppLayout;
