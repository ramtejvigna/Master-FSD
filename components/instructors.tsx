"use client"

export default function Instructors() {

  return (
    <section className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Instructors</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from industry professionals with years of experience in web development
          </p>
        </div>

        <div className="mt-20">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Our Partners</h3>
                <p className="text-gray-600 mb-6">
                  This course is brought to you by SRKR Coding Club in collaboration with Vils.ai, combining academic
                  excellence with industry expertise.
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Why We&apos;re Doing This</h4>
                <p className="text-gray-600">
                  We believe in <span className="font-semibold">Skill &gt; Degree</span>, and our goal is to make every
                  student job-ready! This collaboration brings together academic knowledge and practical industry
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

