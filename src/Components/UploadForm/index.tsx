import { toast } from "react-toastify"
import { uploadSalesFile } from "../../services/uploadSalesFile"
import { useState } from "react"
import './form.css'

export function UploadForm() {
  
  const [file, setFile] = useState<File | null>()

  const handleChange = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      const files: FileList = evt.target.files

      if (files.length > 0) {
        const file = files[0]
        setFile(file)
        toast.success('Arquivo adicionado, faça o upload')
      }
    }
  }

  const submit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (!file) return toast.error('Adicione um arquivo')
    await uploadSalesFile(file)
    setFile(null)
  }
  
  return (
      <div className="container">
        <form className="form" onSubmit={submit}>
          <h2>
            <label htmlFor="salesFile">Arquivo do registro de vendas:</label>
          </h2>
          <input type="file" name="salesFile" accept=".txt" onChange={handleChange}/> <br /><br />
          <button type="submit">Enviar</button>
        </form>
      </div>
  )
}