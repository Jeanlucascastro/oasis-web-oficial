// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: process.env.NUXT_API_SECRET,
    // Keys within public are also exposed client-side
    public: {
      apiBase: 'http://localhost:8080'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['/main.css'],
  routeRules: {
    '/**': { cors: true },
  }  
})
