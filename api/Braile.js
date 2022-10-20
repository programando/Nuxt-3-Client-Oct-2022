import Axios from "@/api/config/Axios";




export default {
  
  async SendTextToTranscript(formData) {
     const response = await  Axios.post("braile/transcripcion/textos", formData      ) ;
     return response
  },
  

 
}
