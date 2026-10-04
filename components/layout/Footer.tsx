import Link from "next/link";
import { Brand } from "./Brand";
import { navigation } from "@/lib/content";
export function Footer() {
  return (
    <footer className="bg-ink py-12 text-cream">
      <div className="container-shell">
        <div className="flex flex-wrap justify-between gap-10 pb-12">
          <Brand inverse />
          <p className="text-sm leading-relaxed text-cream/75">
            A clearer picture.
            <br />A more confident tomorrow.
          </p>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-6 text-sm"
          >
            {navigation.map((item) => (
              <Link
                className="transition-colors hover:text-mint"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-cream/20 pt-6 text-xs text-cream/70">
          <span>© 2026 Alder & Co. · Portfolio concept</span>
          <span className="hidden sm:block">
            Thoughtful accounting. Human connection.
          </span>
          <a href="#main">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
