"use client"

import { useState } from "react"

const Progress = ({ course }) => {
  const [selectedCourse, setSelectedCourse] = useState(course ? course.id : "all")

  // Mock data for courses
  const courses = [
    { id: 1, title: "Web Development Masterclass" },
    { id: 2, title: "Python for Data Science" },
    { id: 3, title: "UI/UX Design Fundamentals" },
  ]

  // Mock data for student progress
  const studentProgress = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      courseId: 1,
      progress: 78,
      completedLessons: 32,
      totalLessons: 42,
      completedAssignments: 8,
      totalAssignments: 10,
      quizScores: [85, 92, 78, 90],
      lastActive: "2023-08-12",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      courseId: 1,
      progress: 45,
      completedLessons: 18,
      totalLessons: 42,
      completedAssignments: 4,
      totalAssignments: 10,
      quizScores: [75, 68, 82],
      lastActive: "2023-08-11",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      courseId: 1,
      progress: 92,
      completedLessons: 38,
      totalLessons: 42,
      completedAssignments: 9,
      totalAssignments: 10,
      quizScores: [95, 88, 92, 90],
      lastActive: "2023-08-10",
    },
    {
      id: 4,
      name: "Diana Miller",
      email: "diana.miller@example.com",
      courseId: 2,
      progress: 65,
      completedLessons: 24,
      totalLessons: 38,
      completedAssignments: 6,
      totalAssignments: 8,
      quizScores: [78, 85, 72],
      lastActive: "2023-08-08",
    },
    {
      id: 5,
      name: "Edward Wilson",
      email: "edward.wilson@example.com",
      courseId: 2,
      progress: 32,
      completedLessons: 12,
      totalLessons: 38,
      completedAssignments: 2,
      totalAssignments: 8,
      quizScores: [65, 70],
      lastActive: "2023-08-01",
    },
    {
      id: 6,
      name: "Fiona Garcia",
      email: "fiona.garcia@example.com",
      courseId: 3,
      progress: 88,
      completedLessons: 20,
      totalLessons: 24,
      completedAssignments: 5,
      totalAssignments: 6,
      quizScores: [92, 88, 95],
      lastActive: "2023-08-12",
    },
  ]

  // Filter students based on selected course
  const filteredStudents = studentProgress.filter((student) => {
    return selectedCourse === "all" || student.courseId === Number.parseInt(selectedCourse)
  })

  // Calculate average progress
  const averageProgress =
    filteredStudents.length > 0
      ? Math.round(filteredStudents.reduce((sum, student) => sum + student.progress, 0) / filteredStudents.length)
      : 0

  // Calculate average quiz score
  const averageQuizScore =
    filteredStudents.length > 0
      ? Math.round(
          filteredStudents.reduce(
            (sum, student) => sum + student.quizScores.reduce((a, b) => a + b, 0) / student.quizScores.length,
            0,
          ) / filteredStudents.length,
        )
      : 0

  // Get progress color based on percentage
  const getProgressColor = (progress) => {
    if (progress >= 75) return "bg-green-500"
    if (progress >= 50) return "bg-yellow-500"
    if (progress >= 25) return "bg-orange-500"
    return "bg-red-500"
  }

  // Get average quiz score for a student
  const getAverageQuizScore = (quizScores) => {
    return quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">Student Progress</h2>

          <div className="w-full md:w-64">
            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="all">All Courses</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Average Progress</h3>
              <span className="text-2xl font-bold text-cyan-600">{averageProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className={`h-2.5 rounded-full ${getProgressColor(averageProgress)}`}
                style={{ width: `${averageProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">Average course completion across all students</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Assignment Completion</h3>
              <span className="text-2xl font-bold text-cyan-600">
                {filteredStudents.length > 0
                  ? Math.round(
                      (filteredStudents.reduce((sum, student) => sum + student.completedAssignments, 0) /
                        filteredStudents.reduce((sum, student) => sum + student.totalAssignments, 0)) *
                        100,
                    )
                  : 0}
                %
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="h-2.5 rounded-full bg-blue-500"
                style={{
                  width: `${
                    filteredStudents.length > 0
                      ? Math.round(
                          (filteredStudents.reduce((sum, student) => sum + student.completedAssignments, 0) /
                            filteredStudents.reduce((sum, student) => sum + student.totalAssignments, 0)) *
                            100,
                        )
                      : 0
                  }%`,
                }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">Percentage of assignments completed by students</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Average Quiz Score</h3>
              <span className="text-2xl font-bold text-cyan-600">{averageQuizScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div className="h-2.5 rounded-full bg-purple-500" style={{ width: `${averageQuizScore}%` }}></div>
            </div>
            <p className="text-sm text-gray-500">Average score across all quizzes and assessments</p>
          </div>
        </div>

        {/* Student Progress Table */}
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
                    Progress
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Lessons
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Assignments
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quiz Avg.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Last Active
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
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2 w-24">
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
                        {student.completedLessons} / {student.totalLessons}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {student.completedAssignments} / {student.totalAssignments}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{getAverageQuizScore(student.quizScores)}%</div>
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
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-cyan-600 hover:text-cyan-900">View Details</button>
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No student data available</h3>
            <p className="text-gray-500">There are no students enrolled in this course yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Progress

