// in this case caching is not required as  no need to store it
export const dynamic = "force-static"; // caches the data. however data remain same
export const revalidate = 10; // this updates the data every 10 seconds

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
