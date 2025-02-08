import { getProducts } from "@/prisma-db";
import Link from "next/link";

export type Product = {
  id: number,
  name: string,
  price: number,
  description: string | null;
}

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="flex flex-col w-full p-2 space-y-2 h-screen bg-slate-200">
      {products.map(product => {
        return (
          <div key={product.id} className="flex flex-col rounded-lg bg-blue-800 p-2 relative shadow-sm text-white">
            <Link href={`/products-db/edit/${product.id}`}>
              <h1 className="font-bold">{product.name}</h1>
            </Link>
            <h3>{product.description}</h3>
            <h3>${product.price}</h3>
            <button className="absolute right-8 top-8 bg-red-500 hover:bg-red-700 
            rounded-lg px-2 shadow-lg z-20 font-bold">
              <Link href={`/products-db/delete/${product.id}`}>Delete</Link>
            </button>
          </div>
        )
      })}
    </div>
  )
}

