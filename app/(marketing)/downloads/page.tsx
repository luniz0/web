import type { Metadata } from "next"
import { Download, Apple, Monitor, Terminal, Package } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { releases } from "@/lib/site-data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Downloads — EchoProtect",
  description: "Download the latest EchoProtect protector for Windows, Linux, and macOS, plus the SDK and CLI.",
}

const platforms = [
  { icon: Monitor, name: "Windows x64", file: "veilcode-4.2.0-win-x64.exe", size: "86 MB" },
  { icon: Terminal, name: "Linux x64", file: "veilcode-4.2.0-linux-x64.tar.gz", size: "74 MB" },
  { icon: Apple, name: "macOS (Apple Silicon)", file: "veilcode-4.1.4-macos-arm64.dmg", size: "69 MB" },
]

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Get EchoProtect for your platform"
        description="The latest stable build of the EchoProtect protector, SDK, and command-line tools. Sign in to your dashboard to access licensed enterprise builds."
      />

      {/* Primary platform downloads */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {platforms.map((p) => (
            <div key={p.name} className="flex flex-col rounded-xl border border-border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <p.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{p.name}</h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{p.file}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.size}</p>
              <Button className="mt-5">
                <Download className="size-4" />
                Download
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-secondary/50 p-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Package className="size-5" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-foreground">EchoProtect SDK & CLI</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Headers, libraries, and the command-line tool for build pipeline integration.
              </p>
            </div>
          </div>
          <Button variant="outline">
            <Download className="size-4" />
            Download SDK
          </Button>
        </div>
      </section>

      {/* Release history */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Release history</h2>
          <p className="mt-2 text-muted-foreground">Stable and beta channel builds across all platforms.</p>

          <div className="mt-10 space-y-4">
            {releases.map((r) => (
              <div
                key={`${r.version}-${r.platform}`}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="lg:w-64">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-lg font-semibold text-foreground">v{r.version}</span>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-xs font-medium",
                        r.channel === "Stable"
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground",
                      )}
                    >
                      {r.channel}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {r.platform} · {r.size} · {r.date}
                  </p>
                </div>
                <ul className="flex-1 list-inside list-disc text-sm text-muted-foreground lg:px-6">
                  {r.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
                <Button variant="outline" size="sm">
                  <Download className="size-4" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
