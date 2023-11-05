// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: 'my-secret-key',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
})
