"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Server, Database, GitBranch, Globe, Layers, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TechItem {
  name: string
  icon: React.ReactNode
  description: string
}

interface ModuleItem {
  title: string
  description: string
  expanded: boolean
  weeks: string[]
}

export default function CourseOverview() {
  const [modules, setModules] = useState<ModuleItem[]>([
    {
      title: "Frontend Fundamentals",
      description: "Master the building blocks of web development",
      expanded: false,
      weeks: ["HTML5 Structure & Semantics", "CSS3 Styling & Layouts", "JavaScript Fundamentals & DOM Manipulation"],
    },
    {
      title: "Modern Frontend Development",
      description: "Build interactive UIs with Vue.js",
      expanded: false,
      weeks: ["Vue.js Fundamentals & Components", "State Management with Pinia", "UI Libraries & Responsive Design"],
    },
    {
      title: "Backend Development",
      description: "Create powerful server-side applications",
      expanded: false,
      weeks: ["Node.js Fundamentals", "Express.js & RESTful APIs", "MongoDB & Database Design"],
    },
    {
      title: "Advanced Collaboration & Deployment",
      description: "Work like professionals with Git and deployment",
      expanded: false,
      weeks: [
        "Git Workflow & Team Collaboration",
        "Debugging & Performance Optimization",
        "Deployment & Production Considerations",
      ],
    },
  ])

  const frontendTech: TechItem[] = [
    {
      name: "HTML5",
      icon: <Globe className="h-10 w-10 text-orange-500" />,
      description: "Structure and semantics",
    },
    {
      name: "CSS3",
      icon: <Layers className="h-10 w-10 text-blue-500" />,
      description: "Styling and layouts",
    },
    {
      name: "JavaScript",
      icon: <Code className="h-10 w-10 text-yellow-500" />,
      description: "Dynamic functionality",
    },
    {
      name: "Vue.js",
      icon: <Code className="h-10 w-10 text-green-500" />,
      description: "Modern UI framework",
    },
  ]

  const backendTech: TechItem[] = [
    {
      name: "Node.js",
      icon: <Server className="h-10 w-10 text-green-600" />,
      description: "JavaScript runtime",
    },
    {
      name: "Express.js",
      icon: <Server className="h-10 w-10 text-gray-500" />,
      description: "Web framework",
    },
    {
      name: "MongoDB",
      icon: <Database className="h-10 w-10 text-green-500" />,
      description: "NoSQL database",
    },
    {
      name: "Git",
      icon: <GitBranch className="h-10 w-10 text-orange-600" />,
      description: "Version control",
    },
  ]

  const toggleModule = (index: number) => {
    setModules(modules.map((module, i) => (i === index ? { ...module, expanded: !module.expanded } : module)))
  }

  return (
    <section id="course-overview" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn the most in-demand technologies in full-stack web development through our comprehensive curriculum
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Technology Stack</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-6 text-center">Frontend Development</h4>
              <div className="grid grid-cols-2 gap-6">
                {frontendTech.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    className="bg-white rounded-lg p-6 border border-gray-200 flex flex-col items-center text-center transition-all duration-300"
                  >
                    {tech.icon}
                    <h5 className="text-lg font-semibold mt-4">{tech.name}</h5>
                    <p className="text-gray-600 mt-2">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6 text-center">Backend Development</h4>
              <div className="grid grid-cols-2 gap-6">
                {backendTech.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    className="bg-white rounded-lg p-6 border border-gray-200 flex flex-col items-center text-center transition-all duration-300"
                  >
                    {tech.icon}
                    <h5 className="text-lg font-semibold mt-4">{tech.name}</h5>
                    <p className="text-gray-600 mt-2">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Course Modules</h3>

          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {modules.map((module, index) => (
              <Card key={module.title} className="overflow-hidden bg-transparent">
                <CardHeader
                  className="cursor-pointer transition-colors"
                  onClick={() => toggleModule(index)}
                >
                  <div className="flex justify-between text-black  items-center">
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    {module.expanded ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  <p className="text-gray-600">{module.description}</p>
                </CardHeader>

                {module.expanded && (
                  <CardContent className="pt-6 text-gray-900">
                    <h4 className="font-semibold mb-4">Weekly Topics:</h4>
                    <ul className="space-y-2">
                      {module.weeks.map((week, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mr-3">
                            {i + 1}
                          </span>
                          {week}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

