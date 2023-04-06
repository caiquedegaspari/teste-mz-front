import { ListSales } from "../Components/ListSales";
import { UploadForm } from "../Components/UploadForm";

export function Home() {
  return (
    <>
      <h1>
        Home component
      </h1>
      <UploadForm />
      <ListSales />
    </>
  )
}