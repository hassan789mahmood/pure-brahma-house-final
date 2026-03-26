"use client"

import { cn } from "@/lib/utils"

interface UniqueLoadingProps {
  variant?: "morph"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function UniqueLoading({
  variant = "morph",
  size = "md",
  className,
}: UniqueLoadingProps) {
  const containerSizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  }

  if (variant === "morph") {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <div className={cn("relative", containerSizes[size])}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-none opacity-60"
              style={{
                background: `hsl(var(--primary))`,
                animation: `morph-${i} ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  return null
}
