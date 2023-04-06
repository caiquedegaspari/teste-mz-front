import { format } from 'date-fns'

import { SalesListFromApiDTO } from '../../services/dtos/SellersList.dto'
import './listSales.css'

export function ListSales() {
  
  const headers = ['Tipo', 'Data', 'Produto', 'Valor', 'Vendedor']
  const data: SalesListFromApiDTO[] = [
    {
      sellerTable: [
        {
          type: 'Venda produtor',
          date: new Date('2021-12-03T14:46:02.000Z'),
          product: 'DOMINANDO INVESTIMENTOS',
          value: 50000,
          sellerName: 'MARIA CANDIDA'
        },
        {
          type: 'Venda produtor',
          date: new Date('2022-01-22T11:59:13.000Z'),
          product: 'DOMINANDO INVESTIMENTOS',
          value: 50000,
          sellerName: 'MARIA CANDIDA'
        },
      ],
      total: 100000
    },
    {
      sellerTable: [
        {
          type: 'Venda filiado',
          date: new Date('2022-01-22T11:59:13.000Z'),
          product: 'CURSO JAVASCRIPT',
          value: 10000,
          sellerName: 'ALUISIO AZEVEDO'
        },
        {
          type: 'Venda filiado',
          date: new Date('2022-01-22T11:59:13.000Z'),
          product: 'CURSO JAVASCRIPT',
          value: 10000,
          sellerName: 'ALUISIO AZEVEDO'
        },
      ],
      total: 20000,
    },
    {
      sellerTable: [
        {
          type: 'Venda produtor',
          date: new Date('2022-01-22T11:59:13.000Z'),
          product: 'CURSO JAVASCRIPT',
          value: 10000,
          sellerName: 'JOANA SILVA'
        },
        {
          type: 'Comissão paga',
          date: new Date('2022-01-22T11:59:13.000Z'),
          product: 'CURSO JAVASCRIPT',
          value: 10000,
          sellerName: 'JOANA SILVA'
        }
      ],
      total: 20000
    }
  ]

  return (
    <>
      <h2>Lista de vendas por vendedor/afiliado</h2>
      <div className='tableContainer'>
        {
          data.map((tables, dataKey) => (
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
                      <td>{format(sales?.date, 'dd/MM/yyyy')}</td>
                      <td>{sales.product}</td>
                      <td>{sales.value}</td>
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