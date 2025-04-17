import { Clock, Calendar, CheckCircle, AlertCircle } from "lucide-react"

const QuizCard = ({ quiz }) => {
  const isCompleted = quiz.status === "completed"

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{quiz.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{quiz.course}</p>
          </div>
          {isCompleted ? (
            <div className="flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              <CheckCircle className="mr-1 h-4 w-4" />
              {quiz.score}%
            </div>
          ) : (
            <div className="flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
              <AlertCircle className="mr-1 h-4 w-4" />
              Due Soon
            </div>
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Clock className="mr-2 h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-500">{quiz.timeLimit}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-500">
              {isCompleted ? `Completed: ${quiz.completedDate}` : `Due: ${quiz.dueDate}`}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">{quiz.questions} questions</span>
          {isCompleted ? (
            <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Review Quiz
            </button>
          ) : (
            <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Start Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuizCard

