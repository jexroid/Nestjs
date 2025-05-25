import { fileURLToPath } from "node:url";
import path from "node:path";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import parserTs from "@typescript-eslint/parser";
import pluginSecurity from "eslint-plugin-security";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    ignores: ["**/dist/**", ".eslintrc.js"],
  },

  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parser: parserTs,
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaFeatures: {
          jsx: false,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "@stylistic/ts": stylisticTs,
      security: pluginSecurity,
      unicorn: eslintPluginUnicorn,
      import: importPlugin,
    },
    rules: {
      "@stylistic/ts/indent": ["warn", 2],
      "@stylistic/ts/quotes": ["warn", "single", { avoidEscape: true }],
      "@stylistic/ts/semi": ["warn", "always"],
      "@stylistic/ts/comma-dangle": ["warn", "always-multiline"],
      "@stylistic/ts/object-curly-spacing": ["warn", "always"],
      "@stylistic/ts/space-before-blocks": "warn",
      "@stylistic/ts/keyword-spacing": "warn",
      "@stylistic/ts/space-infix-ops": "warn",
      "@stylistic/ts/type-annotation-spacing": "warn",

      "import/order": [
        "warn",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type"
          ],
          "pathGroups": [
            {
              "pattern": "@/**",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "~/**",
              "group": "internal"
            }
          ],
          "pathGroupsExcludedImportTypes": ["builtin"],
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ],
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",

      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }
      ],

      "unicorn/filename-case": [
        "error",
        {
          "case": "kebabCase",
          "ignore": ["\\.d\\.ts$"] 
        }
      ],
      "unicorn/prefer-node-protocol": "error",
      "unicorn/prefer-module": "off",
      "unicorn/no-array-reduce": "off",

      "security/detect-object-injection": "off" 
    }
  },

  prettierConfig,
  {
    rules: {
      "@stylistic/ts/indent": "off",
      "@stylistic/ts/quotes": "off",
      "@stylistic/ts/semi": "off",
      "@stylistic/ts/comma-dangle": "off"
    }
  }
]);