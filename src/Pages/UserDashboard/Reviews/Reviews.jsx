"use client"

import { useState } from "react"
import { Star, Edit, Trash2 } from "lucide-react"

const Reviews = () => {
  const [activeTab, setActiveTab] = useState("my-reviews")

  const tabs = [
    { id: "my-reviews", label: "My Reviews" },
    { id: "pending-reviews", label: "Pending Reviews" },
  ]

  const myReviews = [
    {
      id: 1,
      courseTitle: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 5,
      review:
        "This course exceeded my expectations! The instructor explains complex concepts in a simple and easy-to-understand manner. The projects were challenging but very rewarding. Highly recommended for anyone looking to get into web development.",
      date: "Apr 5, 2025",
      courseImage: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      courseTitle: "JavaScript Fundamentals",
      instructor: "David Thompson",
      rating: 4,
      review:
        "Great course for JavaScript beginners. The instructor covers all the basics thoroughly. I would have liked more advanced topics, but overall it was a solid introduction to JavaScript.",
      date: "Mar 20, 2025",
      courseImage: "/placeholder.svg?height=200&width=300",
    },
  ]

  const pendingReviews = [
    {
      id: 3,
      courseTitle: "Advanced React & Redux",
      instructor: "Michael Chen",
      completedDate: "Apr 12, 2025",
      courseImage: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      courseTitle: "CSS Animations and Transitions",
      instructor: "Emma Wilson",
      completedDate: "Apr 8, 2025",
      courseImage: "/placeholder.svg?height=200&width=300",
    },
  ]

  const [editingReview, setEditingReview] = useState(null)
  const [reviewText, setReviewText] = useState("")
  const [reviewRating, setReviewRating] = useState(0)

  const handleEditReview = (review) => {
    setEditingReview(review.id)
    setReviewText(review.review)
    setReviewRating(review.rating)
  }

  const handleSaveReview = () => {
    // In a real app, you would update the review in your database
    setEditingReview(null)
  }

  const handleCancelEdit = () => {
    setEditingReview(null)
  }

  const renderStars = (rating, interactive = false) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && setReviewRating(star)}
            className={`${interactive ? "cursor-pointer" : "cursor-default"} ${
              star <= (interactive ? reviewRating : rating) ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            <Star className="h-5 w-5" fill="currentColor" />
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Reviews</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your course reviews and ratings.</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {tab.label}
              {tab.id === "pending-reviews" && pendingReviews.length > 0 && (
                <span className="ml-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  {pendingReviews.length}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Reviews Content */}
      {activeTab === "my-reviews" && (
        <div className="space-y-4">
          {myReviews.length > 0 ? (
            myReviews.map((review) => (
              <div key={review.id} className="overflow-hidden rounded-lg bg-white shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="h-48 w-full md:h-auto md:w-48">
                    <img
                      src={review.courseImage || "/placeholder.svg"}
                      alt={review.courseTitle}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{review.courseTitle}</h3>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Instructor: {review.instructor}</p>

                      <div className="mt-2">
                        {editingReview === review.id ? renderStars(review.rating, true) : renderStars(review.rating)}
                      </div>

                      {editingReview === review.id ? (
                        <div className="mt-4">
                          <textarea
                            rows={4}
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                          />
                        </div>
                      ) : (
                        <p className="mt-4 text-sm text-gray-600">{review.review}</p>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-end space-x-2">
                      {editingReview === review.id ? (
                        <>
                          <button
                            onClick={handleCancelEdit}
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleSaveReview}
                            className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                            Save Changes
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditReview(review)}
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                            <Edit className="mr-2 h-4 w-4 text-gray-400" />
                            Edit
                          </button>
                          <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            <Trash2 className="mr-2 h-4 w-4 text-gray-400" />
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg bg-white py-12 px-4 text-center shadow sm:px-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No reviews yet</h3>
              <p className="mt-1 text-sm text-gray-500">You haven't reviewed any courses yet.</p>
            </div>
          )}
        </div>
      )}

      {activeTab === "pending-reviews" && (
        <div className="space-y-4">
          {pendingReviews.length > 0 ? (
            pendingReviews.map((review) => (
              <div key={review.id} className="overflow-hidden rounded-lg bg-white shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="h-48 w-full md:h-auto md:w-48">
                    <img
                      src={review.courseImage || "/placeholder.svg"}
                      alt={review.courseTitle}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{review.courseTitle}</h3>
                      <p className="mt-1 text-sm text-gray-500">Instructor: {review.instructor}</p>
                      <p className="mt-1 text-sm text-gray-500">Completed: {review.completedDate}</p>

                      <div className="mt-4">
                        <p className="text-sm text-gray-600">
                          You completed this course but haven't left a review yet. Share your experience to help other
                          students!
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Write a Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg bg-white py-12 px-4 text-center shadow sm:px-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No pending reviews</h3>
              <p className="mt-1 text-sm text-gray-500">You don't have any courses waiting for your review.</p>
            </div>
          )}
        </div>
      )}

      {/* Review Guidelines */}
      <div className="mt-8 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Review Guidelines</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>When writing a review, please consider the following:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Be specific about what you liked or disliked about the course</li>
              <li>Mention the instructor's teaching style and clarity</li>
              <li>Comment on the course content, projects, and assignments</li>
              <li>Share how the course has helped you in your learning journey</li>
              <li>Keep your review respectful and constructive</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews

