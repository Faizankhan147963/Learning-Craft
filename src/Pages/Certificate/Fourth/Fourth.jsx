'use client'

export default function Forth() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Column - Text Content */}
                <div className="lg:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Celebrate Your{' '}
                        <span className="text-blue-600 block">Achievement</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-900 container text-justify">
                        Showcase your hard work and dedication with our official Course Completion Certificate.
                        Designed to highlight your skills, it’s the perfect way to advance your career or switch
                        to a new professional path. Whether you’re looking to enhance your current role or explore
                        new opportunities, this certificate validates your expertise.
                    </p>
                    <p className="text-base md:text-lg text-gray-900 container text-justify">
                        Add credibility to your resume or portfolio by sharing your certificate with potential
                        employers, on LinkedIn, or during interviews. A step closer to unlocking new opportunities!
                    </p>
                    <p className="text-base md:text-lg text-gray-900 container text-justify">
                        The certificate serves as a tangible reminder of your commitment to professional growth.
                        It reflects not only your knowledge but also your ability to successfully complete and
                        apply what you've learned. Use it to open doors to new roles, promotions, or freelance
                        opportunities, giving you the confidence to step into your next career chapter.
                    </p>

                </div>


                {/* Right Column - Certificate */}
                <div className="lg:w-1/2">
                    <div className="bg-white text-black rounded-lg shadow-2xl overflow-hidden">
                        {/* Certificate Header */}
                        <div className="p-6 border-b relative">
                            <div className="flex justify-between items-center">
                                <img
                                    src="/placeholder.svg?height=40&width=160"
                                    alt=""
                                    className="h-10"
                                />
                                <div className="flex gap-2">
                                    <img
                                        src="/placeholder.svg?height=40&width=40"
                                        alt=""
                                        className="h-10"
                                    />
                                    <img
                                        src="/placeholder.svg?height=40&width=40"
                                        alt=""
                                        className="h-10"
                                    />
                                </div>
                            </div>
                            {/* Green Accent */}
                            <div className="absolute bottom-0 left-0 h-1 w-32 bg-blue-600"></div>
                        </div>

                        {/* Certificate Content */}
                        <div className="p-8 space-y-6">
                            <div className="text-center space-y-4">
                                <h2 className="text-3xl md:text-4xl font-serif">
                                    Certificate of Learn Craft
                                </h2>
                                <p className="text-gray-600">is awarded to</p>
                            </div>

                            <div className="text-center space-y-4">
                                <h3 className="text-2xl md:text-3xl font-semibold">
                                    Your Name
                                </h3>
                                <p className="text-gray-600">
                                    on achieving Grade <span className="font-semibold">A</span> in the Final Assessment of
                                </p>
                            </div>

                            {/* Course Name Box */}
                            <div className="bg-blue-600 text-white p-6 rounded-lg relative">
                                <div className="flex justify-between items-center">
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-medium">Your Name</h4>
                                        <p className="text-sm text-white/80">Successfully Completed</p>
                                        <h3 className="text-xl font-bold">
                                            Master Full Stack Development
                                        </h3>
                                    </div>
                                    <div className="bg-white/20 p-3 rounded-full">
                                        <svg
                                            className="w-8 h-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Certificate Footer */}
                            <div className="flex justify-between items-center pt-6 border-t">
                                <div>
                                    <p className="text-sm text-gray-600">Certificate ID</p>
                                    <p className="font-mono">TP-2023-12345</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Date Issued</p>
                                    <p className="font-mono">25 Dec 2024</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">CEO & Founder</p>
                                    <p className="font-mono">Faizan Khan Pathan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

