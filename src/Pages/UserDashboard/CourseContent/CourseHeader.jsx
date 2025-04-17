import { Star, Users, Clock } from "lucide-react"

const CourseHeader = ({ course }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
            <p className="mt-1 text-sm text-gray-500">Instructor: {course.instructor}</p>

            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <span className="ml-1 text-sm font-medium text-gray-900">4.8</span>
              </div>
              <span className="mx-2 text-gray-500">•</span>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="ml-1 text-sm text-gray-500">12,500 students</span>
              </div>
              <span className="mx-2 text-gray-500">•</span>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="ml-1 text-sm text-gray-500">48 hours</span>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Continue Learning
            </button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600">{course.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseHeader

