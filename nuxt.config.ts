// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  postcss: {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}
    }
  },

  css: ['~/assets/css/tailwind.css'],

  primevue: {
    autoImport: true,
    options: {
      unstyled: false,
      ripple: true,
    },
    importTheme: { from: '~/themes/maintheme.js' },
  },
})
