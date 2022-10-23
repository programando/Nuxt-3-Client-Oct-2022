import axios from "axios";
 
const Api = axios.create ({ 
  baseURL        : 'http://localhost:8000',
  withCredentials: true
})
 
//process.env.VUE_APP_API
export default Api


 


