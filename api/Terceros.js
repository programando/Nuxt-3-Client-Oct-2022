import Axios from "@/api/config/Axios";

export default {
  
  async exampleRoute( formData ) {
    try { 
      const response = await Axios.post("http://localhost:8000/clientes/nuxt/client" , formData      ) ;
      return response
     } catch (error) {
        console.log ( error )
     }
  },
  

 
}
