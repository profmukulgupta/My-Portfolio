"use client"

import { motion } from "framer-motion"
import { Code, Lightbulb, Mic, Dumbbell, BookOpen, Quote, Briefcase, GraduationCap, Chrome, Brain } from 'lucide-react'
import Image from "next/image"

const timelineItems = [
{
  year: "2018",
  title: "Started Coding Journey",
  description: "Began learning software development and computer science fundamentals",
  icon: <Code className="h-6 w-6" />,
},
{
  year: "2022",
  title: "Software Engineer at Virtusa",
  description: "Started professional career as a Software Engineer, working on banking systems and web applications",
  icon: <Briefcase className="h-6 w-6" />,
},
{
  year: "2024",
  title: "Became a Tech Instructor",
  description: "Started teaching at an engineering college, sharing knowledge with students",
  icon: <GraduationCap className="h-6 w-6" />,
},
{
  year: "2024",
  title: "Launched LinkedIn ConnectEz",
  description: "Created a Chrome extension with 100+ global users, featured on Product Hunt",
  icon: <Chrome className="h-6 w-6" />,
  link: "https://www.producthunt.com/products/linkedin-connectez",
},
{
  year: "2024",
  title: "Jagriti Yatra Participation",
  description: "Joined the entrepreneurial journey across India, connecting with innovators and entrepreneurs",
  icon: <Mic className="h-6 w-6" />,
},
]

export default function About() {
return (
  <section id="about" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        A multi-talented freelance software engineer, tech instructor, AI enthusiast, and creative entrepreneur based
        in Kanpur, India.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="glass-card p-6 animate-glow">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/20">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Freelance Software Engineer & Tech Instructor</h3>
              <p className="text-muted-foreground">
                Currently working as a Coding Instructor at an engineering college, sharing my knowledge and experience with
                the next generation of developers.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-cyan-500/20">
              <Chrome className="h-6 w-6 text-cyan-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Founder of LinkedIn ConnectEz</h3>
              <p className="text-muted-foreground">
                Created a Chrome extension with 100+ global users without any marketing efforts, helping professionals
                connect more efficiently.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-green-500/20">
              <Brain className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">AI Enthusiast & Problem Solver</h3>
              <p className="text-muted-foreground">
                Passionate about artificial intelligence and its applications in solving real-world problems. Always
                exploring new technologies and innovations.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-purple-500/20">
              <Lightbulb className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Creative Entrepreneur</h3>
              <p className="text-muted-foreground">
                Passionate about building SaaS tools to make life easier. Constantly ideating and developing new
                solutions to everyday problems.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-gradient">My Journey</h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-background border-2 border-primary">
                    {item.icon}
                  </div>
                </div>
                <div className="glass-card p-4 flex-1">
                  <div className="text-sm font-semibold text-primary mb-1">{item.year}</div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground mb-2">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      View on Product Hunt
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 glass-card p-6 flex flex-col md:flex-row items-center gap-8"
    >
      <div className="flex-shrink-0">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 relative">
          <Image
            src="/images/mukul-professional.jpg"
            alt="Mukul Gupta"
            width={192}
            height={192}
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Beyond Technology</h3>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full">
            <Mic className="h-4 w-4" />
            <span>Beatboxer</span>
          </div>
          <div className="flex items-center gap-2 bg-cyan-500/20 px-3 py-1 rounded-full">
            <Dumbbell className="h-4 w-4" />
            <span>Bodybuilder</span>
          </div>
          <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
            <BookOpen className="h-4 w-4" />
            <span>Aspiring Novelist</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-500/20 px-3 py-1 rounded-full">
            <Quote className="h-4 w-4" />
            <span>Motivational Writer</span>
          </div>
        </div>
        <p className="text-muted-foreground">
          When I'm not coding or teaching, you'll find me beatboxing, working out at the gym, writing my novel, or
          crafting motivational quotes. I believe in a holistic approach to life where creativity and technology
          complement each other.
        </p>
      </div>
    </motion.div>
  </section>
)
}
