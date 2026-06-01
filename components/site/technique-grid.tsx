import { techniques } from "@/lib/site-data"

export function TechniqueGrid({ limit }: { limit?: number }) {
  const items = limit ? techniques.slice(0, limit) : techniques

  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {items.map((t) => (
        <div key={t.title} className="flex flex-col gap-3 bg-card p-6">
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <t.icon className="size-5" />
          </span>
          <h3 className="text-base font-semibold text-foreground">{t.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{t.description}</p>
        </div>
      ))}
    </div>
  )
}
