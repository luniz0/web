import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { PricingCards } from "@/components/site/pricing-cards"
import { FaqSection } from "@/components/site/faq-section"

export const metadata: Metadata = {
  title: "Pricing — EchoProtect",
  description: "Free for solo developers. Professional and Enterprise plans for commercial software protection.",
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pricing that scales with your software"
        description="Start free while you evaluate. Move to Professional when you ship commercially, or talk to us for Enterprise needs."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <PricingCards />
        <p className="mt-8 text-center text-sm text-muted-foreground">
          All paid plans include a 30-day money-back guarantee. Prices in USD, billed annually.
        </p>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">Pricing questions</h2>
          <div className="mt-10">
            <FaqSection />
          </div>
        </div>
      </section>
    </>
  )
}
