export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }]
}

export default async function ProductDetail({ params }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <h1>Product {id} details {new Date().toLocaleTimeString()}</h1>
  )
}
