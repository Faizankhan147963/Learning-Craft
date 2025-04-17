import { TrendingUp, Users, Star } from "lucide-react"

const TopCoursesCard = () => {
  const courses = [
    {
      title: "Complete Web Development Bootcamp",
      instructor: "Jane Cooper",
      students: 1234,
      rating: 4.9,
      image: "/placeholder.svg?height=60&width=80",
    },
    {
      title: "Advanced JavaScript Concepts",
      instructor: "Robert Fox",
      students: 987,
      rating: 4.8,
      image: "/placeholder.svg?height=60&width=80",
    },
    {
      title: "UI/UX Design Masterclass",
      instructor: "Esther Howard",
      students: 876,
      rating: 4.7,
      image: "/placeholder.svg?height=60&width=80",
    },
    {
      title: "Data Science and Machine Learning",
      instructor: "Cameron Williamson",
      students: 765,
      rating: 4.9,
      image: "/placeholder.svg?height=60&width=80",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Top Performing Courses</h2>
        <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
      </div>

      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="w-20 h-15 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{course.title}</h3>
              <p className="text-sm text-gray-500">by {course.instructor}</p>
              <div className="flex items-center mt-1">
                <div className="flex items-center text-xs text-gray-500 mr-3">
                  <Users className="h-3 w-3 mr-1" />
                  {course.students.toLocaleString()} students
                </div>
                <div className="flex items-center text-xs text-yellow-500">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  {course.rating}
                </div>
              </div>
            </div>
            <div className="text-green-600 flex items-center text-sm font-medium">
              <TrendingUp className="h-4 w-4 mr-1" />
              +12%
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopCoursesCard

