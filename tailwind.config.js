module.exports = {
  important: true,
  corePlugins: {
    preflight: false
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./windows/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {},
    extend: {}
  },
  plugins: []
}
