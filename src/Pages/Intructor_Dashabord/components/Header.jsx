const Header = ({ activeTab, course }) => {
  const getPageTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Instructor Dashboard"
      case "browseCourses":
        return "My Courses"
      case "courseContent":
        return course ? `Content: ${course.title}` : "Course Content"
      case "liveClasses":
        return course ? `Live Classes: ${course.title}` : "Live Classes"
      case "students":
        return course ? `Students: ${course.title}` : "Students"
      case "assignments":
        return course ? `Assignments: ${course.title}` : "Assignments"
      case "progress":
        return course ? `Progress: ${course.title}` : "Student Progress"
      case "feedback":
        return course ? `Feedback: ${course.title}` : "Feedback"
      case "discussions":
        return course ? `Discussions: ${course.title}` : "Discussions"
      case "analytics":
        return course ? `Analytics: ${course.title}` : "Analytics"
      case "courseSettings":
        return course ? `Settings: ${course.title}` : "Course Settings"
      default:
        return "Instructor Dashboard"
    }
  }

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">{getPageTitle()}</h1>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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

            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>

            <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center">
              <span className="text-white font-semibold">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

