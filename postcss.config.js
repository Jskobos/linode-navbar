const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    // 'postcss-import': {},
    // 'postcss-preset-env': {},
    // 'cssnano': {},
    tailwindcss('./tailwind.js'),
    cssnano({
      preset: 'default',
    }),
    purgecss({
      content: ['./src/**/*.tsx']
    }),
  ]
}