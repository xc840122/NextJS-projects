import Link from "next/link";

export default function page() {
  return (
    <div>
      <Link href={"/rendering/product/1"}>Product 1</Link>
      <Link href={"/rendering/product/2"}>Product 2</Link>
      <Link href={"/rendering/product/3"}>Product 3</Link>
    </div>
  )
}
