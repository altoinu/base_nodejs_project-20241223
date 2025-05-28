import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginJest from "eslint-plugin-jest";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    // General configuration for JS and TS files
    files: ["**/*.{js,cjs,mjs,ts,tsx}"],
    ignores: ["node_modules", "build", "*.css", "dist"],
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  // TypeScript specific configurations
  ...tseslint.configs.recommended,
  // Jest plugin configuration (should ideally apply to test files in JS and TS)
  {
    files: ["**/*.test.{js,cjs,mjs,ts,tsx}", "**/*.spec.{js,cjs,mjs,ts,tsx}"],
    ...eslintPluginJest.configs["flat/recommended"],
    rules: {
      ...eslintPluginJest.configs["flat/recommended"].rules,
      // You can add or override Jest specific rules here if needed
    },
  },
  eslintConfigPrettier, // Must be last
];

export default eslintConfig;
