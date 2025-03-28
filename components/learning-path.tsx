"use client"

import { motion } from "framer-motion"
import { Code, Server, Database, Zap, CheckCircle } from "lucide-react"

export default function LearningPath() {
  const steps = [
    {
      month: "Month 1",
      title: "Frontend Foundations",
      description: "Master HTML, CSS, and JavaScript fundamentals",
      icon: <Code className="h-8 w-8 text-white" />,
      color: "bg-blue-600",
      skills: [
        "HTML5 structure and semantics",
        "CSS3 styling and responsive layouts",
        "JavaScript fundamentals and DOM manipulation",
      ],
    },
    {
      month: "Month 2",
      title: "Modern Frontend & Backend",
      description: "Learn Vue.js and Node.js with Express",
      icon: <Server className="h-8 w-8 text-white" />,
      color: "bg-teal-600",
      skills: [
        "Vue.js components and state management",
        "Node.js and Express.js fundamentals",
        "RESTful API development",
      ],
    },
    {
      month: "Month 3",
      title: "Full-Stack Integration",
      description: "Connect everything and build a complete project",
      icon: <Database className="h-8 w-8 text-white" />,
      color: "bg-purple-600",
      skills: [
        "MongoDB database integration",
        "Full-stack application architecture",
        "Deployment and performance optimization",
      ],
    },
    {
      month: "Outcome",
      title: "Job-Ready Developer",
      description: "Ready for internships and junior positions",
      icon: <Zap className="h-8 w-8 text-white" />,
      color: "bg-green-600",
      skills: ["Complete portfolio project", "Professional development workflow", "Technical interview preparation"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Learning Path</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow our structured learning path to transform from beginner to job-ready full-stack developer
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Path line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

          {steps.map((step, index) => (
            <div key={step.month} className="mb-12 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">

                  <h3 className="text-lg font-semibold text-gray-500 mb-2">{step.month}</h3>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  <ul className="space-y-2">
                    {step.skills.map((skill, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className={`${step.color} h-12 w-12 rounded-full flex items-center justify-center`}>
                    {step.icon}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

