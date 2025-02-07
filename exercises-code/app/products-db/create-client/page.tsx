// create products via client
'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

function AddProductPage() {

  const route = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/products-db/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, description }),
      })
      if (response.ok) {
        route.push("/products-db");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
      setName("");
      setDescription("");
      setPrice(0);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center border w-1/2 p-2">
      <h1 className="font-bold text-center">Add Product</h1>
      <form className="border bg-slate-100 w-2/3 space-y-4 p-2 rounded-sm" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            className="block border-blue-500 w-full h-10 shadow-sm rounded-lg"
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            className="block border-blue-500 w-full h-10 shadow-sm rounded-lg"
            type="text"
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            name="price"
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            className="block border-blue-500 w-full h-10 shadow-sm rounded-lg"
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            required
          />
        </div>
        <div>
          <button
            className="block mx-auto bg-blue-500 hover:bg-blue-700
             text-white font-semibold rounded-lg shadow-sm p-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProductPage