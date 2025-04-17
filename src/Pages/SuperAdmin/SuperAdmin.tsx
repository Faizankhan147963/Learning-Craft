import React from "react"
import { useState } from "react"
import Sidebar from "./layout/Sidebar"
import Header from "./layout/Header"
import Dashboard from "./pages/Dashboard"
import UserManagement from "./pages/UserManagement"
import CourseManagement from "./pages/CourseManagement"
import InstructorManagement from "./pages/InstructorManagement"
import Analytics from "./pages/Analytics"
import Settings from "./pages/Settings"
import EnrollmentManagement from "./pages/EnrollmentManagement"
import LiveClassManagement from "./pages/LiveClassManagement"
import CertificateManagement from "./pages/CertificateManagement"
import ReportsManagement from "./pages/ReportsManagement"

const SuperAdmin = () => {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />
      case "users":
        return <UserManagement />
      case "courses":
        return <CourseManagement />
      case "instructors":
        return <InstructorManagement />
      case "enrollments":
        return <EnrollmentManagement />
      case "liveclasses":
        return <LiveClassManagement />
      case "certificates":
        return <CertificateManagement />
      case "analytics":
        return <Analytics />
      case "reports":
        return <ReportsManagement />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">{renderContent()}</main>
      </div>
    </div>
  )
}

export default SuperAdmin

