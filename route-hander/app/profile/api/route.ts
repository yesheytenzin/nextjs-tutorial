import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   const requestheader = new Headers(request.headers);
//   console.log(requestheader.get("Authorization"));
//   return new Response("data from profile api");
// }

export async function GET(request: NextRequest) {
  const headerlist = await headers();
  console.log(headerlist.get("Authorization"));
  const theme = request.cookies.get("theme");
  console.log(theme);

  // set cookies
  const cookieStore = await cookies();
  cookieStore.set("PagePerInterval", "20");

  //read cookies
  cookieStore.get("PagePerInterval");
  console.log(cookieStore.get("PagePerInterval"));

  return new Response("<h1>data from profile api</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
