 

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

    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: process.env.BASE_URL || 'http://localhost:3000/',
        // Keys within public, will be also exposed to the client-side
        public: {
          apiBase:  process.env.API_SECRET
        }
      }
     

})
