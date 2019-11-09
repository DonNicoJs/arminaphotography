import path from 'path'
import pkg from './package'

export default {
  mode: 'spa',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ]
  },
  loading: { color: '#fff' },
  css: ['~/assets/css/tailwind.css'],
  plugins: [],
  modules: ['@nuxtjs/pwa', 'nuxt-purgecss'],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  urgeCSS: {},
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['markdown-with-front-matter-loader']
      })
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
