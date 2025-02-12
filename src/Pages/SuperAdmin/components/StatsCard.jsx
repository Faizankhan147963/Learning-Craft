
  export default function StatsCard({ title, value, change, link, icon }) {
    const trendColor = {
      up: 'text-green-500',
      down: 'text-red-500',
      neutral: 'text-gray-500'
    }
  
    return (
      <div className="rounded-lg border bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="mt-2 text-2xl font-semibold">{value}</p>
          </div>
          <div className="rounded-lg bg-gray-100 p-3">
            {icon}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className={trendColor[change.trend]}>{change.value}</span>
          </div>
          <a href={link.href} className="text-sm text-blue-600 hover:underline">
            {link.text}
          </a>
        </div>
      </div>
    )
  }
  
  