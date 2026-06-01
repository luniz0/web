import { Download, Monitor, Terminal, Apple, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { releases } from "@/lib/site-data"

const builds = [
  { icon: Monitor, name: "Windows x64", version: "4.2.0", file: "veilcode-4.2.0-win-x64.exe" },
  { icon: Terminal, name: "Linux x64", version: "4.2.0", file: "veilcode-4.2.0-linux-x64.tar.gz" },
  { icon: Apple, name: "macOS arm64", version: "4.1.4", file: "veilcode-4.1.4-macos-arm64.dmg" },
  { icon: Package, name: "SDK & CLI", version: "4.2.0", file: "veilcode-sdk-4.2.0.zip" },
]

export default function DashboardDownloads() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Downloads</h1>
        <p className="mt-1 text-sm text-muted-foreground">Licensed builds available to your Professional plan.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {builds.map((b) => (
          <div key={b.name} className="flex items-center justify-between rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-4">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <b.icon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{b.name}</p>
                <p className="font-mono text-xs text-muted-foreground">v{b.version}</p>
              </div>
            </div>
            <Button size="sm" variant="outline">
              <Download className="size-4" />
              Get
            </Button>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground">Available versions</h2>
        <div className="mt-4 space-y-3">
          {releases.map((r) => (
            <div
              key={`${r.version}-${r.platform}`}
              className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-foreground">v{r.version}</span>
                <Badge variant={r.channel === "Stable" ? "default" : "secondary"}>{r.channel}</Badge>
                <span className="text-sm text-muted-foreground">{r.platform}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden text-xs text-muted-foreground sm:inline">{r.size}</span>
                <Button size="sm" variant="ghost">
                  <Download className="size-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
