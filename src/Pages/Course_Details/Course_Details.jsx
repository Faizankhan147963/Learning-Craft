import { ChevronRight, Home } from 'lucide-react';
import React, { useState } from 'react';
import { FaAngleRight, FaBook, FaClock, FaVideo, FaFileAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function CourseDetails() {
    const [activeTab, setActiveTab] = useState('description');
    const [expandedSections, setExpandedSections] = useState(['getting-started']);
    const [expandedLessons, setExpandedLessons] = useState(['secret-of-good-design']);

    const toggleSection = (sectionId) => {
        setExpandedSections((prev) =>
            prev.includes(sectionId)
                ? prev.filter((id) => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const toggleLesson = (lessonId) => {
        setExpandedLessons((prev) =>
            prev.includes(lessonId)
                ? prev.filter((id) => id !== lessonId)
                : [...prev, lessonId]
        );
    };

    const formatDuration = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    };

    const formatTime = (time) => {
        const [minutes, seconds] = time.split(':').map(Number);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const sections = [
        {
            id: 'introduction',
            title: 'Introduction to Java',
            lectures: 10,
            duration: 120, // in minutes
            lessons: [
                {
                    id: 'getting-started-java',
                    title: 'Getting Started with Java',
                    lectures: 4,
                    duration: 60, // in minutes
                    items: [
                        {
                            title: 'What is Java?',
                            duration: '5:00',
                            type: 'video',
                        },
                        {
                            title: 'Setting up Java Development Environment',
                            duration: '7:30',
                            type: 'video',
                        },
                        {
                            title: 'Basic Syntax',
                            size: '2.5 MB',
                            type: 'document',
                        },
                    ],
                },
                {
                    id: 'java-history-versions',
                    title: 'Java History & Versions',
                    lectures: 2,
                    duration: 30, // in minutes
                    items: [
                        {
                            title: 'Evolution of Java',
                            duration: '10:00',
                            type: 'video',
                        },
                        {
                            title: 'Different Versions of Java',
                            size: '3.0 MB',
                            type: 'document',
                        },
                    ],
                },
            ],
        },
        {
            id: 'oop-concepts',
            title: 'Object-Oriented Concepts',
            lectures: 20,
            duration: 180, // in minutes
            lessons: [
                {
                    id: 'classes-objects',
                    title: 'Classes and Objects in Java',
                    lectures: 6,
                    duration: 90, // in minutes
                    items: [
                        {
                            title: 'Understanding Classes',
                            duration: '10:00',
                            type: 'video',
                        },
                        {
                            title: 'Defining Objects',
                            duration: '8:45',
                            type: 'video',
                        },
                        {
                            title: 'Hands-on: Creating a Java Class',
                            size: '5.0 MB',
                            type: 'document',
                        },
                    ],
                },
                {
                    id: 'inheritance-polymorphism',
                    title: 'Inheritance and Polymorphism',
                    lectures: 5,
                    duration: 60, // in minutes
                    items: [
                        {
                            title: 'Understanding Inheritance',
                            duration: '9:15',
                            type: 'video',
                        },
                        {
                            title: 'Polymorphism in Java',
                            duration: '12:00',
                            type: 'video',
                        },
                        {
                            title: 'Hands-on: Implementing Inheritance',
                            size: '4.5 MB',
                            type: 'document',
                        },
                    ],
                },
                {
                    id: 'encapsulation-abstraction',
                    title: 'Encapsulation & Abstraction',
                    lectures: 5,
                    duration: 60, // in minutes
                    items: [
                        {
                            title: 'Encapsulation Explained',
                            duration: '8:30',
                            type: 'video',
                        },
                        {
                            title: 'Abstraction in Java',
                            duration: '9:00',
                            type: 'video',
                        },
                        {
                            title: 'Practice Exercise: Encapsulation & Abstraction',
                            size: '6.0 MB',
                            type: 'document',
                        },
                    ],
                },
            ],
        },
        {
            id: 'error-handling',
            title: 'Error Handling & Exceptions',
            lectures: 8,
            duration: 90, // in minutes
            lessons: [
                {
                    id: 'exceptions-basics',
                    title: 'Exception Handling Basics',
                    lectures: 4,
                    duration: 45, // in minutes
                    items: [
                        {
                            title: 'What is an Exception?',
                            duration: '5:30',
                            type: 'video',
                        },
                        {
                            title: 'Types of Exceptions',
                            duration: '10:00',
                            type: 'video',
                        },
                        {
                            title: 'Using Try-Catch Blocks',
                            size: '4.2 MB',
                            type: 'document',
                        },
                    ],
                },
                {
                    id: 'custom-exceptions',
                    title: 'Custom Exceptions & B',
                    lectures: 4,
                    duration: 45, // in minutes
                    items: [
                        {
                            title: 'Creating Custom Exceptions',
                            duration: '8:00',
                            type: 'video',
                        },
                        {
                            title: 'Exception Handling',
                            size: '3.8 MB',
                            type: 'document',
                        },
                    ],
                },
            ],
        },
        {
            id: 'advanced-java',
            title: 'Advanced Java Concepts',
            lectures: 15,
            duration: 150, // in minutes
            lessons: [
                {
                    id: 'multithreading',
                    title: 'Multithreading in Java',
                    lectures: 6,
                    duration: 70, // in minutes
                    items: [
                        {
                            title: 'Introduction to Multithreading',
                            duration: '12:00',
                            type: 'video',
                        },
                        {
                            title: 'Thread Lifecycle',
                            duration: '10:00',
                            type: 'video',
                        },
                        {
                            title: 'Implementing Threads in Java',
                            size: '4.5 MB',
                            type: 'document',
                        },
                    ],
                },
                {
                    id: 'collections-framework',
                    title: 'Java Collections Framework',
                    lectures: 5,
                    duration: 50, // in minutes
                    items: [
                        {
                            title: 'Introduction to Collections',
                            duration: '10:00',
                            type: 'video',
                        },
                        {
                            title: 'Common Collection Types',
                            size: '5.0 MB',
                            type: 'document',
                        },
                    ],
                },
                {
                    id: 'streams-api',
                    title: 'Streams API in Java',
                    lectures: 4,
                    duration: 30, // in minutes
                    items: [
                        {
                            title: 'Introduction to Streams',
                            duration: '8:00',
                            type: 'video',
                        },
                        {
                            title: 'Working with Streams',
                            duration: '12:00',
                            type: 'video',
                        },
                    ],
                },
            ],
        },
    ];



    const tabs = [
        { id: 'description', label: 'Description' },
        { id: 'curriculum', label: 'Curriculum' },
        { id: 'reviews', label: 'Reviews' },
    ];

    const overallRating = 4.7
    const totalReviews = 23476

    const ratingDistribution = [
        { stars: 5, percentage: 66, count: 94532 },
        { stars: 4, percentage: 25, count: 6717 },
        { stars: 3, percentage: 16, count: 714 },
        { stars: 2, percentage: 8, count: 643 },
        { stars: 1, percentage: 4, count: 152 }
    ]

    const reviews = [
        {
            id: 1,
            name: 'Cooper Franci',
            rating: 4,
            comment: 'People says about, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.',
            timeAgo: '1 hour ago',
            avatar: '/placeholder.svg?height=48&width=48'
        },
        {
            id: 2,
            name: 'Ash Botosh',
            rating: 5,
            comment: 'Like this histudy, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.',
            timeAgo: '5 hour ago',
            avatar: '/placeholder.svg?height=48&width=48'
        },
        {
            id: 3,
            name: 'Omar Herwitz',
            rating: 5,
            comment: 'Our educational, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.',
            timeAgo: '1 week ago',
            avatar: '/placeholder.svg?height=48&width=48'
        }
    ]

    const StarRating = ({ rating }) => {
        return (
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`text-lg ${star <= rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                    >
                        ★
                    </span>
                ))}
            </div>
        )
    }


    return (
        <div className="container mx-auto px-4 md:py-8 py-6">
            {/* <div className="flex items-center gap-2  text-sm text-blue-600 mb-10">
                <Home className="w-4 h-4 font-bold" />
                <Link to={'/'} className='font-bold'>Home</Link>
                <ChevronRight className="w-4 h-4 font-bold" />
                <Link to={'/course'} className='font-bold'>Course</Link>
                <ChevronRight className="w-4 h-4 font-bold" />
                <Link to={'/'} className='font-bold'>HTML</Link>
            </div> */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    {/* Course Header */}
                    <div className="mb-8">

                        <h1 className="text-2xl md:text-3xl font-bold mb-4">
                            Complete Website Responsive Design: from Figma to Webflow to Website Design
                        </h1>
                        <p className="text-gray-600 mb-4">
                            3-in-1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing
                        </p>

                        {/* Rating and Instructors */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center">
                                {'⭐'.repeat(5)}
                                <span className="text-gray-600 ml-2">5.0 (123 reviews)</span>
                            </div>

                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="rounded-lg overflow-hidden mb-8">
                        <img
                            src="https://png.pngtree.com/background/20240413/original/pngtree-d-rendering-of-a-responsive-web-design-displayed-on-devices-in-picture-image_8468515.jpg"
                            alt="Course Preview"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Tabs Navigation */}
                    <div className="border-b mb-8">
                        <div className="flex flex-wrap -mb-px">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`inline-flex items-center px-4 py-2 border-b-2 font-medium text-sm ${activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="space-y-8">
                        {activeTab === 'description' && (
                            <>
                                <div className="space-y-4">
                                    <h2 className="text-xl font-bold">What you will learn in this course</h2>
                                    <ul className="space-y-3">
                                        {[
                                            'You will learn how to design beautiful websites using Figma, an intuitive design tool used by designers worldwide',
                                            'You will learn how to make your designs and build them into powerful websites using Webflow, a state of the art no-code tool',
                                            'You will learn about professional Web Designer workflow and best practices',
                                            'Understanding how to use both the builder standards and code as files',
                                            'Learn code-free animations and interactions using both Figma and Python',
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="text-blue-500 mt-1">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-xl font-bold">Course requirements</h2>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                        <li>Basic and/or continued system to acquire and maintain and use</li>
                                        <li>Self english exercise understanding or professional available google trans use excusable</li>
                                        <li>Each course extra, plus browser google, notepad or text/sublime/visual studio code use web</li>
                                        <li>Those who are willing to learn from zero and want to be a web designer</li>
                                        <li>Need discipline and strength for hours and focus on work</li>
                                    </ul>
                                </div>
                            </>
                        )}

                        {activeTab === "curriculum" && (
                            <div className="space-y-4">
                                <h2 className="text-lg sm:text-xl font-bold">Course Curriculum</h2>
                                <div className="space-y-2">
                                    {sections.map((section) => (
                                        <div key={section.id} className="border rounded-lg">
                                            {/* Section Header */}
                                            <button
                                                onClick={() => toggleSection(section.id)}
                                                className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-gray-50"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <FaAngleRight
                                                        className={`transform transition-transform ${expandedSections.includes(section.id) ? "rotate-90" : ""
                                                            }`}
                                                    />
                                                    <span className="text-sm sm:text-base font-medium">{section.title}</span>
                                                </div>
                                                <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <FaBook className="text-yellow-500" />
                                                        {section.lectures} lectures
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <FaClock className="text-blue-500" />
                                                        {formatDuration(section.duration)}
                                                    </span>
                                                </div>
                                            </button>

                                            {/* Section Content */}
                                            {expandedSections.includes(section.id) && section.lessons && (
                                                <div className="border-t">
                                                    {section.lessons.map((lesson) => (
                                                        <div key={lesson.id}>
                                                            {/* Lesson Header */}
                                                            <button
                                                                onClick={() => toggleLesson(lesson.id)}
                                                                className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-gray-50 pl-6 sm:pl-8"
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <FaAngleRight
                                                                        className={`transform transition-transform ${expandedLessons.includes(lesson.id) ? "rotate-90" : ""
                                                                            }`}
                                                                    />
                                                                    <span className="text-sm sm:text-base text-blue-600">{lesson.title}</span>
                                                                </div>
                                                                <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                                                                    <span className="flex items-center gap-1">
                                                                        <FaBook className="text-yellow-500" />
                                                                        {lesson.lectures} lectures
                                                                    </span>
                                                                    <span className="flex items-center gap-1">
                                                                        <FaClock className="text-blue-500" />
                                                                        {formatDuration(lesson.duration)}
                                                                    </span>
                                                                </div>
                                                            </button>

                                                            {/* Lesson Items */}
                                                            {expandedLessons.includes(lesson.id) && (
                                                                <div className="border-t">
                                                                    {lesson.items.map((item, index) => (
                                                                        <div
                                                                            key={index}
                                                                            className="flex items-center justify-between p-3 sm:p-4 hover:bg-gray-50 pl-9 sm:pl-12"
                                                                        >
                                                                            <div className="flex items-center gap-2">
                                                                                {item.type === "video" ? (
                                                                                    <FaVideo className="text-gray-400" />
                                                                                ) : (
                                                                                    <FaFileAlt className="text-gray-400" />
                                                                                )}
                                                                                <span className="text-sm">{item.title}</span>
                                                                            </div>
                                                                            <span className="text-xs sm:text-sm text-gray-600">
                                                                                {item.duration ? formatTime(item.duration) : item.size}
                                                                            </span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                        {activeTab === 'instructor' && (
                            <h1>Hello</h1>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="max-w-7xl mx-auto ">
                                <h2 className="text-xl font-bold mb-8">Course Rating</h2>

                                {/* Overall Rating Section */}
                                <div className="grid md:grid-cols-2 gap-8 mb-12">
                                    {/* Left Column - Big Rating */}
                                    <div className="text-center md:text-left">
                                        <div className="text-6xl font-bold mb-2">{overallRating}</div>
                                        <div className="flex justify-center md:justify-start mb-2">
                                            <StarRating rating={Math.round(overallRating)} />
                                        </div>
                                        <div className="text-gray-600">
                                            Customer Rating ({totalReviews.toLocaleString()})
                                        </div>
                                    </div>

                                    {/* Right Column - Rating Distribution */}
                                    <div className="space-y-3">
                                        {ratingDistribution.map(({ stars, percentage, count }) => (
                                            <div key={stars} className="flex items-center gap-2">
                                                <div className="flex items-center gap-1 w-20">
                                                    <span className="text-sm">{stars}</span>
                                                    <StarRating rating={stars} />
                                                </div>
                                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-yellow-400 rounded-full"
                                                        style={{ width: `${percentage}%` }}
                                                    />
                                                </div>
                                                <div className="w-20 text-sm text-gray-600 text-right">
                                                    {percentage}% ({count.toLocaleString()})
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Reviews Section */}
                                <div className="space-y-6">
                                    {reviews.map((review) => (
                                        <div key={review.id} className="border-b pb-6">
                                            <div className="flex items-start gap-4">
                                                <img
                                                    src={review.avatar}
                                                    alt={review.name}
                                                    className="w-12 h-12 rounded-full"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="font-medium">{review.name}</h3>
                                                        <span className="text-sm text-blue-500">{review.timeAgo}</span>
                                                    </div>
                                                    <div className="mb-2">
                                                        <StarRating rating={review.rating} />
                                                    </div>
                                                    <p className="text-gray-600">{review.comment}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg  sticky top-4">
                        <div className="text-3xl font-bold mb-4">
                            $23.00 <span className="text-sm text-gray-500 line-through">$144.00</span>
                        </div>

                        {/* Course Details */}
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Course Duration</span>
                                <span className="font-medium">12 Months</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Total Enrolled</span>
                                <span className="font-medium">1,512</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Last Updated</span>
                                <span className="font-medium">April 2023</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Language</span>
                                <span className="font-medium">English</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                Add to Cart
                            </button>
                            <button className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                                Add to Wishlist
                            </button>
                        </div>

                        {/* Course Includes */}
                        <div className="mt-6">
                            <h3 className="font-semibold mb-3">This course includes:</h3>
                            <ul className="space-y-2">
                                {[
                                    'Full lifetime access',
                                    'Best exercises for a spectacular outcome',
                                    'Beautiful certificate of completion',
                                    'Access to mobile, tablet and TV',
                                    'English captions',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-blue-500">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Share Course */}

                    </div>
                </div>
            </div>
        </div>
    );
}
