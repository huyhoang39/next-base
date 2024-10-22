export default function AuthLayout({ children }: { children: Readonly<React.ReactNode> }) {
  return (
    <div className="grid min-h-svh place-content-center">
      <div>{children}</div>
    </div>
  );
}
