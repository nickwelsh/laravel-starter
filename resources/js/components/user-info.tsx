import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { type InertiaUserData } from '@/types/generated';

export function UserInfo({ showEmail = false, user }: { showEmail?: boolean; user: InertiaUserData }) {
	const getInitials = useInitials();

	return (
		<>
			<Avatar className='h-8 w-8 overflow-hidden rounded-full'>
				<AvatarImage alt={user.name} src={user.avatar} />
				<AvatarFallback className='rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white'>
					{getInitials(user.name)}
				</AvatarFallback>
			</Avatar>
			<div className='grid flex-1 text-left text-sm leading-tight'>
				<span className='truncate font-medium'>{user.name}</span>
				{showEmail && <span className='truncate text-xs text-muted-foreground'>{user.email}</span>}
			</div>
		</>
	);
}
