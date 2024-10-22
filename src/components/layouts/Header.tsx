import { auth } from "@/auth";
import Link from "next/link";
import GotoSignInButton from "../auth/goto-signin-button";
import SignOutButton from "../auth/signout-button";

export default async function Header() {
  const session = await auth();
  const user = session?.user?.email;

  return (
    <>
      <header className="fixed left-0 top-0 h-14 w-full border-b border-black/15">
        <div className="container mx-auto flex h-full items-center justify-between">
          <Link href="/" className="text-2xl font-semibold">
            LOGO
          </Link>
          {user ? <SignOutButton>Sign Out</SignOutButton> : <GotoSignInButton>Go to Sign In</GotoSignInButton>}
        </div>
      </header>
      <div className="h-14"></div>
    </>
  );
}
