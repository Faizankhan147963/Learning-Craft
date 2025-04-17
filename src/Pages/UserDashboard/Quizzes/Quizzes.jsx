"use client"

import { useState } from "react"
import { Clock, CheckCircle, ArrowRight } from "lucide-react"
import QuizCard from "./QuizCard"

const Quizzes = () => {
  const [activeTab, setActiveTab] = useState("upcoming")

  const tabs = [
    { id: "upcoming", label: "Upcoming" },
    { id: "completed", label: "Completed" },
  ]

  const upcomingQuizzes = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      course: "Complete Web Development Bootcamp",
      dueDate: "Apr 15, 2025",
      timeLimit: "30 minutes",
      questions: 20,
      status: "not-started",
    },
    {
      id: 2,
      title: "CSS Layouts",
      course: "Complete Web Development Bootcamp",
      dueDate: "Apr 18, 2025",
      timeLimit: "25 minutes",
      questions: 15,
      status: "not-started",
    },
    {
      id: 3,
      title: "React Hooks",
      course: "Advanced React & Redux",
      dueDate: "Apr 20, 2025",
      timeLimit: "40 minutes",
      questions: 25,
      status: "not-started",
    },
  ]

  const completedQuizzes = [
    {
      id: 4,
      title: "HTML Basics",
      course: "Complete Web Development Bootcamp",
      completedDate: "Apr 5, 2025",
      timeLimit: "20 minutes",
      questions: 15,
      score: 92,
      status: "completed",
    },
    {
      id: 5,
      title: "Web Development Introduction",
      course: "Complete Web Development Bootcamp",
      completedDate: "Apr 2, 2025",
      timeLimit: "15 minutes",
      questions: 10,
      score: 85,
      status: "completed",
    },
    {
      id: 6,
      title: "JavaScript Variables and Types",
      course: "JavaScript Masterclass",
      completedDate: "Mar 28, 2025",
      timeLimit: "25 minutes",
      questions: 20,
      score: 78,
      status: "completed",
    },
  ]

  const quizzes = activeTab === "upcoming" ? upcomingQuizzes : completedQuizzes

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Quizzes & Tests</h1>
        <p className="mt-1 text-sm text-gray-500">Track your upcoming and completed quizzes.</p>
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
              {tab.id === "upcoming" && upcomingQuizzes.length > 0 && (
                <span className="ml-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  {upcomingQuizzes.length}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Quiz List */}
      {quizzes.length > 0 ? (
        <div className="space-y-4">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white py-12 px-4 text-center shadow sm:px-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            {activeTab === "upcoming" ? (
              <Clock className="h-6 w-6 text-blue-600" />
            ) : (
              <CheckCircle className="h-6 w-6 text-blue-600" />
            )}
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No {activeTab} quizzes</h3>
          <p className="mt-1 text-sm text-gray-500">
            {activeTab === "upcoming"
              ? "You don't have any upcoming quizzes at the moment."
              : "You haven't completed any quizzes yet."}
          </p>
          {activeTab === "upcoming" && (
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Browse Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Practice Tests Section */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Practice Tests</h2>
        <p className="mt-1 text-sm text-gray-500">
          Take these practice tests to improve your skills. These don't count towards your grade.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                    <FileText className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">HTML & CSS Practice</h3>
                  <p className="text-sm text-gray-500">15 questions • 20 minutes</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Start Practice Test
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purple-100 text-purple-600">
                    <FileText className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">JavaScript Basics</h3>
                  <p className="text-sm text-gray-500">20 questions • 30 minutes</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  Start Practice Test
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-100 text-green-600">
                    <FileText className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">React Fundamentals</h3>
                  <p className="text-sm text-gray-500">25 questions • 40 minutes</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-50 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Start Practice Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// This component is missing in the code, let's add it
const FileText = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

export default Quizzes

