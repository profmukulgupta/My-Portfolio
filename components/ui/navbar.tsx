"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import VisitorCounter from "@/components/ui/visitor-counter"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useAudio } from "@/hooks/use-audio"

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Beyond Code", href: "#beyond-code" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { play: playClick, audioSupported } = useAudio("/sounds/click.mp3")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (audioSupported) playClick()
  }

  const closeMenu = () => {
    setIsOpen(false)
    if (audioSupported) playClick()
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">
          Mukul Gupta
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={playClick}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Visitor Counter - Desktop */}
        <div className="hidden md:block">
          <VisitorCounter />
        </div>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center lg:hidden gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="Toggle Menu" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`px-4 py-3 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary ${
                      pathname === item.href ? "bg-primary/10 text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Visitor Counter */}
              <div className="mt-4 px-4 py-2 border-t border-border">
                <VisitorCounter />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
