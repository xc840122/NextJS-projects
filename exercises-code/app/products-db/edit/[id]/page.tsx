import EditProductForm from "@/component/EditProductForm";
import { getProduct } from "@/prisma-db";
import { Product } from "../../page";
import { notFound } from "next/navigation";

async function EditProductPage({ params }: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));
  if (!product) return notFound();

  return (
    <EditProductForm product={product} />
  )
}

export default EditProductPage