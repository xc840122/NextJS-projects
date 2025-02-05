import Link from "next/link";
import React from "react";
import { Suspense } from "react";
import ProductDetails from "@/component/ProductRight";
import ProductLeft from "@/component/ProductLeft";

export default function Product() {


  return (
    <div className="border border-blue-700 mx-4 p-4 flex justify-evenly items-center h-[400px]">
      <div className="flex flex-col justify-center border border-green-700 w-1/2 h-full p-2">
        <Suspense fallback={<div className="text-lg font-bold">Loading...</div>}>
          <ProductLeft />
        </Suspense>
      </div>
      <div className="flex flex-col justify-center border border-green-700 w-1/2 h-full p-2">
        <Link href={"/"}>
          <h1 className="font-bold text-lg text-center">
            <ProductDetails />
          </h1>
        </Link>
      </div>
    </div>
  )
}
