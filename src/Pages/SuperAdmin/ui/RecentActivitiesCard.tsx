import { Clock } from "lucide-react"

const RecentActivitiesCard = () => {
  const activities = [
    {
      user: "John Smith",
      action: "enrolled in",
      target: "Advanced React Development",
      time: "2 minutes ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      user: "Emily Johnson",
      action: "completed",
      target: "Introduction to Python Programming",
      time: "15 minutes ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      user: "Michael Brown",
      action: "submitted assignment for",
      target: "Data Science Fundamentals",
      time: "1 hour ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      user: "Sarah Wilson",
      action: "received certificate for",
      target: "UX Design Principles",
      time: "3 hours ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      user: "David Lee",
      action: "joined live class",
      target: "Digital Marketing Strategies",
      time: "5 hours ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
        <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start">
            <img
              src={activity.avatar || "/placeholder.svg"}
              alt={activity.user}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="flex-1">
              <p className="text-sm text-gray-800">
                <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                <span className="font-medium text-blue-600">{activity.target}</span>
              </p>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                {activity.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivitiesCard

