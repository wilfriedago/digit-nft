import { relative } from "node:path"

const buildEslintCommand = (filenames) =>
  `next lint --fix --strict --max-warnings 0 --report-unused-disable-directives-severity warn --file ${filenames.map((f) => relative(process.cwd(), f)).join(" --file ")}`

const config = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "**/*.ts?(x)": ["tsc --noEmit --pretty"],
  "*.{json,yaml,md}": ["prettier --check"]
}

export default config
