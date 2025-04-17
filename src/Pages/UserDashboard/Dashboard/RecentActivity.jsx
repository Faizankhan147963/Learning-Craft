const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "quiz",
      title: "JavaScript Basics Quiz",
      time: "2 hours ago",
      result: "Scored 85%",
    },
    {
      id: 2,
      type: "assignment",
      title: "React Component Assignment",
      time: "Yesterday",
      result: "Submitted",
    },
    {
      id: 3,
      type: "course",
      title: "Completed CSS Animations",
      time: "3 days ago",
      result: "Certificate earned",
    },
  ]

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        <div className="mt-4 flow-root">
          <ul className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          activity.type === "quiz"
                            ? "bg-blue-100"
                            : activity.type === "assignment"
                              ? "bg-green-100"
                              : "bg-purple-100"
                        }`}
                      >
                        <span
                          className={`h-5 w-5 rounded-full ${
                            activity.type === "quiz"
                              ? "bg-blue-500"
                              : activity.type === "assignment"
                                ? "bg-green-500"
                                : "bg-purple-500"
                          }`}
                        ></span>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.result}</p>
                      </div>
                      <div className="whitespace-nowrap text-right text-xs text-gray-500">
                        <time>{activity.time}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecentActivity

