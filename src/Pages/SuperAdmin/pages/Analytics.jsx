import { BarChart, LineChart } from "../ui"
import { TrendingUp, Users, BookOpen, DollarSign, Calendar } from "lucide-react"

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
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
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">$48,294</h3>
            </div>
            <div className="p-3 rounded-full bg-green-50 text-green-600">
              <DollarSign className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium text-green-600">+12.5%</span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Enrollments</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">1,294</h3>
            </div>
            <div className="p-3 rounded-full bg-blue-50 text-blue-600">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium text-green-600">+8.2%</span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Course Completion</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">68.7%</h3>
            </div>
            <div className="p-3 rounded-full bg-purple-50 text-purple-600">
              <BookOpen className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium text-green-600">+4.3%</span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Students</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">3,945</h3>
            </div>
            <div className="p-3 rounded-full bg-orange-50 text-orange-600">
              <Calendar className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium text-green-600">+6.8%</span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Revenue Trends</h2>
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
            <h2 className="text-lg font-semibold text-gray-800">Enrollment by Category</h2>
          </div>
          <BarChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Top Performing Courses</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
          </div>

          <div className="space-y-4">
            {[
              { title: "Complete Web Development Bootcamp", students: 1234, revenue: "$12,345", growth: "+12%" },
              { title: "Advanced JavaScript Concepts", students: 987, revenue: "$9,876", growth: "+8%" },
              { title: "UI/UX Design Masterclass", students: 876, revenue: "$8,765", growth: "+15%" },
              { title: "Data Science and Machine Learning", students: 765, revenue: "$7,654", growth: "+10%" },
              { title: "Digital Marketing Strategies", students: 543, revenue: "$5,432", growth: "+5%" },
            ].map((course, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div>
                  <h3 className="font-medium text-gray-800">{course.title}</h3>
                  <div className="flex items-center mt-1">
                    <div className="text-xs text-gray-500 mr-3">
                      <span className="font-medium">{course.students}</span> students
                    </div>
                    <div className="text-xs text-gray-500">
                      <span className="font-medium">{course.revenue}</span> revenue
                    </div>
                  </div>
                </div>
                <div className="text-green-600 flex items-center text-sm font-medium">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {course.growth}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Top Instructors</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
          </div>

          <div className="space-y-4">
            {[
              { name: "Michael Brown", specialty: "Web Development", students: 1234, courses: 5, rating: 4.9 },
              { name: "Sarah Wilson", specialty: "JavaScript", students: 987, courses: 3, rating: 4.8 },
              { name: "David Lee", specialty: "UI/UX Design", students: 876, courses: 2, rating: 4.7 },
              { name: "Emily Johnson", specialty: "Data Science", students: 765, courses: 4, rating: 4.9 },
              { name: "John Smith", specialty: "Digital Marketing", students: 543, courses: 1, rating: 4.6 },
            ].map((instructor, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    {instructor.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-800">{instructor.name}</h3>
                    <div className="text-xs text-gray-500">{instructor.specialty}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{instructor.students} students</div>
                  <div className="text-xs text-gray-500">
                    {instructor.courses} courses • {instructor.rating} rating
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics

