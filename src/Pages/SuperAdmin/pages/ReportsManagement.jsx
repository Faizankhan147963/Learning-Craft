import { Download, FileText, Filter, Calendar, Clock, BarChart2, PieChart, TrendingUp, Users } from "lucide-react"

const ReportsManagement = () => {
  // Sample reports data
  const reports = [
    {
      id: 1,
      title: "Monthly Revenue Report",
      description: "Detailed breakdown of revenue by course category and instructor",
      type: "Financial",
      generatedDate: "Jun 1, 2023",
      format: "PDF",
      size: "2.4 MB",
      icon: <BarChart2 className="h-5 w-5 text-blue-600" />,
    },
    {
      id: 2,
      title: "Student Engagement Analysis",
      description: "Analysis of student activity, completion rates, and engagement metrics",
      type: "Analytics",
      generatedDate: "May 15, 2023",
      format: "Excel",
      size: "3.8 MB",
      icon: <Users className="h-5 w-5 text-green-600" />,
    },
    {
      id: 3,
      title: "Course Performance Report",
      description: "Performance metrics for all courses including ratings and completion",
      type: "Analytics",
      generatedDate: "May 1, 2023",
      format: "PDF",
      size: "1.7 MB",
      icon: <TrendingUp className="h-5 w-5 text-purple-600" />,
    },
    {
      id: 4,
      title: "Instructor Earnings Report",
      description: "Detailed breakdown of instructor earnings and commission",
      type: "Financial",
      generatedDate: "Apr 15, 2023",
      format: "Excel",
      size: "2.1 MB",
      icon: <PieChart className="h-5 w-5 text-orange-600" />,
    },
    {
      id: 5,
      title: "Certificate Issuance Report",
      description: "Summary of all certificates issued in the last quarter",
      type: "Administrative",
      generatedDate: "Apr 1, 2023",
      format: "PDF",
      size: "1.2 MB",
      icon: <FileText className="h-5 w-5 text-red-600" />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Reports Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
          <FileText className="h-4 w-4 mr-2" />
          Generate New Report
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <div className="flex items-center space-x-2">
            <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
              <option>All Types</option>
              <option>Financial</option>
              <option>Analytics</option>
              <option>Administrative</option>
            </select>
            <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
              <option>All Formats</option>
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Date Range:</span>
            </div>
            <input
              type="date"
              className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
            />
            <span className="text-gray-500">to</span>
            <input
              type="date"
              className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>
        </div>

        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mr-4">
                  {report.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{report.title}</h3>
                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{report.description}</p>
                  <div className="flex items-center mt-3 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 rounded-full mr-2">{report.type}</span>
                    <div className="flex items-center mr-3">
                      <Calendar className="h-3 w-3 mr-1" />
                      {report.generatedDate}
                    </div>
                    <div className="flex items-center mr-3">
                      <FileText className="h-3 w-3 mr-1" />
                      {report.format}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {report.size}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 px-6 py-3 bg-gray-50 border-t border-gray-200 rounded-b-lg">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Scheduled Reports</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-800">Weekly Revenue Summary</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Weekly</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Next generation: Jun 12, 2023</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-800">Monthly Enrollment Report</h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Monthly</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Next generation: Jul 1, 2023</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-800">Quarterly Performance Analysis</h3>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Quarterly</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Next generation: Jul 15, 2023</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Report Templates</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <BarChart2 className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Financial Report</h3>
                  <p className="text-xs text-gray-500 mt-1">Revenue, expenses, and profit analysis</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                  <Users className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">User Activity Report</h3>
                  <p className="text-xs text-gray-500 mt-1">Student engagement and activity metrics</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center mr-3">
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Course Performance</h3>
                  <p className="text-xs text-gray-500 mt-1">Detailed course metrics and analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Downloads</h2>
          <div className="space-y-4">
            {[
              { title: "Monthly Revenue Report", date: "Jun 5, 2023", time: "10:23 AM" },
              { title: "Student Engagement Analysis", date: "Jun 3, 2023", time: "2:45 PM" },
              { title: "Course Performance Report", date: "Jun 1, 2023", time: "9:12 AM" },
              { title: "Instructor Earnings Report", date: "May 28, 2023", time: "4:30 PM" },
            ].map((download, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div>
                  <h3 className="text-sm font-medium text-gray-800">{download.title}</h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {download.date}
                    <Clock className="h-3 w-3 ml-2 mr-1" />
                    {download.time}
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportsManagement

