import Axios from "@/api/config/Axios";

export async function getCsrf ()   {
  const Cokies   = await Axios.get('sanctum/csrf-cookie')
}

 