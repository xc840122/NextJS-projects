import { addComentService } from "../_service/commentService";
import { comments } from "../data"

export async function GET() {
  return Response.json(comments)
}

export async function POST(request: Request) {
  const text: string = await request.json();
  const newComment = await addComentService(text);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
