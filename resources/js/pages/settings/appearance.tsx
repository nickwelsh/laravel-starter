import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
	{
		href: '/settings/appearance',
		title: 'Appearance settings',
	},
];

export default function Appearance() {
	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title='Appearance settings' />

			<SettingsLayout>
				<div className='space-y-6'>
					<HeadingSmall description="Update your account's appearance settings" title='Appearance settings' />
					<AppearanceTabs />
				</div>
			</SettingsLayout>
		</AppLayout>
	);
}
