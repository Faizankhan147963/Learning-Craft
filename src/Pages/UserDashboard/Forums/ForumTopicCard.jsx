import { MessageCircle, Eye, Clock } from "lucide-react"

const ForumTopicCard = ({ topic }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow transition-all duration-200 hover:shadow-md">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h3 className="text-lg font-medium text-gray-900">{topic.title}</h3>
            <div className="ml-2 flex space-x-1">
              {topic.isNew && (
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  New
                </span>
              )}
              {topic.isHot && (
                <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  Hot
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{topic.excerpt}</p>

        <div className="mt-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt={topic.author} />
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-900">{topic.author}</p>
            </div>
          </div>

          <div className="mt-2 flex space-x-4 text-sm text-gray-500 sm:mt-0">
            <div className="flex items-center">
              <MessageCircle className="mr-1 h-4 w-4 text-gray-400" />
              {topic.replies} replies
            </div>
            <div className="flex items-center">
              <Eye className="mr-1 h-4 w-4 text-gray-400" />
              {topic.views} views
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4 text-gray-400" />
              {topic.lastActivity}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForumTopicCard

