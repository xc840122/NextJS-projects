import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL("/", request.url))
  // console.log("================", request.nextUrl.pathname)
  if (request.nextUrl.pathname = "/profile") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // const response = NextResponse.next();
  // const cookiePreference = response.cookies.get("theme");
  // if (!cookiePreference) {
  //   response.cookies.set("theme", "dark");
  // }
  // response.headers.set("Customer-Headers", "customer-values")
  // return response;
}

export const config = {
  matcher: "/profile",
}