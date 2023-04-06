import { toast } from 'react-toastify';
import axios from './api'

export async function uploadSalesFile(file: File) {
  try {
    let formData = new FormData();

    formData.append("salesFile", file);
    
    const res = await axios.post("/uploadFile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res?.status === 201) toast.success('Arquivo enviado')
  } catch {
    toast.error('Houve um erro')
  } 
}
