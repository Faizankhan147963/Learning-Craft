import type React from "react"

interface StatCardProps {
  title: string
  value: string
  icon: React.ReactNode
  change: string
  color: string
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change, color }) => {
  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return "bg-blue-50 text-blue-600"
      case "green":
        return "bg-green-50 text-green-600"
      case "purple":
        return "bg-purple-50 text-purple-600"
      case "orange":
        return "bg-orange-50 text-orange-600"
      default:
        return "bg-blue-50 text-blue-600"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
        </div>
        <div className={`p-3 rounded-full ${getColorClasses()}`}>{icon}</div>
      </div>
      <div className="mt-4">
        <span className={`text-sm font-medium ${change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
          {change}
        </span>
        <span className="text-sm text-gray-500 ml-1">from last month</span>
      </div>
    </div>
  )
}

export default StatCard

