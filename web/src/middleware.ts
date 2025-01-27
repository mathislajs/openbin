import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import { validate } from "uuid";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  let supabaseClient: any;

  if (!supabaseUrl || !supabaseKey) {
    console.warn("Supabase URL or Anon Key is missing. Supabase client will not be initialized.");
    supabaseClient = null;
  } else {
    supabaseClient = createMiddlewareClient({ req, res });
  }

  if (!supabaseClient) {
    console.error("Supabase client is not initialized. Cannot get user.");
    return;
  }

  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  if (!user && req.nextUrl.pathname.startsWith("/auth/delete")) {
    return NextResponse.redirect(new URL(`/login`, req.url));
  }

  if (validate(req.nextUrl.pathname.slice(1))) {
    return NextResponse.redirect(
      new URL(`/pastes/${req.nextUrl.pathname.slice(1)}`, req.url),
    );
  }

  return res;
}

export const config = {
  matcher: ["/:path*"],
};
