import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <ShieldCheck className="size-3.5 text-primary" />
            Trusted by 12,000+ developers and studios
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Protect your C++ binaries from reverse engineering
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            EchoProtect hardens your native applications with code virtualization, polymorphic mutation, anti-debug,
            anti-tamper, and built-in licensing — without touching your source code.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/downloads">
                Download EchoProtect
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View pricing</Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>Windows · Linux · macOS</span>
            <span className="hidden sm:inline">·</span>
            <span>MSVC · Clang · GCC · MinGW</span>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-[oklch(0.21_0.02_160)] p-1 shadow-xl">
          <div className="flex items-center gap-2 px-3 py-2">
            <span className="size-3 rounded-full bg-[oklch(0.65_0.2_25)]" />
            <span className="size-3 rounded-full bg-[oklch(0.8_0.16_85)]" />
            <span className="size-3 rounded-full bg-[oklch(0.72_0.17_145)]" />
            <span className="ml-2 font-mono text-xs text-[oklch(0.7_0.02_160)]">echoprotect protect app.exe</span>
          </div>
          <pre className="overflow-x-auto rounded-lg bg-[oklch(0.16_0.02_160)] p-4 font-mono text-[13px] leading-relaxed text-[oklch(0.85_0.01_160)]">
            <code>{`$ echoprotect protect ./build/app.exe \\
    --virtualize "license::*" \\
    --anti-debug --anti-tamper \\
    --pack --strings

[+] Analyzing PE  ........ 412 functions
[+] Virtualizing  ........ 28 marked
[+] Mutating code ........ done
[+] Encrypting strings ... 1,204
[+] Packing sections ..... 86% smaller
[✓] Protected → app.protected.exe`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
