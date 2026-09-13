import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div id="top">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
