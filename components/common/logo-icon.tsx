import React from "react"

interface LogoIconProps {
  className?: string
  size?: number
  variant?: "gold" | "white" | "dark"
}

export function LogoIcon({
  className = "w-6 h-6",
  size,
  variant = "gold",
}: LogoIconProps) {
  // Color presets
  const primaryGold = variant === "white" ? "#FFFFFF" : variant === "dark" ? "#222222" : "#F6B83E"
  const gradientId = `juboh-gold-grad-${variant}`
  const centerGlowId = `juboh-center-glow-${variant}`
  const handId = `hand-unity-${variant}`

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {variant === "gold" ? (
          <>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFDE82" />
              <stop offset="50%" stopColor="#F6B83E" />
              <stop offset="100%" stopColor="#D48B14" />
            </linearGradient>
            <radialGradient id={centerGlowId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF2B8" />
              <stop offset="60%" stopColor="#F6B83E" />
              <stop offset="100%" stopColor="#D48B14" />
            </radialGradient>
          </>
        ) : (
          <>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryGold} />
              <stop offset="100%" stopColor={primaryGold} />
            </linearGradient>
            <radialGradient id={centerGlowId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={primaryGold} />
              <stop offset="100%" stopColor={primaryGold} />
            </radialGradient>
          </>
        )}

        {/* The caring open hand with wrist, palm, thumb, and graceful contoured fingers */}
        <g id={handId}>
          {/* Wrist band segment */}
          <path
            d="M 88 18 C 94 16, 106 16, 112 18 C 113 22, 112 26, 111 30 C 105 28, 95 28, 89 30 C 88 26, 87 22, 88 18 Z"
            fill={`url(#${gradientId})`}
          />
          {/* Palm and Thumb */}
          <path
            d="M 89 32 C 95 30, 105 30, 111 32 C 110 40, 107 48, 104 55 C 109 52, 116 48, 122 44 C 124 43, 126 45, 124 48 C 119 55, 112 62, 105 67 C 104 70, 103 74, 102 78 C 100 85, 96 90, 94 92 C 93 93, 91 92, 92 89 C 94 84, 96 78, 97 72 C 94 77, 91 83, 87 88 C 86 89, 84 88, 85 86 C 88 80, 91 74, 93 68 C 90 73, 86 78, 82 82 C 81 83, 79 82, 80 80 C 83 75, 87 69, 89 63 C 86 67, 82 71, 78 74 C 77 75, 75 74, 76 72 C 79 66, 84 60, 87 53 C 90 46, 89 39, 89 32 Z"
            fill={`url(#${gradientId})`}
          />
        </g>
      </defs>

      {/* Outer decorative ring of solidarity */}
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke={primaryGold}
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.4"
      />
      <circle
        cx="100"
        cy="100"
        r="86"
        stroke={primaryGold}
        strokeWidth="1.2"
        opacity="0.25"
      />

      {/* 6 Hands reaching together in unity (Ubuntu Circle) */}
      <use href={`#${handId}`} transform="rotate(0 100 100)" />
      <use href={`#${handId}`} transform="rotate(60 100 100)" />
      <use href={`#${handId}`} transform="rotate(120 100 100)" />
      <use href={`#${handId}`} transform="rotate(180 100 100)" />
      <use href={`#${handId}`} transform="rotate(240 100 100)" />
      <use href={`#${handId}`} transform="rotate(300 100 100)" />

      {/* Center glowing star / core spark */}
      <circle cx="100" cy="100" r="7.5" fill={`url(#${centerGlowId})`} />
      <circle
        cx="100"
        cy="100"
        r="14"
        stroke={primaryGold}
        strokeWidth="1.5"
        strokeDasharray="2 2"
        opacity="0.6"
      />
    </svg>
  )
}
