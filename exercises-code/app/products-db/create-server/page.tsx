'use client'
import Button from "@/component/Button"
// import { createProduct } from "./actions/createProduct"
import { useActionState } from "react";
import { createProduct } from "@/actions/createProduct";

function AddProductPage() {

  const [state, formAction] = useActionState(createProduct, {
    error: {}
  });

  return (
    <div className="flex flex-col justify-center items-center border w-1/2 p-2">
      <h1 className="font-bold text-center">Add Product</h1>
      <form
        autoComplete="off"
        action={formAction}
        className="border bg-slate-100 w-2/3 space-y-4 p-2 rounded-sm">
        <div>
          <label>Name</label>
          <input
            className="block border-blue-500 w-full h-10 shadow-sm rounded-lg"
            type="text"
            name="name"
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
          />
          {state.error.descriptionError && (
            <p className="text-red-500">{state.error.descriptionError}</p>
          )}
        </div>
        <div>
          <Button />
        </div>
      </form>
    </div>
  )
}

export default AddProductPage