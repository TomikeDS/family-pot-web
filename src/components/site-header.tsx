import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/recipients", label: "Recipients" },
  { href: "/transfers", label: "Transfers" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-background dark:border-white/15">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="rounded-md text-lg font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          Family Pot
        </Link>

        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-black/[.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:text-zinc-300 dark:hover:bg-white/[.08]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
