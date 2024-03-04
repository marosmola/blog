// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      gtm: {
        id: process.env.GTM_ID
      }
    }
  },
  // ssr: false,
  css: [
    '~/assets/css/main.css',
  ],
  modules: [
    '@nuxt/content',
    '@zadigetvoltaire/nuxt-gtm',
  ],
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
