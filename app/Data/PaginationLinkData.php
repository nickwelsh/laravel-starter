<?php

declare(strict_types=1);

namespace App\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
final class PaginationLinkData extends Data
{
    public ?string $url = null;

    public string $label;

    public bool $active;
}
