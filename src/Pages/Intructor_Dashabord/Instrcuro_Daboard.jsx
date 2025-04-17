
import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard/Dashboard"
import BrowseCourses from "./pages/BrowseCourses/BrowseCourses"
import CourseContent from "./pages/CourseContent/CourseContent"
import LiveClasses from "./pages/LiveClasses/LiveClasses"
import Students from "./pages/Students/Students"
import Assignments from "./pages/Assignments/Assignments"
import Progress from "./pages/Progress/Progress"
import Feedback from "./pages/Feedback/Feedback"
import Discussions from "./pages/Discussions/Discussions"
import Analytics from "./pages/Analytics/Analytics"
import CourseSettings from "./pages/CourseSettings/CourseSettings"

function Instrcuro_Daboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedCourse, setSelectedCourse] = useState(null)

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard setActiveTab={setActiveTab} setSelectedCourse={setSelectedCourse} />
      case "browseCourses":
        return <BrowseCourses setActiveTab={setActiveTab} setSelectedCourse={setSelectedCourse} />
      case "courseContent":
        return <CourseContent course={selectedCourse} />
      case "liveClasses":
        return <LiveClasses course={selectedCourse} />
      case "students":
        return <Students course={selectedCourse} />
      case "assignments":
        return <Assignments course={selectedCourse} />
      case "progress":
        return <Progress course={selectedCourse} />
      case "feedback":
        return <Feedback course={selectedCourse} />
      case "discussions":
        return <Discussions course={selectedCourse} />
      case "analytics":
        return <Analytics course={selectedCourse} />
      case "courseSettings":
        return <CourseSettings course={selectedCourse} />
      default:
        return <Dashboard setActiveTab={setActiveTab} setSelectedCourse={setSelectedCourse} />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header activeTab={activeTab} course={selectedCourse} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{renderContent()}</main>
      </div>
    </div>
  )
}

export default Instrcuro_Daboard

