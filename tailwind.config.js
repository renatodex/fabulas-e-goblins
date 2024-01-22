module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.md"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'table': 'repeat(auto-fill, minmax(120px, 1fr))'
      },
      colors: {
        'gunmetal': '#243338',
        'raisin-black': '#252525',
        'aero-blue': '#CAFFD2',
        'dark-charcoal': '#2E2E2E',
        'big-foot-feet': '#F28556',
        'pastel-green': '#68DE79',
        'blizzard-blue': '#AEDCF6',
        'platinum': '#E2E2E2',
        'topaz': '#FFCC7D',
        'rich-brilliant-lavender': '#F89AFF',
        'pale-violet': '#BFAAF9',
        'theroyal-50': '#DCCCFFff',
        'theroyal-100': '#CCBBF1ff',
        'theroyal-200': '#BBAAE2ff',
        'theroyal-300': '#AB99D4ff',
        'theroyal-400': '#9B88C5ff',
        'theroyal-500': '#8B77B7ff',
        'theroyal-600': '#7A65A8ff',
        'theroyal-700': '#6A549Aff',
        'theroyal-800': '#5A438Bff',
        'theroyal-900': '#49327Dff',
        'theroyal-950': '#39216Eff',
      }
    },
  },
  plugins: [],
}
