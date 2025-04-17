import { BookOpen, Clock, Award, CheckCircle } from "lucide-react"
import ProgressCard from "./ProgressCard"
import RecentActivity from "./RecentActivity"
import UpcomingEvents from "./UpcomingEvents"

const Dashboard = () => {
  const stats = [
    { id: 1, name: "Enrolled Courses", value: "12", icon: <BookOpen className="h-6 w-6 text-blue-500" /> },
    { id: 2, name: "Hours Learned", value: "87", icon: <Clock className="h-6 w-6 text-blue-500" /> },
    { id: 3, name: "Certificates", value: "3", icon: <Award className="h-6 w-6 text-blue-500" /> },
    { id: 4, name: "Completed Courses", value: "7", icon: <CheckCircle className="h-6 w-6 text-blue-500" /> },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back, John! Here's an overview of your learning journey.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">{stat.icon}</div>
              <div className="ml-5 w-0 flex-1">
                <dt className="truncate text-sm font-medium text-gray-500">{stat.name}</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="col-span-2">
          <h2 className="mb-4 text-lg font-medium text-gray-900">Your Learning Progress</h2>
          <div className="space-y-4">
            <ProgressCard
              title="Advanced Web Development"
              progress={75}
              lastAccessed="Today"
              nextLesson="CSS Grid Layouts"
            />
            <ProgressCard
              title="Data Science Fundamentals"
              progress={45}
              lastAccessed="Yesterday"
              nextLesson="Statistical Analysis"
            />
            <ProgressCard
              title="Mobile App Development"
              progress={20}
              lastAccessed="3 days ago"
              nextLesson="UI Components"
            />
          </div>
        </div>

        <div className="space-y-5">
          <UpcomingEvents />
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

