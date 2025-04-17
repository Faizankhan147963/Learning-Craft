"use client"

import { BookOpen, Home, Video, FileText, Award, User, Heart, Bell, Star, MessageCircle } from "lucide-react"

const Sidebar = ({ activeTab, setActiveTab, setMobileMenuOpen }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { id: "browse-courses", label: "Browse Courses", icon: <BookOpen className="h-5 w-5" /> },
    { id: "course-content", label: "Course Content", icon: <Video className="h-5 w-5" /> },
    { id: "quizzes", label: "Quizzes & Tests", icon: <FileText className="h-5 w-5" /> },
    { id: "assignments", label: "Assignments", icon: <FileText className="h-5 w-5" /> },
    { id: "live-classes", label: "Live Classes", icon: <Video className="h-5 w-5" /> },
    { id: "forums", label: "Forums", icon: <MessageCircle className="h-5 w-5" /> },
    { id: "grades", label: "Grades & Feedback", icon: <FileText className="h-5 w-5" /> },
    { id: "certificates", label: "Certificates", icon: <Award className="h-5 w-5" /> },
    { id: "profile", label: "Profile", icon: <User className="h-5 w-5" /> },
    { id: "wishlist", label: "Wishlist", icon: <Heart className="h-5 w-5" /> },
    // { id: "notifications", label: "Notifications", icon: <Bell className="h-5 w-5" /> },
    { id: "reviews", label: "Reviews", icon: <Star className="h-5 w-5" /> },
    { id: "qanda", label: "Q&A", icon: <MessageCircle className="h-5 w-5" /> },
  ]

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center justify-center border-b border-blue-600">
        <h1 className="text-xl font-bold text-white">Learning Craft</h1>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="mt-2 px-2">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === item.id ? "bg-blue-700 text-white" : "text-blue-100 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      <div className="border-t border-blue-600 p-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-blue-300">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqf0Wx4wmsKfLYsiLdBx6H4D8bwQBurWhx5g&s" alt="User" className="h-8 w-8 rounded-full" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-blue-200">Student</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

