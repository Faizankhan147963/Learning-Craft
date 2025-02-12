'use client'
import React, { PureComponent } from 'react'

import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function PopularCourse() {
    const [activeTab, setActiveTab] = useState('Web Design')

    const tabs = ['Web Design', 'Development', 'Graphic Design', 'Marketing', 'Finance'];

    const courses = [
        // Web Design Courses
        {
            id: 1,
            title: 'Sketch from A to Z: for app designer',
            level: 'All level',
            rating: 4.5,
            reviews: 5.0,
            duration: '12h 56m',
            lectures: '16 lectures',
            image: 'https://uizard.io/static/2b12b4964dcde0c9a5e164698bd77f79/a8e47/114e4f2e9bc8c445213e504231ffb79ca627d84f-1440x835.png',
            color: 'bg-gradient-to-br from-orange-100 to-orange-200',
            icon: '💎',
            category: 'Web Design'
        },
        {
            id: 2,
            title: 'Create a Design System in Figma',
            level: 'Beginner',
            rating: 4.5,
            reviews: 5.0,
            duration: '5h 56m',
            lectures: '32 lectures',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_ccLrb4tVwaqm-bNiumKtxs9G9i7kZAeKA&s',
            color: 'bg-gradient-to-br from-pink-100 to-pink-200',
            icon: 'Fg',
            category: 'Web Design'
        },
        {
            id: 3,
            title: 'Build Responsive Websites with HTML',
            level: 'All level',
            rating: 4.5,
            reviews: 5.0,
            duration: '15h 30m',
            lectures: '68 lectures',
            image: 'https://img-c.udemycdn.com/course/750x422/437398_46c3_10.jpg',
            color: 'bg-gradient-to-br from-red-100 to-red-200',
            icon: '5',
            category: 'Web Design'
        },
        {
            id: 4,
            title: 'UX/UI Basics for Beginners',
            level: 'Beginner',
            rating: 4.8,
            reviews: 4.9,
            duration: '10h 10m',
            lectures: '24 lectures',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bf07GwKRrmPr5GFc15ZMJSjbriCK-6jg9Q&s',
            color: 'bg-gradient-to-br from-teal-100 to-teal-200',
            icon: 'UX',
            category: 'Web Design'
        },

        // Development Courses
        {
            id: 5,
            title: 'Deep Learning with React-Native',
            level: 'Beginner',
            rating: 4.5,
            reviews: 5.0,
            duration: '18h 56m',
            lectures: '99 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-cyan-100 to-cyan-200',
            icon: '⚛️',
            category: 'Development'
        },
        {
            id: 6,
            title: 'Build Websites with CSS',
            level: 'Beginner',
            rating: 4.5,
            reviews: 5.0,
            duration: '36h 30m',
            lectures: '72 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-blue-100 to-blue-200',
            icon: '3',
            category: 'Development'
        },
        {
            id: 7,
            title: 'JavaScript: Full Understanding',
            level: 'All level',
            rating: 5.0,
            reviews: 5.0,
            duration: '25h 20m',
            lectures: '89 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
            icon: 'JS',
            category: 'Development'
        },
        {
            id: 8,
            title: 'Full-Stack with MERN',
            level: 'Advanced',
            rating: 4.9,
            reviews: 5.0,
            duration: '40h 00m',
            lectures: '120 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-purple-100 to-purple-200',
            icon: '🌐',
            category: 'Development'
        },

        // Graphic Design Courses
        {
            id: 9,
            title: 'Graphic Design Masterclass',
            level: 'Beginner',
            rating: 4.5,
            reviews: 5.0,
            duration: '9h 56m',
            lectures: '56 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-blue-100 to-blue-200',
            icon: 'Ps',
            category: 'Graphic Design'
        },
        {
            id: 10,
            title: 'Learn Invision',
            level: 'All level',
            rating: 5.0,
            reviews: 5.0,
            duration: '6h 56m',
            lectures: '82 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-pink-100 to-pink-200',
            icon: 'In',
            category: 'Graphic Design'
        },
        {
            id: 11,
            title: 'Illustrator Advanced Tips',
            level: 'Advanced',
            rating: 4.7,
            reviews: 4.8,
            duration: '8h 30m',
            lectures: '30 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-orange-100 to-orange-200',
            icon: 'Ai',
            category: 'Graphic Design'
        },
        {
            id: 12,
            title: 'Photoshop Essentials',
            level: 'Beginner',
            rating: 4.6,
            reviews: 4.9,
            duration: '12h 45m',
            lectures: '50 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-red-100 to-red-200',
            icon: 'Ps',
            category: 'Graphic Design'
        },

        // Marketing Courses
        {
            id: 13,
            title: 'Digital Marketing 101',
            level: 'Beginner',
            rating: 4.7,
            reviews: 4.8,
            duration: '10h 15m',
            lectures: '40 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
            icon: '📈',
            category: 'Marketing'
        },
        {
            id: 14,
            title: 'SEO and SEM Mastery',
            level: 'All level',
            rating: 4.8,
            reviews: 4.9,
            duration: '12h 20m',
            lectures: '35 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-teal-100 to-teal-200',
            icon: '🔍',
            category: 'Marketing'
        },
        {
            id: 15,
            title: 'Social Media Strategies',
            level: 'Intermediate',
            rating: 4.9,
            reviews: 5.0,
            duration: '8h 45m',
            lectures: '25 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-blue-100 to-blue-200',
            icon: '📱',
            category: 'Marketing'
        },
        {
            id: 16,
            title: 'Content Marketing Basics',
            level: 'Beginner',
            rating: 4.5,
            reviews: 4.7,
            duration: '6h 50m',
            lectures: '20 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-green-100 to-green-200',
            icon: '📝',
            category: 'Marketing'
        },

        // Finance Courses
        {
            id: 17,
            title: 'Personal Finance 101',
            level: 'Beginner',
            rating: 4.6,
            reviews: 4.8,
            duration: '10h 30m',
            lectures: '38 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-green-100 to-green-200',
            icon: '💰',
            category: 'Finance'
        },
        {
            id: 18,
            title: 'Investment Strategies',
            level: 'Intermediate',
            rating: 4.7,
            reviews: 4.9,
            duration: '14h 10m',
            lectures: '42 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-blue-100 to-blue-200',
            icon: '📊',
            category: 'Finance'
        },
        {
            id: 19,
            title: 'Corporate Finance Basics',
            level: 'All level',
            rating: 4.8,
            reviews: 5.0,
            duration: '8h 20m',
            lectures: '30 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-red-100 to-red-200',
            icon: '🏢',
            category: 'Finance'
        },
        {
            id: 20,
            title: 'Accounting Essentials',
            level: 'Beginner',
            rating: 4.5,
            reviews: 4.7,
            duration: '9h 50m',
            lectures: '28 lectures',
            image: '/placeholder.svg?height=200&width=200',
            color: 'bg-gradient-to-br from-orange-100 to-orange-200',
            icon: '📘',
            category: 'Finance'
        },
    ];


    return (
        <div className="container mx-auto py-16 md:px-4 px-0">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Most Popular Courses</h2>
                <p className="text-gray-600">Choose from hundreds of courses from specialist organizations</p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 bg-blue-50 p-2 rounded-lg m-2 sm:m-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === tab
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 hover:bg-blue-100'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>


            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:p-0 p-4 mt-10">
                {courses
                    .filter(course => activeTab === course.category || activeTab === 'All')
                    .map((course) => (
                        <Link
                            to={`/course/${course.id}`}
                            key={course.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            {/* Course Header */}
                            <div className="relative">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />

                            </div>


                            {/* Course Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                        {course.level}
                                    </span>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        🔖
                                    </button>
                                </div>

                                <h3 className="font-semibold mb-4 line-clamp-2">{course.title}</h3>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    {'⭐'.repeat(Math.floor(course.rating))}
                                    <span className="text-gray-600 text-sm ml-2">
                                        {course.rating}/{course.reviews}
                                    </span>
                                </div>

                                {/* Course Meta */}
                                <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">🕒</span>
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center">
                                        <span className="mr-2">📚</span>
                                        {course.lectures}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

