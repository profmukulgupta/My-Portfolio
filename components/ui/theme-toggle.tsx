"use client"

import { useTheme } from "next-themes"
import { useAudio } from "@/hooks/use-audio"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { play: playClick, audioSupported } = useAudio("/sounds/click.mp3")

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    if (audioSupported) playClick()
  }

  if (!mounted) {
    return null
  }

  return null
}
