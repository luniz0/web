import type { Metadata } from "next"
import { Mail, MessageSquare, Building2, LifeBuoy } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { ContactForm } from "@/components/site/contact-form"

export const metadata: Metadata = {
  title: "Contact — EchoProtect",
  description: "Get in touch with the EchoProtect team for sales, support, licensing, and enterprise inquiries.",
}

const channels = [
  { icon: Mail, title: "Sales", detail: "sales@veilcode.dev", note: "Plans, quotes, and demos" },
  { icon: LifeBuoy, title: "Support", detail: "support@veilcode.dev", note: "Technical help for customers" },
  { icon: Building2, title: "Enterprise", detail: "enterprise@veilcode.dev", note: "On-prem & volume licensing" },
  { icon: MessageSquare, title: "Community", detail: "discord.gg/veilcode", note: "Chat with other developers" },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the EchoProtect team"
        description="Questions about protection, licensing, or enterprise deployment? Send us a message and we'll respond within one business day."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {channels.map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <c.icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-0.5 text-sm font-medium text-primary">{c.detail}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
