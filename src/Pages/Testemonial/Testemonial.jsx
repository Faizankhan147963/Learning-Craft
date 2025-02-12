import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Testimonial() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: "Kwed Doud",
            title: "Sr. UX/UI Online Instructor",
            image: "https://media.istockphoto.com/id/1449106027/photo/happy-smiling-female-college-student-looking-at-camera-holding-red-folder.jpg?s=612x612&w=0&k=20&c=7T9L6zx0BOTB-A2x366plM0PQWid1w9xKFlWDJlkCr8=",
            text: "During this era, online learning unexpectedly occur increased. The single person relay on the patience internet to learning to happen!",
            tag: "They Provide Also Ethically!"
        },
        {
            id: 2,
            name: "Don Koflin",
            title: "Owner of Public School, Germany",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoYx9F2NC9j8q-LMe-xHjDrVZhhwyOb46Hg&s",
            text: "During this era, online learning unexpectedly occur increased. The single person relay on the patience internet to learning to happen!",
            tag: "Professional Teachers!"
        },
        {
            id: 3,
            name: "Jamold Moore",
            title: "Senior Technical Coach",
            image: "https://thumbs.dreamstime.com/b/successful-young-african-american-male-student-beard-library-university-205690338.jpg",
            text: "During this era, online learning unexpectedly occur increased. The single person relay on the patience internet to learning to happen!",
            tag: "Motivational Teaching Practices!"
        }
    ]
    const events = [
        {
            id: 1,
            title: "Global Child Learning Environment",
            location: "Zorlex College, Canada",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7BLWWo23DhXpt0WRFsjnsYg6Wjx5wVfLDQ&s",
            date: "25 Dec",
            description: "An inspiring event focusing on creating a positive and supportive learning environment for children across the globe. Join educators and thought leaders from around the world."
        },
        {
            id: 2,
            title: "Exhibition & Digital Art Conference",
            location: "Royal Design, USA",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnf7qOG43AFItDKVuB9rbXG3e7Ue62yahMKQ&s",
            date: "26 Dec",
            description: "A unique conference where digital art and technology meet. Experience exhibitions from renowned digital artists and attend discussions on the future of digital art."
        },
        {
            id: 3,
            title: "Global Education Program",
            location: "Oxford University, UK",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrR6DYVkjMO8-d6nZ4gms-dmRv2aoiNmKvQ&s",
            date: "27 Dec",
            description: "A global initiative to enhance education systems worldwide. This program brings together educators, policy-makers, and students to share innovative practices in education."
        }
    ];


    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="container mx-auto px-4 py-16 space-y-16">
            {/* Testimonials Section */}
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Joined The <span className="text-blue-500">100,000+</span> Students
                </h2>
                <p className="text-xl font-semibold mb-12">Expressed The Words!</p>

                {/* Testimonial Slider */}
                <div className="relative max-w-7xl mx-auto overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-full flex-shrink-0 px-4"
                            >
                                <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                                    <div className="flex items-center gap-4 mb-6">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                        <div className="text-left">
                                            <h3 className="font-semibold text-blue-500">{testimonial.tag}</h3>
                                            <p className="text-gray-600 text-sm">{testimonial.text}</p>
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-medium">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Slider Navigation */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Events Section */}
            <div className="">
                <h2 className="text-3xl font-bold mb-2 text-center mt-32">
                    Discover <span className="text-blue-500">Free Classes</span> and Exciting Events
                </h2>
                <p className="text-lg text-gray-600  text-center">
                    Join us for a variety of engaging events and workshops, including exclusive free classes designed to help you grow your skills and knowledge.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {events.map((event) => (
                        <Link
                            to={`/event/${event.id}`}
                            key={event.id}
                            className="cursor-pointer group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="relative">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 text-sm font-medium">
                                    {event.date}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                                <p className="text-gray-600 text-sm flex items-center gap-2 mb-3">
                                    <span>📍</span> {event.location}
                                </p>
                                <p className="text-gray-500 text-sm">{event.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}

