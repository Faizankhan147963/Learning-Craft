import { Users, BookOpen, Video, Award, TrendingUp, Clock } from "lucide-react"
import StatCard from "../ui/StatCard"
import LineChart from "../ui/LineChart"
import BarChart from "../ui/BarChart"
import RecentActivitiesCard from "../ui/RecentActivitiesCard"
import TopCoursesCard from "../ui/TopCoursesCard"

const Dashboard = () => {
  // Sample data
  const stats = [
    { title: "Total Students", value: "5,234", icon: <Users className="h-6 w-6" />, change: "+12%", color: "blue" },
    { title: "Total Courses", value: "142", icon: <BookOpen className="h-6 w-6" />, change: "+5%", color: "green" },
    { title: "Live Classes", value: "38", icon: <Video className="h-6 w-6" />, change: "+18%", color: "purple" },
    {
      title: "Certificates Issued",
      value: "1,287",
      icon: <Award className="h-6 w-6" />,
      change: "+7%",
      color: "orange",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="flex space-x-2">
          <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            change={stat.change}
            color={stat.color}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Enrollment Trends</h2>
            <div className="flex items-center space-x-2 text-sm">
              <span className="flex items-center text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                +24% from last month
              </span>
            </div>
          </div>
          <LineChart />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Revenue by Category</h2>
            <div className="flex items-center space-x-2 text-sm">
              <span className="flex items-center text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                Last 30 days
              </span>
            </div>
          </div>
          <BarChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopCoursesCard />
        <RecentActivitiesCard />
      </div>
    </div>
  )
}

export default Dashboard

