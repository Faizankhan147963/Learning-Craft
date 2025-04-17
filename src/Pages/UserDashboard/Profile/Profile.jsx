"use client"

import { useState } from "react"
import { User, Mail, Phone, MapPin, Briefcase, Book, Award, Camera } from "lucide-react"

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal")

  const tabs = [
    { id: "personal", label: "Personal Information" },
    { id: "education", label: "Education & Skills" },
    { id: "preferences", label: "Learning Preferences" },
    { id: "security", label: "Security" },
  ]

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    bio: "Web developer passionate about creating user-friendly interfaces and learning new technologies.",
    occupation: "Frontend Developer",
    company: "Tech Solutions Inc.",
    education: [
      { degree: "Bachelor of Science in Computer Science", institution: "University of Technology", year: "2018-2022" },
      { degree: "Web Development Bootcamp", institution: "Code Academy", year: "2023" },
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "Responsive Design", "UI/UX"],
    interests: ["Web Development", "Mobile Apps", "Data Science", "Machine Learning", "UI/UX Design"],
    learningPreferences: {
      pace: "Self-paced",
      style: "Visual",
      environment: "Quiet",
      schedule: "Evenings and weekends",
    },
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your personal information and preferences.</p>
      </div>

      {/* Profile Header */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="relative h-32 bg-blue-500">
          <div className="absolute -bottom-12 left-6">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-white">
              <img src="/placeholder.svg?height=96&width=96" alt="Profile" className="h-full w-full object-cover" />
              <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <Camera className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 py-5 pt-16 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
              <p className="mt-1 text-sm text-gray-500">
                {user.occupation} at {user.company}
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        {activeTab === "personal" && (
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>

                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">Name:</span>
                    <span className="ml-2 text-sm font-medium text-gray-900">{user.name}</span>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">Email:</span>
                    <span className="ml-2 text-sm font-medium text-gray-900">{user.email}</span>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">Phone:</span>
                    <span className="ml-2 text-sm font-medium text-gray-900">{user.phone}</span>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">Location:</span>
                    <span className="ml-2 text-sm font-medium text-gray-900">{user.location}</span>
                  </div>

                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">Occupation:</span>
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      {user.occupation} at {user.company}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Bio</h3>
                <p className="mt-2 text-sm text-gray-600">{user.bio}</p>

                <h3 className="mt-6 text-lg font-medium text-gray-900">Interests</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {user.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Education</h3>

                <div className="mt-4 space-y-4">
                  {user.education.map((edu, index) => (
                    <div key={index} className="rounded-md border border-gray-200 p-4">
                      <div className="flex items-center">
                        <Book className="h-5 w-5 text-blue-500" />
                        <h4 className="ml-2 text-sm font-medium text-gray-900">{edu.degree}</h4>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Add Education
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Skills</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">Certifications</h3>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-md border border-gray-200 p-4">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-blue-500" />
                        <h4 className="ml-2 text-sm font-medium text-gray-900">Complete Web Development Bootcamp</h4>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">Issued: Apr 5, 2025</p>
                    </div>

                    <div className="rounded-md border border-gray-200 p-4">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-blue-500" />
                        <h4 className="ml-2 text-sm font-medium text-gray-900">JavaScript Fundamentals</h4>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">Issued: Mar 20, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "preferences" && (
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Learning Preferences</h3>

            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-md border border-gray-200 p-4">
                <h4 className="text-sm font-medium text-gray-900">Learning Pace</h4>
                <p className="mt-1 text-sm text-gray-500">{user.learningPreferences.pace}</p>

                <div className="mt-4">
                  <label className="text-sm font-medium text-gray-700">Change Preference</label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                    <option>Self-paced</option>
                    <option>Structured</option>
                    <option>Accelerated</option>
                  </select>
                </div>
              </div>

              <div className="rounded-md border border-gray-200 p-4">
                <h4 className="text-sm font-medium text-gray-900">Learning Style</h4>
                <p className="mt-1 text-sm text-gray-500">{user.learningPreferences.style}</p>

                <div className="mt-4">
                  <label className="text-sm font-medium text-gray-700">Change Preference</label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                    <option>Visual</option>
                    <option>Auditory</option>
                    <option>Reading/Writing</option>
                    <option>Kinesthetic</option>
                  </select>
                </div>
              </div>

              <div className="rounded-md border border-gray-200 p-4">
                <h4 className="text-sm font-medium text-gray-900">Learning Environment</h4>
                <p className="mt-1 text-sm text-gray-500">{user.learningPreferences.environment}</p>

                <div className="mt-4">
                  <label className="text-sm font-medium text-gray-700">Change Preference</label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                    <option>Quiet</option>
                    <option>Background noise</option>
                    <option>Music</option>
                    <option>Group setting</option>
                  </select>
                </div>
              </div>

              <div className="rounded-md border border-gray-200 p-4">
                <h4 className="text-sm font-medium text-gray-900">Preferred Schedule</h4>
                <p className="mt-1 text-sm text-gray-500">{user.learningPreferences.schedule}</p>

                <div className="mt-4">
                  <label className="text-sm font-medium text-gray-700">Change Preference</label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                    <option>Mornings</option>
                    <option>Afternoons</option>
                    <option>Evenings</option>
                    <option>Weekends</option>
                    <option>Evenings and weekends</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Save Preferences
              </button>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Security Settings</h3>

            <div className="mt-4 space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Change Password</h4>

                <div className="mt-2 space-y-4">
                  <div>
                    <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="current-password"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Add an extra layer of security to your account by enabling two-factor authentication.
                </p>

                <div className="mt-4 flex items-center">
                  <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Enable 2FA
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-medium text-gray-900">Connected Accounts</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Connect your account with other services for easier login and sharing.
                </p>

                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                      <span className="ml-2 text-sm font-medium text-gray-900">Google</span>
                    </div>
                    <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Connect
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-900"></div>
                      <span className="ml-2 text-sm font-medium text-gray-900">Facebook</span>
                    </div>
                    <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Connect
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-400"></div>
                      <span className="ml-2 text-sm font-medium text-gray-900">Twitter</span>
                    </div>
                    <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile

