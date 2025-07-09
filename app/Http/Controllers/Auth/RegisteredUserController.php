<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Team;
use App\Models\User;
use DB;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

final class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     * @throws Throwable
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = DB::transaction(fn() => tap(User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]), function (User $user): void {
            $this->createTeam($user);
        }));

        event(new Registered($user));

        Auth::login($user);

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Create a personal team for the user.
     */
    private function createTeam(User $user): void
    {
        $user->ownedTeams()->save(tap(Team::forceCreate([
            'user_id' => $user->id,
            'name' => explode(' ', $user->name, 2)[0]."'s Team",
            'personal_team' => true,
        ]), function (Team $team) use ($user): void {
            $user->current_team_id = $team->id;
            $user->save();
        }));
    }
}
