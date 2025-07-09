<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Team>
 */
final class TeamFactory extends Factory
{
    protected $model = Team::class;

    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'personal_team' => false,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),

            'user_id' => User::factory(),
        ];
    }
}
