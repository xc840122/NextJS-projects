import { comments } from "@/app/comments/data"

type Comment = {
  id: number,
  text: string,
}

export async function addComentService(text: Comment['text']) {
  const newComment: Comment = { id: comments.length + 1, text: text }
  comments.push(newComment);
  return newComment
}

export async function getCommentService(id: string) {
  if (!isNaN(+id)) {
    const commentId = +id;
    const comment: Comment = comments.find(c => c.id === commentId)!;
    return comment;
  } else {
    throw new Error("id is not correct");
  }
}

export async function queryCommentsService(query: string) {

  const filteredComments = query
    ? comments.filter(c => c.text.includes(query))
    : comments;
  return filteredComments;
}

export async function updateCommentServie(id: string, text: Comment['text']) {
  if (!isNaN(+id)) {
    // find the comment
    const commentId = +id;
    const index = comments.findIndex(c => c.id === commentId)!;
    // update the item
    comments[index].text = text
    return comments[index].text
  } else {
    throw new Error(`update comment${id} failed`)
  }
}
