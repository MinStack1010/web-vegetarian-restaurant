import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,

  nitro: {
    preset: 'cloudflare_pages'
  },

  css: [
    'vuetify/styles',
    '~/assets/main.scss'
  ],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    ssr: {
      noExternal: ['vuetify']
    },
    plugins: [
      vuetify({
        autoImport: true
      })
    ]
  },

  app: {
    head: {
      title: 'QUÁN CHAY MIMI · Bếp Thiền Lành'
    }
  }
})