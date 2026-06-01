import Link from "next/link"
import { KeyRound, ShieldCheck, Activity, Cpu, ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "Active licenses", value: "3", icon: KeyRound },
  { label: "Protected builds", value: "128", icon: ShieldCheck },
  { label: "Activations this month", value: "4,217", icon: Activity },
  { label: "Functions virtualized", value: "612", icon: Cpu },
]

const activity = [
  { action: "Protected build", target: "checkout-service v2.3.1", time: "2 hours ago", channel: "CLI" },
  { action: "License activated", target: "VC-PRO-9F3A-2B71", time: "5 hours ago", channel: "Activation server" },
  { action: "Downloaded", target: "veilcode-4.2.0-win-x64.exe", time: "Yesterday", channel: "Dashboard" },
  { action: "Protected build", target: "render-core.dll", time: "2 days ago", channel: "CI pipeline" },
  { action: "License issued", target: "VC-PRO-77C2-90AE", time: "3 days ago", channel: "Dashboard" },
]

export default function DashboardOverview() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">Your protection activity at a glance.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <s.icon className="size-4 text-primary" />
            </div>
            <p className="mt-3 text-3xl font-bold tracking-tight text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Plan banner */}
      <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-primary bg-accent p-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-accent-foreground">Professional plan</p>
          <p className="mt-1 text-sm text-accent-foreground/80">
            Renews on June 14, 2026 · Unlimited protected applications
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/dashboard/settings">Manage plan</Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        {/* Activity */}
        <div className="rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border p-5">
            <h2 className="font-semibold text-foreground">Recent activity</h2>
            <Link href="/dashboard/licenses" className="text-sm text-primary hover:underline">
              View all
            </Link>
          </div>
          <ul className="divide-y divide-border">
            {activity.map((a, i) => (
              <li key={i} className="flex items-center justify-between gap-4 p-5">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{a.action}</p>
                  <p className="truncate font-mono text-xs text-muted-foreground">{a.target}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                  <p className="text-xs text-muted-foreground">{a.channel}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick actions */}
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="font-semibold text-foreground">Quick actions</h2>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/dashboard/downloads">
                  <Download className="size-4" />
                  Download latest build
                </Link>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/dashboard/licenses">
                  <KeyRound className="size-4" />
                  Issue a new license
                </Link>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/docs">
                  <ArrowRight className="size-4" />
                  Read the docs
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-[oklch(0.21_0.03_264)] p-5">
            <p className="font-mono text-xs text-[oklch(0.72_0.12_262)]">activation server</p>
            <p className="mt-2 text-2xl font-bold text-white">Operational</p>
            <p className="mt-1 text-sm text-[oklch(0.72_0.02_264)]">99.99% uptime · 12ms avg response</p>
          </div>
        </div>
      </div>
    </div>
  )
}
