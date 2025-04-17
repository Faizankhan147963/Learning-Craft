import { Calendar, Clock, Video, Users, Play, ExternalLink } from "lucide-react"

const LiveClassCard = ({ liveClass }) => {
  const isUpcoming = liveClass.status === "upcoming"

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{liveClass.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{liveClass.course}</p>
          </div>
          {isUpcoming ? (
            <div className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              <Calendar className="mr-1 h-4 w-4" />
              {liveClass.date}
            </div>
          ) : (
            <div className="flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              <Video className="mr-1 h-4 w-4" />
              Recorded
            </div>
          )}
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600">{liveClass.description}</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {isUpcoming && (
            <>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">{liveClass.time}</span>
              </div>
              <div className="flex items-center">
                <Video className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">{liveClass.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">{liveClass.attendees} attendees</span>
              </div>
            </>
          )}

          {!isUpcoming && (
            <>
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">Recorded: {liveClass.date}</span>
              </div>
              <div className="flex items-center">
                <Video className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">{liveClass.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">{liveClass.views} views</span>
              </div>
            </>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">Instructor: {liveClass.instructor}</div>

          {isUpcoming ? (
            <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <ExternalLink className="mr-2 h-4 w-4" />
              Join Class
            </button>
          ) : (
            <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Play className="mr-2 h-4 w-4" />
              Watch Recording
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default LiveClassCard

