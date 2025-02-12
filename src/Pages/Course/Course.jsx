'use client'

import { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Home, Search, Star } from 'lucide-react'
import { Link, Links } from 'react-router-dom'

const courses = [

  {
    id: 2,
    title: "HTML Beginner + Advanced",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSist7hgp6p6KV0bmCwF_XHBZg4Bh6cq7A4rQ&s",
    students: 750,
    lessons: 36,
    level: "Advanced",
    rating: 3.6,
  },
  {
    id: 3,
    title: "Angular Zero to Mastery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eFIKS2LKh7tWjH1K-n4SLS13psQy2ev5IA&s",
    students: 2.3,
    lessons: 12,
    level: "Beginner",
    rating: 3.5,
  },
  {
    id: 1,
    title: "React Front to Back",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcxpaIT3lXHdY4tWmPM9hvU6SiVfRak8DzA&s",
    students: 960,
    lessons: 42,
    level: "Advanced",
    rating: 4.2,
  },
  {
    id: 3,
    title: "CSS Zero to Mastery",
    image: "https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg",
    students: 2.3,
    lessons: 12,
    level: "Beginner",
    rating: 3.5,
  },
  {
    id: 2,
    title: "HTML Beginner + Advanced",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSist7hgp6p6KV0bmCwF_XHBZg4Bh6cq7A4rQ&s",
    students: 750,
    lessons: 36,
    level: "Advanced",
    rating: 3.6,
  },
  {
    id: 3,
    title: "Angular Zero to Mastery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eFIKS2LKh7tWjH1K-n4SLS13psQy2ev5IA&s",
    students: 2.3,
    lessons: 12,
    level: "Beginner",
    rating: 3.5,
  },
  {
    id: 1,
    title: "React Front to Back",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcxpaIT3lXHdY4tWmPM9hvU6SiVfRak8DzA&s",
    students: 960,
    lessons: 42,
    level: "Advanced",
    rating: 4.2,
  },
  {
    id: 3,
    title: "CSS Zero to Mastery",
    image: "https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg",
    students: 2.3,
    lessons: 12,
    level: "Beginner",
    rating: 3.5,
  },


  // Add more courses as needed
]

const categories = [
  {
    name: "Development", count: 574, subcategories: [
      { name: "Web development", count: 574 },
      { name: "Data Science", count: 568 },
      { name: "Mobile Development", count: 1245 },
      { name: "Software Testing", count: 425 },
      { name: "Software Engineering", count: 785 },
      { name: "Software Development Tools", count: 25 },
      { name: "No-Code Development", count: 124 },
    ]
  },
  { name: "Business", count: 425 },
  { name: "Finance & Accounting", count: 385 },
  { name: "IT & Software", count: 325 },
  { name: "Office Productivity", count: 225 },
  { name: "Personal Development", count: 195 },
  { name: "Design", count: 175 },
  { name: "Marketing", count: 165 },
  { name: "Lifestyle", count: 145 },
  { name: "Photography & Video", count: 135 },
  { name: "Music", count: 125 },
  { name: "Health & Fitness", count: 115 },
]

const tools = [
  { name: "HTML 5", count: 342 },
  { name: "CSS 3", count: 451 },
  { name: "React", count: 231 },
  { name: "WebFlow", count: 4321 },
  { name: "NodeJS", count: 856 },
  { name: "Laravel", count: 124 },
  { name: "Sass", count: 100 },
  { name: "Wordpress", count: 1450 },
]


const ratings = [
  { name: "5 Star", count: 245 },
  { name: "4 Star & up", count: 754 },
  { name: "3 Star & up", count: 851 },
  { name: "2 Star & up", count: 245 },
  { name: "1 Star & up", count: 541 },
]

const courseLevels = [
  { name: "All Level", count: 123 },
  { name: "Beginner", count: 654 },
  { name: "Intermediate", count: 784 },
  { name: "Expert", count: 123 },
]

