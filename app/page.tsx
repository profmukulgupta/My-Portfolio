import { Suspense } from "react"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import BeyondCode from "@/components/sections/beyond-code"
import Contact from "@/components/sections/contact"
import Resume from "@/components/sections/resume"
import Testimonials from "@/components/sections/testimonials"
import Newsletter from "@/components/sections/newsletter"
import LoadingSpinner from "@/components/ui/loading-spinner"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      <About />
      <Projects />
      <BeyondCode />
      <Testimonials />
      <Resume />
      <Newsletter />
      <Contact />
    </main>
  )
}
