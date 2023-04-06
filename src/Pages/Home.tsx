import { useState } from "react";
import { ListSales } from "../Components/ListSales";
import { UploadForm } from "../Components/UploadForm";
import './Home.css'

type Components = 'upload' | 'listSales'

export function Home() {
  const [toggleComponent, setToggleComponent] = useState<Components>('upload')

  const renderComponent = (componentType: Components) => {
    switch (componentType) {
      case 'upload':
        return <UploadForm /> 
      case 'listSales':
        return <ListSales />
      default: 
        return <UploadForm />
    }
  }

  return (
    <>
      <button onClick={() => setToggleComponent('upload')}>Upload de arquivo de vendas</button>
      <button onClick={() => setToggleComponent('listSales')}>Lista de vendas</button>

      {
        renderComponent(toggleComponent)
      }
    </>
  )
}