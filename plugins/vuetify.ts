import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'mimiTheme',
      themes: {
        mimiTheme: {
          dark: false,
          colors: {
            primary: '#334A38',
            secondary: '#71825F',
            background: '#F7F4ED',
            surface: '#FFFFFF'
          }
        }
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
