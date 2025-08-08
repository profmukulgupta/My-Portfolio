"use client"

import { useRef, useState, useEffect, Suspense, memo, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, Eye } from "lucide-react"
import Link from "next/link"
import { useAudio } from "@/hooks/use-audio"

// Memoized 3D Model component for better performance
const Model = memo(() => {
  const group = useRef()

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <group ref={group}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial
          color="#2a0845"
          emissive="#6441a5"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          wireframe={true}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.2, 8, 50]} />
        <meshStandardMaterial
          color="#0cebeb"
          emissive="#0cebeb"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.1, 8, 50]} />
        <meshStandardMaterial
          color="#20e3b2"
          emissive="#20e3b2"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  )
})

Model.displayName = "Model"

// Fallback component for when 3D fails to load
const HeroFallback = memo(() => (
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20">
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
  </div>
))

HeroFallback.displayName = "HeroFallback"

// Lazy-loaded 3D Canvas component
const Hero3D = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Delay 3D loading slightly to prioritize text content
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded) {
    return <HeroFallback />
  }

  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={<HeroFallback />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          dpr={[1, 1.5]} // Limit pixel ratio for performance
          performance={{ min: 0.5 }} // Allow frame rate to drop for performance
          gl={{
            antialias: false, // Disable antialiasing for performance
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#0cebeb" intensity={1} />
          <Model />
          <Environment preset="night" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            enableDamping={false} // Disable damping for better performance
          />
        </Canvas>
      </Suspense>
    </div>
  )
})

Hero3D.displayName = "Hero3D"

export default function Hero() {
  const { play: playClick, audioSupported } = useAudio("/sounds/click.mp3")
  const [isClient, setIsClient] = useState(false)

  // Ensure client-side rendering for 3D content
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleButtonClick = () => {
    if (audioSupported) {
      playClick()
    }
  }

  // Memoize animation variants for performance
  const animationVariants = useMemo(
    () => ({
      title: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
      },
      subtitle: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.1, ease: "easeOut" },
      },
      buttons: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
      },
      scroll: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1, delay: 0.8 },
      },
    }),
    [],
  )

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Background - Lazy loaded */}
      {isClient && <Hero3D />}

      {/* Fallback background for immediate render */}
      {!isClient && <HeroFallback />}

      {/* Hero Content - Prioritized for immediate render */}
      <div className="relative z-50 text-center px-4 md:px-8 max-w-4xl p-8">
        <motion.div {...animationVariants.title}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 neon-glow drop-shadow-lg">
            Hi, I&apos;m <span className="text-gradient">Mukul Gupta</span>
          </h1>
        </motion.div>

        <motion.div {...animationVariants.subtitle}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 drop-shadow-md">
            Tech meets creativity. I build, teach, inspire.
          </p>
        </motion.div>

        <motion.div {...animationVariants.buttons} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact" prefetch={true}>
            <Button size="lg" className="group" onClick={handleButtonClick}>
              Let&apos;s Collaborate
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="#projects" prefetch={true}>
            <Button size="lg" variant="outline" className="group" onClick={handleButtonClick}>
              View My Work
              <Eye className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
            </Button>
          </Link>

          <a href="/resume/mukul-gupta-resume.pdf" download="Mukul_Gupta_Resume.pdf">
            
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div {...animationVariants.scroll} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
