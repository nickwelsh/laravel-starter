<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Collection;

/**
 * @property int $id
 * @property int|null $current_team_id
 */
trait HasTeams
{
    /**
     * Determine if the given team is the current team.
     */
    public function isCurrentTeam(Team $team): bool
    {
        return $team->id === $this->currentTeam->id;
    }

    /**
     * Get the current team of the user's context.
     *
     * @return BelongsTo<Team, User>
     */
    public function currentTeam(): BelongsTo
    {
        if (is_null($this->current_team_id) && $this->id) {
            $this->switchTeam($this->personalTeam());
        }

        return $this->belongsTo(Team::class, 'current_team_id');
    }

    /**
     * Switch the user's context to the given team.
     */
    public function switchTeam(Team $team): bool
    {
        if (! $this->belongsToTeam($team)) {
            return false;
        }

        $this->forceFill([
            'current_team_id' => $team->id,
        ])->save();

        $this->setRelation('currentTeam', $team);

        return true;
    }

    /**
     * Get all the teams the user owns or belongs to.
     *
     * @return Collection<int, Team>
     */
    public function allTeams(): Collection
    {
        return $this->ownedTeams->merge($this->teams)->sortBy('name');
    }

    /**
     * Get all the teams the user owns.
     *
     * @return HasMany<Team, User>
     */
    public function ownedTeams(): HasMany
    {
        return $this->hasMany(Team::class);
    }

    /**
     * Get all the teams the user belongs to.
     *
     * @return BelongsToMany<Team, User>
     */
    public function teams(): BelongsToMany
    {
        return $this->belongsToMany(Team::class)->withTimestamps();
    }

    /**
     * Get the user's "personal" team.
     */
    public function personalTeam(): ?Team
    {
        return $this->ownedTeams->where('personal_team', true)->first();
    }

    /**
     * Determine if the user owns the given team.
     */
    public function ownsTeam(Team $team): bool
    {
        return $this->id === $team->{$this->getForeignKey()};
    }

    /**
     * Determine if the user belongs to the given team.
     */
    public function belongsToTeam(Team $team): bool
    {
        if ($this->ownsTeam($team)) {
            return true;
        }

        foreach ($this->teams as $t) {
            if ($t->id === $team->id) {
                return true;
            }
        }

        return false;
    }
}
