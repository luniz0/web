import Link from "next/link"
import { Logo } from "@/components/site/logo"

const groups = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/downloads", label: "Downloads" },
      { href: "/docs", label: "Documentation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/docs", label: "Getting started" },
      { href: "/docs", label: "API reference" },
      { href: "/docs", label: "Changelog" },
      { href: "/contact", label: "Support" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/pricing", label: "Enterprise" },
      { href: "/contact", label: "Security" },
      { href: "/contact", label: "Status" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Military-grade protection and licensing for native C and C++ applications. Ship binaries that resist
              reverse engineering.
            </p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} EchoProtect. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/docs" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/docs" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/docs" className="hover:text-foreground">
              License agreement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
