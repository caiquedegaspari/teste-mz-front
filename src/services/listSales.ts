import { toast } from 'react-toastify';
import axios from './api'
import { SalesListFromApiDTO } from './dtos/SellersList.dto';

interface ApiResponse {
  salesList: SalesListFromApiDTO[]
}

export async function listSales(): Promise<SalesListFromApiDTO[] | undefined> {
  try {
    const res = await axios.get<ApiResponse>("/listSales");
    return res?.data?.salesList || []
  } catch {
    toast.error('Listando o histórico de vendas')
  } 
}
