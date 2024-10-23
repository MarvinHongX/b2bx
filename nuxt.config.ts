// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    emailReciever: process.env.EMAIL_USER_RECIEVER,
    emailReciever2: process.env.EMAIL_USER_RECIEVER2,
    
  },
  app: {
    head: {
        title: 'B2BX',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'B2BX' },
          ],
        script: [
          {
            src: '//dapi.kakao.com/v2/maps/sdk.js?appkey=1cdf809e4c8043016d946666f7a30bcd&autoload=false',
            async: true,  // 비동기로 로드
          }
        ]
    }
},
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/sitemap', '@nuxt/ui']
})