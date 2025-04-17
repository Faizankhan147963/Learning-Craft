const LineChart = () => {
  // In a real application, you would use a charting library like Chart.js or Recharts
  // For this example, we'll create a simple visual representation

  return (
    <div className="w-full h-64 relative">
      <div className="absolute inset-0 flex items-end justify-between px-2">
        <div className="h-3/4 w-1 bg-blue-600 rounded-t-sm"></div>
        <div className="h-1/2 w-1 bg-blue-600 rounded-t-sm"></div>
        <div className="h-2/3 w-1 bg-blue-600 rounded-t-sm"></div>
        <div className="h-3/5 w-1 bg-blue-600 rounded-t-sm"></div>
        <div className="h-4/5 w-1 bg-blue-600 rounded-t-sm"></div>
        <div className="h-2/3 w-1 bg-blue-600 rounded-t-sm"></div>
        <div className="h-3/4 w-1 bg-blue-600 rounded-t-sm"></div>
        <div className="h-5/6 w-1 bg-blue-600 rounded-t-sm"></div>
        <div className="h-full w-1 bg-blue-600 rounded-t-sm"></div>
        <div className="h-4/5 w-1 bg-blue-600 rounded-t-sm"></div>
        <div className="h-3/4 w-1 bg-blue-600 rounded-t-sm"></div>
        <div className="h-5/6 w-1 bg-blue-600 rounded-t-sm"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
        <div>Jan</div>
        <div>Feb</div>
        <div>Mar</div>
        <div>Apr</div>
        <div>May</div>
        <div>Jun</div>
        <div>Jul</div>
        <div>Aug</div>
        <div>Sep</div>
        <div>Oct</div>
        <div>Nov</div>
        <div>Dec</div>
      </div>

      <div className="absolute top-0 right-0 flex space-x-2">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full mr-1"></div>
          <span className="text-xs text-gray-500">Enrollments</span>
        </div>
      </div>
    </div>
  )
}

export default LineChart

