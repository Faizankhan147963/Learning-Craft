import { Calendar } from "lucide-react"

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Live Webinar: React Best Practices",
      date: "Apr 10, 2025",
      time: "3:00 PM - 4:30 PM",
    },
    {
      id: 2,
      title: "Assignment Deadline: JavaScript Project",
      date: "Apr 15, 2025",
      time: "11:59 PM",
    },
    {
      id: 3,
      title: "Group Discussion: UX Design Principles",
      date: "Apr 18, 2025",
      time: "2:00 PM - 3:00 PM",
    },
  ]

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">Upcoming Events</h3>
        <div className="mt-4 space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Calendar className="h-5 w-5 text-blue-500" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">{event.title}</p>
                <p className="text-xs text-gray-500">
                  {event.date} • {event.time}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <button className="text-sm font-medium text-blue-500 hover:text-blue-600">View all events</button>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents

