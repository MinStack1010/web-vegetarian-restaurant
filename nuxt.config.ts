import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,

  compatibilityDate: '2025-09-01',

  nitro: {
    preset: 'cloudflare-module'
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