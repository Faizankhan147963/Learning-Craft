"use client"

import { useState } from "react"

const Assignments = ({ course }) => {
  const [activeTab, setActiveTab] = useState("all")

  // Mock data for assignments
  const allAssignments = [
    {
      id: 1,
      title: "Build a Responsive Website",
      description: "Create a responsive website using HTML, CSS, and JavaScript.",
      dueDate: "2023-08-20",
      course: "Web Development Masterclass",
      totalSubmissions: 32,
      pendingReviews: 8,
      status: "active",
    },
    {
      id: 2,
      title: "Data Visualization Project",
      description: "Create visualizations using Python libraries like Matplotlib and Seaborn.",
      dueDate: "2023-08-25",
      course: "Python for Data Science",
      totalSubmissions: 28,
      pendingReviews: 12,
      status: "active",
    },
    {
      id: 3,
      title: "UI Design Challenge",
      description: "Design a mobile app interface following the provided requirements.",
      dueDate: "2023-08-15",
      course: "UI/UX Design Fundamentals",
      totalSubmissions: 18,
      pendingReviews: 0,
      status: "past",
    },
    {
      id: 4,
      title: "JavaScript Algorithms",
      description: "Implement various algorithms using JavaScript.",
      dueDate: "2023-08-10",
      course: "Web Development Masterclass",
      totalSubmissions: 35,
      pendingReviews: 0,
      status: "past",
    },
    {
      id: 5,
      title: "React Component Library",
      description: "Build a reusable component library using React.",
      dueDate: "2023-09-05",
      course: "Web Development Masterclass",
      totalSubmissions: 0,
      pendingReviews: 0,
      status: "upcoming",
    },
    {
      id: 6,
      title: "Machine Learning Model",
      description: "Train a machine learning model to solve a classification problem.",
      dueDate: "2023-09-10",
      course: "Python for Data Science",
      totalSubmissions: 0,
      pendingReviews: 0,
      status: "upcoming",
    },
  ]

  // Filter assignments based on tab and course
  const filteredAssignments = allAssignments.filter((assignment) => {
    const matchesTab = activeTab === "all" || assignment.status === activeTab
    const matchesCourse = course ? assignment.course === course.title : true
    return matchesTab && matchesCourse
  })

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            {course ? `Assignments: ${course.title}` : "All Assignments"}
          </h2>

          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create Assignment
          </button>
        </div>

        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setActiveTab("all")}
              className={`w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === "all"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("active")}
              className={`w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === "active"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === "upcoming"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === "past"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Past
            </button>
          </nav>
        </div>

        <div className="p-6">
          {filteredAssignments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssignments.map((assignment) => (
                <div key={assignment.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          assignment.status === "active"
                            ? "bg-green-100 text-green-800"
                            : assignment.status === "upcoming"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {assignment.status === "active"
                          ? "Active"
                          : assignment.status === "upcoming"
                            ? "Upcoming"
                            : "Past"}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{assignment.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        Due:{" "}
                        {new Date(assignment.dueDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>

                      <div className="flex items-center text-sm text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        {assignment.course}
                      </div>

                      {assignment.status !== "upcoming" && (
                        <div className="flex items-center text-sm text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                          {assignment.totalSubmissions} submissions
                        </div>
                      )}
                    </div>

                    {assignment.status === "active" && assignment.pendingReviews > 0 && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-yellow-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                              {assignment.pendingReviews} submissions pending review
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                        {assignment.status === "active"
                          ? "Review Submissions"
                          : assignment.status === "upcoming"
                            ? "Edit Assignment"
                            : "View Results"}
                      </button>
                      <button className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No assignments found</h3>
              <p className="text-gray-500 mb-4">
                {activeTab === "all"
                  ? "You haven't created any assignments yet."
                  : `You don't have any ${activeTab} assignments.`}
              </p>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Create Assignment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Assignments

