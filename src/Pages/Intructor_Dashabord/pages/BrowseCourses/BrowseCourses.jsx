"use client"

import { useState } from "react"
import CourseCard from "../../components/CourseCard"

const BrowseCourses = ({ setActiveTab, setSelectedCourse }) => {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data for courses
  const allCourses = [
    {
      id: 1,
      title: "Web Development Masterclass",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack web developer.",
      status: "Published",
      duration: "42 hours",
      students: 856,
      rating: 4.8,
      reviews: 124,
      price: 89.99,
      instructor: "John Doe",
      featured: true,
      category: "development",
    },
    {
      id: 2,
      title: "Python for Data Science",
      description:
        "Master Python programming and learn how to use it for data analysis, visualization, and machine learning.",
      status: "Published",
      duration: "38 hours",
      students: 723,
      rating: 4.7,
      reviews: 98,
      price: 79.99,
      instructor: "Jane Smith",
      category: "data-science",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      description:
        "Learn the principles of user interface and user experience design to create beautiful, functional products.",
      status: "Draft",
      duration: "24 hours",
      students: 0,
      rating: 0,
      reviews: 0,
      price: 69.99,
      instructor: "John Doe",
      category: "design",
    },
    {
      id: 4,
      title: "Mobile App Development with React Native",
      description: "Build native mobile apps for iOS and Android using React Native and JavaScript.",
      status: "Published",
      duration: "36 hours",
      students: 512,
      rating: 4.6,
      reviews: 87,
      price: 84.99,
      instructor: "Jane Smith",
      category: "development",
    },
    {
      id: 5,
      title: "Digital Marketing Essentials",
      description: "Learn SEO, social media marketing, email marketing, and more to grow your business online.",
      status: "Published",
      duration: "28 hours",
      students: 645,
      rating: 4.5,
      reviews: 92,
      price: 74.99,
      instructor: "John Doe",
      category: "marketing",
    },
    {
      id: 6,
      title: "Advanced JavaScript Concepts",
      description: "Deep dive into advanced JavaScript concepts like closures, prototypes, async/await, and more.",
      status: "Draft",
      duration: "22 hours",
      students: 0,
      rating: 0,
      reviews: 0,
      price: 64.99,
      instructor: "Jane Smith",
      category: "development",
    },
  ]

  // Filter courses based on filter and search term
  const filteredCourses = allCourses.filter((course) => {
    const matchesFilter = filter === "all" || course.category === filter
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">My Courses</h2>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <button
              onClick={() => setActiveTab("courseContent")}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create New Course
            </button>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setFilter("all")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                filter === "all"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setFilter("development")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                filter === "development"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Development
            </button>
            <button
              onClick={() => setFilter("data-science")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                filter === "data-science"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Data Science
            </button>
            <button
              onClick={() => setFilter("design")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                filter === "design"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setFilter("marketing")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                filter === "marketing"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Marketing
            </button>
          </nav>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                setActiveTab={setActiveTab}
                setSelectedCourse={setSelectedCourse}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowseCourses

