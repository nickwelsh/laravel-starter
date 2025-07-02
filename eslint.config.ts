import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.strictTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	react.configs.flat.recommended!,
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	react.configs.flat['jsx-runtime']!, // Required for React 17+
	perfectionist.configs['recommended-natural'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			/**
			 * Require consistent usage of type exports.
			 *
			 * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-exports/
			 */
			'@typescript-eslint/consistent-type-exports': ['warn', { fixMixedExportsWithInlineTypeSpecifier: true }],
			/**
			 * Require consistent usage of type imports.
			 *
			 * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-imports/
			 */
			'@typescript-eslint/consistent-type-imports': [
				'warn',
				{
					disallowTypeAnnotations: true,
					fixStyle: 'inline-type-imports',
					prefer: 'type-imports',
				},
			],
			/**
			 * Require default parameters to be last.
			 *
			 * 🚫 Not fixable - https://typescript-eslint.io/rules/default-param-last/
			 */
			'@typescript-eslint/default-param-last': 'error',
			/**
			 * Disallow creation of functions within loops.
			 *
			 * 🚫 Not fixable - https://typescript-eslint.io/rules/no-loop-func/
			 */
			'@typescript-eslint/no-loop-func': 'error',
			/**
			 * Disallow variable declarations from shadowing variables declared in the
			 * outer scope.
			 *
			 * 🚫 Not fixable - https://typescript-eslint.io/rules/no-shadow/
			 */
			'@typescript-eslint/no-shadow': 'error',
			/**
			 * Disallow unused variables.
			 *
			 * 🚫 Not fixable - https://typescript-eslint.io/rules/no-unused-vars/
			 */
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'after-used',
					argsIgnorePattern: '^_',
					ignoreRestSiblings: false,
					vars: 'all',
					varsIgnorePattern: '^_',
				},
			],
			/**
			 * Disallow unnecessary constructors.
			 *
			 * 🚫 Not fixable - https://typescript-eslint.io/rules/no-useless-constructor/
			 */
			'@typescript-eslint/no-useless-constructor': 'error',
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{
					allowNumber: true,
				},
			],
			/**
			 * Require exhaustive checks when using union types in switch statements.
			 *
			 * This ensures cases are considered when items are later added to a union.
			 *
			 * 🚫 Not fixable - https://typescript-eslint.io/rules/switch-exhaustiveness-check/
			 */
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'react/no-unescaped-entities': 'off',
			'react/no-unknown-property': ['error', { ignore: ['dusk'] }],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		plugins: {
			'react-hooks': reactHooks,
		},
		rules: {
			'react-hooks/exhaustive-deps': 'warn',
			'react-hooks/rules-of-hooks': 'error',
		},
	},
	{
		files: ['**/form/config.tsx', '**/form/schema.ts'],
		rules: {
			'perfectionist/sort-objects': 'off',
		},
	},
	{
		ignores: ['vendor', 'node_modules', 'public', 'bootstrap/ssr', 'tailwind.config.js', 'resources/js/ziggy.js'],
	},
	prettier,
);
