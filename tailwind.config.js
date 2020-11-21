const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    colors: {
      scarlet: '#ff2400',
      crimson: '#dc143c',
      pomegranate: '#c0392b',
      midnight: '#2c3e50',
      'concrete-200': 'rgb(53, 70, 85)',
      concrete: '#95a5a6',
      clouds: '#ecf0f1',
      greensea: '#16a085',
      amethyst: '#9b59b6',
      sunflower: '#f1c40f',
      white: '#ffffff'
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        handwritten: ['Allura', "cursive"],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '65ch',
          },
        }
      })
    }
  ],
  purge: {
    enabled: true,
    layers: ['components', 'utilities'],
    content: [
      './src/components/*.js',
      './src/pages/*.js',
    ],
  },
}
