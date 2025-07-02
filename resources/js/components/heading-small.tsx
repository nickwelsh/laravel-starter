export default function HeadingSmall({ description, title }: { description?: string; title: string }) {
	return (
		<header>
			<h3 className='mb-0.5 text-base font-medium'>{title}</h3>
			{description && <p className='text-sm text-muted-foreground'>{description}</p>}
		</header>
	);
}
