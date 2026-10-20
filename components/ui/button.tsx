import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#C5A059] text-[#111827] font-semibold hover:bg-[#B38E46] shadow-xs active:scale-[0.99]",
        charcoal:
          "bg-[#111827] text-white font-medium hover:bg-[#333333] shadow-xs active:scale-[0.99]",
        secondary:
          "bg-[#F8F6F1] text-[#111827] hover:bg-[#eeebe3] border border-[#E8E5DD] font-medium",
        outline:
          "border border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white font-medium",
        outlineGold:
          "border-2 border-[#C5A059] text-[#111827] hover:bg-[#C5A059] hover:text-[#111827] font-semibold",
        outlineWhite:
          "border border-white text-white hover:bg-white hover:text-[#111827] font-medium",
        ghost:
          "text-[#111827] hover:bg-black/5 hover:text-[#111827]",
        link:
          "text-[#111827] underline-offset-4 hover:underline hover:text-[#C5A059] p-0 h-auto font-medium",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-xs",
      },
      size: {
        default: "h-11 px-6 rounded-md",
        sm: "h-9 px-4 text-xs rounded-md",
        lg: "h-13 px-8 text-base rounded-md",
        pill: "h-11 px-7 rounded-full",
        pillSm: "h-9 px-5 text-xs rounded-full",
        icon: "h-10 w-10 rounded-md",
        "icon-sm": "h-7 w-7 rounded-md",
        "icon-xs": "h-6 w-6 rounded-md",
        iconPill: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
