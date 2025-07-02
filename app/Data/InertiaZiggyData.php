<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\LiteralTypeScriptType;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class InertiaZiggyData extends Data
{
    /**
     * @var array<string, mixed>
     */
    #[LiteralTypeScriptType('Record<string, unknown>')]
    public array $defaults;

    public string $location;

    public ?int $port;

    /**
     * @var array<string, array{uri: string, methods: array<\App\Enums\HttpMethod>}>
     */
    #[LiteralTypeScriptType('Record<string, {uri: string, methods: HttpMethod[]}>')]
    public array $routes;

    public string $url;

    public ?string $route;
}
