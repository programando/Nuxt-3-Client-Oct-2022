<template>
    <div class="container mx-auto bg-gray-600 p-8 font-Poppins">
      <h1 class=" text-yellow-100 text-lg">
        ESTE ES UN EJEMPLO USANDO OPTION API, PERO USAREMOS COMPOSITION API EN TODO EL PROYECTO
      <br>Count : {{ store.count}} 
      </h1>
      
      <button class="text-white" @click="StateCahnge()"> Cambiar estado</button>
    </div>
   
  </template>

 <!-- -->
  <script setup >
  import { useCounterStore } from "@/stores/counter";

 
  const store =  useCounterStore ()  ;
 

  // ESTE ES UN EJEMPLO USANDO OPTION API
  //import Clientes from  "@/api/Terceros"
  
  onMounted(async  () => {
      //const response= await Clientes.exampleRoute('foflf');
      //console.log ( response )
        //const AppConfig = useRuntimeConfig()
        //console.log (AppConfig.urlServerApi)
  })

    const StateCahnge = () => {
        store.increment( 4);
    }

  </script>


 