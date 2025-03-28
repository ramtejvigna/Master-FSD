"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { CalendarDays, Clock, IndianRupee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  college: z.string().optional(),
  year: z.string().optional(),
  experience: z.string(),
  message: z.string().optional(),
})

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      college: "",
      year: "",
      experience: "beginner",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      toast({
        title: "Registration Successful!",
        description: "We've received your registration. We'll contact you soon with next steps.",
      })
    }, 1500)
  }

  return (
    <section id="registration-form" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Register Now</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Secure your spot in our upcoming batch and start your journey to becoming a full-stack developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Course Details</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CalendarDays className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Duration & Start Date</h4>
                    <p className="text-blue-100">3 Months (2nd Week of April)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Schedule</h4>
                    <p className="text-blue-100">Online Classes: 8:00 PM – 9:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <IndianRupee className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Investment</h4>
                    <p className="text-blue-100">₹2500/- Only</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <h4 className="font-semibold text-lg mb-4">Are You a Beginner?</h4>
                <p className="text-blue-100 mb-4">
                  Absolutely YES! This course starts from scratch and takes you to an advanced level. If you are
                  dedicated, we will help you become a Full Stack Developer!
                </p>
                <p className="text-blue-100">
                  We believe in <span className="font-semibold">Skill &gt; Degree</span>, and our goal is to make every
                  student job-ready!
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-2">Limited Seats Available!</h4>
                  <p className="text-blue-100">
                    Register now to secure your spot in our upcoming batch starting in the 2nd week of April.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Registration Successful!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for registering for our Full-Stack Web Development Course. We've received your information
                  and will contact you shortly with next steps.
                </p>
                <Button onClick={() => setIsSuccess(false)} className="bg-teal-500 hover:bg-teal-600">
                  Register Another Student
                </Button>
              </motion.div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="college"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>College/Institution (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your college name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="year"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Year of Study (Optional)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select year" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">1st Year</SelectItem>
                                <SelectItem value="2">2nd Year</SelectItem>
                                <SelectItem value="3">3rd Year</SelectItem>
                                <SelectItem value="4">4th Year</SelectItem>
                                <SelectItem value="graduate">Graduate</SelectItem>
                                <SelectItem value="working">Working Professional</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Programming Experience</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your experience level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner (No experience)</SelectItem>
                              <SelectItem value="basic">Basic (Some HTML/CSS knowledge)</SelectItem>
                              <SelectItem value="intermediate">Intermediate (Familiar with JavaScript)</SelectItem>
                              <SelectItem value="advanced">Advanced (Some framework experience)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Any Questions? (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Let us know if you have any questions about the course"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-teal-500 hover:bg-teal-600 py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Register Now"}
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

