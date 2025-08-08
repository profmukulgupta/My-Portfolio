"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'
import { useAudio } from "@/hooks/use-audio"

const testimonials = [
{
  id: 1,
  name: "Priya Sharma",
  role: "Student",
  avatar: "/placeholder.svg?height=40&width=40&text=PS",
  content:
    "Mukul's teaching style made complex programming concepts easy to understand. His real-world examples and hands-on approach helped me build confidence in my coding skills.",
  rating: 5,
},
{
  id: 2,
  name: "Rahul Verma",
  role: "LinkedIn ConnectEz User",
  avatar: "/placeholder.svg?height=40&width=40&text=RV",
  content:
    "LinkedIn ConnectEz has transformed how I network on LinkedIn. The automation features saved me hours of manual work, and the interface is intuitive. Highly recommended!",
  rating: 5,
},
{
  id: 3,
  name: "Ananya Patel",
  role: "Freelance Client",
  avatar: "/placeholder.svg?height=40&width=40&text=AP",
  content:
    "Working with Mukul on our e-commerce platform was a great experience. He understood our requirements perfectly and delivered a solution that exceeded our expectations. His technical expertise and communication skills are outstanding.",
  rating: 5,
},
{
  id: 4,
  name: "Vikram Singh",
  role: "Startup Founder",
  avatar: "/placeholder.svg?height=40&width=40&text=VS",
  content:
    "Mukul helped us build our MVP in record time. His problem-solving abilities and attention to detail made a significant difference in the quality of our product. We'll definitely work with him again.",
  rating: 4,
},
{
  id: 5,
  name: "Neha Gupta",
  role: "Fellow Instructor",
  avatar: "/placeholder.svg?height=40&width=40&text=NG",
  content:
    "Mukul's passion for teaching and technology is contagious. His innovative teaching methods and deep knowledge of the subject matter make him an invaluable colleague and mentor to students.",
  rating: 5,
},
]

export default function Testimonials() {
const [activeIndex, setActiveIndex] = useState(0)
const [direction, setDirection] = useState(0)
const { play: playSwipe, audioSupported } = useAudio("/sounds/swipe.mp3")

const nextTestimonial = () => {
  setDirection(1)
  setActiveIndex((prev) => (prev + 1) % testimonials.length)
  if (audioSupported) playSwipe()
}

const prevTestimonial = () => {
  setDirection(-1)
  setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  if (audioSupported) playSwipe()
}

return (
  <section id="testimonials" className="section-padding bg-black/30">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">What People Say</h2>
      <p className="section-subtitle">
        Feedback from students, clients, and users who have worked with me or used my products.
      </p>
    </motion.div>

    <div className="mt-12 relative max-w-4xl mx-auto">
      <div className="hidden md:block absolute top-1/2 -left-12 transform -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-10 w-10 bg-background/50 backdrop-blur-sm"
          onClick={prevTestimonial}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Button>
      </div>

      <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-10 w-10 bg-background/50 backdrop-blur-sm"
          onClick={nextTestimonial}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      </div>

      <div className="overflow-hidden">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Card className="glass-card border-none shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <Avatar className="h-20 w-20 border-2 border-primary">
                    <AvatarImage
                      src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                    />
                    <AvatarFallback>{testimonials[activeIndex].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[activeIndex].rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl font-medium mb-6">
                  "{testimonials[activeIndex].content}"
                </blockquote>

                <div>
                  <p className="font-bold">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="flex justify-center mt-8 md:hidden gap-4">
        <Button variant="outline" size="icon" className="rounded-full" onClick={prevTestimonial}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Button>
        <Button variant="outline" size="icon" className="rounded-full" onClick={nextTestimonial}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === activeIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1)
              setActiveIndex(index)
              if (audioSupported) playSwipe()
            }}
          />
        ))}
      </div>
    </div>
  </section>
)
}
