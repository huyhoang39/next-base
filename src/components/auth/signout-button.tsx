import { signOut } from "@/auth";
import { Button, ButtonProps } from "../ui/button";

interface SignOutButtonProps extends ButtonProps {}

export default function SignOutButton(props: SignOutButtonProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button {...props} type="submit" />
    </form>
  );
}
