'use client'

import { useFormStatus } from "react-dom"

const Button = () => {

  const { pending } = useFormStatus();

  return (
    <button
      className={`block mx-auto ${pending ? "bg-gray-200" : "bg-blue-500"}
       text-white font-semibold rounded-lg shadow-sm p-2 w-full`}
      type="submit"
      disabled={pending}
    >
      {pending ? "Adding..." : "Add Product"}
    </button>
  )
}

export default Button