import { notFound } from "next/navigation";

export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string, reviewId: string }>
}
) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 10) {
    return notFound();
  }
  return (
    <div>ProductId is {productId}, the Review is {reviewId}</div>
  )
}