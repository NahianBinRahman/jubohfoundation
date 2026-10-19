"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  openValues: string[]
  toggleValue: (value: string) => void
  type: "single" | "multiple"
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)

function useAccordion() {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion")
  }
  return context
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
}

export function Accordion({
  type = "single",
  defaultValue,
  value,
  onValueChange,
  children,
  className,
  ...props
}: AccordionProps) {
  const [internalOpen, setInternalOpen] = React.useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
    }
    return []
  })

  const currentValues = value !== undefined
    ? (Array.isArray(value) ? value : [value])
    : internalOpen

  const toggleValue = React.useCallback(
    (itemValue: string) => {
      let nextValues: string[]
      if (type === "single") {
        nextValues = currentValues.includes(itemValue) ? [] : [itemValue]
      } else {
        nextValues = currentValues.includes(itemValue)
          ? currentValues.filter((v) => v !== itemValue)
          : [...currentValues, itemValue]
      }

      if (value === undefined) {
        setInternalOpen(nextValues)
      }
      if (onValueChange) {
        onValueChange(type === "single" ? (nextValues[0] || "") : nextValues)
      }
    },
    [currentValues, onValueChange, type, value]
  )

  return (
    <AccordionContext.Provider
      value={{
        openValues: currentValues,
        toggleValue,
        type,
      }}
    >
      <div className={cn("space-y-4", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItemContext = React.createContext<{ value: string; isOpen: boolean }>({
  value: "",
  isOpen: false,
})

export function AccordionItem({ value, children, className, ...props }: AccordionItemProps) {
  const { openValues } = useAccordion()
  const isOpen = openValues.includes(value)

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div
        className={cn(
          "rounded-lg border border-[#E8E5DD] bg-white transition-all duration-200 overflow-hidden",
          isOpen && "border-[#F6B83E] shadow-sm",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function AccordionTrigger({
  children,
  className,
  ...props
}: AccordionTriggerProps) {
  const { toggleValue } = useAccordion()
  const { value, isOpen } = React.useContext(AccordionItemContext)

  return (
    <button
      type="button"
      onClick={() => toggleValue(value)}
      aria-expanded={isOpen}
      className={cn(
        "flex w-full items-center justify-between p-5 sm:p-6 text-left font-serif text-lg sm:text-xl font-bold text-[#222222] transition-colors hover:text-[#F6B83E] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F6B83E]",
        isOpen && "text-[#222222]",
        className
      )}
      {...props}
    >
      <span className="pr-4">{children}</span>
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F6F1] text-[#222222] transition-transform duration-300",
          isOpen && "rotate-180 bg-[#F6B83E] text-[#222222]"
        )}
      >
        <ChevronDown className="h-4 w-4" />
      </div>
    </button>
  )
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AccordionContent({
  children,
  className,
  ...props
}: AccordionContentProps) {
  const { isOpen } = React.useContext(AccordionItemContext)

  if (!isOpen) return null

  return (
    <div
      className={cn(
        "px-5 pb-6 sm:px-6 sm:pb-7 text-sm md:text-base text-[#777777] leading-relaxed border-t border-[#F8F6F1] pt-4 animate-in fade-in-50 duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
