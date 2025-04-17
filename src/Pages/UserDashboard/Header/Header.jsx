"use client"

import { Bell, Search, Menu } from "lucide-react"

const Header = ({ setMobileMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <button
          type="button"
          className="text-gray-500 focus:outline-none lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="flex flex-1 items-center justify-between lg:justify-end">
          <div className="max-w-lg flex-1 lg:max-w-xs">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Search for courses..."
                type="search"
              />
            </div>
          </div>

          <div className="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-medium text-white">
                3
              </span>
            </button>

            <div className="ml-3 relative">
              <div className="flex items-center">
                <img className="h-8 w-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqf0Wx4wmsKfLYsiLdBx6H4D8bwQBurWhx5g&s " alt="User profile" />
                <span className="ml-2 hidden text-sm font-medium text-gray-700 md:block">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

