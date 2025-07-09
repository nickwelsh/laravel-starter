<?php

declare(strict_types=1);

// @codeCoverageIgnoreStart

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

final class SetupDevEnvironment extends Command
{
    protected $signature = 'dev:setup';

    protected $description = 'Set up the local development environment';

    public function handle(): int
    {
        $this->warn('⚠️  This command is for development use only');
        $confirmed = $this->confirm('Do you want to continue?');
        if (! $confirmed) {
            return 0;
        }

        DB::prohibitDestructiveCommands(false);

        // Copy .env.example to .env
        if (! File::exists(base_path('.env'))) {
            $root = basename(base_path());
            $name = Str::title($root);

            // update .env.example
            $envExample = file_get_contents(base_path('.env.example'));
            $envExample = str_replace('APP_NAME="Laravel Starter Kit"', "APP_NAME=\"{$name}\"", $envExample);
            $envExample = str_replace('APP_ROOT=laravel-starter-kit', "APP_ROOT={$root}", $envExample);
            file_put_contents(base_path('.env.example'), $envExample);

            File::copy(base_path('.env.example'), base_path('.env'));
            $this->info('✔️  .env file created from .env.example');
        } else {
            $this->warn('⚠️  .env already exists, skipping copy');
        }

        // Generate application key
        $this->call('key:generate');

        // Touch SQLite databases
        foreach (['database/database.sqlite', 'database/dusk.sqlite'] as $sqlite) {
            $path = base_path($sqlite);
            if (! File::exists($path)) {
                File::ensureDirectoryExists(dirname($path));
                File::put($path, '');
                $this->info("✔️  Created: {$sqlite}");
            } else {
                $this->warn("⚠️  {$sqlite} already exists");
            }
        }

        // Run fresh migration and seed
        $this->call('migrate:fresh', ['--seed' => true]);

        $this->info('✅ Dev environment setup complete');

        return self::SUCCESS;
    }
}
// @codeCoverageIgnoreEnd
