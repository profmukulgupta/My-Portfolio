"use client"

import { useRef, useCallback, useState, useEffect } from "react"

export function useAudio(url: string) {
  const audio = useRef<HTMLAudioElement | null>(null)
  const [audioSupported, setAudioSupported] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  // Initialize audio on client side only with lazy loading
  useEffect(() => {
    // Delay audio loading to not block critical rendering
    const timer = setTimeout(() => {
      try {
        audio.current = new Audio()

        // Set up audio with performance optimizations
        audio.current.preload = "none" // Don't preload to save bandwidth
        audio.current.volume = 0.5 // Set reasonable default volume

        // Add error handler
        audio.current.addEventListener("error", (e) => {
          console.warn(`Audio file ${url} failed to load:`, e)
          setAudioSupported(false)
        })

        // Add load handler
        audio.current.addEventListener("canplaythrough", () => {
          setIsLoaded(true)
        })

        // Set source after setup
        audio.current.src = url
      } catch (error) {
        console.warn("Audio initialization failed:", error)
        setAudioSupported(false)
      }
    }, 1000) // Delay audio loading by 1 second

    // Cleanup
    return () => {
      clearTimeout(timer)
      if (audio.current) {
        audio.current.pause()
        audio.current.src = ""
      }
    }
  }, [url])

  const play = useCallback(() => {
    if (!audioSupported || !audio.current || !isLoaded) return

    try {
      // Reset the audio to the beginning if it's already playing
      audio.current.currentTime = 0

      // Play the audio with proper error handling
      const playPromise = audio.current.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Audio playback failed:", error)
          setAudioSupported(false)
        })
      }
    } catch (error) {
      console.warn("Audio play failed:", error)
      setAudioSupported(false)
    }
  }, [audioSupported, isLoaded])

  return { play, audioSupported: audioSupported && isLoaded }
}
