import { Navbar } from "@/components/navbar";
import {
  createServerComponentClient,
  getProfile,
  getSession,
} from "@/utils/supabase";
import { ReactNode } from "react";

export default async function AuthDeleteLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getSession();
  const profile = await getProfile();
  return (
    <>
      <Navbar session={session} profile={profile} />
      <div className="border-b" />
      {children}
    </>
  );
}
