import {
  Cpu,
  Bug,
  ShieldCheck,
  Shuffle,
  Package,
  KeyRound,
  FileCode2,
  Network,
  type LucideIcon,
} from "lucide-react"

export type Technique = {
  icon: LucideIcon
  title: string
  description: string
}

export const techniques: Technique[] = [
  {
    icon: Cpu,
    title: "Code Virtualization",
    description:
      "Convert critical functions into bytecode that runs on a randomized virtual machine. Each build ships a unique instruction set, so static analysis and decompilers come up empty.",
  },
  {
    icon: Shuffle,
    title: "Mutation & Obfuscation",
    description:
      "Polymorphic code mutation rewrites your logic with junk instructions, opaque predicates, and control-flow flattening that changes on every compile.",
  },
  {
    icon: Bug,
    title: "Anti-Debug & Anti-VM",
    description:
      "Detect and block debuggers, sandboxes, emulators, and analysis tools at runtime with layered hardware and timing checks.",
  },
  {
    icon: ShieldCheck,
    title: "Anti-Tamper Integrity",
    description:
      "Continuous checksum verification halts execution the moment a single byte of your binary is patched, hooked, or dumped from memory.",
  },
  {
    icon: Package,
    title: "Packing & Compression",
    description:
      "Compress and encrypt your executable into a self-decrypting loader that only unpacks protected sections in memory at launch.",
  },
  {
    icon: KeyRound,
    title: "Licensing & Activation",
    description:
      "Hardware-locked keys, floating licenses, trial periods, and online activation built directly into your protected binary.",
  },
  {
    icon: FileCode2,
    title: "String Encryption",
    description:
      "Sensitive strings, API endpoints, and constants are encrypted at rest and decrypted on demand to keep secrets out of memory dumps.",
  },
  {
    icon: Network,
    title: "Import Protection",
    description:
      "Hide and resolve API imports dynamically to defeat import-table reconstruction and dependency mapping during analysis.",
  },
]

export type Plan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export const plans: Plan[] = [
  {
    name: "Lite",
    price: "$399.00",
    period: "+1 year of free updates",
    description: "Obfuscation features for solo developers and small projects.",
    features: [
      "Code virtualization",
      "Code mutation",
      "Memory protection",
      "Import protection",
      "Packing",
    ],
    cta: "Purchase",
  },
  {
    name: "Professional",
    price: "$599.00",
    period: "+1 year of free updates",
    description: "All the features in Lite, and more advanced tools.",
    features: [
      "All features in Lite",
      "Advanced interface",
      "Scripts",
      "Watermarks",
      "Console version",
    ],
    cta: "Purchase",
    highlighted: true,
  },
  {
    name: "Ultimate",
    price: "$999.00",
    period: "+1 year of free updates",
    description: "All the features in Professional, and more enterprise tools.",
    features: [
      "All features in Professional",
      "Licensing system",
      "Activation system with own licensing server",
      "Virtual files (for Windows binaries only)",
    ],
    cta: "Purchase",
  },
  {
    name: "Updates Renewal",
    price: "$199.00",
    period: "1 additional year of updates",
    description: "Renewal of updates for existing license for one year.",
    features: [
      "Extend updates for 1 year",
      "Access to all new versions",
      "Priority email support",
    ],
    cta: "Purchase",
  },
]

export type Release = {
  version: string
  date: string
  channel: "Stable" | "Beta"
  platform: string
  size: string
  notes: string[]
}

export const releases: Release[] = [
  {
    version: "4.2.0",
    date: "2026-05-18",
    channel: "Stable",
    platform: "Windows x64",
    size: "86 MB",
    notes: [
      "New adaptive VM instruction sets",
      "Faster mutation engine (up to 2x)",
      "Improved Visual Studio 2026 toolchain support",
    ],
  },
  {
    version: "4.2.0",
    date: "2026-05-18",
    channel: "Stable",
    platform: "Linux x64",
    size: "74 MB",
    notes: ["ELF protection improvements", "glibc 2.41 compatibility"],
  },
  {
    version: "4.3.0",
    date: "2026-05-29",
    channel: "Beta",
    platform: "Windows x64",
    size: "88 MB",
    notes: ["Experimental ARM64 virtualization", "Reworked anti-dump engine"],
  },
  {
    version: "4.1.4",
    date: "2026-03-02",
    channel: "Stable",
    platform: "macOS (Apple Silicon)",
    size: "69 MB",
    notes: ["Mach-O hardening", "Notarization-friendly loader"],
  },
]

export type FaqItem = {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: "What languages and compilers does EchoProtect support?",
    answer:
      "EchoProtect protects compiled native binaries (PE, ELF, and Mach-O). It works with C and C++ produced by MSVC, Clang/LLVM, GCC, and MinGW. You point it at your finished executable or DLL — no source code changes required for packing and obfuscation, and a small SDK header for virtualization markers.",
  },
  {
    question: "Does protection slow down my application?",
    answer:
      "Packing and obfuscation add negligible runtime overhead. Code virtualization is heavier, so you mark only the most sensitive routines — license checks, crypto, secret algorithms — and leave hot loops native. You stay in full control of the performance/security tradeoff.",
  },
  {
    question: "Do I need to change my source code?",
    answer:
      "For packing, anti-debug, anti-tamper, and string encryption, you don't change anything — protect the compiled binary directly. To virtualize specific functions you add lightweight ECHOPROTECT_BEGIN / ECHOPROTECT_END markers around the code you want hardened.",
  },
  {
    question: "How does licensing and activation work?",
    answer:
      "EchoProtect embeds a licensing layer into your protected binary. You can issue hardware-locked keys, time-limited trials, and floating licenses, then validate them offline or through our hosted activation server (or your own on-prem server on Ultimate).",
  },
  {
    question: "Is the protection really unbreakable?",
    answer:
      "No protection is mathematically unbreakable, and we won't pretend otherwise. EchoProtect's goal is to make reverse engineering so costly and time-consuming that it's no longer worth an attacker's effort. Layered virtualization, mutation, and anti-tamper raise that cost by orders of magnitude.",
  },
  {
    question: "Can I integrate EchoProtect into my CI/CD pipeline?",
    answer:
      "Yes. EchoProtect ships a command-line interface and project files you can commit to your repo, so protection runs automatically on every build. Professional and Ultimate plans include full CLI and pipeline integration.",
  },
]
