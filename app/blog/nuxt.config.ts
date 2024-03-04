// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // ssr: false,
  css: [
    '~/assets/css/main.css',
  ],
  modules: [
    '@nuxt/content',
    '@zadigetvoltaire/nuxt-gtm',
  ],
  gtm: {
    id: 'GTM-QWYM55077J'
  },
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
        sepia: 'monokai'
      }
    }
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
