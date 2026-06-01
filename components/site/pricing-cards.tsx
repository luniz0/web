import Link from "next/link"
import { Check, Shield, Monitor } from "lucide-react"
import { plans } from "@/lib/site-data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const shieldColors: Record<string, string> = {
  Lite: "text-muted-foreground",
  Professional: "text-red-500",
  Ultimate: "text-primary",
  "Updates Renewal": "text-green-500",
}

export function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "flex flex-col rounded-xl border border-border bg-card p-6",
            plan.highlighted && "border-primary ring-1 ring-primary shadow-lg",
          )}
        >
          <div className="flex items-center gap-3">
            <Shield className={cn("size-10", shieldColors[plan.name] || "text-muted-foreground")} />
            <div>
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <p className="text-xs text-muted-foreground">{plan.period}</p>
            </div>
          </div>
          <div className="mt-5 flex items-baseline gap-1">
            <span className="text-xs text-muted-foreground align-top">$</span>
            <span className="text-4xl font-bold tracking-tight text-foreground">
              {plan.price.replace("$", "").split(".")[0]}
            </span>
            <span className="text-xl text-foreground">.00</span>
          </div>
          
          {plan.name !== "Updates Renewal" ? (
            <>
              <p className="mt-4 text-sm font-medium text-foreground">
                {plan.name === "Lite" ? "Obfuscation features:" : 
                 plan.name === "Professional" ? "All the features in Lite, and more:" :
                 "All the features in Professional, and more:"}
              </p>
              <ul className="mt-2 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.name === "Lite" && (
                <>
                  <p className="mt-4 text-sm font-medium text-foreground">Additional features:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-primary">Memory protection</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-primary">Import protection</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-primary">Packing</span>
                    </li>
                  </ul>
                </>
              )}
            </>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {plan.description}
            </p>
          )}

          <div className="mt-auto pt-6">
            <Button
              className="w-full gap-2"
              variant={plan.highlighted ? "default" : "default"}
              asChild
            >
              <Link href="/login">
                {plan.cta}
                {plan.name !== "Updates Renewal" && (
                  <Monitor className="size-4" />
                )}
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
