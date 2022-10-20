 
export default defineNuxtPlugin(() => {
    return {
      provide: {
        saludo: (msg) => `Hello ${msg}!`
      }
    }
  })