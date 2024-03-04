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
    id: 'GTM-WZLPW43M'
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
