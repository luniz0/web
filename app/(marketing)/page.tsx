import Link from "next/link"
import { ArrowRight, Lock, Gauge, GitBranch, Layers } from "lucide-react"
import { Hero } from "@/components/site/hero"
import { TechniqueGrid } from "@/components/site/technique-grid"
import { PricingCards } from "@/components/site/pricing-cards"
import { FaqSection } from "@/components/site/faq-section"
import { BeforeAfterSlider } from "@/components/site/before-after-slider"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "12,000+", label: "Developers protected" },
  { value: "40M+", label: "Binaries shipped" },
  { value: "99.99%", label: "Activation uptime" },
  { value: "< 1%", label: "Runtime overhead" },
]

const steps = [
  {
    icon: GitBranch,
    title: "Build your binary",
    description: "Compile your C/C++ project as usual with MSVC, Clang, GCC, or MinGW. No special build flags needed.",
  },
  {
    icon: Layers,
    title: "Configure protection",
    description:
      "Pick which functions to virtualize and which defenses to enable through the GUI, CLI, or a committed project file.",
  },
  {
    icon: Lock,
    title: "Protect & ship",
    description:
      "EchoProtect rewrites your binary in seconds, embeds licensing, and outputs a hardened executable ready to distribute.",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Before/After Slider */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="text-sm font-semibold text-primary">See the difference</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your code, protected
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Slide to see how EchoProtect transforms readable code into near-impossible-to-reverse bytecode.
          </p>
        </div>
        <BeforeAfterSlider />
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{s.value}</span>
              <span className="mt-1 text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Techniques */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary">Protection techniques</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Layered defenses that work together
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Stack multiple protection methods so that breaking one layer still leaves an attacker facing several more.
          </p>
        </div>
        <div className="mt-12">
          <TechniqueGrid />
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold text-primary">How it works</span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              From compiled binary to protected in three steps
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border border-border bg-card p-6">
                <span className="absolute right-6 top-6 font-mono text-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <step.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance callout */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Gauge className="size-5" />
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Maximum protection, minimal overhead
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              You decide exactly what gets virtualized. Harden license checks, cryptography, and proprietary algorithms
              while leaving performance-critical paths running at native speed. Granular controls keep your app fast and
              secure at the same time.
            </p>
            <Button className="mt-6" variant="outline" asChild>
              <Link href="/features">
                Explore all features
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "Selective virtualization", v: "Mark only what matters" },
              { k: "Incremental protection", v: "Re-protect changed code only" },
              { k: "Build cache", v: "Fast CI/CD pipeline runs" },
              { k: "Cross-platform", v: "One config, three OSes" },
            ].map((item) => (
              <div key={item.k} className="rounded-xl border border-border bg-card p-5">
                <p className="text-sm font-semibold text-foreground">{item.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold text-primary">Pricing</span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple plans that scale with you
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Start free, upgrade when you ship commercially. No per-seat tricks.
            </p>
          </div>
          <div className="mt-12">
            <PricingCards />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="text-center">
          <span className="text-sm font-semibold text-primary">FAQ</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-10">
          <FaqSection />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ship binaries attackers can&apos;t crack
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Download EchoProtect and protect your first application in minutes.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/downloads">Download now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link href="/contact">Talk to sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
