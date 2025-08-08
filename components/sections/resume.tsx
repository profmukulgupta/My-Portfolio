"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Briefcase, GraduationCap, Award, Code } from 'lucide-react'
import { useAudio } from "@/hooks/use-audio"

export default function Resume() {
  const { play: playTab, audioSupported } = useAudio("/sounds/tab.mp3")

  return (
    <section id="resume" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Resume & Skills</h2>
        <p className="section-subtitle">My professional journey, educational background, and technical expertise.</p>
      </motion.div>

      <div className="flex justify-center mt-6 mb-12">
        <a
          href="/resume/mukul-gupta-resume.pdf"
          download="Mukul_Gupta_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </div>

      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
          <TabsTrigger
            value="experience"
            className="flex items-center gap-2"
            onClick={() => audioSupported && playTab()}
          >
            <Briefcase className="h-4 w-4" />
            <span>Experience</span>
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="flex items-center gap-2"
            onClick={() => audioSupported && playTab()}
          >
            <GraduationCap className="h-4 w-4" />
            <span>Education</span>
          </TabsTrigger>
          <TabsTrigger value="skills" className="flex items-center gap-2" onClick={() => audioSupported && playTab()}>
            <Code className="h-4 w-4" />
            <span>Skills</span>
          </TabsTrigger>
        </TabsList>

        <div className="mt-8">
          <TabsContent value="experience" className="mt-0">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Software Engineer — The Utility Company
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Full-time • New Mexico, United States · Remote</span>
                    <span className="text-primary font-medium">07/2025 - Present</span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Developing and maintaining facet modules for critical functions such as token issuance, compliance enforcement, governance logic, and revenue distribution.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Ensuring smart contract security, upgradeability, and modularity by adhering to the Diamond Standard best practices.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Integrating real-world automation data from IoT devices and AI systems into smart contracts via the company's custom Osiris Oracle framework, enabling real-time reporting on physical asset performance.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Collaborating on user-friendly access points (wallet creation, fiat on-ramps, etc.) using thirdweb and Coinbase infrastructure to facilitate retail investor participation.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Supporting decentralized governance tools, including multi-signature controls and DAO voting mechanisms, to ensure transparency and investor protections.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-cyan-400" />
                    Software Engineer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Virtusa, Hyderabad</span>
                    <span className="text-cyan-400 font-medium">06/2022 - 02/2024</span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    <li className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>
                        Innovated and deployed the integration of the new channel, Broker Layout, into BMO's banking
                        system, resulting in a 35% reduction in loan processing time.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>
                        Developed the "Cost Of Borrowing" web application for loan calculation and generating amending
                        agreements/renewal disclosures from mortgages, leading to a 30% decrease in manual processing
                        time.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>
                        Designed robust REST APIs in Java with Spring Boot, rigorously tested using POSTMAN and SoapUI;
                        led to a significant 25% decrease in post-release bug reports, ensuring higher system stability.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>
                        Improved application efficiency by 30% through optimized SQL query structures, resulting in a
                        more streamlined and responsive system.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-500" />
                    Software Development Engineer Intern
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Falcon Labs, Mumbai</span>
                    <span className="text-green-500 font-medium">01/2022 - 05/2022</span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    <li className="flex gap-2">
                      <span className="text-green-500">•</span>
                      <span>
                        Engineered scalable components for a vaccination management system using Java Spring Boot;
                        enhanced system efficiency by 30% and streamlined data processing for over 10,000 daily records.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">•</span>
                      <span>
                        Restructured user-friendly interfaces with React.js for healthcare management, leading to a 25%
                        improvement in user satisfaction and a 20% increase in user adoption.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">•</span>
                      <span>
                        Implemented robust back-end functionalities with Spring Boot, including RESTful APIs, resulting
                        in a 10% reduction in data handling time.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    B.Tech Information Technology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">PSIT College Of Engineering, Kanpur, India</span>
                    <span className="text-primary font-medium">2018 - 2022</span>
                  </div>
                  <p className="mt-4">
                    Graduated with a focus on software engineering, data structures, and algorithms. Participated in
                    multiple hackathons and coding competitions.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-500" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mt-2">
                    <li>
                      <div className="flex justify-between">
                        <span className="font-medium">Oracle Certified Associate, Java SE 8 Programmer</span>
                        <span className="text-green-500">Nov. 2022</span>
                      </div>
                      <p className="text-sm text-muted-foreground">ORACLE</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Core Java (Eclipse)</span>
                        <span>95%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>JavaScript</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>SQL</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-cyan-400" />
                    Frameworks & Libraries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Spring Boot</span>
                        <span>95%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-400" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>React</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-400" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Node.js</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-400" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>REST API</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-400" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-green-500" />
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Git</span>
                        <span>95%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Postman</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>JUnit</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Jira</span>
                        <span>80%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>VsCode</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-500" />
                    Frontend & Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>HTML5</span>
                        <span>95%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>CSS3</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Bootstrap</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>MongoDB</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}
