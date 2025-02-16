import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL("/", request.url));
  //   if (request.nextUrl.pathname === "/hello") {
  //     return NextResponse.redirect(new URL("/profile", request.nextUrl));
  //   }

  const response = NextResponse.next();
  const themePref = request.cookies.get("theme");
  if (!themePref) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("new-header", "new-value");
}
// this function will redirect client to home page
// next respone used for component related to routinmg and not rest api

// export const config = {
//   matcher: "/profile",
// };
// when user go to profile page, auto redirect to home page
