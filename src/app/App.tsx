import { Button } from "../components/ui/button"

import "./globals.css"
import NewProductForm  from "../components/NewProductForm"
import ProductCarrousel from "@/components/productCarrousel"



export default function App() {
  return (
    <> 
    {/* title */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl mt-9 sm:text-3xl md:text-4xl font-bold text-black my-4 mx-auto">
          Lista de Productos
        </h1>
      </div>
      {/* Prodcut Cards */}
      <div>
        <ProductCarrousel/>
      </div>
      {/* Product Maker From */}
      <div className="h-screen">
        <NewProductForm/>
      </div>
    </>

  )
}
