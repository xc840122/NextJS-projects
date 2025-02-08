import DeleteSuccess from "@/component/DeleteSuccess";
import { removeProduct } from "../../actions/deleteProduct";

export default async function DeletePage(
  {
    params
  }: {
    params: Promise<{ id: string }>
  }) {

  // get id passed from list page
  const { id } = await params;

  try {
    // delete product
    removeProduct(id);

  } catch (error) {
    throw new Error(`unknown error ${error}`)
  }
  return <DeleteSuccess />
}