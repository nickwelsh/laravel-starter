<?php

declare(strict_types=1);

use App\Models\User;

test('guests are redirected to the login page', function (): void {
    $this->get('/dashboard')->assertRedirect('/login');
});

test('authenticated users can visit the dashboard', function (): void {
    $this->actingAs($user = User::factory()->withPersonalTeam()->create());

    $this->get('/dashboard')->assertOk();
});
