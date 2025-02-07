'use server'
import Button from "@/component/Button"
import { createProduct } from "./service/createProduct"
function AddProductPage() {

  return (
    <div className="flex flex-col justify-center items-center border w-1/2 p-2">
      <h1 className="font-bold text-center">Add Product</h1>
      <form
        autoComplete="off"
        action={createProduct}
        className="border bg-slate-100 w-2/3 space-y-4 p-2 rounded-sm">
        <div>
          <label>Name</label>
          <input
            className="block border-blue-500 w-full h-10 shadow-sm rounded-lg"
            type="text"
            name="name"
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            className="block border-blue-500 w-full h-10 shadow-sm rounded-lg"
            type="text"
            name="price"
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            className="block border-blue-500 w-full h-10 shadow-sm rounded-lg"
            name="description"
            required
          />
        </div>
        <div>
          <Button />
        </div>
      </form>
    </div>
  )
}

export default AddProductPage