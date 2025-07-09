<?php

declare(strict_types=1);

namespace App\Data\Inertia;

use Closure;
use Inertia\AlwaysProp;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\Hidden;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
final class InertiaData extends Data
{
    public InertiaAuthData $auth;

    /**
     * @var array<string, string> | null
     */
    // @phpstan-ignore-next-line We have to define this "incompatible" type for TypeScript transformer.
    public AlwaysProp $errors;

    public string $name;

    public InertiaQuoteData $quote;

    public bool $sidebarOpen;

    #[Hidden]
    public Closure $ziggy;
}
