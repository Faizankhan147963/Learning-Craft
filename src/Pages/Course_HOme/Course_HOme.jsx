'use client'

import { useState } from 'react'
import {
  Book,
  Brush,
  Smartphone,
  GraduationCapIcon as Graduation,
  Brain,
  Baby,
  Target,
  SearchIcon,
  Monitor,
  Network,
  Megaphone,
  ChevronRight,
  BookOpen,
  Video,
  Users,
} from 'lucide-react'

export default function Course_HOme() {
  const [activeTab, setActiveTab] = useState('classroom')
  const [activeCategory, setActiveCategory] = useState('software')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'software', name: 'Software Development', icon: BookOpen },
    { id: 'designing', name: 'Designing', icon: Brush },
    { id: 'mobile', name: 'Mobile Development', icon: Smartphone },
    { id: 'specialized', name: 'Specialized Courses', icon: Graduation },
    { id: 'datascience', name: 'Data Science AI And ML', icon: Brain },
    { id: 'kids', name: 'Kids', icon: Baby },
    { id: 'liveproject', name: 'Live Project Training', icon: Target },
    { id: 'testing', name: 'Software Testing', icon: SearchIcon },
    { id: 'hardware', name: 'Hardware Networking', icon: Network },
    { id: 'marketing', name: 'Digital Marketing', icon: Megaphone },
  ]

  const courses = {
    classroom: [
      { id: 1, name: 'Python Certification Course', category: 'software', students: 234, lessons: 12 },
      { id: 2, name: 'PHP Course', category: 'software', students: 186, lessons: 10 },
      { id: 3, name: 'Java Course', category: 'software', students: 312, lessons: 15 },
      { id: 4, name: 'ASP.NET Training Course', category: 'software', students: 156, lessons: 8 },
      { id: 5, name: 'Angular Training Course', category: 'software', students: 198, lessons: 14 },
      { id: 6, name: 'Best React Course', category: 'software', students: 425, lessons: 16 },
    ],
    online: [
      { id: 7, name: 'C, C++ Training Course', category: 'software', students: 267, lessons: 20 },
      { id: 8, name: 'Front End Developer Course', category: 'software', students: 389, lessons: 18 },
      { id: 9, name: 'Full Stack Development Course', category: 'software', students: 456, lessons: 25 },
      { id: 10, name: 'Best Flutter Course', category: 'mobile', students: 234, lessons: 15 },
      { id: 11, name: 'Web Development Course', category: 'software', students: 567, lessons: 22 },
      { id: 12, name: 'Programming & Coding Course', category: 'software', students: 345, lessons: 16 },
    ],
  }

  const filteredCourses = courses[activeTab].filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeCategory === 'all' || course.category === activeCategory)
  )

  return (
    <div className="py-16 bg-gray-50">
      {/* Header */}
      <div className="py-8 text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-8">
          Get Choice of Our Best Courses
        </h1>

        {/* Search Bar */}
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap gap-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search your course here"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="px-6 py-2 bg-[#2563eb] text-white rounded-md hover:bg-[#2563eb] transition-colors flex items-center gap-2">
            <SearchIcon className="h-5 w-5" />
            Search
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <button
            className={`px-4 sm:px-6 py-2 rounded-md transition-colors flex items-center gap-2 ${
              activeTab === 'classroom'
                ? 'bg-[#2563eb] text-white'
                : 'bg-[#e3f2fd] text-[#2563eb]'
            }`}
            onClick={() => setActiveTab('classroom')}
          >
            <Users className="h-5 w-5" />
            Classroom Training
          </button>
          <button
            className={`px-4 sm:px-6 py-2 rounded-md transition-colors flex items-center gap-2 ${
              activeTab === 'online'
                ? 'bg-[#2563eb] text-white'
                : 'bg-[#e3f2fd] text-[#2563eb]'
            }`}
            onClick={() => setActiveTab('online')}
          >
            <Video className="h-5 w-5" />
            Online Training
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-64 lg:flex-shrink-0">
          <nav className="space-y-1">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                    activeCategory === category.id
                      ? 'bg-[#2563eb] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium flex-1 text-left">{category.name}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      activeCategory === category.id ? 'rotate-90' : ''
                    }`}
                  />
                </button>
              )
            })}
          </nav>
        </div>

        {/* Course Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {course.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Book className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <button className="w-full py-2 bg-[#e3f2fd] text-[#2563eb] rounded-md hover:bg-[#2563eb] hover:text-white transition-colors flex items-center justify-center gap-2">
                    <Monitor className="h-4 w-4" />
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
