import { NextRequest, NextResponse } from "next/server";

export async function corsMiddleware(req : NextRequest, res: NextResponse) {
  const origin = req.headers.get("origin");
  const response = NextResponse.next();

  if (origin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  if (req.method === "OPTIONS") {
    return NextResponse.json({}, { status: 204 });
  }

  return response;
}
