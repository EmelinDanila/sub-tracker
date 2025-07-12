import tseslint from 'typescript-eslint'
import eslintPluginImport from 'eslint-plugin-import'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-config-prettier'
import standardWithTs from 'eslint-config-standard-with-typescript'

export default [
  // Базовые конфиги
  ...standardWithTs.configs,
  ...tseslint.configs.recommended,
  prettier,

  {
    ignores: ['node_modules', 'dist'],

    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },

    plugins: {
      import: eslintPluginImport,
      '@typescript-eslint': tseslint.plugin,
      'jsx-a11y': pluginJsxA11y,
    },

    rules: {
      // import/order
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
            orderImportKind: 'asc',
          },
        },
      ],

      // TypeScript-specific rules
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',

      // JSX a11y
      'jsx-a11y/anchor-is-valid': 'off',

      // Other general rules
      curly: ['error', 'all'],
      'no-irregular-whitespace': [
        'error',
        {
          skipTemplates: true,
          skipStrings: true,
        },
      ],
      'no-console': [
        'error',
        {
          allow: ['info', 'error', 'warn'],
        },
      ],
    },
  },
]
