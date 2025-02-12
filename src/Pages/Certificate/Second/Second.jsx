'use client'

export default function Second() {
    const courses = [
        {
            id: 1,
            title: "Java & Spring Boot Advanced Certification 2025",
            courses: 16,
            ebooks: 2,
            price: 4499.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nEzmC6YYbWDRE3OYu81r_SC0SvaZEzTh7A&s"
        },
        {
            id: 2,
            title: "Advanced Python Certification 2025",
            courses: 15,
            ebooks: 2,
            price: 4499.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRW613kHW2eSY4j64DsUJ6EvneJx3DwMrfg&s"
        },
        {
            id: 3,
            title: "Data Science Advanced Certification 2025",
            courses: 16,
            ebooks: 2,
            price: 4499.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiM_fK0DC8nH4HIRMEonxVD7Z_Ip3GF0dWdA&s"
        },
        {
            id: 4,
            title: "Advanced Certification in Cloud Computing and DevOps",
            courses: 18,
            ebooks: 2,
            price: 4499.00,
            image: "Cloud Computing and DevOps"
        },
        {
            id: 5,
            title: "Cyber Security Advanced Certification 2025",
            courses: 15,
            ebooks: 2,
            price: 4499.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCubMjQpowBm3B6du5qLOVWMUZozr3RdNSuw&s"
        },
        {
            id: 6,
            title: "Web Developer Advanced Certification 2025",
            courses: 15,
            ebooks: 2,
            price: 4499.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjCg8UFwasGFiqiNJ98Z7Ly_IrbkYwTFv1w&s"
        }
    ]

    return (
        <div className=" p-4">
            <div className="container px-4 py-16 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            Achieve <span className="text-blue-500">Your Goals</span> with Expert Certifications
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
                            Elevate your career with our expertly designed certification programs tailored to meet industry demands.
                            Whether you're a professional aiming to enhance your skills or a beginner looking to start a new journey,
                            our courses offer comprehensive content, practical projects, and recognized credentials to set you apart.
                            Join thousands of learners worldwide and unlock exclusive opportunities with certifications that make a difference.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
                            Dive into dynamic learning experiences featuring real-world case studies, interactive lessons, and expert guidance.
                            Our certification paths ensure you gain the knowledge and confidence needed to excel in your chosen field.
                            Don't just learn – certify your expertise and open the door to a brighter future.
                        </p>
                    </div>


                    {/* Right Column - Course Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-blue-600 text-white  p-4 rounded-lg hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-20 h-20  flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <img
                                            src={course.image}
                                            alt=""
                                            className="w-16 h-16 object-contain"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm mb-1">
                                            {course.title}
                                        </h3>
                                        <p className="text-sm text-white">
                                            {course.courses} Courses | {course.ebooks} eBooks
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="text-lg font-bold">
                                        ₹{course.price.toFixed(2)}
                                    </div>
                                    <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-[#00B84D] transition-colors text-sm">
                                        Buy Now
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

