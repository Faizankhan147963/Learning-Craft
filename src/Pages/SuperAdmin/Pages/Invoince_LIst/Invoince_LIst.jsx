"use client"

import React from "react"
import { FileText, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
const Invoince_LIst = () => {
    const stats = [
        { label: "All Invoice", value: "195", icon: <FileText className="text-blue-500" />, bgColor: "bg-blue-50" },
        { label: "Paid Invoice", value: "100", icon: <CheckCircle className="text-yellow-500" />, bgColor: "bg-yellow-50" },
        { label: "Unpaid Invoice", value: "60", icon: <AlertTriangle className="text-red-500" />, bgColor: "bg-red-50" },
        { label: "Cancelled Invoice", value: "35", icon: <XCircle className="text-cyan-500" />, bgColor: "bg-cyan-50" },
      ];    
  const invoices = [
    {
      id: "#STZ1020@20",
      category: "Advertising",
      createdOn: "12 Apr 2023",
      invoiceTo: "Raul Villa",
      amount: "$ 1,42,430",
      dueDate: "20 Apr 2023",
      status: "Paid",
    },
    {
      id: "#STZ1240@40",
      category: "Course",
      createdOn: "14 Apr 2023",
      invoiceTo: "Fae Sims",
      amount: "$ 12,000",
      dueDate: "24 Apr 2023",
      status: "Overdue",
    },
    {
      id: "#STZ1284@84",
      category: "Marketing",
      createdOn: "15 Apr 2023",
      invoiceTo: "David Roderick",
      amount: "$ 1,05,000",
      dueDate: "25 Apr 2023",
      status: "Cancelled",
    },
    // Add more invoices as needed
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "text-green-600"
      case "Overdue":
        return "text-yellow-600"
      case "Cancelled":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="">
      {/* Header with Breadcrumb */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Invoice List</h1>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Learning Craft</span>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-600">Invoice</span>
          <span className="text-gray-400">&gt;</span>
          <span className="text-blue-600">Invoice List</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 mb-2">{stat.label}</p>
                <p className="text-3xl font-semibold">{stat.value}</p>
              </div>
              <div className={`${stat.bgColor} p-4 rounded-lg text-2xl`}>{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Add Button */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search for items..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <span>Add Invoice</span>
          <span className="text-xl">+</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-5 p-4">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Invoice Id</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Category</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Created On</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Invoice To</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Amount</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Due Date</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {invoices.map((invoice, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-4">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="p-4 text-sm font-medium">{invoice.id}</td>
                <td className="p-4 text-sm">{invoice.category}</td>
                <td className="p-4 text-sm">{invoice.createdOn}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <span className="text-sm font-medium">{invoice.invoiceTo}</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-blue-600 font-medium">{invoice.amount}</td>
                <td className="p-4 text-sm">{invoice.dueDate}</td>
                <td className="p-4">
                  <span className={`text-sm ${getStatusColor(invoice.status)}`}>• {invoice.status}</span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="p-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                    <button className="p-1 rounded bg-cyan-50 text-cyan-600 hover:bg-cyan-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                    <button className="p-1 rounded bg-red-50 text-red-600 hover:bg-red-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-600">Showing 1 to 5 of 12</p>
        <div className="flex gap-2">
          <button className="p-2 rounded border hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
          <button className="px-3 py-1 rounded hover:bg-gray-50">2</button>
          <button className="px-3 py-1 rounded hover:bg-gray-50">...</button>
          <button className="px-3 py-1 rounded hover:bg-gray-50">12</button>
          <button className="p-2 rounded border hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Invoince_LIst

