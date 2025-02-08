'use server'

import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export const createProduct = async (formData: FormData) => {

  const name = formData.get("name") as string;
  const price = parseFloat(formData.get("price") as string);
  const description = formData.get("description") as string;

  await addProduct(name, price, description);
  redirect("/products-db");
}
