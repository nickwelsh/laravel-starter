import { Link, router } from '@inertiajs/react';
import { LogOut, Settings } from 'lucide-react';

import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { type InertiaUserData } from '@/types/generated';

export function UserMenuContent({ user }: { user: InertiaUserData }) {
	const cleanup = useMobileNavigation();

	const handleLogout = () => {
		cleanup();
		router.flushAll();
	};

	return (
		<>
			<DropdownMenuLabel className='p-0 font-normal'>
				<div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
					<UserInfo showEmail={true} user={user} />
				</div>
			</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
				<DropdownMenuItem asChild>
					<Link as='button' className='block w-full' href={route('profile.edit')} onClick={cleanup} prefetch>
						<Settings className='mr-2' />
						Settings
					</Link>
				</DropdownMenuItem>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuItem asChild>
				<Link as='button' className='block w-full' href={route('logout')} method='post' onClick={handleLogout}>
					<LogOut className='mr-2' />
					Log out
				</Link>
			</DropdownMenuItem>
		</>
	);
}
