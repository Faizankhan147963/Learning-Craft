"use client"

import { useState } from "react"
import { Search, MessageCircle, Plus } from "lucide-react"
import ForumTopicCard from "./ForumTopicCard"

const Forums = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "general", name: "General Discussion" },
    { id: "web-dev", name: "Web Development" },
    { id: "javascript", name: "JavaScript" },
    { id: "react", name: "React" },
    { id: "help", name: "Help & Support" },
  ]

  const topics = [
    {
      id: 1,
      title: "How to optimize React performance?",
      author: "Michael Chen",
      category: "react",
      replies: 24,
      views: 342,
      lastActivity: "2 hours ago",
      isNew: true,
      isHot: true,
      excerpt:
        "I'm working on a large React application and noticing some performance issues. What are some best practices for optimizing React performance?",
    },
    {
      id: 2,
      title: "Understanding JavaScript Closures",
      author: "Emma Wilson",
      category: "javascript",
      replies: 18,
      views: 256,
      lastActivity: "5 hours ago",
      isNew: true,
      isHot: false,
      excerpt:
        "I'm having trouble understanding closures in JavaScript. Can someone explain them in simple terms with examples?",
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox - When to use which?",
      author: "Sarah Johnson",
      category: "web-dev",
      replies: 32,
      views: 415,
      lastActivity: "1 day ago",
      isNew: false,
      isHot: true,
      excerpt:
        "I'm confused about when to use CSS Grid versus Flexbox. What are the strengths and weaknesses of each, and when should I choose one over the other?",
    },
    {
      id: 4,
      title: "Introduction Thread - Say Hello!",
      author: "Admin",
      category: "general",
      replies: 156,
      views: 1245,
      lastActivity: "3 hours ago",
      isNew: false,
      isHot: false,
      excerpt:
        "Welcome to the Learning Craft community! Use this thread to introduce yourself, share your learning goals, and connect with fellow students.",
    },
    {
      id: 5,
      title: "Help with React Router v6",
      author: "David Thompson",
      category: "help",
      replies: 12,
      views: 187,
      lastActivity: "2 days ago",
      isNew: false,
      isHot: false,
      excerpt:
        "I'm migrating from React Router v5 to v6 and encountering some issues. Can anyone help with the new patterns and best practices?",
    },
  ]

  const filteredTopics = topics.filter((topic) => {
    const matchesCategory = selectedCategory === "all" || topic.category === selectedCategory
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Discussion Forums</h1>
        <p className="mt-1 text-sm text-gray-500">
          Connect with fellow students and instructors in our community forums.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative max-w-md flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Filter by:</span>
          <select
            className="rounded-md border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Create New Topic Button */}
      <div className="flex justify-end">
        <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <Plus className="mr-2 h-4 w-4" />
          Create New Topic
        </button>
      </div>

      {/* Forum Categories */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories
          .filter((category) => category.id !== "all")
          .map((category) => (
            <div
              key={category.id}
              className="overflow-hidden rounded-lg bg-white shadow transition-all duration-200 hover:shadow-md"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">
                      {topics.filter((topic) => topic.category === category.id).length} topics
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className="text-sm font-medium text-blue-500 hover:text-blue-600"
                  >
                    View Topics
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Topic List */}
      <div className="mt-6">
        <h2 className="text-lg font-medium text-gray-900">
          {selectedCategory === "all" ? "All Topics" : categories.find((c) => c.id === selectedCategory)?.name}
        </h2>

        {filteredTopics.length > 0 ? (
          <div className="mt-4 space-y-4">
            {filteredTopics.map((topic) => (
              <ForumTopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        ) : (
          <div className="mt-4 flex flex-col items-center justify-center rounded-lg bg-white py-12 px-4 text-center shadow sm:px-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No topics found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <div className="mt-6">
              <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <Plus className="mr-2 h-4 w-4" />
                Create New Topic
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Forums

