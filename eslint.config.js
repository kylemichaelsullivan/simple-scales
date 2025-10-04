import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
	js.configs.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				window: 'readonly',
				document: 'readonly',
				localStorage: 'readonly',
				console: 'readonly',
				AudioContext: 'readonly',
				setTimeout: 'readonly',
				KeyboardEvent: 'readonly',
			},
		},
		plugins: {
			'@typescript-eslint': typescript,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...typescript.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'react-hooks/exhaustive-deps': 'warn',
		},
	},
	{
		files: ['**/*.config.{js,ts}', 'vite.config.*'],
		languageOptions: {
			globals: {
				__dirname: 'readonly',
				__filename: 'readonly',
				module: 'readonly',
				require: 'readonly',
				process: 'readonly',
			},
		},
	},
	{
		ignores: ['dist', 'node_modules'],
	},
];
