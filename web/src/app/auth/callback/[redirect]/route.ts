import { BASE_URL } from "@/utils/config";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { redirect: string } },
) {
  const supabase = createRouteHandlerClient({ cookies });
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const redirect = params.redirect;

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  if (redirect) {
    return NextResponse.redirect(
      new URL(decodeURIComponent(redirect), BASE_URL),
    );
  }

  return NextResponse.redirect(new URL(`/`, BASE_URL));
}
