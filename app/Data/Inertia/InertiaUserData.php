<?php

declare(strict_types=1);

namespace App\Data\Inertia;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
final class InertiaUserData extends Data
{
    public int $id;

    public string $name;

    public string $email;

    public string $avatar;

    public ?InertiaTeamData $currentTeam = null;

    public ?CarbonImmutable $emailVerifiedAt = null;
}
