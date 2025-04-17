import React from "react"
import { useState } from "react"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header/Header"
import Dashboard from "./Dashboard/Dashboard"
import BrowseCourses from "./BrowseCourses/BrowseCourses"
import CourseContent from "./CourseContent/CourseContent"
import Quizzes from "./Quizzes/Quizzes"
import Assignments from "./Assignments/Assignments"
import LiveClasses from "./LiveClasses/LiveClasses"
import Forums from "./Forums/Forums"
import Grades from "./Grades/Grades"
import Certificates from "./Certificates/Certificates"
import Profile from "./Profile/Profile"
import Wishlist from "./Wishlist/Wishlist"
import Notifications from "./Notifications/Notifications"
import Reviews from "./Reviews/Reviews"
import QandA from "./QandA/QandA"

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />
      case "browse-courses":
        return <BrowseCourses />
      case "course-content":
        return <CourseContent />
      case "quizzes":
        return <Quizzes />
      case "assignments":
        return <Assignments />
      case "live-classes":
        return <LiveClasses />
      case "forums":
        return <Forums />
      case "grades":
        return <Grades />
      case "certificates":
        return <Certificates />
      case "profile":
        return <Profile />
      case "wishlist":
        return <Wishlist />
      case "notifications":
        return <Notifications />
      case "reviews":
        return <Reviews />
      case "qanda":
        return <QandA />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - hidden on mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-blue-600 transition duration-300 ease-in-out lg:static lg:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} setMobileMenuOpen={setMobileMenuOpen} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header setMobileMenuOpen={setMobileMenuOpen} />

        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">{renderContent()}</main>
      </div>
    </div>
  )
}

export default UserDashboard

