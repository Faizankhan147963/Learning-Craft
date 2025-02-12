import { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function First() {
    const [activeTab, setActiveTab] = useState('Most Popular')
    const [courses] = useState([
        {
            id: 1,
            title: 'DevOps Certification 2025',
            provider: 'Learning Craft',
            courses: 8,
            ebook: 1,
            price: 2399.0,
            image: 'https://community.aws/raw-post-images/concepts/devops-essentials/images/devops_loop.jpeg?imgSize=1600x960',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTiCGpMhgUoZJyRq1jasP4e0tymAd6azXOA&s',
            category: ['Most Popular', 'Featured']
        },
        {
            id: 2,
            title: 'Business Analytics Certification 2025',
            provider: 'Learning Craft',
            courses: 8,
            ebook: 1,
            price: 1799.0,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwNETTfPPbpYquM7tCE6HWcSUxOswlK6Yyw&s',
            logo: 'https://media.istockphoto.com/id/1249867007/vector/analytics-analysis-statistics-searching-gray-icon.jpg?s=612x612&w=0&k=20&c=Yt4RBnpog9OU1uPu9LVONX69bxsdS_HjeHNP6CnFRYs=',
            category: ['Most Popular', 'Best Seller']
        },
        {
            id: 3,
            title: 'Python Programming Certification 2025',
            provider: 'Learning Craft',
            courses: 8,
            ebook: 1,
            price: 2399.0,
            image: 'https://ciracollege.com/wp-content/uploads/2020/11/How-to-Learn-Python.jpg',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZqZkpMyiN2uSuT7GAf6JSkJ44YsZqoQHdw&s',
            category: ['Most Popular', 'Best Seller']
        },
        {
            id: 4,
            title: 'Data Science Certification 2025',
            provider: 'Learning Craft',
            courses: 8,
            ebook: 1,
            price: 2399.0,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAHDuDSX8IHd-MPcc8u0RKASVonuCkqSvJw&s',
            logo: 'https://static.vecteezy.com/system/resources/previews/025/366/280/non_2x/business-analytics-icon-data-analysis-illustration-sign-data-science-symbol-profit-graph-logo-vector.jpg',
            category: ['Most Popular', 'Best Seller']
        },
        {
            id: 5,
            title: 'Ethical Hacking Certification 2025',
            provider: 'Learning Craft',
            courses: 8,
            ebook: 1,
            price: 2399.0,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pD7iOOItCnRLJCb8UQcpDLoPPnw3sRCvHQ&s',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDkDfeR2jkOEuI_RHLYXnX4HNBqTP5j5crQ&s',
            category: ['Featured']
        }
    ])

    const tabs = ['Most Popular', 'Featured', 'Best Seller']

    const filteredCourses = courses.filter(course =>
        course.category.includes(activeTab)
    )

    return (
        <div className="container mx-auto px-4  py-12">
            {/* Header Section */}
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Elevate your learning with{' '}
                    <span className="text-blue-500 block md:inline">Latest Certifications</span>
                </h1>
                <p className="text-xl text-gray-700">
                    Unlock exclusive self-paced premium courses
                </p>
            </div>

            {/* Tabs Section */}
            <div className="flex space-x-8 mb-8 border-b">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 px-2 relative ${activeTab === tab
                                ? 'text-blue-500 font-semibold'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        {tab}
                        {activeTab === tab && (
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500" />
                        )}
                    </button>
                ))}
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-auto">
                {filteredCourses.map(course => (
                    <Link
                    to={`/course/${course.id}`}
                        key={course.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                    >
                        {/* Course Image */}
                        <div className="relative h-48 bg-green-900">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Logo Circle */}
                            <div className="absolute -bottom-6 left-4 w-12 h-12 bg-white rounded-full p-2 shadow-lg">
                                <img
                                    src={course.logo}
                                    alt="logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            {/* Wishlist Button */}
                            <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                                <svg
                                    className="w-5 h-5 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Course Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                            <p className="text-gray-600 mb-4">{course.provider}</p>
                            <div className="text-sm text-gray-500 mb-4">
                                {course.courses} Courses | {course.ebook} eBook
                            </div>
                            <div className="mt-auto">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-bold text-xl">₹{course.price.toFixed(2)}</span>
                                </div>


                                <div className="flex gap-2">
                                    {/* Buy Now Button */}
                                    <button className="flex-grow bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                                        <FaShoppingCart className="text-lg" />
                                        Buy Now
                                    </button>

                                    {/* Wishlist Button */}
                                    <button className="bg-gray-100 p-2 rounded hover:bg-gray-200 transition-colors flex items-center justify-center">
                                        <AiOutlineHeart className="w-6 h-6 text-gray-600" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

