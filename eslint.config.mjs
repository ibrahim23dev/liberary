import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    ignores: ["/dist/**"], // 👈 exclude dist folder
    languageOptions: {
      globals: globals.browser,
    },
  },
  tseslint.configs.recommended,
]);
