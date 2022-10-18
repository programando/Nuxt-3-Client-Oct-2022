<template>
    <div class="container mx-auto bg-gray-600 p-8 font-Poppins">
      <h1 class=" text-yellow-100 text-lg">ESTE ES UN EJEMPLO USANDO OPTION API, PERO USAREMOS COMPOSITION API EN TODO EL PROYECTO</h1>
 
    </div>
  </template>

  <script>
  // ESTE ES UN EJEMPLO USANDO OPTION API
  export default {
    
    mounted() {
        const ENV = useRuntimeConfig()
        console.log (ENV.public.apiBase)
    }
  }
  </script>


 