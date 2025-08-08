"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Chrome, Github, ExternalLink, Code, Filter } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useAudio } from "@/hooks/use-audio"

const projects = [
  {
    id: 1,
    title: "LinkedIn ConnectEz",
    description:
      "A Chrome extension that enhances LinkedIn networking by automating connection requests and providing smart filters. Used by 100+ professionals globally and featured on Product Hunt.",
    image: "/images/linkedin-connectez-logo.jpg",
    tags: ["Chrome Extension", "JavaScript", "API", "SaaS"],
    links: {
      live: "https://www.producthunt.com/products/linkedin-connectez",
      github: "https://github.com/profmukulgupta",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Xwitter",
    description:
      "A Twitter-like application with robust backend systems using Spring Boot, enabling user registration, post management, and interaction features.",
    image: "/placeholder.svg?height=400&width=600&text=Xwitter+Social+Media+App",
    tags: ["Spring Boot", "React.js", "REST API", "MongoDB"],
    links: {
      live: "https://xwitter-app.com",
      github: "https://github.com/profmukulgupta",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Instagram MERN Stack",
    description:
      "A full-stack Instagram clone built with MERN stack, featuring user authentication, image uploads, likes, comments, and real-time interactions.",
    image: "/placeholder.svg?height=400&width=600&text=Instagram+MERN+Clone",
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js"],
    links: {
      live: "https://github.com/MukulGupta005/Instagram-Mern-Stack-",
      github: "https://github.com/MukulGupta005/Instagram-Mern-Stack-",
    },
    featured: false,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const { play: playHover, audioSupported } = useAudio("/sounds/hover.mp3")

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.tags.includes(filter))

  const uniqueTags = [...new Set(projects.flatMap((project) => project.tags))]

  return (
    <section id="projects" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A showcase of my technical skills and creative problem-solving through various projects and applications.
        </p>
      </motion.div>

      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            onMouseEnter={() => audioSupported && playHover()}
          >
            All
          </Button>
          <Button
            variant={filter === "featured" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("featured")}
            onMouseEnter={() => audioSupported && playHover()}
          >
            Featured
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" onMouseEnter={() => audioSupported && playHover()}>
                <Filter className="h-4 w-4 mr-2" />
                Filter by Tech
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {uniqueTags.map((tag) => (
                <DropdownMenuItem
                  key={tag}
                  onClick={() => setFilter(tag)}
                  onMouseEnter={() => audioSupported && playHover()}
                >
                  {tag}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden glass-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2">
                    <Badge variant="default" className="bg-primary">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {project.id === 1 ? (
                    <Chrome className="h-5 w-5 text-cyan-400" />
                  ) : (
                    <Code className="h-5 w-5 text-primary" />
                  )}
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild onMouseEnter={() => audioSupported && playHover()}>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild onMouseEnter={() => audioSupported && playHover()}>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {project.id === 1 ? "Product Hunt" : project.id === 3 ? "View Code" : "Live Demo"}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg" asChild onMouseEnter={() => audioSupported && playHover()}>
          <a
            href="https://github.com/profmukulgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            View More on GitHub
          </a>
        </Button>
      </div>
    </section>
  )
}
