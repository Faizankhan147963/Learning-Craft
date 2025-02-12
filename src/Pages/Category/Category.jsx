
import React from "react"
export default function Category() {
    const categories = [
      {
        icon: "👤",
        name: "Personal Development",
        courses: "452 Courses",
        bgColor: "bg-purple-50",
      },
      {
        icon: "💻",
        name: "Office Productivity",
        courses: "1,457 Courses",
        bgColor: "bg-gray-100",
      },
      {
        icon: "🎧",
        name: "Music",
        courses: "959 Courses",
        bgColor: "bg-orange-50",
      },
      {
        icon: "📊",
        name: "Marketing",
        courses: "1,784 Courses",
        bgColor: "bg-purple-50",
      },
      {
        icon: "📦",
        name: "Lifestyle",
        courses: "755 Courses",
        bgColor: "bg-orange-50",
      },
      {
        icon: "✏️",
        name: "Design",
        courses: "2,501 Courses",
        bgColor: "bg-pink-50",
      },
      {
        icon: "🏥",
        name: "Health & Fitness",
        courses: "1,678 Courses",
        bgColor: "bg-green-50",
      },
      {
        icon: "📸",
        name: "Photography & Video",
        courses: "6,457 Courses",
        bgColor: "bg-gray-100",
      },
      {
        icon: "🤝",
        name: "Business",
        courses: "12,800 Courses",
        bgColor: "bg-green-50",
      },
      {
        icon: "💳",
        name: "Finance & Accounting",
        courses: "501 Courses",
        bgColor: "bg-orange-50",
      },
      {
        icon: "🔄",
        name: "Lable",
        courses: "12,450 Courses",
        bgColor: "bg-purple-50",
      },
      {
        icon: "💻",
        name: "IT & Software",
        courses: "12,500 Courses",
        bgColor: "bg-red-50",
      },
    ]
  
    return (
      <div className="container mx-auto px-4 py-24">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Browse Top Category
        </h2>
  
        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} rounded-lg p-4 transition-transform hover:scale-105 cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg text-2xl">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.courses}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Browse All Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600 inline-flex items-center gap-2">
            We have more category & subcategory.{' '}
            <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
              Browse All
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    )
  }
  
  