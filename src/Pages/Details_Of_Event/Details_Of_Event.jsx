import React from 'react'
import { useState, useEffect } from 'react'

export default function Details_Of_Event() {
  const [timeLeft, setTimeLeft] = useState({
    days: 302,
    hours: 3,
    minutes: 20,
    seconds: 25
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const features = [
    { id: 1, text: 'Nurturing Young Minds' },
    { id: 2, text: 'Unlocking Potential' },
    { id: 3, text: 'Through Education' },
    { id: 4, text: 'Igniting Curiosity Imagination' },
    { id: 5, text: 'Nurturing Young Min' },
    { id: 6, text: 'Foundation for Success' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto container  px-4 ">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - About & Location */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <section className="mb-8">
              <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">About The Event</h1>
              <div className="space-y-4 text-gray-600">
                <p>
                  Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros the justo,
                  posuere lobo, vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros a justo, posuere
                  loborti viverra laoreet mat ullamcorper posue viverra .Aliquam
                </p>
                <p>
                  Education is a vital aspect of a child's development. Preschools, elementary schools, and middle schools play a
                  significant role in providing quality education and fostering growth in young minds Education is a vital aspect of a
                  child's development. Preschools, elementary schools, and middle schools play a the a significant role in providing
                  quality education and fostering growth in young minds
                </p>
              </div>

              {/* Features Grid */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {features.map(feature => (
                  <div key={feature.id} className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{feature.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Location Section */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Event Location</h2>
              <div className="mb-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Mirpur Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">10Am To 3Pm</span>
                </div>
              </div>

              {/* Map Container */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5983460988937!2d90.3667!3d23.8223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ5JzIwLjMiTiA5MMKwMjInMDAuMiJF!5e0!3m2!1sen!2sbd!4v1639137714492!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </section>
          </div>

          {/* Right Column - Event Info Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Event Info</h2>
              <p className="mb-6 text-gray-600">
                Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu.
              </p>

              {/* Event Details */}
              <div className="mb-6 space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Cost:</span>
                  <span className="text-blue-600">$250.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Total Slot:</span>
                  <span>250</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Booked Slot:</span>
                  <span>2</span>
                </div>
              </div>

              {/* Book Now Button */}
              <button className="mb-6 flex w-full items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600">
                <span>Book Now</span>
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Countdown Timer */}
              <div>
                <p className="mb-4 text-sm text-gray-600">Remaining Time For Event</p>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <div className="text-lg font-semibold">{timeLeft.days}</div>
                    <div className="text-xs text-gray-500">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">{timeLeft.hours}</div>
                    <div className="text-xs text-gray-500">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">{timeLeft.minutes}</div>
                    <div className="text-xs text-gray-500">Min</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">{timeLeft.seconds}</div>
                    <div className="text-xs text-gray-500">Sec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

