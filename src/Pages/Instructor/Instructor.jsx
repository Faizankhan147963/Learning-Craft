import React from "react"
import { Link } from "react-router-dom"
export default function Instructor() {
    const instructors = [
        {
            id: 1,
            name: "Don Adward",
            title: "Global Education Expert",
            rating: 5,
            reviews: 5,
            courses: 30,
            students: 16,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURjvHYOmt97Vgh-dfwVNgSX9_XxowHia3XQ&s",
            featured: false,
        },
        {
            id: 2,
            name: "Jeckly Doland",
            title: "Graduate From Jo, University",
            rating: 5,
            reviews: 5,
            courses: 30,
            students: 16,
            image: "https://media.istockphoto.com/id/678420912/photo/portrait-of-an-indian-lady-teacher.jpg?s=2048x2048&w=is&k=20&c=DX5L4J6Et8RR5DCQ7LPU0vK64w_w_ERZd3T7QnHulm8=",
            featured: true,
        },
        {
            id: 3,
            name: "Akihiro Jo",
            title: "Japanies Language Expert",
            rating: 5,
            reviews: 5,
            courses: 30,
            students: 16,
            image: "https://thumbs.dreamstime.com/b/thinking-smile-man-glasses-outdoor-happy-decision-studying-california-college-street-city-thinking-329641734.jpg",
            featured: false,
        },
        {
            id: 4,
            name: "Hannah Tom",
            title: "Motivational Speaker",
            rating: 5,
            reviews: 5,
            courses: 56,
            students: 22,
            image: "https://www.shutterstock.com/image-photo/portrait-young-successful-smiling-student-260nw-2388854237.jpg",
            featured: false,
        },
        {
            id: 5,
            name: "Lwis Zexi",
            title: "PHD. in Psychology",
            rating: 5,
            reviews: 5,
            courses: 30,
            students: 16,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0nczJB4mpPla02KDNH3PG7lBY_zKuO2V4uXiepggKlahe61mgRUPG85z88RvcQ_i8e4&usqp=CAU",
            featured: false,
        },
        {
            id: 6,
            name: "Obama Ketly",
            title: "PHD, Graduate",
            rating: 5,
            reviews: 5,
            courses: 30,
            students: 16,
            image: "https://thumbs.dreamstime.com/b/portrait-mature-professor-crossed-arms-standing-university-library-looking-camera-copy-space-happy-senior-172786502.jpg",
            featured: false,
        },
        {
            id: 7,
            name: "Miron Wasa",
            title: "Graduate",
            rating: 5,
            reviews: 5,
            courses: 30,
            students: 16,
            image: "https://media.istockphoto.com/id/1309478236/photo/portrait-of-an-attractive-successful-influential-adult-caucasian-manager-businessman-or.jpg?s=612x612&w=0&k=20&c=PSP69ufZqh68pWcavGP44XGXm9SZ6laNRyUFzTjytIQ=",
            featured: false,
        },
        {
            id: 8,
            name: "Daisuke",
            title: "Education Expert",
            rating: 5,
            reviews: 5,
            courses: 56,
            students: 22,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcb1XQdzHfcWY2JhsdzG7ZZ41SFFbpguQ9xpoNVt5A379QxJOHOQAybaqv6YGdO1Vwo3o&usqp=CAU",
            featured: false,
        },
    ]

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Meet Our Instructors
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    During this era, online learning unexpectedly increased. The single
                    person relay on the internet to learning somethingsonline
                </p>
            </div>

            {/* Instructors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {instructors.map((instructor) => (
                    <Link
                    to={`/instructor/1`}
                        key={instructor.id}
                        className={`bg-white rounded-lg p-6 text-center transform transition duration-300 hover:ring-2 hover:ring-blue-500 cursor-pointer ${instructor.featured ? 'ring-2 ring-blue-500' : ''
                            }`}
                    >
                        {/* Instructor Image */}
                        <div className="mb-4">
                            <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                                <img
                                    src={instructor.image}
                                    alt={instructor.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-center items-center gap-1 mb-2">
                            {[...Array(instructor.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                            ))}
                            <span className="text-gray-400 text-sm">({instructor.reviews})</span>
                        </div>

                        {/* Instructor Info */}
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {instructor.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">{instructor.title}</p>

                        {/* Stats */}
                        <div className="flex justify-center items-center gap-4">
                            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                                <span className="text-blue-500">📚</span>
                                <div className="text-sm">
                                    <span className="font-semibold">{instructor.courses}</span>
                                    <span className="text-gray-500 ml-1">Courses</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                                <span className="text-blue-500">👥</span>
                                <div className="text-sm">
                                    <span className="font-semibold">{instructor.students}</span>
                                    <span className="text-gray-500 ml-1">Students</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

