"use client";

import Link from "next/link";
import { Button, ButtonProps } from "../ui/button";

interface GotoSignInButtonProps extends ButtonProps {}

export default function GotoSignInButton(props: GotoSignInButtonProps) {
  return (
    <Link href="/login">
      <Button {...props} />
    </Link>
  );
}
