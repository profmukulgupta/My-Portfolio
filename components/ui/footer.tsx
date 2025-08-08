import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react'
import VisitorCounter from "@/components/ui/visitor-counter"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-gradient">
              Mukul Gu<span className="text-primary">pta</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              A multi-talented freelance software engineer, tech instructor, AI enthusiast, and creative entrepreneur
              based in Kanpur, India.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/profmukulgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mukulgupta007/?utm_source=share&utm_campaign=share_via&utm_content=profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/MukulGu24384329"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/mukuls_tg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#beyond-code" className="text-muted-foreground hover:text-primary transition-colors">
                  Beyond Code
                </Link>
              </li>
              <li>
                <Link href="#resume" className="text-muted-foreground hover:text-primary transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="#analytics" className="text-muted-foreground hover:text-primary transition-colors">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Kanpur, Uttar Pradesh, India</li>
              <li>
                <a
                  href="mailto:mukulg283@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  mukulg283@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+916387358718" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 6387358718
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">&copy; {currentYear} Mukul Gupta. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <VisitorCounter />
            <p className="text-muted-foreground text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and code
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
