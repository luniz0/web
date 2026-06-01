import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { TechniqueGrid } from "@/components/site/technique-grid"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Features — EchoProtect",
  description:
    "Code virtualization, mutation, anti-debug, anti-tamper, packing, string encryption, import protection, and licensing for C and C++ applications.",
}

const comparison = [
  { capability: "Code packing & compression", dev: true, pro: true, ent: true },
  { capability: "String & resource encryption", dev: true, pro: true, ent: true },
  { capability: "Polymorphic mutation", dev: false, pro: true, ent: true },
  { capability: "Code virtualization (VM)", dev: false, pro: true, ent: true },
  { capability: "Anti-debug / anti-VM", dev: false, pro: true, ent: true },
  { capability: "Anti-tamper integrity", dev: false, pro: true, ent: true },
  { capability: "Hardware-locked licensing", dev: false, pro: true, ent: true },
  { capability: "On-prem activation server", dev: false, pro: false, ent: true },
  { capability: "Custom VM architectures", dev: false, pro: false, ent: true },
  { capability: "CI/CD pipeline integration", dev: false, pro: true, ent: true },
]

function Cell({ on }: { on: boolean }) {
  return on ? (
    <Check className="mx-auto size-4 text-primary" aria-label="Included" />
  ) : (
    <span className="mx-auto block h-px w-3 bg-border" aria-label="Not included" />
  )
}

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Every layer of defense in one tool"
        description="EchoProtect combines packing, obfuscation, virtualization, and runtime protection with a complete licensing system — all driven from a single project configuration."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <TechniqueGrid />
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground">
            Capabilities by plan
          </h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-4 text-left font-semibold text-foreground">Capability</th>
                  <th className="px-5 py-4 text-center font-semibold text-foreground">Developer</th>
                  <th className="px-5 py-4 text-center font-semibold text-foreground">Professional</th>
                  <th className="px-5 py-4 text-center font-semibold text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.capability} className="border-b border-border last:border-0">
                    <td className="px-5 py-4 text-foreground">{row.capability}</td>
                    <td className="px-5 py-4 text-center">
                      <Cell on={row.dev} />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Cell on={row.pro} />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Cell on={row.ent} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/pricing">
                Compare pricing
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
