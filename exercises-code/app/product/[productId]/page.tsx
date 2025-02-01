export default async function ProductDetails({
  params
}: {
  params: Promise<{ productId: string }>
}) {

  const productId = (await params).productId
  return (
    <div>ProductId is {productId}</div>
  )
}