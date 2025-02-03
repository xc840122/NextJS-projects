import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // const requestHeaders = await headers();
  // return Response.json(requestHeaders.get("Authorization"))

  const cookieStore = await cookies();
  cookieStore.set("theme", "dark")
  const theme = request.cookies.get("theme");
  return new Response(`<h1>Profile API fetch ${theme?.value}</h1>`, {
    headers: {
      "Content-Type": "text/html",
      "Set-cookie": "theme=light"
    }
  })
}
