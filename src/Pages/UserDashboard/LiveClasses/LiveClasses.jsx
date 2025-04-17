"use client"

import { useState } from "react"
import { Calendar, Clock, Video, Users, ExternalLink } from "lucide-react"
import LiveClassCard from "./LiveClassCard"

const LiveClasses = () => {
  const [activeTab, setActiveTab] = useState("upcoming")

  const tabs = [
    { id: "upcoming", label: "Upcoming" },
    { id: "recorded", label: "Recorded" },
  ]

  const upcomingClasses = [
    {
      id: 1,
      title: "Advanced CSS Techniques",
      course: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      date: "Apr 15, 2025",
      time: "3:00 PM - 4:30 PM",
      duration: "1.5 hours",
      attendees: 125,
      status: "upcoming",
      description:
        "Learn advanced CSS techniques including animations, transitions, and complex layouts. We'll cover practical examples and best practices.",
    },
    {
      id: 2,
      title: "React Hooks Deep Dive",
      course: "Advanced React & Redux",
      instructor: "Michael Chen",
      date: "Apr 18, 2025",
      time: "2:00 PM - 4:00 PM",
      duration: "2 hours",
      attendees: 98,
      status: "upcoming",
      description:
        "Explore React Hooks in depth, including custom hooks, performance optimization, and advanced patterns. Bring your questions for a Q&A session at the end.",
    },
  ]

  const recordedClasses = [
    {
      id: 3,
      title: "JavaScript Promises and Async/Await",
      course: "JavaScript Masterclass",
      instructor: "David Thompson",
      date: "Apr 5, 2025",
      duration: "1.5 hours",
      views: 342,
      status: "recorded",
      description:
        "Master asynchronous JavaScript with Promises and Async/Await. Learn how to handle complex asynchronous operations and error handling.",
    },
    {
      id: 4,
      title: "Responsive Design Principles",
      course: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      date: "Apr 2, 2025",
      duration: "1 hour",
      views: 287,
      status: "recorded",
      description:
        "Learn the principles of responsive design and how to implement them in your web projects. We'll cover media queries, flexible layouts, and mobile-first design.",
    },
    {
      id: 5,
      title: "Introduction to TypeScript",
      course: "Advanced JavaScript",
      instructor: "Emma Wilson",
      date: "Mar 28, 2025",
      duration: "2 hours",
      views: 412,
      status: "recorded",
      description:
        "Get started with TypeScript and learn how it enhances JavaScript with static types. We'll cover basic types, interfaces, and integration with React.",
    },
  ]

  const classes = activeTab === "upcoming" ? upcomingClasses : recordedClasses

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Live Classes & Webinars</h1>
        <p className="mt-1 text-sm text-gray-500">Join interactive live sessions or watch recorded classes.</p>
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
              {tab.id === "upcoming" && upcomingClasses.length > 0 && (
                <span className="ml-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  {upcomingClasses.length}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Class List */}
      {classes.length > 0 ? (
        <div className="space-y-4">
          {classes.map((liveClass) => (
            <LiveClassCard key={liveClass.id} liveClass={liveClass} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white py-12 px-4 text-center shadow sm:px-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Video className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No {activeTab} classes</h3>
          <p className="mt-1 text-sm text-gray-500">
            {activeTab === "upcoming"
              ? "You don't have any upcoming live classes at the moment."
              : "There are no recorded classes available yet."}
          </p>
        </div>
      )}

      {/* Featured Webinar */}
      {activeTab === "upcoming" && (
        <div className="mt-8 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:flex-1">
                <h2 className="text-xl font-bold text-white">Featured Webinar: Web Development Trends 2025</h2>
                <p className="mt-1 text-blue-100">
                  Join industry experts for a discussion on the latest web development trends and technologies.
                </p>

                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="flex items-center text-blue-100">
                    <Calendar className="mr-1.5 h-5 w-5 text-blue-200" />
                    April 20, 2025
                  </div>
                  <div className="flex items-center text-blue-100">
                    <Clock className="mr-1.5 h-5 w-5 text-blue-200" />
                    1:00 PM - 3:00 PM
                  </div>
                  <div className="flex items-center text-blue-100">
                    <Users className="mr-1.5 h-5 w-5 text-blue-200" />
                    250+ attendees
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <button className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LiveClasses

