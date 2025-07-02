import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function AuthLayout({ children, description, title, ...props }: { children: React.ReactNode; description: string; title: string }) {
	return (
		<AuthLayoutTemplate description={description} title={title} {...props}>
			{children}
		</AuthLayoutTemplate>
	);
}
