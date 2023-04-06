import './listSales.css'

export function ListSales() {
  
  const headers = ['Tipo', 'Data', 'Produto', 'Valor', 'Vendedor']
  const data = [
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
    }
  ]

  return (
    <>
      <h2>List Sales component</h2>
      <table>
        <tr>
          {headers.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
        {data.map((sales, idx) => (
          <tr key={idx}>
            <td>{sales.type}</td>
            <td>{sales.date.toDateString()}</td>
            <td>{sales.product}</td>
            <td>{sales.value}</td>
            <td>{sales.sellerName}</td>
          </tr>
        ))}
      </table>
    </>
  )
}