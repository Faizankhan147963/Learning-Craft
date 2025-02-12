import React from "react"
import About1 from '../../../src/assets/About1.jpg'
import About2 from '../../../src/assets/About2.jpg'
export default function About() {
    return (
      <div className="container mx-auto px-4 py-16 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column with Images */}
          <div className="relative">
            {/* Stats Badge */}
            <div className="absolute -left-4 top-0 bg-white rounded-full p-6 shadow-lg z-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">14.86</div>
                <div className="text-sm text-gray-600 whitespace-nowrap">
                  Finished<br />Sessions
                </div>
              </div>
            </div>
  
            {/* Main Circle with Images */}
            <div className="relative">
              {/* blue Background Circle */}
              <div className="aspect-square rounded-full  flex items-center justify-center">
                {/* Main Image */}
                <img
                  src={About1}
                  alt="Teacher with folder"
                  className="w-[90%] h-[90%] object-cover rounded-full"
                />
              </div>
  
              {/* Overlapping Students Image */}
              <div className="absolute md:bottom-[20%] -bottom-16 md:-right-8 right-0 w-48 h-48 rounded-full border-4 border-white overflow-hidden">
                <img
                  src={About2}
                  alt="Students collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
  
          {/* Right Column Content */}
          <div className="space-y-8">
            {/* About Us Label */}
            <div className="text-blue-600 font-medium">ABOUT US</div>
  
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Knowledge is Power,<br />
              Information is Liberating.
            </h2>
  
            {/* Description */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
  
            {/* Stats Section */}
            <div>
              <h3 className="text-2xl font-bold mb-8">People Love to Learn with Us</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Stat 1 */}
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">99%</div>
                  <p className="text-gray-600">
                    99% of students see their course through to completion
                  </p>
                </div>
  
                {/* Stat 2 */}
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">8/10</div>
                  <p className="text-gray-600">
                    8/10 users reported better learning outcomes.
                  </p>
                </div>
              </div>
            </div>
  
            {/* CTA Button */}
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Write your Review
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  