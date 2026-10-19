"use client"

import React from "react"
import { motion, type HTMLMotionProps, type Variants } from "motion/react"

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  delay?: number
  duration?: number
  once?: boolean
  className?: string
  scale?: number
  whileTapScale?: number
}

export function ScrollReveal({
  children,
  direction = "up",
  distance = 28,
  delay = 0,
  duration = 0.6,
  once = true,
  className,
  scale = 1,
  whileTapScale,
  ...props
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 }
      case "down":
        return { y: -distance, x: 0 }
      case "left":
        return { x: distance, y: 0 }
      case "right":
        return { x: -distance, y: 0 }
      default:
        return { x: 0, y: 0 }
    }
  }

  const initialPos = getInitialPosition()

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialPos.x,
        y: initialPos.y,
        scale: scale !== 1 ? scale : 0.98,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      whileTap={whileTapScale ? { scale: whileTapScale } : undefined}
      viewport={{ once, margin: "0px 0px -40px 0px", amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Ultra-smooth responsive cubic bezier
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface ScrollStaggerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  staggerDelay?: number
  delayChildren?: number
  once?: boolean
  className?: string
}

export function ScrollStagger({
  children,
  staggerDelay = 0.09,
  delayChildren = 0.04,
  once = true,
  className,
  ...props
}: ScrollStaggerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -40px 0px", amount: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface ScrollItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  className?: string
  scale?: number
}

export function ScrollItem({
  children,
  direction = "up",
  distance = 24,
  duration = 0.55,
  className,
  scale = 0.98,
  ...props
}: ScrollItemProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 }
      case "down":
        return { y: -distance, x: 0 }
      case "left":
        return { x: distance, y: 0 }
      case "right":
        return { x: -distance, y: 0 }
      default:
        return { x: 0, y: 0 }
    }
  }

  const initialPos = getInitialPosition()

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: initialPos.x,
      y: initialPos.y,
      scale,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  )
}
