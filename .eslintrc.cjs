module.exports = {
	root: true,
	env: {
		browser: true,
		es2024: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'html', 'import', 'no-loops', 'only-warn', 'prettier'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/typescript',
		'plugin:security/recommended',
		'plugin:svelte/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		extraFileExtensions: ['.svelte'],
		project: './tsconfig.json',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			// Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
	ignorePatterns: ['./.svelte-kit', './dist', './static', '*.cjs', 'node_modules'],
	rules: {
		indent: [
			2,
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'arrow-spacing': 2,
		'no-class-assign': 2,
		'no-cond-assign': 0,
		'no-const-assign': 2,
		'no-inner-declarations': 0,
		'no-loops/no-loops': 2,
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		'no-this-before-super': 2,
		'no-unreachable': 2,
		'no-unused-vars': 2,
		'no-var': 2,
		'object-shorthand': [2, 'always'],
		'one-var': [2, 'never'],
		'prefer-arrow-callback': 2,
		'quote-props': [2, 'as-needed'],
		'space-before-blocks': [2, 'always'],
		'valid-typeof': 2,
		'comma-style': 1,
		'comma-dangle': [2, 'only-multiline'],
		semi: [2, 'always'],
		'prefer-const': [
			2,
			{
				destructuring: 'all',
			},
		],
	},
};
