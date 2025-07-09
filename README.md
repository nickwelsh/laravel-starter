# Laravel Starter
[![Laravel](https://img.shields.io/badge/laravel-f53003?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com/)
[![Laravel](https://img.shields.io/badge/inertia-9553E9?style=for-the-badge&logo=inertia&logoColor=white)](https://inertiajs.com/)
[![Laravel](https://img.shields.io/badge/react-087EA4?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-00bcff?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/vite-%23646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)

My starter kit for [Laravel 12](https://laravel.com/), [Inertia 2](https://inertiajs.com/), and [React 19](https://react.dev/).
Still a work in progress...

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/nickwelsh/laravel-starter.git
```

Or click the "Use this template" button on GitHub and clone your repository


### 2. Install dependencies
```bash
# PHP Dependencies
composer install

# Node Dependencies
bun install
```

### 3. Setup the Development Environment
```bash
# Copy .env.example to .env
cp .env.example .env

# Generate Application Key
php artisan key:generate

# Touch SQLite Databases
touch database/database.sqlite
touch database/dusk.sqlite

# Run Migrations & Seeders
php artisan migrate:fresh --seed
```

Or use the helper command
```bash
php artisan dev:setup
```

### 4. Start the Development Server
```bash
php artisan dev
```
