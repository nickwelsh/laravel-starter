<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use App\Data\Inertia\InertiaData;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

final class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<mixed>
     */
    public function share(Request $request): array
    {
        $quote = Inspiring::quotes()->random();
        if (! is_string($quote)) {
            $quote = 'Stay inspired! - Unknown';
        }
        [$message, $author] = str($quote)->explode('-');

        assert(is_string($message));
        assert(is_string($author));

        return InertiaData::from([
            ...parent::share($request),
            'auth' => [
                'user' => $request->user()?->load('currentTeam'),
            ],
            'name' => config('app.name'),
            'quote' => [
                'message' => mb_trim($message),
                'author' => mb_trim($author),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'ziggy' => fn (): array => [...(new Ziggy)->toArray(), 'location' => $request->url(), 'route' => $request->route()->getName()],
        ])->toArray();
    }
}
