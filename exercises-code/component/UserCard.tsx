type User = {
  id: number,
  name: string,
}
export default async function UserCard() {

  // simulate the delay
  await new Promise(resolve => setTimeout(resolve, 3000))

  const user: User = await fetch("https://jsonplaceholder.typicode.com/users/1/")
    .then(response => response.json())
    .catch(error => `error happens ${error}`)

  return (
    <div><span className="font-bold">Author: </span>{user.name}</div>
  )
}
