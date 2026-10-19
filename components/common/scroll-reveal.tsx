"use client"

import React from "react"
import { motion, type HTMLMotionProps, type Variants } from "motion/react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  delay?: number
  duration?: number
  once?: boolean
  className?: string
  scale?: number
}

export function ScrollReveal({
  children,
  direction = "up",
  distance = 32,
  delay = 0,
  duration = 0.65,
  once = true,
  className,
  scale = 1,
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
        scale: scale !== 1 ? scale : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth custom cubic bezier
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
  staggerDelay = 0.12,
  delayChildren = 0.05,
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
      viewport={{ once, margin: "-60px" }}
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
}

export function ScrollItem({
  children,
  direction = "up",
  distance = 28,
  duration = 0.6,
  className,
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
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  )
}
