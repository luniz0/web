"use client"

import { useState, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

const unprotectedCode = `class UserCredentialService
{
    [MethodImpl(MethodImplOptions.NoInlining)]
    private static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
    }
}`

const protectedCode = `internal class uCS=
{
    [MethodImpl(MethodImplOptions.NoInlining)]
    private static void sSf=(str        string[] args)
    {
        )-#$$%^/.+_!^*&-*("wQ0AAE        lo World!");
    }
}`

export function BeforeAfterSlider({ className }: { className?: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = useCallback(() => {
    isDragging.current = true
  }, [])

  const handleMouseUp = useCallback(() => {
    isDragging.current = false
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return
      handleMove(e.clientX)
    },
    [handleMove]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX)
    },
    [handleMove]
  )

  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/9] rounded-xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-border/50"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Protected (right side - base layer) */}
        <div className="absolute inset-0 bg-[#1e1e3f]">
          <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
            Protected
          </div>
          <pre className="p-6 pt-12 text-sm font-mono text-slate-300 leading-relaxed overflow-hidden h-full">
            <code>{protectedCode}</code>
          </pre>
        </div>

        {/* Unprotected (left side - overlay) */}
        <div
          className="absolute inset-0 bg-[#1e1e3f] overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/90 text-white text-xs font-medium rounded-full">
            Unprotected
          </div>
          <pre className="p-6 pt-12 text-sm font-mono text-slate-300 leading-relaxed overflow-hidden h-full">
            <code>{unprotectedCode}</code>
          </pre>
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white/80 shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Slider handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize border-2 border-primary/30"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        Drag the slider to compare unprotected vs protected code
      </p>
    </div>
  )
}
