import SignInGoogleButton from '@/components/auth/signin-google-button';
import { Icon } from '@/components/icons/Icon';

export default function Login() {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="text-base text-black/60">Sign in to our app</div>
      <SignInGoogleButton>
        <Icon.Google />
        Sign In with Google
      </SignInGoogleButton>
    </div>
  );
}
