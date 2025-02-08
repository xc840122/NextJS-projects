'use server';

import { updateProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export type Error = {
  nameError?: string,
  priceError?: string,
  descriptionError?: string
}

export type FormState = {
  error: Error,
}

export const editProduct = async (
  id: number,
  prevState: FormState,
  formData: FormData) => {

  const error: Error = {};

  const name = formData.get("name") as string;
  const price = parseFloat(formData.get("price") as string);
  const description = formData.get("description") as string;

  if (!name) {
    error.nameError = "Name is required";
  }

  if (!price) {
    error.priceError = "Price is required";
  }

  if (!description) {
    error.descriptionError = "Description is required";
  }

  if (Object.keys(error).length > 0) {
    return { error };
  }
  await updateProduct(id, name, price, description);
  redirect("/products-db");
}
