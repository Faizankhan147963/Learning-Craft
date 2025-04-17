"use client"

import { useState } from "react"
import { Clock, CheckCircle, Upload, Download } from "lucide-react"

const Assignments = () => {
  const [activeTab, setActiveTab] = useState("pending")

  const tabs = [
    { id: "pending", label: "Pending" },
    { id: "submitted", label: "Submitted" },
    { id: "graded", label: "Graded" },
  ]

  const pendingAssignments = [
    {
      id: 1,
      title: "Build a Responsive Landing Page",
      course: "Complete Web Development Bootcamp",
      dueDate: "Apr 15, 2025",
      status: "pending",
      description:
        "Create a responsive landing page using HTML, CSS, and JavaScript. The page should include a hero section, features section, and a contact form.",
    },
    {
      id: 2,
      title: "JavaScript Todo App",
      course: "JavaScript Masterclass",
      dueDate: "Apr 18, 2025",
      status: "pending",
      description:
        "Build a todo application using vanilla JavaScript. The app should allow users to add, edit, delete, and mark tasks as complete.",
    },
  ]

  const submittedAssignments = [
    {
      id: 3,
      title: "CSS Grid Layout",
      course: "Complete Web Development Bootcamp",
      submittedDate: "Apr 5, 2025",
      status: "submitted",
      description:
        "Create a complex layout using CSS Grid. The layout should be responsive and include a header, footer, sidebar, and main content area.",
    },
  ]

  const gradedAssignments = [
    {
      id: 4,
      title: "HTML Structure and Semantics",
      course: "Complete Web Development Bootcamp",
      gradedDate: "Apr 2, 2025",
      status: "graded",
      grade: "A",
      feedback:
        "Excellent work! Your HTML structure is clean and you've used semantic elements appropriately. The document is well-organized and accessible.",
      description:
        "Create a semantic HTML structure for a blog post. The structure should include appropriate heading levels, sections, and semantic elements.",
    },
    {
      id: 5,
      title: "CSS Flexbox Layout",
      course: "Complete Web Development Bootcamp",
      gradedDate: "Mar 28, 2025",
      status: "graded",
      grade: "B+",
      feedback:
        "Good job on implementing flexbox. Your layout is responsive and works well on different screen sizes. Consider using more efficient selectors in your CSS.",
      description:
        "Create a layout using CSS Flexbox. The layout should include a navigation bar, card components, and a responsive design.",
    },
  ]

  let assignments = []
  switch (activeTab) {
    case "pending":
      assignments = pendingAssignments
      break
    case "submitted":
      assignments = submittedAssignments
      break
    case "graded":
      assignments = gradedAssignments
      break
    default:
      assignments = pendingAssignments
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your course assignments and submissions.</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {tab.label}
              {tab.id === "pending" && pendingAssignments.length > 0 && (
                <span className="ml-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  {pendingAssignments.length}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Assignment List */}
      {assignments.length > 0 ? (
        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{assignment.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{assignment.course}</p>
                  </div>
                  {assignment.status === "pending" && (
                    <div className="flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                      <Clock className="mr-1 h-4 w-4" />
                      Due: {assignment.dueDate}
                    </div>
                  )}
                  {assignment.status === "submitted" && (
                    <div className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      <CheckCircle className="mr-1 h-4 w-4" />
                      Submitted: {assignment.submittedDate}
                    </div>
                  )}
                  {assignment.status === "graded" && (
                    <div className="flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                      <CheckCircle className="mr-1 h-4 w-4" />
                      Grade: {assignment.grade}
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-600">{assignment.description}</p>
                </div>

                {assignment.status === "graded" && (
                  <div className="mt-4 rounded-md bg-gray-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">Instructor Feedback</h3>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>{assignment.feedback}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between">
                  <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <Download className="mr-2 h-4 w-4" />
                    Download Instructions
                  </button>

                  {assignment.status === "pending" && (
                    <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <Upload className="mr-2 h-4 w-4" />
                      Submit Assignment
                    </button>
                  )}

                  {assignment.status === "submitted" && (
                    <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      View Submission
                    </button>
                  )}

                  {assignment.status === "graded" && (
                    <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      View Submission
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white py-12 px-4 text-center shadow sm:px-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            {activeTab === "pending" ? (
              <Clock className="h-6 w-6 text-blue-600" />
            ) : activeTab === "submitted" ? (
              <Upload className="h-6 w-6 text-blue-600" />
            ) : (
              <CheckCircle className="h-6 w-6 text-blue-600" />
            )}
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No {activeTab} assignments</h3>
          <p className="mt-1 text-sm text-gray-500">
            {activeTab === "pending"
              ? "You don't have any pending assignments at the moment."
              : activeTab === "submitted"
                ? "You haven't submitted any assignments yet."
                : "You don't have any graded assignments yet."}
          </p>
        </div>
      )}
    </div>
  )
}

export default Assignments

