<template>
  <div>
    <div class="container mx-auto bg-gray-600 p-8 font-Poppins">
      <h1 class=" text-yellow-100 text-lg">
        ESTE ES UN EJEMPLO USANDO OPTION API, PERO USAREMOS COMPOSITION API EN TODO EL PROYECTO
      <br>Count <br> 
      <button @click="increment()"> + </button>  {{ store.count}} 
      <button @click="decrement"> - </button>
      <p> {{ store.countDigitalLength }} </p>
      </h1>
      
      <button class="text-white" @click="StateCahnge()"> Cambiar estado</button>
      <p><input  type="text" v-model="Nombre"></p>
      <br>
      <p class="text-white"> {{AuthStore.user }}</p>
    </div>
    <div>
      <h3> MANAGMENT USER INFORMATION</h3>
        <div v-if="AuthStore.isAuthenticate">
          <p> Usuario auntenticado :   {{ AuthStore.user.name }} </p>
          <button @click="Logout"> Logout </button>
        </div>
        <div v-else>  
          <br>
          No ha inciado sesión
          <br>
          <button class="border px-6 py-2.5 bg-blue-600 text-white"> Ingresar al sistema </button> &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        
        
    </div>
  </div>
  </template>

 <!-- -->
  <script setup >
  import { ref } from 'vue'
  import { useCounterStore } from "@/stores/counter";
  import { useAuthStore} from "@/stores/auth";
 
  const store =  useCounterStore ()  ;
  const AuthStore = useAuthStore();
  const Nombre = ref('')
 //  const countDigitalLength = store.count.toString().length;

    const StateCahnge = () => {
        console.log (Nombre.value)
      AuthStore.setUser( {
            name: Nombre.value,
            email: "james@pepe.com"
        } )
    }

    function increment() {
        store.count++;
    }
    function decrement() {
      store.count--;
    }

    function Logout() {
        AuthStore.$patch( (state) =>{
          (state.isAuthenticate = false), ( state.user = {})
        })
    }
  </script>


 