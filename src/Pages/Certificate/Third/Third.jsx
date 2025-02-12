import React from 'react'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
export default function Third() {
  const sliderRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const courses = [
    {
      id: 1,
      title: 'Python Testing Certification 2025',
      provider: 'Tutorialspoint',
      courses: 8,
      ebook: 1,
      price: 2399.00,
      image: 'https://i.ytimg.com/vi/cHYq1MRoyI0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBiTH1pF2nmkJgYvLJKNQvTvH2Vxg',
      logo: '/placeholder.svg?height=50&width=50'
    },
    {
      id: 2,
      title: 'Data Science Advanced Certification 2025',
      provider: 'Tutorialspoint',
      courses: 16,
      ebook: 2,
      price: 4499.00,
      image: 'https://files.realpython.com/media/Getting-Started-with-Testing-in-Python_Watermarked.9f22be97343d.jpg',
      logo: '/placeholder.svg?height=50&width=50'
    },
    {
      id: 3,
      title: 'Game Development Certification 2025',
      provider: 'Tutorialspoint',
      courses: 7,
      ebook: 1,
      price: 1799.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fSfBH17OziJme8Kam1U8ZcLRcyQSkHp3Kg&s',
      logo: '/placeholder.svg?height=50&width=50'
    },
    {
      id: 4,
      title: 'Advanced Python Certification 2025',
      provider: 'Tutorialspoint',
      courses: 15,
      ebook: 2,
      price: 4499.00,
      image: 'https://i.ytimg.com/vi/RuTmd4g5K8Q/maxresdefault.jpg',
      logo: '/placeholder.svg?height=50&width=50'
    },
    {
      id: 5,
      title: 'Artificial Intelligence and Machine Learning 2025',
      provider: 'Tutorialspoint',
      courses: 7,
      ebook: 1,
      price: 2399.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTz5b0VHp3jCQ0jUAPQSIur3ZSOZ8UTcUrg&s',
      logo: '/placeholder.svg?height=50&width=50'
    }
  ]

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300
      const newScrollLeft = sliderRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
      
      // Update current index
      const newIndex = direction === 'left' 
        ? Math.max(0, currentIndex - 1)
        : Math.min(courses.length - 1, currentIndex + 1)
      setCurrentIndex(newIndex)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Explore All our <span className="text-blue-600">Certifications</span>
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-3 bg-blue-600 text-white rounded hover:blue-600 bg-transition-colors"
            disabled={currentIndex === 0}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 bg-blue-600 text-white rounded hover:bg-blue-600transition-colors"
            disabled={currentIndex === courses.length - 1}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="p-3 bg-blue-600 text-white rounded hover:bg-blue-600 transition-colors">
            View More
          </button>
        </div>
      </div>

      {/* Slider */}
      <div 
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none scrollbar-hide"
      >
        {courses.map((course) => (
          <Link
          to={`/course/${course.id}`}
            key={course.id}
            className="min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col snap-start border border-gray-300"
          >
            {/* Course Image */}
            <div className="relative h-48 bg-blue-900">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover "
              />
              {/* Logo Circle */}
              {/* <div className="absolute -bottom-6 left-4 w-12 h-12 bg-white rounded-full p-2 shadow-lg">
                <img
                  src={course.logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div> */}
              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Course Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-bold text-lg mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.provider}</p>
              <div className="text-sm text-gray-600 mb-4">
                {course.courses} Courses | {course.ebook} eBook
              </div>
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-xl">₹{course.price.toFixed(2)}</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-grow bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors flex items-center gap-2">
                    Buy Now
                  </button>
                  <button className="bg-gray-100 p-2 rounded hover:bg-gray-200 transition-colors">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

