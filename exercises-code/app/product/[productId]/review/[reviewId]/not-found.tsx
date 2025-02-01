"use client";

import { usePathname } from "next/navigation"

// not support params
export default function NotFound() {

  const path = usePathname();
  const productId = path.split('/')[2];
  const reviewId = path.split('/')[4];
  return (
    <div>productId {productId} review {reviewId} is not found</div>
  )
}
