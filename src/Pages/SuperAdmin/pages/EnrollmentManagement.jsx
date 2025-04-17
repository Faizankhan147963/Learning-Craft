"use client"

import { useState } from "react"
import { Search, Filter, Plus, Edit, Trash2, Eye, CheckCircle, XCircle, X } from "lucide-react"

const EnrollmentManagement = () => {
  const [showAddEnrollmentForm, setShowAddEnrollmentForm] = useState(false)

  // Sample enrollment data
  const enrollments = [
    {
      id: 1,
      student: "John Smith",
      studentEmail: "john.smith@example.com",
      course: "Complete Web Development Bootcamp",
      enrollDate: "Jan 15, 2023",
      progress: 75,
      status: "Active",
      paymentStatus: "Paid",
      amount: "$89.99",
      studentAvatar: "/placeholder.svg?height=40&width=40",
      courseImage: "/placeholder.svg?height=60&width=80",
    },
    {
      id: 2,
      student: "Emily Johnson",
      studentEmail: "emily.johnson@example.com",
      course: "Advanced JavaScript Concepts",
      enrollDate: "Feb 22, 2023",
      progress: 45,
      status: "Active",
      paymentStatus: "Paid",
      amount: "$69.99",
      studentAvatar: "/placeholder.svg?height=40&width=40",
      courseImage: "/placeholder.svg?height=60&width=80",
    },
    {
      id: 3,
      student: "Michael Brown",
      studentEmail: "michael.brown@example.com",
      course: "UI/UX Design Masterclass",
      enrollDate: "Mar 10, 2023",
      progress: 20,
      status: "Active",
      paymentStatus: "Pending",
      amount: "$79.99",
      studentAvatar: "/placeholder.svg?height=40&width=40",
      courseImage: "/placeholder.svg?height=60&width=80",
    },
    {
      id: 4,
      student: "Sarah Wilson",
      studentEmail: "sarah.wilson@example.com",
      course: "Data Science and Machine Learning",
      enrollDate: "Apr 5, 2023",
      progress: 90,
      status: "Completed",
      paymentStatus: "Paid",
      amount: "$99.99",
      studentAvatar: "/placeholder.svg?height=40&width=40",
      courseImage: "/placeholder.svg?height=60&width=80",
    },
    {
      id: 5,
      student: "David Lee",
      studentEmail: "david.lee@example.com",
      course: "Digital Marketing Strategies",
      enrollDate: "May 18, 2023",
      progress: 10,
      status: "Inactive",
      paymentStatus: "Refunded",
      amount: "$59.99",
      studentAvatar: "/placeholder.svg?height=40&width=40",
      courseImage: "/placeholder.svg?height=60&width=80",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Enrollment Management</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center"
          onClick={() => setShowAddEnrollmentForm(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Enrollment
        </button>
      </div>

      {showAddEnrollmentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Add New Enrollment</h2>
              <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowAddEnrollmentForm(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option value="">Select student</option>
                  <option value="John Smith">John Smith</option>
                  <option value="Emily Johnson">Emily Johnson</option>
                  <option value="Michael Brown">Michael Brown</option>
                  <option value="Sarah Wilson">Sarah Wilson</option>
                  <option value="David Lee">David Lee</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option value="">Select course</option>
                  <option value="Complete Web Development Bootcamp">Complete Web Development Bootcamp</option>
                  <option value="Advanced JavaScript Concepts">Advanced JavaScript Concepts</option>
                  <option value="UI/UX Design Masterclass">UI/UX Design Masterclass</option>
                  <option value="Data Science and Machine Learning">Data Science and Machine Learning</option>
                  <option value="Digital Marketing Strategies">Digital Marketing Strategies</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Enrollment Date</label>
                  <input
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status</label>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Refunded">Refunded</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
                  <input
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter amount"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  rows={3}
                  placeholder="Enter any additional notes"
                ></textarea>
              </div>

              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="notify-student-enrollment"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="notify-student-enrollment" className="ml-2 text-sm font-medium text-gray-700">
                  Notify student via email
                </label>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                  onClick={() => setShowAddEnrollmentForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Add Enrollment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search enrollments..."
            />
          </div>

          <div className="flex items-center space-x-2">
            <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Completed</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Student
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Course
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Enroll Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Progress
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Payment
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enrollments.map((enrollment) => (
                <tr key={enrollment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={enrollment.studentAvatar || "/placeholder.svg"}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{enrollment.student}</div>
                        <div className="text-sm text-gray-500">{enrollment.studentEmail}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-12">
                        <img
                          className="h-8 w-12 rounded object-cover"
                          src={enrollment.courseImage || "/placeholder.svg"}
                          alt=""
                        />
                      </div>
                      <div className="ml-3 text-sm text-gray-900">{enrollment.course}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enrollment.enrollDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          enrollment.progress >= 75
                            ? "bg-green-600"
                            : enrollment.progress >= 50
                              ? "bg-blue-600"
                              : enrollment.progress >= 25
                                ? "bg-yellow-400"
                                : "bg-red-600"
                        }`}
                        style={{ width: `${enrollment.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{enrollment.progress}% Complete</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        enrollment.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : enrollment.status === "Completed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {enrollment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {enrollment.paymentStatus === "Paid" ? (
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      ) : enrollment.paymentStatus === "Pending" ? (
                        <div className="h-4 w-4 bg-yellow-400 rounded-full mr-1"></div>
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span className="text-sm text-gray-500">{enrollment.paymentStatus}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{enrollment.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4 px-6 py-3 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center text-sm text-gray-700">
            <span>Showing 1 to 5 of 15 entries</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 text-sm text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-1 text-sm text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700">
              1
            </button>
            <button className="px-3 py-1 text-sm text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 text-sm text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 text-sm text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnrollmentManagement

