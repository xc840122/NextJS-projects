import UserCard from "@/component/UserCard"
import { Suspense } from "react"

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export default async function Sequential() {
  const posts: Post[] = await fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then(response => response.json())
    .catch(error => `Fetch posts error,${error}`)

  return (
    <div className="flex flex-col items-center p-4 h-screen">
      <h1 className="text-center font-bold text-3xl">Sequential fetch</h1>
      <div className="grid grid-cols-2 w-full gap-4 mt-8">
        {posts.map(post => {
          return (
            <div
              key={post.id}
              className="flex flex-col justify-center items-start bg-slate-200 
              shadow-sm rounded-lg px-4 py-2 gap-2">
              <h1 className="font-bold text-xl text-nowrap w-1/2 overflow-hidden">{post.title}</h1>
              <h3 className="w-full">{post.body}</h3>
              <Suspense fallback={<div>Loading...</div>}>
                <UserCard />
              </Suspense>
            </div>)
        })}
      </div>
    </div>
  )
}
