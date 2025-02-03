// cache
export const dynamic = "force-static";
// update every 10s
export const revalidate = 10;

export async function GET() {
  return Response.json(`time : ${new Date().toLocaleTimeString()}`);
}
