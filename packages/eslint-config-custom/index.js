module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "import", "sort-export-all"],
  extends: [
    "next",
    "turbo",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "lunde",
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/ignore": ["\\.json$", "\\.(scss|less|css|styl)$"],
    "import/internal-regex": "^S(@/.*$)",
    "import/resolver": {
      typescript: {
        project: "tsconfig.json",
      },
    },
  },
  env: {
    node: true,
  },
  rules: {
    /**
     * default eslint
     * {@link https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js}
     * */
    "for-direction": "error",
    "no-async-promise-executor": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-else-if": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-global-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-self-assign": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-unexpected-multiline": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-labels": "error",
    "no-useless-backreference": "error",
    "no-useless-catch": "error",
    "no-useless-escape": "error",
    "no-with": "error",
    "require-yield": "error",
    "use-isnan": "error",
    // "valid-typeof": "error",
    /** eslint/recommended turned off by typescript-eslint
     * {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts}
     */
    // ts overrides to off
    "constructor-super": "off", // ts(2335) & ts(2377)
    "getter-return": "off", // ts(2378)
    "no-const-assign": "off", // ts(2588)
    "no-dupe-args": "off", // ts(2300)
    "no-dupe-class-members": "off", // ts(2393) & ts(2300)
    "no-dupe-keys": "off", // ts(1117)
    "no-func-assign": "off", // ts(2539)
    "no-import-assign": "off", // ts(2539) & ts(2540)
    "no-new-symbol": "off", // ts(2588)
    "no-obj-calls": "off", // ts(2349)
    "no-redeclare": "off", // ts(2451)
    "no-setter-return": "off", // ts(2408)
    "no-this-before-super": "off", // ts(2376)
    "no-undef": "off", // ts(2304)
    "no-unreachable": "off", // ts(7027)
    // "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
    // ts overrides to error
    "no-unsafe-negation": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error", // ts provides better types with rest args over arguments
    "prefer-spread": "error", // ts transpiles spread to apply, so no need for manual apply
    "valid-typeof": "off", // ts(2367)

    /** custom base eslint from ps-web */
    "default-case-last": "warn",
    "dot-notation": "warn",
    "func-name-matching": "warn",
    "func-style": ["warn", "declaration"],
    // "no-case-declarations": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    // "no-empty-pattern": "off",
    // "no-constant-condition": "off",
    "no-lonely-if": "warn",
    // "no-prototype-builtins": "off",
    "no-self-compare": "warn",
    "no-unreachable-loop": "warn",
    // "require-atomic-updates": "warn",
    // "prefer-arrow-callback": ["warn", { allowNamedFunctions: true }],

    /** import */
    "import/default": "off",
    "import/export": "error",
    "import/named": "off",
    "import/namespace": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-named-as-default-member": "off",
    "import/no-cycle": "warn",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "off",
    "import/extensions": "warn",
    "import/newline-after-import": "off",
    "import/no-named-as-default": "warn",
    "import/no-amd": "error",
    "import/no-commonjs": "off",
    "import/no-named-default": "warn",
    "import/no-namespace": "off",
    "import/no-nodejs-modules": "off",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
          },
          {
            pattern:
              "{express,jest,knex,objection,prisma,nest,next,nexus,react,vitest}",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: [
          "express",
          "jest",
          "knex",
          "objection",
          "prisma",
          "nest",
          "next",
          "nexus",
          "react",
          "vitest",
        ],
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "sort-imports": [
      "warn",
      {
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    "import/first": "error",
    // "import/no-anonymous-default-export": "off",
    "import/no-absolute-path": "error",
    "import/no-deprecated": "error",
    "import/no-duplicates": "error",
    "import/no-internal-modules": "off",
    "import/no-mutable-exports": "warn",
    "import/no-restricted-paths": "off",
    "import/no-unassigned-import": "off",
    "import/no-webpack-loader-syntax": "error",
    "import/no-unused-modules": "off",
    "import/max-dependencies": "off",
    "import/dynamic-import-chunkname": "off",
    "import/exports-last": "off",
    "import/group-exports": "off",
    "import/no-dynamic-require": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "warn",
    "import/no-named-export": "off",
    "import/unambiguous": "off",
    "import/no-relative-parent-imports": "off",
    "global-require": "off",

    // autofix - just warn
    "sort-export-all/sort-export-all": "warn",
    "prettier/prettier": "warn",
    // should be off for typescript-eslint
    "no-unused-vars": "off",
    "no-return-await": "off",
    // Typescript
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/prefer-ts-expect-error": "warn",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/return-await": ["warn", "always"],

    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
