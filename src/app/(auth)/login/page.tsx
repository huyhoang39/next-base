import SignInButton from "@/components/auth/signin-button";

export default function Login() {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="text-base text-black/60">Sign in to our app</div>
      <SignInButton>Sign In with Google</SignInButton>
    </div>
  );
}
