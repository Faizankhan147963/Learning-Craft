import React from "react"
import {
  LayoutDashboard,
  Users,
  BookOpen,
  UserCog,
  GraduationCap,
  Video,
  Award,
  BarChart2,
  FileText,
  Settings,
  LogOut,
} from "lucide-react"


const Sidebar= ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { id: "users", label: "User Management", icon: <Users size={20} /> },
    { id: "courses", label: "Course Management", icon: <BookOpen size={20} /> },
    { id: "instructors", label: "Instructors", icon: <UserCog size={20} /> },
    { id: "enrollments", label: "Enrollments", icon: <GraduationCap size={20} /> },
    { id: "liveclasses", label: "Live Classes", icon: <Video size={20} /> },
    { id: "certificates", label: "Certificates", icon: <Award size={20} /> },
    { id: "analytics", label: "Analytics", icon: <BarChart2 size={20} /> },
    { id: "reports", label: "Reports", icon: <FileText size={20} /> },
    { id: "settings", label: "Settings", icon: <Settings size={20} /> },
  ]

  return (
    <div className="w-64 bg-gradient-to-b from-blue-700 to-blue-600 text-white flex flex-col h-full">
      <div className="p-4 border-b border-blue-500">
        <div className="flex items-center space-x-2">
          <GraduationCap size={28} />
          <div>
            <h1 className="font-bold text-xl">Learning Craft</h1>
            <p className="text-xs text-blue-200">Super Admin Panel</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                activeTab === item.id ? "bg-white text-blue-600" : "text-white hover:bg-blue-500"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-blue-500">
        <button className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors duration-200">
          <LogOut size={20} className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar

