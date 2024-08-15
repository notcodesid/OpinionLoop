import { NextRequest, NextResponse } from "next/server";

export async function corsMiddleware(req: NextRequest, res: NextResponse<unknown>) {
  const allowedOrigins = [
    'https://ama-rb203yv1p-notcod.jacts.vercel.app',
    'https://ama-beige.vercel.app',

  ];

  const origin = req.headers.get("origin") || "";

  const response = NextResponse.next();

  // Check if the request's origin is in the list of allowed origins
  if (allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return new NextResponse(null, {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      status: 204,
    });
  }

  return response;
}
