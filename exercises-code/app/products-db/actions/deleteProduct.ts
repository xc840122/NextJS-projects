import { deleteProduct } from "@/prisma-db";

export async function removeProduct(productId: string) {
  if (!parseInt(productId)) throw new Error("illegal id")
  deleteProduct(parseInt(productId))

}
