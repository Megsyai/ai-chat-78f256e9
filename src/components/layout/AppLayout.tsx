import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: ReactNode;
  bottomNav?: ReactNode;
  header?: ReactNode;
  className?: string;
}

/**
 * Layout Base for apps: header Optional + Content + Bottom bar for mobile.
 * uses 100dvh to avoid browser bar issues iOS.
 */
export function AppLayout({ children, bottomNav, header, className }: AppLayoutProps) {
  return (
    <div
      className={cn(
        "flex min-h-[100dvh] flex-col bg-background text-foreground",
        className,
      )}
    >
      {header}
      <main
        className={cn(
          "flex-1",
          bottomNav && "pb-[calc(56px+env(safe-area-inset-bottom))] md:pb-0",
        )}
      >
        {children}
      </main>
      {bottomNav}
    </div>
  );
}
