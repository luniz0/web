import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your profile, plan, and billing.</p>
      </div>

      {/* Profile */}
      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="font-semibold text-foreground">Profile</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" defaultValue="Ada Lovelace" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="ada@northwind.dev" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" defaultValue="Northwind Games" />
          </div>
        </div>
        <Button className="mt-6">Save changes</Button>
      </section>

      {/* Plan */}
      <section className="rounded-xl border border-border bg-card p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-semibold text-foreground">Plan & billing</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              You&apos;re on the <span className="font-medium text-foreground">Professional</span> plan, $249/year.
            </p>
          </div>
          <Button variant="outline">Change plan</Button>
        </div>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {[
            "Unlimited protected applications",
            "Full code virtualization",
            "Anti-debug & anti-tamper",
            "Online activation server",
          ].map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-foreground">
              <Check className="size-4 text-primary" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* API */}
      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="font-semibold text-foreground">API token</h2>
        <p className="mt-1 text-sm text-muted-foreground">Use this token for CI/CD pipeline protection.</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Input readOnly defaultValue="vc_live_8f3a2b71c290ae77c290ae77c290ae77" className="font-mono text-xs" />
          <Button variant="outline">Regenerate</Button>
        </div>
      </section>

      {/* Danger */}
      <section className="rounded-xl border border-destructive/30 bg-card p-6">
        <h2 className="font-semibold text-destructive">Danger zone</h2>
        <p className="mt-1 text-sm text-muted-foreground">Permanently delete your account and all protected builds.</p>
        <Button variant="destructive" className="mt-4">
          Delete account
        </Button>
      </section>
    </div>
  )
}