export default function Course() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    development: true,
    tools: false,
    rating: false,
    courseLevel: false,
    price: false
  })

  const [selectedItems, setSelectedItems] = useState([])
  const [priceRange, setPriceRange] = useState([10, 30])

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const toggleItem = (item) => {
    setSelectedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    )
  }

  return (
    <div className="min-h-screen container mx-auto">
      {/* Breadcrumb */}
      {/* <div className="flex items-center gap-2 p-6 text-sm text-blue-600">
        <Home className="w-4 h-4 font-bold" />
        <Link to={'/'} className='font-bold'>Home</Link>
        <ChevronRight className="w-4 h-4 font-bold" />
        <span className='font-bold'>Course</span>
      </div> */}

      <div className="flex gap-6 p-4 flex-wrap">
        {/* Sidebar */}
        <div className="w-full sm:w-64 bg-white rounded-lg shadow-xl border border-gray-400 sm:mx-auto ">

          {/* Category Section */}
          <div className="border-gray-400 border-b">
            <button
              onClick={() => toggleSection('category')}
              className="flex items-center justify-between w-full p-4 text-sm font-semibold"
            >
              <span>CATEGORY</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${expandedSections.category ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {expandedSections.category && (
              <div className="px-4 pb-4 space-y-2">
                {categories.map((category) => (
                  <div key={category.name}>
                    <div className="flex items-center justify-between group">
                      {category.subcategories ? (
                        <button
                          onClick={() => toggleSection('development')}
                          className="flex items-center gap-2 text-sm hover:text-blue-600"
                        >
                          <ChevronDown
                            className={`w-4 h-4 text-blue-600 transition-transform ${expandedSections.development ? 'rotate-180' : ''
                              }`}
                          />
                          {category.name}
                        </button>
                      ) : (
                        <div className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{category.name}</span>
                        </div>
                      )}
                      <span className="text-xs text-gray-500">{category.count}</span>
                    </div>

                    {category.subcategories && expandedSections.development && (
                      <div className="ml-6 mt-2 space-y-2">
                        {category.subcategories.map((sub) => (
                          <div key={sub.name} className="flex items-center justify-between">
                            <label className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={selectedItems.includes(sub.name)}
                                onChange={() => toggleItem(sub.name)}
                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="text-sm">{sub.name}</span>
                            </label>
                            <span className="text-xs text-gray-500">{sub.count}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tools Section */}
          <div className="border-b border-gray-400">
            <button
              onClick={() => toggleSection('tools')}
              className="flex items-center justify-between w-full p-4 text-sm font-semibold"
            >
              <span>TOOLS</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${expandedSections.tools ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {expandedSections.tools && (
              <div className="px-4 pb-4 space-y-2">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(tool.name)}
                        onChange={() => toggleItem(tool.name)}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm">{tool.name}</span>
                    </label>
                    <span className="text-xs text-gray-500">{tool.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rating Section */}
          <div className="border-b border-gray-400">
            <button
              onClick={() => toggleSection('rating')}
              className="flex items-center justify-between w-full p-4 text-sm font-semibold"
            >
              <span>RATING</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${expandedSections.rating ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {expandedSections.rating && (
              <div className="px-4 pb-4 space-y-2">
                {ratings.map((rating) => (
                  <div key={rating.name} className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(rating.name)}
                        onChange={() => toggleItem(rating.name)}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm">{rating.name}</span>
                    </label>
                    <span className="text-xs text-gray-500">{rating.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Course Level Section */}
          <div className="border-b border-gray-400">
            <button
              onClick={() => toggleSection('courseLevel')}
              className="flex items-center justify-between w-full p-4 text-sm font-semibold"
            >
              <span>COURSE LEVEL</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${expandedSections.courseLevel ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {expandedSections.courseLevel && (
              <div className="px-4 pb-4 space-y-2">
                {courseLevels.map((level) => (
                  <div key={level.name} className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(level.name)}
                        onChange={() => toggleItem(level.name)}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm">{level.name}</span>
                    </label>
                    <span className="text-xs text-gray-500">{level.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Section */}
          <div className='border-gray-400 border-b'>
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full p-4 text-sm font-semibold"
            >
              <span>PRICE</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${expandedSections.price ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {expandedSections.price && (
              <div className="px-4 pb-4 space-y-4">
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <div>Min price: ${priceRange[0]}</div>
                    <div>Max price: ${priceRange[1]}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes('paid')}
                        onChange={() => toggleItem('paid')}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm">Paid</span>
                    </div>
                    <span className="text-xs text-gray-500">1,569</span>
                  </label>

                  <label className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes('free')}
                        onChange={() => toggleItem('free')}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm">Free</span>
                    </div>
                    <span className="text-xs text-gray-500">1,245</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:px-4  lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            {/* Sort By Section */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Sort By:</span>
              <select className="border rounded-md px-3 py-1.5 text-sm">
                <option>Latest</option>
                <option>Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Search Section */}
            <div className="relative w-full sm:w-auto">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Web Design..."
                className="pl-10 pr-4 py-2 border rounded-md text-sm w-full sm:w-64"
              />
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Link
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                to={`/course/${course.id}`}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span>Students {course.students}k</span>
                    <span>Lessons {course.lessons}</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{course.rating}</span>
                    </div>
                    <button className="px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-600 text-white">
              1
            </button>
            <span>of</span>
            <span>16</span>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
