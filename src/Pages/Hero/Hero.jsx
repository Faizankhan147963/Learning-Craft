import React from "react";
import hero from "../../../src/assets/hero.png";
import Arrow from "../../../src/assets/Arrow.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container mx-auto px-4 md:py-0 py-8 min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="inline-block">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
              Start to Success 📚
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Learn From World <span className="text-yellow-500">Class</span> Mentors with Us Anytime, Anywhere
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Finding quality courses with proper guidelines in online is really hard. We provide quality courses with proper guidance. Our mentors are highly expedited & expert.
          </p>
          <div className="relative inline-block">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Start Learn now
            </button>
            <div className="absolute -right-24 top-0 transform -rotate-[290deg]">
              <img src={Arrow} alt="Arrow" />
            </div>

          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg w-full sm:max-w-xs mt-8">
            <div className="flex items-center gap-3">
              <img
                src="https://coderthemes.com/wb/studyzen/assets/avatar-1-f1564e7c.png"
                alt="User Avatar"
                className="w-10 h-10 bg-gray-200 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">User Experience Class</h3>
                <p className="text-sm text-gray-500">Today at 12:00 PM</p>
              </div>
            </div>
            <button className="mt-3 w-full bg-yellow-400 text-black py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
             <Link to={'/course'}> Join Now</Link>
            </button>
          </div>

        </div>

        {/* Right Column */}
        <div className="relative">
          <div className="relative">
            {/* Apply Gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-lg"
              style={{ zIndex: 1 }}
            ></div>
            <img
              src={hero}
              alt="Mentor"
              className="w-full h-auto rounded-lg md:-mt-24 mt-0"
            />
            {/* Floating Icons */}
            {/* <div className="absolute -top-8 right-0">
              <div className="w-16 h-16 text-yellow-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
            </div> */}
            <div className="absolute bottom-12 -left-16 hidden md:block">
              <div className="w-12 h-12 text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
            </div>
            <div className="absolute top-1/2 right--8">
              <div className="w-12 h-12 text-yellow-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" />
                  <path d="M10 21v-1h4v1a2 2 0 01-2 2 2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
