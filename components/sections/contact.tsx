"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Send, Mail, MapPin, Linkedin, Github, Twitter, Instagram, Calendar, Phone } from 'lucide-react'
import { useAudio } from "@/hooks/use-audio"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { play: playSuccess, audioSupported } = useAudio("/sounds/success.mp3")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (!response.ok) {
        throw new Error(result?.error || "Failed to send message")
      }

      setFormData({ name: "", email: "", subject: "", message: "" })
      if (audioSupported) playSuccess()
      toast({
        title: "Message sent successfully! 📧",
        description:
          "Your message has been sent to Mukul's inbox. You'll receive a response within 24-48 hours.",
      })
    } catch (error: any) {
      console.error("Contact form error:", error)
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at mukulg283@gmail.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 w-full">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 glass-card p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or inquiry..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email Me</h3>
                <a
                  href="mailto:mukulg283@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  mukulg283@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-cyan-500/20">
                <Phone className="h-6 w-6 text-cyan-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Call Me</h3>
                <a
                  href="tel:+916387358718"
                  className="text-muted-foreground hover:text-cyan-500 transition-colors"
                >
                  +91 6387358718
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-green-500/20">
                <MapPin className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Location</h3>
                <p className="text-muted-foreground">Kanpur, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-500/20">
                <Calendar className="h-6 w-6 text-purple-500" />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold mb-1">Schedule a Meeting</h3>
                <p className="text-muted-foreground mb-4">Book a time slot that works for you.</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Open Calendar
                </Button>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/mukulgupta007/?utm_source=share&utm_campaign=share_via&utm_content=profile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/50 hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/profmukulgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/50 hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/MukulGu24384329"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/50 hover:bg-primary/20 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/mukuls_tg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/50 hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
