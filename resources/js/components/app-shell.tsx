import { SidebarProvider } from '@/components/ui/sidebar';
import { useTypedPage } from '@/hooks/use-typed-page';

interface AppShellProps {
	children: React.ReactNode;
	variant?: 'header' | 'sidebar';
}

export function AppShell({ children, variant = 'header' }: AppShellProps) {
	const isOpen = useTypedPage().props.sidebarOpen;

	if (variant === 'header') {
		return <div className='flex min-h-screen w-full flex-col'>{children}</div>;
	}

	return <SidebarProvider defaultOpen={isOpen}>{children}</SidebarProvider>;
}
