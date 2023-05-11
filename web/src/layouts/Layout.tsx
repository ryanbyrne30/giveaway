import { ReactNode } from "react";
import { Nav } from "src/components/Nav";

export function Layout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <Nav />
      <main
        className={`col center min-h-[100dvh] w-screen sm:pt-14 ${className}`}
      >
        {children}
      </main>
    </>
  );
}
