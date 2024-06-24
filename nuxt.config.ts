// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  primevue: {
    options: {
      unstyled: false,
      ripple: true,
    },
    importTheme: { from: '~/themes/maintheme.js' },
  },
})
