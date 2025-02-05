export default async function UsersServer() {
  // define user type,list required fields
  type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
  }

  // fetch and handle data
  const userdata: User[] = await fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .catch(error => <div>{error}</div>)


  return (
    <div className="flex flex-col flex-1 w-1/2 bg-blue-200 justify-evenly items-center p-4 space-y-4">
      <h1 className="text-white font-bold text-lg">Users Server</h1>
      {userdata.map(user => {
        return (
          <section className="bg-gray-200 shadow-lg rounded-lg p-2 my-2 mx-auto w-full" key={user.id}>
            <h1 className="font-bold">name: {user.name}</h1>
            <h3>username: {user.username}</h3>
            <h3>email: {user.email}</h3>
            <h3>phone:{user.phone}</h3>
          </section>
        )
      })}
    </div>
  )
}
