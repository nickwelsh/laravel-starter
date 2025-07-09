<?php

declare(strict_types=1);

namespace App\Data;

use Illuminate\Pagination\LengthAwarePaginator;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
final readonly class PaginationData
{
    public function __construct(
        public int $total,

        public int $perPage,

        public int $currentPage,

        public int $lastPage,

        public ?int $from,

        public ?int $to,

        public ?string $nextPageUrl,

        public ?string $prevPageUrl,

        /** @var array<PaginationLinkData> */
        public array $links,
    ) {}

    /**
     * @template TKey of int|string
     * @template TValue
     *
     * @param  LengthAwarePaginator<TKey, TValue>  $p
     */
    public static function fromPaginator(LengthAwarePaginator $p): self
    {
        return new self(
            total: $p->total(),
            perPage: $p->perPage(),
            currentPage: $p->currentPage(),
            lastPage: $p->lastPage(),
            from: $p->firstItem(),
            to: $p->lastItem(),
            nextPageUrl: $p->nextPageUrl(),
            prevPageUrl: $p->previousPageUrl(),
            links: $p->toArray()['links'],
        );
    }
}
