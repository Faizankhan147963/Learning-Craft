"use client"

import { useState } from "react"
import { CheckCircle, AlertCircle, Award } from "lucide-react"
import GradeCard from "./GradeCard"

const Grades = () => {
  const [selectedCourse, setSelectedCourse] = useState("all")

  const courses = [
    { id: "all", name: "All Courses" },
    { id: "web-dev", name: "Complete Web Development Bootcamp" },
    { id: "js", name: "JavaScript Masterclass" },
    { id: "react", name: "Advanced React & Redux" },
  ]

  const grades = [
    {
      id: 1,
      title: "HTML Basics Quiz",
      type: "quiz",
      course: "web-dev",
      courseName: "Complete Web Development Bootcamp",
      date: "Apr 5, 2025",
      score: 92,
      maxScore: 100,
      feedback: "Excellent understanding of HTML fundamentals. Great job!",
      status: "completed",
    },
    {
      id: 2,
      title: "CSS Grid Layout",
      type: "assignment",
      course: "web-dev",
      courseName: "Complete Web Development Bootcamp",
      date: "Apr 8, 2025",
      score: 85,
      maxScore: 100,
      feedback: "Good implementation of CSS Grid. Consider using more semantic class names.",
      status: "completed",
    },
    {
      id: 3,
      title: "JavaScript Variables and Types",
      type: "quiz",
      course: "js",
      courseName: "JavaScript Masterclass",
      date: "Mar 28, 2025",
      score: 78,
      maxScore: 100,
      feedback: "Good understanding of basic concepts. Review the section on type coercion.",
      status: "completed",
    },
    {
      id: 4,
      title: "React Component Assignment",
      type: "assignment",
      course: "react",
      courseName: "Advanced React & Redux",
      date: "Apr 12, 2025",
      score: 90,
      maxScore: 100,
      feedback: "Excellent component structure and state management. Consider adding more comments to your code.",
      status: "completed",
    },
    {
      id: 5,
      title: "JavaScript Todo App",
      type: "project",
      course: "js",
      courseName: "JavaScript Masterclass",
      date: "Pending",
      status: "pending",
    },
  ]

  const filteredGrades = grades.filter((grade) => selectedCourse === "all" || grade.course === selectedCourse)

  const completedGrades = filteredGrades.filter((grade) => grade.status === "completed")

  const calculateAverageScore = () => {
    if (completedGrades.length === 0) return 0
    const totalScore = completedGrades.reduce((sum, grade) => sum + grade.score, 0)
    return Math.round(totalScore / completedGrades.length)
  }

  const averageScore = calculateAverageScore()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Grades & Feedback</h1>
        <p className="mt-1 text-sm text-gray-500">Track your performance and review instructor feedback.</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Award className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="truncate text-sm font-medium text-gray-500">Average Score</dt>
              <dd className="mt-1 flex items-baseline">
                <div className="text-3xl font-semibold text-gray-900">{averageScore}%</div>
                <div className="ml-2">
                  {averageScore >= 90 ? (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Excellent
                    </span>
                  ) : averageScore >= 80 ? (
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      Good
                    </span>
                  ) : averageScore >= 70 ? (
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      Satisfactory
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                      Needs Improvement
                    </span>
                  )}
                </div>
              </dd>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="truncate text-sm font-medium text-gray-500">Completed Assessments</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{completedGrades.length}</dd>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="truncate text-sm font-medium text-gray-500">Pending Assessments</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {filteredGrades.filter((grade) => grade.status === "pending").length}
              </dd>
            </div>
          </div>
        </div>
      </div>

      {/* Course Filter */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">Filter by course:</span>
        <select
          className="rounded-md border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* Grades List */}
      {filteredGrades.length > 0 ? (
        <div className="space-y-4">
          {filteredGrades.map((grade) => (
            <GradeCard key={grade.id} grade={grade} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white py-12 px-4 text-center shadow sm:px-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Award className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No grades found</h3>
          <p className="mt-1 text-sm text-gray-500">You don't have any grades for the selected course yet.</p>
        </div>
      )}
    </div>
  )
}

export default Grades

