"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Círculo animado superior */}
      <div
        className={cn(
          "absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-primary/20 to-purple-500/10 blur-3xl",
          "animate-slow-spin transition-transform duration-1000",
        )}
        style={{
          transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.01}px) rotate(${scrollY * 0.02}deg)`,
        }}
      />

      {/* Círculo animado inferior */}
      <div
        className={cn(
          "absolute -bottom-[40%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-blue-500/10 to-primary/20 blur-3xl",
          "animate-slow-spin-reverse transition-transform duration-1000",
        )}
        style={{
          transform: `translate(${scrollY * -0.01}px, ${scrollY * -0.02}px) rotate(${scrollY * -0.01}deg)`,
        }}
      />

      {/* Forma orgánica central */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vh] opacity-30 blur-3xl",
          "bg-gradient-to-r from-primary/10 via-transparent to-purple-500/10",
          "animate-pulse-slow transition-all duration-1000",
        )}
        style={{
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          transform: `translate(-50%, -50%) rotate(${scrollY * 0.01}deg) scale(${1 + scrollY * 0.0005})`,
        }}
      />
    </div>
  )
}
