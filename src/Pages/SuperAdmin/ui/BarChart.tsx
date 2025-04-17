const BarChart = () => {
  // In a real application, you would use a charting library like Chart.js or Recharts
  // For this example, we'll create a simple visual representation

  const categories = [
    { name: "Development", value: 75, color: "bg-blue-600" },
    { name: "Business", value: 60, color: "bg-green-500" },
    { name: "Design", value: 45, color: "bg-purple-500" },
    { name: "Marketing", value: 30, color: "bg-yellow-500" },
    { name: "IT & Software", value: 50, color: "bg-red-500" },
  ]

  return (
    <div className="w-full h-64">
      <div className="flex h-full">
        <div className="flex flex-col justify-between text-xs text-gray-500 pr-2">
          <div>$100k</div>
          <div>$75k</div>
          <div>$50k</div>
          <div>$25k</div>
          <div>$0</div>
        </div>

        <div className="flex-1 flex items-end justify-around">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`${category.color} w-12 rounded-t-sm`} style={{ height: `${category.value}%` }}></div>
              <div className="text-xs text-gray-500 mt-2">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarChart

