module.exports = {
  plugins: [
      require('postcss-nesting'),
      require('autoprefixer'),    
      require('postcss-import'),
      require('tailwindcss')({
        config: './tailwind.config.js'
      }),
  ]
}
