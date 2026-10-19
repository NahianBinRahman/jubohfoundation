import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: "gold" | "charcoal" | "white" | "outlineGold"
  size?: "sm" | "default" | "lg"
  withArrow?: boolean
  children: React.ReactNode
  className?: string
}

export function PrimaryButton({
  href,
  variant = "gold",
  size = "default",
  withArrow = false,
  children,
  className,
  ...props
}: PrimaryButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-semibold tracking-wider uppercase transition-all duration-200 select-none cursor-pointer rounded-sm active:scale-[0.96] active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6B83E]"

  const variantStyles = {
    gold: "bg-[#F6B83E] text-[#222222] hover:bg-[#e0a32e] shadow-sm",
    charcoal: "bg-[#222222] text-white hover:bg-[#333333] shadow-sm",
    white: "bg-white text-[#222222] hover:bg-neutral-100 shadow-sm",
    outlineGold:
      "border-2 border-[#F6B83E] text-[#222222] hover:bg-[#F6B83E] hover:text-[#222222]",
  }[variant]

  const sizeStyles = {
    sm: "text-xs py-2 px-4 gap-1.5",
    default: "text-xs py-3 px-6 gap-2",
    lg: "text-sm py-4 px-8 gap-2.5",
  }[size]

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, variantStyles, sizeStyles, className)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      className={cn(baseStyles, variantStyles, sizeStyles, className)}
      {...props}
    >
      {content}
    </button>
  )
}
