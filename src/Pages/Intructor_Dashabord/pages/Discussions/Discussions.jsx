"use client"

import { useState } from "react"

const Discussions = ({ course }) => {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data for discussions
  const allDiscussions = [
    {
      id: 1,
      title: "How to implement authentication in React?",
      content:
        "I'm trying to implement user authentication in my React app. What's the best approach? Should I use JWT or session-based auth?",
      author: "Alice Johnson",
      authorEmail: "alice.johnson@example.com",
      course: "Web Development Masterclass",
      replies: 8,
      views: 42,
      lastActivity: "2023-08-12T14:30:00",
      status: "open",
      pinned: true,
    },
    {
      id: 2,
      title: "Trouble with CSS Grid layout",
      content: "I'm having issues with my CSS Grid layout. The items are not aligning as expected. Here's my code...",
      author: "Bob Smith",
      authorEmail: "bob.smith@example.com",
      course: "Web Development Masterclass",
      replies: 5,
      views: 28,
      lastActivity: "2023-08-11T10:15:00",
      status: "open",
      pinned: false,
    },
    {
      id: 3,
      title: "Error when running pandas dataframe operations",
      content:
        "I'm getting a KeyError when trying to access a column in my pandas dataframe. Here's the error message...",
      author: "Charlie Brown",
      authorEmail: "charlie.brown@example.com",
      course: "Python for Data Science",
      replies: 3,
      views: 19,
      lastActivity: "2023-08-10T16:45:00",
      status: "open",
      pinned: false,
    },
    {
      id: 4,
      title: "Best practices for responsive design",
      content: "What are some best practices for ensuring a website is fully responsive across all device sizes?",
      author: "Diana Miller",
      authorEmail: "diana.miller@example.com",
      course: "Web Development Masterclass",
      replies: 12,
      views: 56,
      lastActivity: "2023-08-09T09:20:00",
      status: "closed",
      pinned: false,
    },
    {
      id: 5,
      title: "How to optimize matplotlib visualizations?",
      content:
        "My matplotlib visualizations are looking a bit basic. How can I make them more professional and visually appealing?",
      author: "Edward Wilson",
      authorEmail: "edward.wilson@example.com",
      course: "Python for Data Science",
      replies: 7,
      views: 34,
      lastActivity: "2023-08-08T11:30:00",
      status: "open",
      pinned: false,
    },
    {
      id: 6,
      title: "Feedback on my portfolio design",
      content:
        "I've created a portfolio website following the principles taught in the course. Would appreciate some feedback on the design...",
      author: "Fiona Garcia",
      authorEmail: "fiona.garcia@example.com",
      course: "UI/UX Design Fundamentals",
      replies: 9,
      views: 41,
      lastActivity: "2023-08-07T15:10:00",
      status: "open",
      pinned: false,
    },
  ]

  // Filter discussions based on tab, search term, and course
  const filteredDiscussions = allDiscussions.filter((discussion) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "open" && discussion.status === "open") ||
      (activeTab === "closed" && discussion.status === "closed") ||
      (activeTab === "pinned" && discussion.pinned)
    const matchesSearch =
      discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCourse = course ? discussion.course === course.title : true
    return matchesTab && matchesSearch && matchesCourse
  })

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
            {course ? `Discussions: ${course.title}` : "All Discussions"}
          </h2>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search discussions..."
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
              New Discussion
            </button>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "all"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              All Discussions
            </button>
            <button
              onClick={() => setActiveTab("open")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "open"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Open
            </button>
            <button
              onClick={() => setActiveTab("closed")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "closed"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Closed
            </button>
            <button
              onClick={() => setActiveTab("pinned")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "pinned"
                  ? "border-cyan-500 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Pinned
            </button>
          </nav>
        </div>

        {filteredDiscussions.length > 0 ? (
          <div className="space-y-4">
            {filteredDiscussions.map((discussion) => (
              <div
                key={discussion.id}
                className={`border ${discussion.pinned ? "border-yellow-200 bg-yellow-50" : "border-gray-200 bg-gray-50"} rounded-lg p-6 hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      {discussion.pinned && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <h3 className="text-lg font-semibold text-gray-800">{discussion.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{discussion.content}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="flex items-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                        {discussion.replies} replies
                      </span>
                      <span className="flex items-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {discussion.views} views
                      </span>
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {new Date(discussion.lastActivity).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        discussion.status === "open" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {discussion.status.charAt(0).toUpperCase() + discussion.status.slice(1)}
                    </span>
                    <div className="flex items-center mt-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-cyan-600 flex items-center justify-center">
                        <span className="text-white text-xs font-medium">
                          {discussion.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="ml-2">
                        <div className="text-xs font-medium text-gray-900">{discussion.author}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">Course: {discussion.course}</div>

                  <div className="flex space-x-2">
                    <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                      Reply
                    </button>
                    {discussion.status === "open" && (
                      <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                        Close
                      </button>
                    )}
                    {!discussion.pinned && (
                      <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                        Pin
                      </button>
                    )}
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
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No discussions found</h3>
            <p className="text-gray-500 mb-4">
              {activeTab === "all"
                ? "There are no discussions for this course yet."
                : `There are no ${activeTab} discussions.`}
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
              Start a Discussion
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Discussions

