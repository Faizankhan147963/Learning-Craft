"use client"

import { useState } from "react"

const Feedback = ({ course }) => {
  const [filter, setFilter] = useState("all")

  // Mock data for feedback
  const allFeedback = [
    {
      id: 1,
      studentName: "Alice Johnson",
      studentEmail: "alice.johnson@example.com",
      course: "Web Development Masterclass",
      content:
        "The course content is excellent and very well structured. I especially enjoyed the practical projects that helped me apply what I learned.",
      rating: 5,
      date: "2023-08-10",
      status: "published",
    },
    {
      id: 2,
      studentName: "Bob Smith",
      studentEmail: "bob.smith@example.com",
      course: "Web Development Masterclass",
      content:
        "Great course overall, but I think some of the advanced topics could use more detailed explanations. The assignments were challenging in a good way.",
      rating: 4,
      date: "2023-08-08",
      status: "published",
    },
    {
      id: 3,
      studentName: "Charlie Brown",
      studentEmail: "charlie.brown@example.com",
      course: "Python for Data Science",
      content:
        "The instructor explains complex concepts in a very understandable way. I would recommend adding more real-world examples to illustrate the applications of data science.",
      rating: 4,
      date: "2023-08-05",
      status: "published",
    },
    {
      id: 4,
      studentName: "Diana Miller",
      studentEmail: "diana.miller@example.com",
      course: "UI/UX Design Fundamentals",
      content:
        "This course exceeded my expectations! The design principles were clearly explained and the feedback on my projects was very helpful for my growth.",
      rating: 5,
      date: "2023-08-12",
      status: "pending",
    },
    {
      id: 5,
      studentName: "Edward Wilson",
      studentEmail: "edward.wilson@example.com",
      course: "Web Development Masterclass",
      content:
        "I found some of the content outdated, especially the sections on JavaScript frameworks. It would be great if these could be updated to reflect current best practices.",
      rating: 3,
      date: "2023-08-11",
      status: "pending",
    },
    {
      id: 6,
      studentName: "Fiona Garcia",
      studentEmail: "fiona.garcia@example.com",
      course: "Python for Data Science",
      content:
        "The course was good but I think it moved too quickly through some important topics. More practice exercises would have been helpful.",
      rating: 3,
      date: "2023-08-09",
      status: "published",
    },
  ]

  // Filter feedback based on filter and course
  const filteredFeedback = allFeedback.filter((feedback) => {
    const matchesFilter = filter === "all" || feedback.status === filter
    const matchesCourse = course ? feedback.course === course.title : true
    return matchesFilter && matchesCourse
  })

  // Calculate average rating
  const averageRating =
    filteredFeedback.length > 0
      ? (filteredFeedback.reduce((sum, feedback) => sum + feedback.rating, 0) / filteredFeedback.length).toFixed(1)
      : 0

  // Count ratings by star
  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => {
    return {
      rating,
      count: filteredFeedback.filter((feedback) => feedback.rating === rating).length,
      percentage:
        filteredFeedback.length > 0
          ? Math.round(
              (filteredFeedback.filter((feedback) => feedback.rating === rating).length / filteredFeedback.length) *
                100,
            )
          : 0,
    }
  })

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
            {course ? `Feedback: ${course.title}` : "All Feedback"}
          </h2>

          <div className="flex space-x-3">
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Feedback</option>
              <option value="published">Published</option>
              <option value="pending">Pending</option>
            </select>

            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              Export Feedback
            </button>
          </div>
        </div>

        {/* Rating Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="col-span-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Average Rating</h3>
            <div className="flex items-center">
              <span className="text-5xl font-bold text-cyan-600 mr-4">{averageRating}</span>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">Based on {filteredFeedback.length} reviews</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Rating Distribution</h3>
            <div className="space-y-3">
              {ratingCounts.map((ratingData) => (
                <div key={ratingData.rating} className="flex items-center">
                  <div className="flex items-center w-16">
                    <span className="text-sm font-medium text-gray-700 mr-2">{ratingData.rating}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="w-full ml-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full bg-yellow-400"
                        style={{ width: `${ratingData.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-16 text-right">
                    <span className="text-sm text-gray-500">{ratingData.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback List */}
        {filteredFeedback.length > 0 ? (
          <div className="space-y-6">
            {filteredFeedback.map((feedback) => (
              <div key={feedback.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-600 flex items-center justify-center">
                      <span className="text-white font-medium">
                        {feedback.studentName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{feedback.studentName}</div>
                      <div className="text-sm text-gray-500">{feedback.studentEmail}</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 ${i < feedback.rating ? "text-yellow-400" : "text-gray-300"}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {new Date(feedback.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{feedback.content}</p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Course: {feedback.course}</div>

                  <div className="flex space-x-3">
                    {feedback.status === "pending" && (
                      <>
                        <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          Approve
                        </button>
                        <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                          Reject
                        </button>
                      </>
                    )}
                    <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                      Reply
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
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No feedback found</h3>
            <p className="text-gray-500">There is no feedback available for this course yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Feedback

