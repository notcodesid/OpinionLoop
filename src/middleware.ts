import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // CORS handling
  const allowedOrigins = [
    'https://ama-rb203yv1p-notcod.jacts.vercel.app',
    'https://ama-beige.vercel.app',
  ];
  const origin = request.headers.get("origin") || "";
  const response = NextResponse.next();

  if (allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      status: 204,
    });
  }

  // Authentication handling
  const authHeader = request.headers.get('authorization')
  if (authHeader && authHeader.startsWith('Basic ')) {
    const base64Credentials = authHeader.split(' ')[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
    const [username, password] = credentials.split(':')

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      return response;
    }
  }

  // If authentication fails
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
      ...response.headers // Preserve CORS headers
    }
  });
}

export const config = {
  matcher: ['/answer/:path*', '/api/:path*']
}