import { signIn } from '@/auth';

import { Button, ButtonProps } from '../ui/button';

interface SignInButtonProps extends ButtonProps {}

export default function SignInButton(props: SignInButtonProps) {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google', { redirectTo: '/' });
      }}
    >
      <Button {...props} type="submit" />
    </form>
  );
}
