/**
 * Rules always have a severity.
 * Severity indicates what to do if the rule is found to be broken.
 *
 * 0 - Disable this rule
 *
 * 1 - Warn for violations
 *
 * 2 - Error for violations
 */
const RuleConfigSeverity = {
  Disabled: 0,
  Warning: 1,
  Error: 2
}

const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [RuleConfigSeverity.Error, "always", 150]
  }
}

export default config
