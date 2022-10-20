 

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
      },
      css: [
        "@/assets/css/tailwind.css"
      ],
   
    server: {
        port: 3002,
    },
 
    runtimeConfig: {
        // The private keys which are only available within server-side


        // Keys within public, will be also exposed to the client-side 
        public: {
            urlServerApi  : process.env.URL_SERVER_API || 'http://localhost:8000/',
            urlLocalApi   : process.env.URL_LOCAL_API,
            tempLoginEmail: process.env.TEMP_LOGIN_EMAIL,
            tempLoginPass : process.env.TEMP_LOGIN_PASS,
            appEnvironment: process.env.APP_ENVIRONMENT,         
        }
      }
     
/*
   baseUrl      : process.env.URL_BASE,
   apiUrl       : process.env.URL_API,
   webUrl       : process.env.URL_WEB,
   resetPassword: process.env.URL_RESET_PASS
   */

})
