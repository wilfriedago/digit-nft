import fs from "node:fs"

const buildEslintCommand = (filenames) =>
  `next lint --fix --strict --max-warnings 0 --report-unused-disable-directives-severity warn --file ${filenames.join(" --file ")}`

const buildTscCommand = (filenames) => {
  const tsconfig = JSON.parse(fs.readFileSync("tsconfig.json", "utf8"))

  const options = Object.entries(tsconfig.compilerOptions)
    .filter(([key]) => !["paths", "plugins", "incremental"].includes(key))
    .map(([key, value]) => (value === true ? `--${key}` : `--${key} ${value}`))
    .join(" ")

  return `tsc --pretty ${options} ${filenames.join(" ")}`
}

const config = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "**/*.ts?(x)": [buildTscCommand],
  "*.{json,yaml,md}": ["prettier --check"]
}

export default config
