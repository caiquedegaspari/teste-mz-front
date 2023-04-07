import { format } from 'date-fns'

import { SalesListFromApiDTO } from '../../services/dtos/SellersList.dto'
import './listSales.css'
import { useEffect, useState } from 'react'
import { listSales } from '../../services/listSales'

export function ListSales() {
  
  const headers = ['Tipo', 'Data', 'Produto', 'Valor', 'Vendedor']
  const [sales, setSales] = useState<SalesListFromApiDTO[] | undefined>([])
  
  useEffect(() => {
    listSales().then((res) => setSales(res))
  }, [])

  return (
    <>
      <h2>Lista de vendas por vendedor/afiliado</h2>
      <div className='tableContainer'>
        {
          sales?.map((tables, dataKey) => (
            <table key={dataKey}>
              <tr>
                {headers.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
              {
                tables.sellerTable.map((sales, idx) => (
                    <tr key={idx}>
                      <td>{sales.type}</td>
                      <td>{format(new Date(sales?.date), 'dd/MM/yyyy')}</td>
                      <td>{sales.product}</td>
                      <td>{toBrCurrency(sales.value / 100)}</td>
                      <td>{sales.sellerName}</td>
                    </tr>
                  )
                )
              }
            <p>Total de transações: {toBrCurrency(tables.total / 100)}</p>
            </table>
          )) 
        }
      </div>
    </>
  )
}

const toBrCurrency = (value:number) => {
  return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
} 