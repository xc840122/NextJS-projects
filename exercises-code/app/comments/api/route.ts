import { NextRequest } from "next/server";
import { addComentService, queryCommentsService } from "../_service/commentService";

// export async function GET() {
//   return Response.json(comments)
// }

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  if (query) {
    const filteredComments = await queryCommentsService(query);
    return Response.json(filteredComments)
  } else {
    throw new Error("no query params")
  }
}

export async function POST(request: Request) {
  const text: string = await request.json();
  const newComment = await addComentService(text);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
