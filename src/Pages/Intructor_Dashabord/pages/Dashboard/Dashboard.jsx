"use client"

import StatCard from "../../components/StatCard"
import CourseCard from "../../components/CourseCard"

const Dashboard = ({ setActiveTab, setSelectedCourse }) => {
  // Mock data for dashboard
  const stats = [
    {
      title: "Total Courses",
      value: "12",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      color: "bg-cyan-600",
      percentage: "8.2",
      trend: "up",
    },
    {
      title: "Active Students",
      value: "1,248",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      color: "bg-green-600",
      percentage: "12.5",
      trend: "up",
    },
    {
      title: "Course Completion",
      value: "78%",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "bg-blue-600",
      percentage: "3.1",
      trend: "up",
    },
    {
      title: "Total Revenue",
      value: "$24,568",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "bg-purple-600",
      percentage: "2.3",
      trend: "down",
    },
  ]

  const recentCourses = [
    {
      id: 1,
      title: "Web Development Masterclass",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack web developer.",
      status: "Published",
      duration: "42 hours",
      students: 856,
      rating: 4.8,
      reviews: 124,
      price: 89.99,
      instructor: "John Doe",
      featured: true,
    },
    {
      id: 2,
      title: "Python for Data Science",
      description:
        "Master Python programming and learn how to use it for data analysis, visualization, and machine learning.",
      status: "Published",
      duration: "38 hours",
      students: 723,
      rating: 4.7,
      reviews: 98,
      price: 79.99,
      instructor: "Jane Smith",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      description:
        "Learn the principles of user interface and user experience design to create beautiful, functional products.",
      status: "Draft",
      duration: "24 hours",
      students: 0,
      rating: 0,
      reviews: 0,
      price: 69.99,
      instructor: "John Doe",
    },
  ]

  const upcomingClasses = [
    {
      id: 1,
      title: "JavaScript Advanced Concepts",
      date: "2023-08-15T14:00:00",
      duration: "1.5 hours",
      students: 42,
      course: "Web Development Masterclass",
    },
    {
      id: 2,
      title: "Introduction to Machine Learning",
      date: "2023-08-16T10:00:00",
      duration: "2 hours",
      students: 38,
      course: "Python for Data Science",
    },
    {
      id: 3,
      title: "Responsive Design Workshop",
      date: "2023-08-17T15:30:00",
      duration: "1 hour",
      students: 27,
      course: "Web Development Masterclass",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
            percentage={stat.percentage}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Recent Courses Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Recent Courses</h2>
          <button
            onClick={() => setActiveTab("browseCourses")}
            className="text-cyan-600 hover:text-cyan-800 font-medium text-sm focus:outline-none flex items-center"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              setActiveTab={setActiveTab}
              setSelectedCourse={setSelectedCourse}
            />
          ))}
        </div>
      </div>

      {/* Upcoming Live Classes */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Upcoming Live Classes</h2>
          <button
            onClick={() => setActiveTab("liveClasses")}
            className="text-cyan-600 hover:text-cyan-800 font-medium text-sm focus:outline-none flex items-center"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Class
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date & Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Duration
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Enrolled
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Course
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {upcomingClasses.map((cls) => (
                <tr key={cls.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{cls.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(cls.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(cls.date).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{cls.duration}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{cls.students} students</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{cls.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-cyan-600 hover:text-cyan-900 mr-3">Edit</button>
                    <button className="text-green-600 hover:text-green-900">Start</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => setActiveTab("courseContent")}
            className="flex flex-col items-center justify-center p-6 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-cyan-600 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Create New Course</span>
          </button>

          <button
            onClick={() => setActiveTab("liveClasses")}
            className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">Schedule Live Class</span>
          </button>

          <button
            onClick={() => setActiveTab("assignments")}
            className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">Create Assignment</span>
          </button>

          <button
            onClick={() => setActiveTab("analytics")}
            className="flex flex-col items-center justify-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-purple-600 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">View Analytics</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

