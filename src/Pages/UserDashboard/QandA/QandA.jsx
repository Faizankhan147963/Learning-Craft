"use client"

import { useState } from "react"
import { Search, MessageCircle, Send, ThumbsUp, User } from "lucide-react"

const QandA = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("all")
  const [newQuestion, setNewQuestion] = useState("")

  const courses = [
    { id: "all", name: "All Courses" },
    { id: "web-dev", name: "Complete Web Development Bootcamp" },
    { id: "js", name: "JavaScript Masterclass" },
    { id: "react", name: "Advanced React & Redux" },
  ]

  const questions = [
    {
      id: 1,
      question: "How do I implement authentication in a React application?",
      course: "react",
      courseName: "Advanced React & Redux",
      askedBy: "John Doe",
      askedDate: "2 days ago",
      answers: [
        {
          id: 101,
          answer:
            'There are several ways to implement authentication in a React application. You can use libraries like Auth0, Firebase Authentication, or implement your own JWT-based authentication. For a Redux application, you would typically store the authentication state in your Redux store and create actions for login, logout, etc. I recommend checking out the "Authentication with JWT" section in module 8 of the course.',
          answeredBy: "Michael Chen",
          answeredDate: "1 day ago",
          isInstructor: true,
          likes: 5,
        },
        {
          id: 102,
          answer:
            "I used Firebase Authentication for my project and it was pretty straightforward to implement. The documentation is great and there are Firebase React hooks that make it even easier.",
          answeredBy: "Emma Wilson",
          answeredDate: "12 hours ago",
          isInstructor: false,
          likes: 2,
        },
      ],
      status: "answered",
    },
    {
      id: 2,
      question: "What's the difference between CSS Grid and Flexbox?",
      course: "web-dev",
      courseName: "Complete Web Development Bootcamp",
      askedBy: "John Doe",
      askedDate: "3 days ago",
      answers: [
        {
          id: 201,
          answer:
            "CSS Grid and Flexbox are both layout systems in CSS, but they serve different purposes. Flexbox is designed for one-dimensional layouts (either rows OR columns), while Grid is designed for two-dimensional layouts (rows AND columns). Flexbox is great for distributing space and aligning items in a single direction, while Grid is better for creating complex grid-based layouts. In the course, we cover both in detail in modules 3 and 4.",
          answeredBy: "Sarah Johnson",
          answeredDate: "2 days ago",
          isInstructor: true,
          likes: 8,
        },
      ],
      status: "answered",
    },
    {
      id: 3,
      question: "How do I debug asynchronous JavaScript code?",
      course: "js",
      courseName: "JavaScript Masterclass",
      askedBy: "John Doe",
      askedDate: "1 week ago",
      answers: [],
      status: "unanswered",
    },
  ]

  const filteredQuestions = questions.filter((question) => {
    const matchesCourse = selectedCourse === "all" || question.course === selectedCourse
    const matchesSearch = question.question.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCourse && matchesSearch
  })

  const handleSubmitQuestion = (e) => {
    e.preventDefault()
    // In a real app, you would submit the question to your backend
    setNewQuestion("")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Questions & Answers</h1>
        <p className="mt-1 text-sm text-gray-500">
          Ask questions and get answers from instructors and fellow students.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative max-w-md flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

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
      </div>

      {/* Ask a Question */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Ask a Question</h3>
          <form onSubmit={handleSubmitQuestion} className="mt-4">
            <div>
              <label htmlFor="course-select" className="block text-sm font-medium text-gray-700">
                Select Course
              </label>
              <select
                id="course-select"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                defaultValue={courses[1].id}
              >
                {courses
                  .filter((course) => course.id !== "all")
                  .map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                Your Question
              </label>
              <textarea
                id="question"
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="What would you like to ask?"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Post Question
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Questions List */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Questions</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedCourse("all")}
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                selectedCourse === "all" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() =>
                filteredQuestions.filter((q) => q.status === "unanswered").length > 0 ? setSelectedCourse("all") : null
              }
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                filteredQuestions.filter((q) => q.status === "unanswered").length > 0
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              Unanswered{" "}
              {filteredQuestions.filter((q) => q.status === "unanswered").length > 0 &&
                `(${filteredQuestions.filter((q) => q.status === "unanswered").length})`}
            </button>
          </div>
        </div>

        {filteredQuestions.length > 0 ? (
          <div className="mt-4 space-y-4">
            {filteredQuestions.map((question) => (
              <div key={question.id} className="overflow-hidden rounded-lg bg-white shadow">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{question.question}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Course: {question.courseName} • Asked by: {question.askedBy} • {question.askedDate}
                      </p>
                    </div>
                    {question.status === "unanswered" ? (
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                        Awaiting Answer
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Answered
                      </span>
                    )}
                  </div>

                  {/* Answers */}
                  {question.answers.length > 0 && (
                    <div className="mt-6 space-y-4">
                      <h4 className="text-sm font-medium text-gray-900">
                        {question.answers.length} {question.answers.length === 1 ? "Answer" : "Answers"}
                      </h4>

                      {question.answers.map((answer) => (
                        <div key={answer.id} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                                <User className="h-6 w-6" />
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">
                                  {answer.answeredBy}
                                  {answer.isInstructor && (
                                    <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                      Instructor
                                    </span>
                                  )}
                                </p>
                                <p className="text-xs text-gray-500">{answer.answeredDate}</p>
                              </div>
                              <div className="mt-2 text-sm text-gray-700">
                                <p>{answer.answer}</p>
                              </div>
                              <div className="mt-2 flex items-center space-x-4">
                                <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                                  <ThumbsUp className="mr-1 h-4 w-4" />
                                  {answer.likes} {answer.likes === 1 ? "Like" : "Likes"}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add Answer */}
                  <div className="mt-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                          <User className="h-6 w-6 text-gray-500" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <form>
                          <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                            <textarea
                              rows={3}
                              className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
                              placeholder="Add your answer..."
                            />

                            <div className="flex items-center justify-between border-t border-gray-200 py-2 pl-3 pr-2">
                              <div className="flex-shrink-0">
                                <button
                                  type="submit"
                                  className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-1 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                  <Send className="mr-2 h-4 w-4" />
                                  Post Answer
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 flex flex-col items-center justify-center rounded-lg bg-white py-12 px-4 text-center shadow sm:px-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No questions found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchQuery
                ? "Try adjusting your search or filter to find what you're looking for."
                : "Be the first to ask a question!"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default QandA

