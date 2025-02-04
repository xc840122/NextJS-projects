import { cookies } from "next/headers"

export default async function About() {
  // add some dynamic function
  const cookiesStore = await cookies();

  const theme = cookiesStore.get("theme");
  console.log("server component--> ", theme)

  return (
    <h1>About page {new Date().toLocaleTimeString()}</h1>
  )
}