import type { Metadata } from "next"
import { FaqSection } from "@/components/site/faq-section"

export const metadata: Metadata = {
  title: "Documentation — EchoProtect",
  description: "Getting started, CLI reference, virtualization markers, and licensing guide for EchoProtect.",
}

const sections = [
  { id: "getting-started", label: "Getting started" },
  { id: "cli", label: "CLI reference" },
  { id: "virtualization", label: "Virtualization markers" },
  { id: "licensing", label: "Licensing API" },
  { id: "faq", label: "FAQ" },
]

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-[oklch(0.16_0.02_264)] p-4 font-mono text-[13px] leading-relaxed text-[oklch(0.85_0.01_264)]">
      <code>{children}</code>
    </pre>
  )
}

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-1" aria-label="Docs sections">
            <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Documentation
            </p>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <article className="min-w-0 max-w-3xl">
          <header>
            <span className="text-sm font-semibold text-primary">Documentation</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">EchoProtect docs</h1>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              Everything you need to protect your first C++ binary and integrate licensing.
            </p>
          </header>

          <section id="getting-started" className="scroll-mt-24 pt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Getting started</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Install EchoProtect, then point it at your compiled executable or shared library. No source changes are
              required for packing, obfuscation, anti-debug, and string encryption.
            </p>
            <CodeBlock>{`# Protect a release build with sensible defaults
veilcode protect ./build/app.exe \\
  --anti-debug --anti-tamper --pack --strings \\
  --out ./dist/app.protected.exe`}</CodeBlock>
          </section>

          <section id="cli" className="scroll-mt-24 pt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">CLI reference</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The most common flags. Run <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">veilcode --help</code>{" "}
              for the full list.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <tbody>
                  {[
                    ["--virtualize <pattern>", "Virtualize functions matching a pattern"],
                    ["--pack", "Compress and encrypt the binary"],
                    ["--strings", "Encrypt embedded strings"],
                    ["--anti-debug", "Enable runtime debugger detection"],
                    ["--anti-tamper", "Enable integrity verification"],
                    ["--license <file>", "Embed a licensing configuration"],
                    ["--out <path>", "Output path for the protected binary"],
                  ].map(([flag, desc]) => (
                    <tr key={flag} className="border-b border-border last:border-0">
                      <td className="whitespace-nowrap px-4 py-3 font-mono text-[13px] text-foreground">{flag}</td>
                      <td className="px-4 py-3 text-muted-foreground">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="virtualization" className="scroll-mt-24 pt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Virtualization markers</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Wrap the most sensitive code with markers from the SDK header. Only marked regions are compiled to the
              protected virtual machine, keeping the rest of your app at native speed.
            </p>
            <CodeBlock>{`#include <veilcode.h>

bool validate_license(const char* key) {
  VEILCODE_BEGIN  // start virtualized region
  uint64_t hash = fnv1a(key);
  bool ok = (hash ^ DEVICE_SALT) == g_expected;
  VEILCODE_END    // end virtualized region
  return ok;
}`}</CodeBlock>
          </section>

          <section id="licensing" className="scroll-mt-24 pt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Licensing API</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Validate keys offline or against the activation server. Bind a license to hardware, set expirations, and
              gate features at runtime.
            </p>
            <CodeBlock>{`#include <veilcode_license.h>

vc_license_t lic;
if (vc_license_activate("XXXX-YYYY-ZZZZ", &lic) == VC_OK) {
  if (vc_license_has_feature(&lic, "pro_export")) {
    enable_pro_export();
  }
}`}</CodeBlock>
          </section>

          <section id="faq" className="scroll-mt-24 pt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">FAQ</h2>
            <div className="mt-6">
              <FaqSection />
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
