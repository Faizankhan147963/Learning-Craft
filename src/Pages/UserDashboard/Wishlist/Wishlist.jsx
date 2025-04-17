
import { useState } from "react"
import { Heart, Trash2, ShoppingCart, Star } from "lucide-react"

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: "Advanced React & Redux",
      instructor: "Michael Chen",
      rating: 4.9,
      reviews: 876,
      price: 94.99,
      image: "/placeholder.svg?height=200&width=300",
      level: "Advanced",
      duration: "36 hours",
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      instructor: "Robert Davis",
      rating: 4.9,
      reviews: 1120,
      price: 99.99,
      image: "/placeholder.svg?height=200&width=300",
      level: "Intermediate",
      duration: "56 hours",
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Jessica Lee",
      rating: 4.8,
      reviews: 932,
      price: 84.99,
      image: "/placeholder.svg?height=200&width=300",
      level: "All Levels",
      duration: "38 hours",
    },
  ])

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Wishlist</h1>
        <p className="mt-1 text-sm text-gray-500">Courses you've saved for later.</p>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg bg-white shadow">
              <div className="flex flex-col md:flex-row">
                <div className="h-48 w-full md:h-auto md:w-64">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="h-full w-full object-cover" />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">by {item.instructor}</p>

                    <div className="mt-2 flex items-center">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                        <span className="ml-1 text-sm font-medium text-gray-900">{item.rating}</span>
                      </div>
                      <span className="mx-1 text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{item.reviews} reviews</span>
                      <span className="mx-1 text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{item.level}</span>
                      <span className="mx-1 text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{item.duration}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">${item.price}</span>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <Trash2 className="mr-2 h-4 w-4 text-gray-400" />
                        Remove
                      </button>

                      <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white py-12 px-4 text-center shadow sm:px-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Heart className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Your wishlist is empty</h3>
          <p className="mt-1 text-sm text-gray-500">
            Save courses you're interested in to your wishlist for easy access later.
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Browse Courses
            </button>
          </div>
        </div>
      )}

      {/* Recommended Courses */}
      {wishlistItems.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">You might also like</h2>

          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow transition-all duration-200 hover:shadow-md">
              <div className="relative">
                <img src="/placeholder.svg?height=200&width=300" alt="Course" className="h-48 w-full object-cover" />
                <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 text-gray-400 hover:text-red-500 focus:outline-none">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">Python for Data Science</h3>
                <p className="mt-1 text-sm text-gray-500">by Robert Davis</p>

                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <span className="ml-1 text-sm font-medium text-gray-900">4.7</span>
                  </div>
                  <span className="mx-1 text-gray-500">•</span>
                  <span className="text-sm text-gray-500">845 reviews</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">$89.99</span>
                  <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow transition-all duration-200 hover:shadow-md">
              <div className="relative">
                <img src="/placeholder.svg?height=200&width=300" alt="Course" className="h-48 w-full object-cover" />
                <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 text-gray-400 hover:text-red-500 focus:outline-none">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">Mobile App Development with Flutter</h3>
                <p className="mt-1 text-sm text-gray-500">by Emma Wilson</p>

                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <span className="ml-1 text-sm font-medium text-gray-900">4.8</span>
                  </div>
                  <span className="mx-1 text-gray-500">•</span>
                  <span className="text-sm text-gray-500">732 reviews</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">$79.99</span>
                  <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow transition-all duration-200 hover:shadow-md">
              <div className="relative">
                <img src="/placeholder.svg?height=200&width=300" alt="Course" className="h-48 w-full object-cover" />
                <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 text-gray-400 hover:text-red-500 focus:outline-none">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">AWS Cloud Practitioner Certification</h3>
                <p className="mt-1 text-sm text-gray-500">by David Thompson</p>

                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <span className="ml-1 text-sm font-medium text-gray-900">4.9</span>
                  </div>
                  <span className="mx-1 text-gray-500">•</span>
                  <span className="text-sm text-gray-500">956 reviews</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">$94.99</span>
                  <button className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Wishlist

