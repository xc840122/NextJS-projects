import { addProduct } from "@/prisma-db";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, price, description } = body;
  const product = addProduct(name, price, description);
  return new Response(JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
  })
}
