/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // https://tailwindcss.com/docs/optimizing-for-production
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {})
  }
}

export default config
