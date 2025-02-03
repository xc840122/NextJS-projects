// query comment , than update it

import { updateCommentServie } from "../_service/commentService";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  // get review id
  const { id } = await params;
  // get text need to be updated
  const { text } = await request.json();
  // update comment
  const comment = await updateCommentServie(id, text)
  return Response.json(comment)
}
