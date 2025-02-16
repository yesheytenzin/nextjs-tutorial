export const dynamic = "force-static";
// cant test it, because no dynamic data
export async function GET() {
  const categories = [
    { id: 1, name: "electronics" },
    { id: 2, name: "books" },
    { id: 3, name: "clothings" },
    { id: 4, name: "home and garden" },
  ];

  return Response.json(categories);
}
