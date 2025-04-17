import { Star, Clock, Users, BookOpen, Heart } from "lucide-react"

const CourseCard = ({ course }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow transition-all duration-200 hover:shadow-md">
      <div className="relative">
        <img src={course.image || "/placeholder.svg"} alt={course.title} className="h-48 w-full object-cover" />
        <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 text-gray-400 hover:text-red-500 focus:outline-none">
          <Heart className="h-5 w-5" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            {course.level}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 line-clamp-2">{course.title}</h3>
        <p className="mt-1 text-sm text-gray-500">by {course.instructor}</p>

        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
            <span className="ml-1 text-sm font-medium text-gray-900">{course.rating}</span>
          </div>
          <span className="mx-1 text-gray-500">•</span>
          <span className="text-sm text-gray-500">{course.reviews} reviews</span>
        </div>

        <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            {course.students.toLocaleString()} students
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${course.price}</span>
          <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <BookOpen className="mr-1 h-4 w-4" />
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard

