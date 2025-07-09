import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from '@/components/ui/pagination';
import { type PaginationData } from '@/types/generated';

export function LaravelPagination({ pagination: { links, nextPageUrl, prevPageUrl } }: {pagination: PaginationData}) {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href={prevPageUrl} />
				</PaginationItem>
				{links
					.filter(link => !link.label.includes('Next'))
					.filter(link => !link.label.includes('Previous'))
					.map(link => (
						<PaginationItem key={link.url}>
							<PaginationLink href={link.url} isActive={link.active}>
								{link.label}
							</PaginationLink>
						</PaginationItem>
					))}
				<PaginationItem>
					<PaginationNext href={nextPageUrl} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
