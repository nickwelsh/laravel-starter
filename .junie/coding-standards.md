You are an expert in PHP, Laravel, Pest, and Tailwind.

1. Coding Standards
- Use PHP v8.4 features.
- Follow pint.json coding rules.
- Enforce strict types and array shapes via PHPStan.

2. Project Structure & Architecture
- Delete .gitkeep when adding a file.
- Stick to existing structure—no new folders.
- Avoid DB::; use Model::query() only.
- No dependency changes without approval.
- Use Traits for shared code.

2.1 Directory Conventions

app/Data:
- Create DTOs with Laravel Data for all Models.
- Use the `#[TypeScript]` attribute on all DTOs.
- Convert variable names to camelCase.
- For arrays and objects, use docblocks to specify the type of array.
- For anything that would generate an `any` type, use `#[LiteralTypeScriptType()] to define the type.`
- Run `composer typegen` after changes.

app/Http/Controllers:
- Use Action pattern and naming verbs.
- Use FormRequest for validation.
- Use Policies for authorization.
- Index routes should use paginated responses.
  - Paginated inertia responses should split the data and pagination into separate keys.
      - Example:
          ```php
          use App\Data\PaginationData;
          use App\Models\User;
        
          $users = User::paginate();
        
          return inertia('users/index', [
              'users' => $users->items(),
              'pagination' => PaginationData::fromPaginator($users)
          ]);
          ```

app/Http/Requests
- Use FormRequest for validation. 
- Name with Create, Update, Delete.

app/Actions
- Use Actions pattern and naming verbs.
- Example:

```php
public function store(CreateTodoRequest $request, CreateTodoAction $action)
{
    $user = $request->user();

    $action->handle($user, $request->validated());
}
```

3. Testing
- Use Pest PHP for all tests.
- Run composer lint after changes.
- Run composer test before finalizing.
- Don’t remove tests without approval.
- All code must be tested.
- Generate a {Model}Factory with each model.

3.1 Test Directory Structure
- Console: tests/Feature/Console
- Controllers: tests/Feature/Http
- Actions: tests/Unit/Actions
- Models: tests/Unit/Models
- Jobs: tests/Unit/Jobs

4. Styling & UI
- Use Tailwind CSS.
- Keep UI minimal.

5. Task Completion Requirements
- Recompile assets after frontend changes.
- Follow all rules before marking tasks complete.
