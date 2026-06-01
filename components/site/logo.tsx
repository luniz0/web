import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  href = "/",
}: {
  className?: string
  href?: string
}) {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-2", className)}
      aria-label="EchoProtect home"
    >
      <Image
        src="/images/logo.png"
        alt="EchoProtect"
        width={140}
        height={40}
        className="h-10 w-auto"
        priority
      />
    </Link>
  )
}
