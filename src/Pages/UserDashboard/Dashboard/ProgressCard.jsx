import { PlayCircle } from "lucide-react"

const ProgressCard = ({ title, progress, lastAccessed, nextLesson }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            {progress}% Complete
          </span>
        </div>

        <div className="mt-4">
          <div className="relative h-2 overflow-hidden rounded-full bg-gray-200">
            <div className="absolute h-full rounded-full bg-blue-500" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span>Last accessed: {lastAccessed}</span>
          </div>
          <button className="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-3 py-2 text-sm font-medium leading-4 text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <PlayCircle className="mr-1 h-4 w-4" />
            Continue Learning
          </button>
        </div>

        <div className="mt-2 text-sm text-gray-500">
          <span>Next: {nextLesson}</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressCard

