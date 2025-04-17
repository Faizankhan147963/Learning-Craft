"use client"

import { useState } from "react"

const Students = ({ course }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")

  // Mock data for students
  const allStudents = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      enrollmentDate: "2023-07-15",
      progress: 78,
      lastActive: "2023-08-12",
      courses: ["Web Development Masterclass", "UI/UX Design Fundamentals"],
      status: "active",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      enrollmentDate: "2023-07-20",
      progress: 45,
      lastActive: "2023-08-11",
      courses: ["Web Development Masterclass"],
      status: "active",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      enrollmentDate: "2023-06-10",
      progress: 92,
      lastActive: "2023-08-10",
      courses: ["Web Development Masterclass", "Python for Data Science"],
      status: "active",
    },
    {
      id: 4,
      name: "Diana Miller",
      email: "diana.miller@example.com",
      enrollmentDate: "2023-07-05",
      progress: 65,
      lastActive: "2023-08-08",
      courses: ["Web Development Masterclass"],
      status: "active",
    },
    {
      id: 5,
      name: "Edward Wilson",
      email: "edward.wilson@example.com",
      enrollmentDate: "2023-07-25",
      progress: 12,
      lastActive: "2023-08-01",
      courses: ["Web Development Masterclass", "Mobile App Development with React Native"],
      status: "inactive",
    },
    {
      id: 6,
      name: "Fiona Garcia",
      email: "fiona.garcia@example.com",
      enrollmentDate: "2023-06-20",
      progress: 88,
      lastActive: "2023-08-12",
      courses: ["Web Development Masterclass", "Digital Marketing Essentials"],
      status: "active",
    },
  ]

  // Filter students based on filter and search term
  const filteredStudents = allStudents.filter((student) => {
    const matchesFilter = filter === "all" || student.status === filter
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCourse = course ? student.courses.includes(course.title) : true
    return matchesFilter && matchesSearch && matchesCourse
  })

  const getProgressColor = (progress) => {
    if (progress >= 75) return "bg-green-500"
    if (progress >= 50) return "bg-yellow-500"
    if (progress >= 25) return "bg-orange-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
            {course ? `Students: ${course.title}` : "All Students"}
          </h2>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search students..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <select
              className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Students</option>
              <option value="active">Active Students</option>
              <option value="inactive">Inactive Students</option>
            </select>

            <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Student
            </button>
          </div>
        </div>

        {filteredStudents.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Student
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Enrollment Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Progress
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Last Active
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-600 flex items-center justify-center">
                          <span className="text-white font-medium">
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {new Date(student.enrollmentDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                          <div
                            className={`h-2.5 rounded-full ${getProgressColor(student.progress)}`}
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {new Date(student.lastActive).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          student.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-cyan-600 hover:text-cyan-900 mr-3">View</button>
                      <button className="text-gray-600 hover:text-gray-900">Message</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No students found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>

      {/* Student Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Enrollment</h3>
            <span className="text-2xl font-bold text-cyan-600">{filteredStudents.length}</span>
          </div>
          <p className="text-sm text-gray-500">Total students enrolled in {course ? course.title : "all courses"}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Average Progress</h3>
            <span className="text-2xl font-bold text-cyan-600">
              {filteredStudents.length > 0
                ? Math.round(
                    filteredStudents.reduce((sum, student) => sum + student.progress, 0) / filteredStudents.length,
                  )
                : 0}
              %
            </span>
          </div>
          <p className="text-sm text-gray-500">Average completion rate across all enrolled students</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Active Students</h3>
            <span className="text-2xl font-bold text-cyan-600">
              {filteredStudents.filter((student) => student.status === "active").length}
            </span>
          </div>
          <p className="text-sm text-gray-500">Students active in the last 7 days</p>
        </div>
      </div>
    </div>
  )
}

export default Students

