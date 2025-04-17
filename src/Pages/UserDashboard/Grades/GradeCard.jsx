import { FileText, Award, Clock } from "lucide-react"

const GradeCard = ({ grade }) => {
  const isCompleted = grade.status === "completed"

  // Calculate grade letter
  const getGradeLetter = (score) => {
    if (score >= 90) return "A"
    if (score >= 80) return "B"
    if (score >= 70) return "C"
    if (score >= 60) return "D"
    return "F"
  }

  // Get icon based on grade type
  const getIcon = (type) => {
    switch (type) {
      case "quiz":
        return <FileText className="h-6 w-6 text-blue-500" />
      case "assignment":
        return <FileText className="h-6 w-6 text-purple-500" />
      case "project":
        return <FileText className="h-6 w-6 text-green-500" />
      default:
        return <FileText className="h-6 w-6 text-gray-500" />
    }
  }

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">{getIcon(grade.type)}</div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">{grade.title}</h3>
              <p className="text-sm text-gray-500">{grade.courseName}</p>
            </div>
          </div>

          {isCompleted ? (
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-blue-50">
              <span className="text-2xl font-bold text-blue-600">{getGradeLetter(grade.score)}</span>
              <span className="text-xs text-blue-600">{grade.score}%</span>
            </div>
          ) : (
            <div className="flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
              <Clock className="mr-1 h-4 w-4" />
              Pending
            </div>
          )}
        </div>

        {isCompleted && (
          <div className="mt-4">
            <div className="relative h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className={`absolute h-full rounded-full ${
                  grade.score >= 90
                    ? "bg-green-500"
                    : grade.score >= 80
                      ? "bg-blue-500"
                      : grade.score >= 70
                        ? "bg-yellow-500"
                        : "bg-red-500"
                }`}
                style={{ width: `${grade.score}%` }}
              ></div>
            </div>

            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-gray-500">
                Score: {grade.score}/{grade.maxScore}
              </span>
              <span className="text-gray-500">Date: {grade.date}</span>
            </div>
          </div>
        )}

        {isCompleted && grade.feedback && (
          <div className="mt-4 rounded-md bg-gray-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <Award className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Instructor Feedback</h3>
                <div className="mt-2 text-sm text-gray-700">
                  <p>{grade.feedback}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isCompleted && (
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Type: {grade.type.charAt(0).toUpperCase() + grade.type.slice(1)}
            </span>
            <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              View Details
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default GradeCard

