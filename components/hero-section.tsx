"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Server, Database, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParticleBackground from "./particle-background"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800">
      <ParticleBackground />

      <div className="container mx-auto px-20 py-20 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master <span className="text-teal-400">Full-Stack</span> Web Development
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Learn to build stunning websites and powerful web applications like industry professionals.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
                <span className="text-teal-400 mr-1">3</span>Months
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
                <span className="text-teal-400 mr-1">Online</span>Learning
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
                <span className="text-teal-400 mr-1">₹2500</span>Only
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg"
                onClick={() => {
                  const form = document.getElementById("registration-form")
                  if (form) {
                    form.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Enroll Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                onClick={() => {
                  const overview = document.getElementById("course-overview")
                  if (overview) {
                    overview.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-teal-500/20 animate-pulse"></div>
              </div>

              <motion.div
                className="absolute top-0 left-1/4 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
              >
                <Code size={40} className="text-teal-400" />
                <p className="text-white mt-2">Frontend</p>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, ease: "easeInOut" }}
              >
                <Server size={40} className="text-teal-400" />
                <p className="text-white mt-2">Backend</p>
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-0 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
              >
                <Database size={40} className="text-teal-400" />
                <p className="text-white mt-2">Database</p>
              </motion.div>

              <motion.div
                className="absolute bottom-1/2 right-0 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.2, ease: "easeInOut" }}
              >
                <Zap size={40} className="text-teal-400" />
                <p className="text-white mt-2">Skills</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

