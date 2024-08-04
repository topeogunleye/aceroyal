import { fixupConfigRules } from '@eslint/compat'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import eslintConfigPrettier from 'eslint-config-prettier' // Importing eslint-config-prettier

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    {
        ignores: ['**/dist', '**/.eslintrc.cjs'],
    },
    ...fixupConfigRules(
        compat.extends(
            'airbnb',
            'airbnb-typescript',
            'airbnb/hooks',
            'plugin:@typescript-eslint/recommended',
            'plugin:react-hooks/recommended'
        )
    ),
    {
        plugins: {
            'react-refresh': reactRefresh,
            prettier,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
            },

            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',

            parserOptions: {
                project: './tsconfig.app.json',
            },
        },

        rules: {
            'react-refresh/only-export-components': [
                'warn',
                {
                    allowConstantExport: true,
                },
            ],

            'react/react-in-jsx-scope': 0,
        },
    },
    eslintConfigPrettier,
] // Adding eslint-config-prettier to the configuration array
