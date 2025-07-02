import { Link } from '@inertiajs/react';
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react';
import { type ComponentProps } from 'react';

import { type Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type PaginationLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'size'> &
	Pick<ComponentProps<typeof Button>, 'size'> & {
		href: null | string;
		isActive?: boolean;
	};

function Pagination({ className, ...props }: ComponentProps<'nav'>) {
	return (
		<nav
			aria-label='pagination'
			className={cn('mx-auto flex w-full justify-center', className)}
			data-slot='pagination'
			role='navigation'
			{...props}
		/>
	);
}

function PaginationContent({ className, ...props }: ComponentProps<'ul'>) {
	return <ul className={cn('flex flex-row items-center gap-1', className)} data-slot='pagination-content' {...props} />;
}

function PaginationEllipsis({ className, ...props }: ComponentProps<'span'>) {
	return (
		<span aria-hidden className={cn('flex size-9 items-center justify-center', className)} data-slot='pagination-ellipsis' {...props}>
			<MoreHorizontalIcon className='size-4' />
			<span className='sr-only'>More pages</span>
		</span>
	);
}

function PaginationItem({ ...props }: ComponentProps<'li'>) {
	return <li data-slot='pagination-item' {...props} />;
}

function PaginationLink({ className, disabled, href, isActive, size = 'icon', ...props }: PaginationLinkProps) {
	return (
		<Link
			aria-current={isActive ? 'page' : undefined}
			className={cn(
				buttonVariants({
					size,
					variant: isActive ? 'outline' : 'ghost',
				}),
				disabled && 'pointer-events-none opacity-50',
				className,
			)}
			data-active={isActive}
			data-slot='pagination-link'
			href={href ?? ''}
			prefetch='hover'
			{...props}
		/>
	);
}

function PaginationNext({ className, href, ...props }: ComponentProps<typeof PaginationLink>) {
	return (
		<PaginationLink
			aria-label='Go to next page'
			className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
			disabled={!href}
			href={href}
			size='default'
			{...props}
		>
			<span className='hidden sm:block'>Next</span>
			<ChevronRightIcon />
		</PaginationLink>
	);
}

function PaginationPrevious({ className, href, ...props }: ComponentProps<typeof PaginationLink>) {
	return (
		<PaginationLink
			aria-label='Go to previous page'
			className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
			disabled={!href}
			href={href}
			size='default'
			{...props}
		>
			<ChevronLeftIcon />
			<span className='hidden sm:block'>Previous</span>
		</PaginationLink>
	);
}

export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious };
