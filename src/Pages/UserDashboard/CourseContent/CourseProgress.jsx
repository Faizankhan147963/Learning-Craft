import { CheckCircle } from "lucide-react"

const CourseProgress = ({ course }) => {
  const progressPercentage = Math.round((course.completedLessons / course.totalLessons) * 100)

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Your Progress</h3>
        <span className="text-sm font-medium text-blue-600">{progressPercentage}% Complete</span>
      </div>

      <div className="mt-2">
        <div className="relative h-2 overflow-hidden rounded-full bg-gray-200">
          <div className="absolute h-full rounded-full bg-blue-500" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
          <span>
            {course.completedLessons} of {course.totalLessons} lessons completed
          </span>
        </div>
      </div>
    </div>
  )
}

export default CourseProgress

