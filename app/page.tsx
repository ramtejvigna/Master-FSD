import HeroSection from "@/components/hero-section"
import CourseOverview from "@/components/course-overview"
import LearningPath from "@/components/learning-path"
import Benefits from "@/components/benefits"
import Instructors from "@/components/instructors"
import RegistrationForm from "@/components/registration-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CourseOverview />
      <LearningPath />
      <Benefits />
      <Instructors />
      <RegistrationForm />
      <Footer />
    </main>
  )
}

