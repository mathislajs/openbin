import { Logo } from "@/components/logo";
import { Footer } from "@/components/footer";
import { SupabaseLogo } from "@/components/svg/supabase-logo";
import { Button } from "@/components/ui/button";
import { Balancer } from "react-wrap-balancer";
import { Terminal } from "@/components/terminal";
import Link from "next/link";
import bg from "@/assets/bg.svg";
import grid from "@/assets/grid.svg";
import Image from "next/image";
import { Avatar } from "@/components/avatar";
import { getSession, getProfile } from "@/utils/supabase";
import { Profile } from "types/types";

export default async function Home() {
  const session = await getSession();

  let profile: Profile | null = null;

  if (session && session.user) {
    profile = await getProfile(session.user.id);
  }

  return (
    <div className="relative w-screen md:h-screen md:overflow-y-hidden md:overscroll-y-none">
      {session && profile && (
        <div className="absolute right-0 top-0 z-20 flex w-full items-center justify-end pr-6 pt-6">
          <Avatar size="md" profile={profile} dropdown />
        </div>
      )}
      <main className="grid h-full w-full px-5 sm:mx-auto sm:max-w-2xl md:max-w-4xl md:grid-cols-2 md:gap-6 lg:max-w-5xl xl:max-w-6xl ">
        <div className="absolute left-0 top-0 z-0 flex h-full w-full items-center justify-center">
          <Image
            src={bg}
            className="h-full w-full object-cover object-center"
            priority
            alt="background"
          />
        </div>
        <div className="absolute left-0 top-0 z-0 flex h-full w-full items-center justify-center">
          <Image
            src={grid}
            className="h-full w-full object-cover object-center"
            priority
            alt="background"
          />
        </div>

        <section className="z-10 flex items-center pb-12 pt-36 md:py-56">
          <div>
            <Logo />

            <div className="my-4 flex items-center space-x-2">
              <SupabaseLogo className="h-4" />
              <span className="text-sm font-medium text-neutral-600">
                Supabase LW8 Hackathon Winner
              </span>
            </div>
            <h1 className="mt-1 text-3xl font-bold lg:text-4xl">
              <Balancer>
                Code and notes sharing built for command line warriors.
              </Balancer>
            </h1>
            <p className="mt-4 text-[1.1rem] text-neutral-700">
              Openbin brings the ease of use of Pastebin and Gists to your
              terminal, allowing you to draft, publish and share text files in
              seconds.
            </p>
            <div className="mt-4 w-full items-center gap-3 md:flex md:flex-row">
              <Link href="/editor">
                <Button className="w-full bg-blue-500 transition-all hover:bg-blue-600 md:w-auto">
                  Open web editor
                </Button>
              </Link>
              <Link
                href="https://github.com/ethndotsh/openbin#documentation"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  className="mt-2 flex w-full items-center border bg-white transition-all md:mt-0 md:w-auto md:border-none md:bg-transparent"
                >
                  <svg
                    role="img"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  Documentation
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <aside className="z-10 mb-12 flex items-center md:mb-0">
          <div className="w-full rounded-md border shadow-lg">
            <Terminal />
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}
