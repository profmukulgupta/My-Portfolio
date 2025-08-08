"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Mic, Dumbbell, Quote } from "lucide-react"
import { useAudio } from "@/hooks/use-audio"

const quotes = [
  "Bad situations and mistakes in life are the best teachers",
  "Sometimes your failure teaches a lesson that success can't",
  "To get something you have to forget something",
  "True wisdom is to accept that you don't know everything",
  "Never be money oriented, be work oriented money automatically comes to you",
  "The world surrenders to the calm mind",
  "Music separates you from worries",
  "Schedule, goal and self love are the elements of success",
  "Its better to be alone than to be a part of bad company",
  "Balance in life is one of the hardest thing to find",
  "I may be not the best person today but better than yesterday",
  "Make a goal or be a fool",
  "Night can be considered as failure but it vanishes as day (success) comes",
  "Practice makes you close to perfect",
  "Relationship last long when you accept the person as it is",
  "Your thoughts resembles your persona",
  "When you get inspired from the person in the mirror that's true motivation",
  "Good times give you happiness and bad times make you philosopher",
  "Failures is not a person, failure is just an event",
  "The worst thing you can do to yourself is comparing yourself with others",
  "Humans follows God not their teachings",
  "Never dim your lights to make someone comfortable",
  "I am powerful beyond measures",
  "Simple is not always easy",
  "Regular improvement is an algorithm for achievement",
  "Improvement requires persistence and discipline",
  "I don't care how much you know until I know how much you care",
  "Spiritualism taught me what's the real intoxication is",
  "Smile is an answer to stress, anxiety. Bhagwat Gita is answer to self realisation",
  "Good habits are the steps to achieve success",
  "If your love ones started ignoring you then its time to change your dead habits",
  "Expectations are the root cause of unhappiness",
  "Never compare yourself with someone's achievement",
  "Everything that happens to you is for improving you",
  "Dance is a way of expressing emotion without orating",
  "Tough time don't define you, they refine you",
  "I may be not the best person today but better than yesterday",
  "Make a goal or be a fool",
  "Practice makes you close to perfect",
  "Life to die or die and live",
  "Your thoughts resembles your persona",
  "When you get inspired from the person in the mirror that's true motivation",
  "Good times give you happiness and bad times make you philosopher",
  "Failures is not a person, failure is just an event",
  "Never dim your lights to make someone comfortable",
  "I am powerful beyond measures",
  "Simple is not always easy",
  "Regular improvement is an algorithm for achievement",
  "Improvement requires persistence and discipline",
  "Spiritualism is an art to bring inner calm in environment of chaos",
  "True love is when you love only for the sake of love",
  "Happiness is a choice choose it and be happy",
  "Arrogance is the enemy of self growth",
  "Every one is imperfect in this world. True perfection comes when we accept our imperfection and begins to believe in ourself",
  "Life is as good as we see",
  "Compassion differentiate humans from creatures",
  "Work hard and be kind, and amazing things will happen",
  "Specialization is for insects",
  "Questioning is the starting of intelligence",
  "Affirmation without discipline is the beginning of delusion",
  "No one can change except the person infront of mirror",
  "Sometimes you don't get what you want as god has created something special for you so never give up",
  "I don't read history I create it",
  "A person is a product of his thoughts",
  "Persistence is the most powerful weapon",
  "I live to express not impress",
  "Difficulties make you more tough to handle struggles of your life",
  "Successful people are not genius their thinking and passion for their work make them successful",
  "Except you no one is responsible for your failure",
  "Never show your ego to anyone. Never loose your compassion",
  "Nothing is negative or positive its just a perception of our mind",
  "There is no station there is no destination life is a journey enjoy the trip",
  "Internet provides us power to empower the world",
  "Don't make fun of anyone one day you might be in a same situation",
  "Helping someone gives you happiness. Scolding someone gives you sadness",
  "Proficiency in skill can distinguish you from crowd",
  "We need just two thing to do anything: Fun on doing it, reason for doing it",
  "Originality needs seclusion",
  "It's never too late to start anything",
  "It's really easy to give advice but it's really difficult to follow them",
]

