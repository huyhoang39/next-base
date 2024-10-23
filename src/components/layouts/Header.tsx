import Link from 'next/link';

import { auth } from '@/auth';

import SignOutButton from '../auth/signout-button';
import { Icon } from '../icons/Icon';
import LocaleSwitcher from '../LocaleSwitcher';
import { Button } from '../ui/button';

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
          <div className="flex gap-2">
            <LocaleSwitcher />
            {user ? (
              <SignOutButton className="link-button p-0">
                <Icon.GoOutIcon />
              </SignOutButton>
            ) : (
              <Link href="/login">
                <Button className="link-button p-0">
                  <Icon.GoInIcon />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>
      <div className="h-14"></div>
    </>
  );
}
