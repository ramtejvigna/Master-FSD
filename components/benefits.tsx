"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Award, BookOpen, Briefcase, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Benefit {
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

export default function Benefits() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const benefits: Benefit[] = [
    {
      title: "Certification",
      description: "Receive official certification from SRKR Coding Club & Vils.ai to boost your resume",
      icon: <Award className="h-10 w-10" />,
      color: "text-yellow-500",
    },
    {
      title: "Industry Assessment",
      description: "Get your skills evaluated by Vils.ai through a comprehensive final assessment",
      icon: <BookOpen className="h-10 w-10" />,
      color: "text-blue-500",
    },
    {
      title: "Internship Opportunity",
      description: "Top 5 performers receive a 3-month internship certificate, with top 2 getting paid internships",
      icon: <Briefcase className="h-10 w-10" />,
      color: "text-green-500",
    },
    {
      title: "Expert Mentorship",
      description: "Learn from industry professionals with 5+ years of experience in web development",
      icon: <Users className="h-10 w-10" />,
      color: "text-purple-500",
    },
  ]

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, benefits.length])

  const nextSlide = () => {
    setAutoplay(false)
    setCurrentSlide((prev) => (prev + 1) % benefits.length)
  }

  const prevSlide = () => {
    setAutoplay(false)
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Benefits</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our course offers unique advantages to help you stand out in the job market
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {benefits.map((benefit) => (
                <div key={benefit.title} className="w-full flex-shrink-0 px-4">
                  <Card className="h-full bg-transparent text-black">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className={`${benefit.color} bg-gray-100 p-4 rounded-full`}>{benefit.icon}</div>
                        <div className="text-center md:text-left">
                          <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                          <p className="text-gray-600 text-lg">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {benefits.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-teal-500" : "bg-gray-300"
                }`}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentSlide(index)
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 transform -translate-y-1/2 -left-4 md:-left-6"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 transform -translate-y-1/2 -right-4 md:-right-6"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-900 to-teal-800 rounded-xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Boost Your Career?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our course and gain the skills, certification, and opportunities you need to succeed in the web
              development industry.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg"
              onClick={() => {
                const form = document.getElementById("registration-form")
                if (form) {
                  form.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

