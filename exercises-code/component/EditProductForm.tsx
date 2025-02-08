'use client'
import { useActionState } from "react";
import { Product } from "@/app/products-db/page";
import { editProduct } from "@/app/products-db/actions/editProduct";


export default function EditProductForm(
  {
    product
  }: {
    product: Product
  }) {

  // append id
  const editProductwithId = editProduct.bind(null, product.id)
  const [state, formAction, pending] = useActionState(editProductwithId, {
    error: {}
  });

  return (
    <div className="flex flex-col justify-center items-center border w-1/2 p-2">
      <h1 className="font-bold text-center">Add Product</h1>
      <form
        autoComplete="off"
        action={formAction}
        className="border bg-slate-100 w-2/3 space-y-4 p-2 rounded-sm">
        {/* not secure, expose id */}
        {/* <input type="hidden" name="id" value={product.id} />*/}
        <div>
          <label>Name</label>
          <input
            className="block border-blue-500 w-full h-10 shadow-sm rounded-lg"
            type="text"
            name="name"
            defaultValue={product.name}
          />
          {state.error.nameError && (
            <p className="text-red-500">{state.error.nameError}</p>
          )}
        </div>
        <div>
          <label>Price</label>
          <input
            className="block border-blue-500 w-full h-10 shadow-sm rounded-lg"
            type="text"
            name="price"
            defaultValue={product.price}
          />
          {state.error.priceError && (
            <p className="text-red-500">{state.error.priceError}</p>
          )}
        </div>
        <div>
          <label>Description</label>
          <textarea
            className="block border-blue-500 w-full h-10 shadow-sm rounded-lg"
            name="description"
            defaultValue={product.description ?? ""}
          />
          {state.error.descriptionError && (
            <p className="text-red-500">{state.error.descriptionError}</p>
          )}
        </div>
        <div>
          <button
            className={`block mx-auto ${pending ? "bg-gray-200" : "bg-blue-500"}
       text-white font-semibold rounded-lg shadow-sm p-2 w-full`}
            type="submit"
            disabled={pending}
          >
            {pending ? "Editting..." : "Edit Product"}
          </button>
        </div>
      </form>
    </div>
  )
}
