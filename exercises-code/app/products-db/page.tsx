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
          <div key={product.id} className=" flex flex-col rounded-lg bg-blue-800 p-2 shadow-sm text-white">
            <Link href={`/products-db/edit/${product.id}`}>
              <h1 className="font-bold">{product.name}</h1>
            </Link>
            <h3>{product.description}</h3>
            <h3>${product.price}</h3>
          </div>
        )
      })}
    </div>
  )
}

