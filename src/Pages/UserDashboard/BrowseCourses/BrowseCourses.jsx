
import { useState } from "react"
import { Search, Filter } from "lucide-react"
import CourseCard from "./CourseCard"

const BrowseCourses = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Development" },
    { id: "data", name: "Data Science" },
    { id: "design", name: "UI/UX Design" },
    { id: "business", name: "Business" },
  ]

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviews: 1245,
      students: 12500,
      price: 89.99,
      image: "/placeholder.svg?height=200&width=300",
      category: "web",
      level: "Beginner",
      duration: "48 hours",
    },
    {
      id: 2,
      title: "Advanced React & Redux",
      instructor: "Michael Chen",
      rating: 4.9,
      reviews: 876,
      students: 8900,
      price: 94.99,
      image: "/placeholder.svg?height=200&width=300",
      category: "web",
      level: "Advanced",
      duration: "36 hours",
    },
    {
      id: 3,
      title: "iOS App Development with Swift",
      instructor: "Emma Wilson",
      rating: 4.7,
      reviews: 654,
      students: 5600,
      price: 79.99,
      image: "/placeholder.svg?height=200&width=300",
      category: "mobile",
      level: "Intermediate",
      duration: "42 hours",
    },
    {
      id: 4,
      title: "Data Science & Machine Learning",
      instructor: "Robert Davis",
      rating: 4.9,
      reviews: 1120,
      students: 9800,
      price: 99.99,
      image: "/placeholder.svg?height=200&width=300",
      category: "data",
      level: "Intermediate",
      duration: "56 hours",
    },
    {
      id: 5,
      title: "UI/UX Design Masterclass",
      instructor: "Jessica Lee",
      rating: 4.8,
      reviews: 932,
      students: 7400,
      price: 84.99,
      image: "/placeholder.svg?height=200&width=300",
      category: "design",
      level: "All Levels",
      duration: "38 hours",
    },
    {
      id: 6,
      title: "Business Analytics & Intelligence",
      instructor: "David Thompson",
      rating: 4.6,
      reviews: 745,
      students: 6200,
      price: 74.99,
      image: "/placeholder.svg?height=200&width=300",
      category: "business",
      level: "Beginner",
      duration: "32 hours",
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Browse Courses</h1>
        <p className="mt-1 text-sm text-gray-500">
          Discover new skills, expand your knowledge, and advance your career.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative max-w-md flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search for courses or instructors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-500">Filter by:</span>
          <select
            className="rounded-md border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-lg font-medium text-gray-900">No courses found</p>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  )
}

export default BrowseCourses

