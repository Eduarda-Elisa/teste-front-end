import { ProductInterface } from "../model/product.model"

export async function getProducts(): Promise<ProductInterface[]> {
    const res = await fetch("http://localhost:3000/api/products")
  
    if (!res.ok) {
      throw new Error("Falha ao buscar produtos")
    }
  
    const data: ProductInterface[] = await res.json()
    return data
}
  