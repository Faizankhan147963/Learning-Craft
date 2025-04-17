"use client"

import { useState } from "react"
import { Search, Filter, Plus, Trash2, Download, Award, X } from "lucide-react"

const CertificateManagement = () => {
  const [showIssueCertificateForm, setShowIssueCertificateForm] = useState(false)

  // Sample certificate data
  const certificates = [
    {
      id: 1,
      student: "John Smith",
      studentEmail: "john.smith@example.com",
      course: "Complete Web Development Bootcamp",
      issueDate: "Jan 15, 2023",
      expiryDate: "Jan 15, 2025",
      status: "Active",
      studentAvatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      student: "Emily Johnson",
      studentEmail: "emily.johnson@example.com",
      course: "Advanced JavaScript Concepts",
      issueDate: "Feb 22, 2023",
      expiryDate: "Feb 22, 2025",
      status: "Active",
      studentAvatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      student: "Michael Brown",
      studentEmail: "michael.brown@example.com",
      course: "UI/UX Design Masterclass",
      issueDate: "Mar 10, 2023",
      expiryDate: "Mar 10, 2025",
      status: "Active",
      studentAvatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      student: "Sarah Wilson",
      studentEmail: "sarah.wilson@example.com",
      course: "Data Science and Machine Learning",
      issueDate: "Apr 5, 2023",
      expiryDate: "Apr 5, 2025",
      status: "Active",
      studentAvatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      student: "David Lee",
      studentEmail: "david.lee@example.com",
      course: "Digital Marketing Strategies",
      issueDate: "May 18, 2023",
      expiryDate: "May 18, 2025",
      status: "Revoked",
      studentAvatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Certificate Management</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center"
          onClick={() => setShowIssueCertificateForm(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Issue New Certificate
        </button>
      </div>

      {showIssueCertificateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Issue New Certificate</h2>
              <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowIssueCertificateForm(false)}>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Issue Date</label>
                  <input
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Template</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                <textarea
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  rows={3}
                  placeholder="Enter any additional notes"
                ></textarea>
              </div>

              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="notify-student"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="notify-student" className="ml-2 text-sm font-medium text-gray-700">
                  Notify student via email
                </label>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                  onClick={() => setShowIssueCertificateForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Issue Certificate
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
              placeholder="Search certificates..."
            />
          </div>

          <div className="flex items-center space-x-2">
            <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
              <option>All Status</option>
              <option>Active</option>
              <option>Revoked</option>
              <option>Expired</option>
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
                  Issue Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Expiry Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
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
              {certificates.map((certificate) => (
                <tr key={certificate.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={certificate.studentAvatar || "/placeholder.svg"}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{certificate.student}</div>
                        <div className="text-sm text-gray-500">{certificate.studentEmail}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{certificate.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{certificate.issueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{certificate.expiryDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        certificate.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {certificate.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Award className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Download className="h-4 w-4" />
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
            <span>Showing 1 to 5 of 20 entries</span>
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
              4
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

export default CertificateManagement

