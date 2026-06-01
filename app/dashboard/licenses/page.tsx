import { Plus, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type License = {
  key: string
  product: string
  plan: string
  status: "Active" | "Expired" | "Trial"
  seats: string
  expires: string
}

const licenses: License[] = [
  { key: "VC-PRO-9F3A-2B71", product: "Checkout Service", plan: "Professional", status: "Active", seats: "Unlimited", expires: "2027-01-14" },
  { key: "VC-PRO-77C2-90AE", product: "Render Core", plan: "Professional", status: "Active", seats: "Unlimited", expires: "2027-01-14" },
  { key: "VC-TRL-44B8-1D0C", product: "Asset Packer", plan: "Trial", status: "Trial", seats: "1", expires: "2026-06-10" },
  { key: "VC-DEV-A1E5-3F22", product: "Legacy Tool", plan: "Developer", status: "Expired", seats: "1", expires: "2025-12-01" },
]

const statusVariant: Record<License["status"], "default" | "secondary" | "destructive"> = {
  Active: "default",
  Trial: "secondary",
  Expired: "destructive",
}

export default function LicensesPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Licenses</h1>
          <p className="mt-1 text-sm text-muted-foreground">Issue, track, and revoke license keys for your applications.</p>
        </div>
        <Button>
          <Plus className="size-4" />
          Issue license
        </Button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full min-w-[680px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th className="px-5 py-3 font-medium">License key</th>
              <th className="px-5 py-3 font-medium">Product</th>
              <th className="px-5 py-3 font-medium">Plan</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Seats</th>
              <th className="px-5 py-3 font-medium">Expires</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {licenses.map((l) => (
              <tr key={l.key} className="border-b border-border last:border-0">
                <td className="px-5 py-4 font-mono text-[13px] text-foreground">{l.key}</td>
                <td className="px-5 py-4 text-foreground">{l.product}</td>
                <td className="px-5 py-4 text-muted-foreground">{l.plan}</td>
                <td className="px-5 py-4">
                  <Badge variant={statusVariant[l.status]}>{l.status}</Badge>
                </td>
                <td className="px-5 py-4 text-muted-foreground">{l.seats}</td>
                <td className="px-5 py-4 text-muted-foreground">{l.expires}</td>
                <td className="px-5 py-4 text-right">
                  <Button variant="ghost" size="icon" aria-label={`Copy ${l.key}`}>
                    <Copy className="size-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
