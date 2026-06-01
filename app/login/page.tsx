"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Logo } from "@/components/site/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [mode, setMode] = useState<"signin" | "signup">("signin")

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Form side */}
      <div className="flex flex-col px-6 py-8 sm:px-12">
        <Logo />
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              {mode === "signin" ? "Sign in to EchoProtect" : "Create your account"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {mode === "signin"
                ? "Access your licenses, downloads, and activation servers."
                : "Start protecting your C++ applications for free."}
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                router.push("/dashboard")
              }}
            >
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Ada Lovelace" required />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  {mode === "signin" && (
                    <button type="button" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </button>
                  )}
                </div>
                <Input id="password" name="password" type="password" placeholder="••••••••" required />
              </div>
              <Button type="submit" className="w-full">
                {mode === "signin" ? "Sign in" : "Create account"}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              {mode === "signin" ? (
                <>
                  Don&apos;t have an account?{" "}
                  <button className="font-medium text-primary hover:underline" onClick={() => setMode("signup")}>
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button className="font-medium text-primary hover:underline" onClick={() => setMode("signin")}>
                    Sign in
                  </button>
                </>
              )}
            </p>

            <p className="mt-8 text-center text-xs text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                ← Back to home
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Brand side */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-[oklch(0.21_0.02_160)] p-12 lg:flex">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <p className="font-mono text-sm text-[oklch(0.72_0.1_160)]">echoprotect://secure</p>
        </div>
        <div className="relative">
          <blockquote className="text-2xl font-semibold leading-snug text-white">
            "We virtualized our license layer with EchoProtect and cracked builds dropped to zero. It paid for itself in a
            week."
          </blockquote>
          <p className="mt-4 text-sm text-[oklch(0.72_0.02_160)]">
            Marina Voss · Lead Engineer, Northwind Games
          </p>
        </div>
        <div className="relative flex items-center gap-6 text-sm text-[oklch(0.72_0.02_160)]">
          <span>SOC 2 Type II</span>
          <span>·</span>
          <span>40M+ binaries protected</span>
        </div>
      </div>
        <div className="relative">
          <blockquote className="text-2xl font-semibold leading-snug text-white">
            “We virtualized our license layer with EchoProtect and cracked builds dropped to zero. It paid for itself in a
            week.”
          </blockquote>
          <p className="mt-4 text-sm text-[oklch(0.72_0.02_264)]">
            Marina Voss · Lead Engineer, Northwind Games
          </p>
        </div>
        <div className="relative flex items-center gap-6 text-sm text-[oklch(0.72_0.02_264)]">
          <span>SOC 2 Type II</span>
          <span>·</span>
          <span>40M+ binaries protected</span>
        </div>
      </div>
    </div>
  )
}
