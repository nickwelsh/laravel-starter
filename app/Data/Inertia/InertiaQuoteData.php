<?php

declare(strict_types=1);

namespace App\Data\Inertia;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
final class InertiaQuoteData extends Data
{
    public string $message;

    public string $author;
}
