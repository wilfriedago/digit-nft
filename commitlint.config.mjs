const config = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    "type-enum": [2, "always", ["foo"]]
  },
  /*
   * Whether commitlint uses the default ignore rules, see the description above.
   */
  defaultIgnores: true
}

export default config
