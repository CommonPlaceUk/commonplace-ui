import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",

  },
  overrides: [
    {
      "files": ["*.js"],
      "rules": {
      }
    }
  ]
})

const eslintConfig = [...compat.extends("next/core-web-vitals",
  "plugin:import/recommended",
  "plugin:prettier/recommended")]

export default eslintConfig
