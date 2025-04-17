import { Award, Share2 } from "lucide-react"
import CertificateCard from "./CertificateCard"

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      issueDate: "Apr 5, 2025",
      instructor: "Sarah Johnson",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "WD-2025-12345",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      issueDate: "Mar 20, 2025",
      instructor: "David Thompson",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "JS-2025-67890",
      skills: ["JavaScript", "ES6+", "Async Programming", "DOM Manipulation"],
    },
    {
      id: 3,
      title: "Responsive Web Design",
      issueDate: "Feb 15, 2025",
      instructor: "Emma Wilson",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "RWD-2025-24680",
      skills: ["CSS", "Flexbox", "CSS Grid", "Media Queries", "Mobile-First Design"],
    },
  ]

  const inProgressCourses = [
    {
      id: 4,
      title: "Advanced React & Redux",
      progress: 75,
      estimatedCompletion: "May 10, 2025",
      instructor: "Michael Chen",
    },
    {
      id: 5,
      title: "Node.js Backend Development",
      progress: 45,
      estimatedCompletion: "Jun 20, 2025",
      instructor: "Sarah Johnson",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Certificates</h1>
        <p className="mt-1 text-sm text-gray-500">View and share your earned certificates.</p>
      </div>

      {/* Certificate Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Award className="h-6 w-6 text-blue-500" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="truncate text-sm font-medium text-gray-500">Earned Certificates</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{certificates.length}</dd>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Award className="h-6 w-6 text-green-500" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="truncate text-sm font-medium text-gray-500">In Progress</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{inProgressCourses.length}</dd>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Share2 className="h-6 w-6 text-purple-500" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="truncate text-sm font-medium text-gray-500">Shared Certificates</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">2</dd>
            </div>
          </div>
        </div>
      </div>

      {/* Earned Certificates */}
      <div>
        <h2 className="text-lg font-medium text-gray-900">Earned Certificates</h2>

        {certificates.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        ) : (
          <div className="mt-4 flex flex-col items-center justify-center rounded-lg bg-white py-12 px-4 text-center shadow sm:px-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No certificates yet</h3>
            <p className="mt-1 text-sm text-gray-500">
              Complete courses to earn certificates and showcase your skills.
            </p>
          </div>
        )}
      </div>

      {/* In Progress Courses */}
      <div>
        <h2 className="text-lg font-medium text-gray-900">Certificates In Progress</h2>

        {inProgressCourses.length > 0 ? (
          <div className="mt-4 space-y-4">
            {inProgressCourses.map((course) => (
              <div key={course.id} className="overflow-hidden rounded-lg bg-white shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">Instructor: {course.instructor}</p>
                    </div>
                    <div className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      {course.progress}% Complete
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="relative h-2 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="absolute h-full rounded-full bg-blue-500"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Estimated completion: {course.estimatedCompletion}</span>
                    <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Continue Course
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 flex flex-col items-center justify-center rounded-lg bg-white py-12 px-4 text-center shadow sm:px-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No courses in progress</h3>
            <p className="mt-1 text-sm text-gray-500">Enroll in courses to start earning certificates.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Certificates

