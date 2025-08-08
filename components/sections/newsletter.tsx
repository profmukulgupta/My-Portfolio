"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Bell, CheckCircle2 } from "lucide-react"
import { useAudio } from "@/hooks/use-audio"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { toast } = useToast()
  const { play: playSuccess, audioSupported } = useAudio("/sounds/success.mp3")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      setEmail("")
      if (audioSupported) playSuccess()

      toast({
        title: "Successfully subscribed!",
        description: "You'll receive updates on new projects and insights.",
        variant: "default",
      })
    }, 1500)
  }

  return (
    <section id="newsletter" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        
        <p className="section-subtitle">
          Subscribe to my newsletter for updates on new projects, tech insights, and creative endeavors.
        </p>
      </motion.div>

      <div className="mt-8 max-w-md mx-auto">
        <div className="glass-card p-6 animate-glow">
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <Bell className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Mukul&apos;s Thoughts</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Get weekly inspiration, product updates, and tech insights directly in your inbox. No spam, unsubscribe
                anytime.
              </p>

              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/50"
                />
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Thank You for Subscribing!</h3>
              <p className="text-muted-foreground">
                You&apos;re now part of my community. Look forward to receiving insights and updates.
              </p>
              <Button variant="link" onClick={() => setIsSubscribed(false)} className="mt-4">
                Subscribe another email
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
