'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DeleteSuccess() {

  // countdonw 3s, back to product list
  const route = useRouter();

  useEffect(() => {

    const timer = setTimeout(() => { route.replace("/products-db") }, 3000)
    // clear timer
    return () => clearTimeout(timer);
  }, [route])

  return (
    <div className="flex flex-col justify-center items-center mx-auto space-x-4 mt-8">
      <h1 className="font-semibold text-xl">Delete successfully</h1>
      <h3>Auto return to product list in 3s...</h3>
      <Link className="underline" href={"/products-db"}>Return immediately</Link>
    </div>
  )
}
