import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import parserTs from "@typescript-eslint/parser";
import pluginSecurity from "eslint-plugin-security";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import importPlugin from "eslint-plugin-import";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Derive __dirname equivalent for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
  // Global settings
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // Apply to all JS/TS files
    ignores: [".eslintrc.js"], // Ignore specific files
  },

  // Language options and rules
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: {
        ...globals.node, // Node.js globals
        ...globals.jest, // Jest globals
      },
      parser: parserTs, // Use TypeScript parser
      parserOptions: {
        project: "tsconfig.json", // Specify the TS config file
        tsconfigRootDir: __dirname, // Root directory for TS config
        sourceType: "module", // Use ES modules
      },
    },
    rules: {
      // Stylistic rules
      "@stylistic/ts/indent": ["error", 2],

      // TypeScript rules
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",

      // Unicorn rules
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
        },
      ],
      "unicorn/prefer-node-protocol": "warn",

      "import/no-unresolved": ["off", { commonjs: false, amd: false }],
      "import/order": [
        "warn",
        {
          groups: [
            "type",
            "builtin",
            "object",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "~/**",
              group: "external",
              position: "after",
            },
          ],
          "newlines-between": "always",
        },
      ],
    },
  },

  // Plugins and extensions
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin, // TypeScript plugin
      "@stylistic/ts": stylisticTs, // Stylistic plugin
      security: pluginSecurity, // Security plugin
      unicorn: eslintPluginUnicorn, // Unicorn plugin
      import: importPlugin,
    },
  },

  // Add recommended configs from typescript-eslint
  tseslint.configs.recommended,

  // Add security recommended configs
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: {
      security: pluginSecurity,
    },
    rules: pluginSecurity.configs.recommended.rules,
  },
]);
