export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY
  }
})