export default function BeyondCode() {
  const [activeQuote, setActiveQuote] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const { play: playTab, audioSupported } = useAudio("/sounds/tab.mp3")

  const handlePlayPause = () => {
    // Audio playback logic would go here
    setIsPlaying(!isPlaying)
  }

  const nextQuote = () => {
    setActiveQuote((prev) => (prev + 1) % quotes.length)
    if (audioSupported) playTab()
  }

  const prevQuote = () => {
    setActiveQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
    if (audioSupported) playTab()
  }

  return (
    <section id="beyond-code" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Beyond Code</h2>
        <p className="section-subtitle">Exploring my creative pursuits and passions outside the world of technology.</p>
      </motion.div>

      <Tabs defaultValue="beatboxing" className="mt-12">
        <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto">
          <TabsTrigger
            value="beatboxing"
            className="flex items-center gap-2"
            onClick={() => audioSupported && playTab()}
          >
            <Mic className="h-4 w-4" />
            <span className="hidden sm:inline">Beatboxing</span>
          </TabsTrigger>
          <TabsTrigger
            value="bodybuilding"
            className="flex items-center gap-2"
            onClick={() => audioSupported && playTab()}
          >
            <Dumbbell className="h-4 w-4" />
            <span className="hidden sm:inline">Bodybuilding</span>
          </TabsTrigger>
          <TabsTrigger value="quotes" className="flex items-center gap-2" onClick={() => audioSupported && playTab()}>
            <Quote className="h-4 w-4" />
            <span className="hidden sm:inline">Quotes</span>
          </TabsTrigger>
        </TabsList>

        <div className="mt-8">
          <TabsContent value="beatboxing" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Beatboxing Journey</h3>
                <p className="text-muted-foreground mb-4">
                  My passion for beatboxing began as a creative outlet that perfectly complements my technical mindset.
                  Just like coding, beatboxing requires precision, timing, and the ability to layer complex patterns.
                  What started as a hobby has become an integral part of my identity, allowing me to express creativity
                  through rhythm and sound. Check out my latest beatboxing performance on Instagram!
                </p>
              </div>
              <div className="relative h-64 md:h-auto overflow-hidden rounded-xl">
                <div className="relative w-full" style={{ paddingBottom: "125%" }}>
                  <iframe
                    src="https://www.instagram.com/reel/DBY1ElbSY-j/embed"
                    className="absolute top-0 left-0 w-full h-full rounded-xl border-0"
                    allowTransparency={true}
                    allow="encrypted-media"
                    title="Mukul's Beatboxing Performance - Side View"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-2">
                  <a
                    href="https://www.instagram.com/reel/DBY1ElbSY-j/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Watch on Instagram
                  </a>
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bodybuilding" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-auto overflow-hidden rounded-xl order-2 md:order-1">
                <div className="relative w-full" style={{ paddingBottom: "125%" }}>
                  <iframe
                    src="https://www.instagram.com/p/C9O-gD6SwKV/embed"
                    className="absolute top-0 left-0 w-full h-full rounded-xl border-0"
                    allowTransparency={true}
                    allow="encrypted-media"
                    title="Mukul's Bodybuilding Transformation"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-2">
                  <a
                    href="https://www.instagram.com/p/C9O-gD6SwKV/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    View on Instagram
                  </a>
                </p>
              </div>
              <div className="glass-card p-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Fitness Journey</h3>
                <p className="text-muted-foreground mb-4">
                  Bodybuilding has taught me discipline, persistence, and the importance of setting measurable goals.
                  The same principles that help me transform physically also apply to my professional growth and
                  software development approach.
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Consistency</span>
                      <span className="text-sm">95%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Discipline</span>
                      <span className="text-sm">90%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Transformation</span>
                      <span className="text-sm">85%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="quotes" className="mt-0">
            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button variant="ghost" size="icon" onClick={prevQuote}>
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
                  <Button variant="ghost" size="icon" onClick={nextQuote}>
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

                <Quote className="h-12 w-12 text-primary/30 mb-6" />

                <motion.div
                  key={activeQuote}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-[100px] flex items-center justify-center"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-center">{quotes[activeQuote]}</h3>
                </motion.div>

                <div className="mt-8 text-center">
                  <p className="text-muted-foreground">— Mukul Gupta</p>
                </div>

                <div className="mt-8 flex justify-center">
                  <div className="flex gap-2">
                    {quotes.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === activeQuote ? "bg-primary" : "bg-muted"}`}
                        onClick={() => {
                          setActiveQuote(index)
                          if (audioSupported) playTab()
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" asChild onMouseEnter={() => audioSupported && playTab()}>
                  <a
                    href="https://www.yourquote.in/mukul-gupta-byopf/quotes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Quote className="h-4 w-4" />
                    View All 183+ Quotes on YourQuote
                  </a>
                </Button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  I write motivational quotes in my spare time, drawing inspiration from my experiences in technology,
                  entrepreneurship, and personal growth. These quotes reflect my philosophy on life, work, and
                  creativity. I've published 183+ quotes on YourQuote platform where I'm known as "Mr White".
                </p>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}
