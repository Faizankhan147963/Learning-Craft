'use client'

import { useState } from 'react'
import man from '../../../assets/Man.png'
export default function First() {
  const [mobileNumber, setMobileNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Mobile number submitted:', mobileNumber)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50 p-4 md:p-8">
  {/* Top Section */}
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 md:py-16 md:px-4 px-0">
    <div className="space-y-6">
      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
          Become an Instructor & Earn Money
        </h1>
        <div className="flex items-baseline gap-2">
          <span className="text-gray-600 text-sm md:text-base">Earn up to</span>
          <span className="text-3xl md:text-4xl font-bold text-black">₹50,000+</span>
          <span className="text-lg text-gray-700">per month</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-justify text-sm md:text-base">
        Have you ever wanted to share your knowledge and make an income doing it? As an instructor on our platform, you can create engaging courses in your area of expertise and earn money from the students who enroll. Whether you're skilled in technology, medicine, or any other field, you can turn your knowledge into a valuable course and share it with a global audience.
      </p>

      <p className="text-gray-600 mt-4 text-justify text-sm md:text-base">
        By joining our platform, you’ll have access to a powerful course creation toolkit that allows you to easily build and customize your content. You can teach anything from programming and IT to health and wellness or business. It’s time to take control of your career and start earning!
      </p>

      {/* Mobile Input Form */}
      <div className="space-y-3">
        <p className="text-blue-600 text-sm md:text-base">
          Join now and start your journey as an instructor today!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 max-w-md">
          <div className="flex-none bg-white border rounded-lg px-3 py-2 text-sm">
            +91
          </div>
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter Your Mobile No."
            className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-600/90 transition-colors"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>

    {/* Hero Image */}
    <div className="relative">
      <img
        src="https://www.coxpost.com/application/views/site/CoxPost/assets/img/banner-right.png"
        alt="Instructor illustration"
        className="w-full max-w-sm md:max-w-full mx-auto"
      />
    </div>
  </div>

  {/* Bottom Section */}
  <div className="container mx-auto mt-12">
    <div className="bg-blue-600 rounded-3xl p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-white space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold">Why Become an Instructor?</h2>
          <p className="text-white/90 text-justify text-sm md:text-base">
            As an instructor on our platform, you’re not just teaching – you’re also inspiring others to grow and develop. You can set your own teaching schedule, create engaging video lessons, provide downloadable resources, and interact directly with your students. Our platform is designed to help you succeed and build a meaningful, impactful career.
          </p>
          <p className="text-white/90 text-justify text-sm md:text-base">
            In addition to teaching, you’ll be joining a growing community of experts across a wide range of industries. Whether you're sharing your expertise in IT, healthcare, civil engineering, business management, or any other field, you’ll be able to connect with others who share your passion for teaching and helping others succeed.
          </p>
        </div>
        <div className="relative">
          <img
            src={man}
            alt="Teaching illustration"
            className="w-full max-w-xs md:max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
