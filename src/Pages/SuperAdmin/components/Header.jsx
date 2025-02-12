import { Bell, Grid3X3, Moon, Search, ShoppingCart, UserIcon } from 'lucide-react'
import { useState } from 'react';
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
export default function Header({ onSubmenuSelect }) {
    const navigate = useNavigate()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdownn = () => {
        setIsDropdownOpen(prev => !prev);
    };
    // Toggle the dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    // Handle the logout action
    const handleLogout = () => {
        navigate("/")
        localStorage.removeItem('userRole')
    };
    return (
        <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center border-b bg-white px-4 dark:bg-gray-800">
            <div className="ml-64 flex flex-1 items-center justify-between">
                <div className="flex items-center">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="h-10 w-64 rounded-lg bg-gray-100 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-4">


                    <button className="rounded-lg p-2 hover:bg-gray-100">
                        <Grid3X3 className="h-5 w-5" />
                    </button>

                    <button className="rounded-lg p-2 hover:bg-gray-100">
                        <Moon className="h-5 w-5" />
                    </button>



                    <div className="relative">
                        {/* Notification Button */}
                        <button
                            onClick={toggleDropdownn}
                            className="rounded-lg p-2 hover:bg-gray-100 focus:outline-none"
                        >
                            <Bell className="h-5 w-5" />
                        </button>

                        {/* Badge for notification count */}
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                            3
                        </span>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-64 rounded-lg border bg-white shadow-lg">
                                <div className="py-2 px-4 text-sm text-gray-800">Tiffin Service Notifications</div>
                                <div className="max-h-60 overflow-y-auto">
                                    <ul>
                                        <li className="hover:bg-gray-100 py-2 px-4">New order received from John Doe</li>
                                        <li className="hover:bg-gray-100 py-2 px-4">Your meal plan for the week has been confirmed</li>
                                        <li className="hover:bg-gray-100 py-2 px-4">Subscription reminder: Next delivery on Monday</li>
                                        <li className="hover:bg-gray-100 py-2 px-4">New customer feedback: "Great service!"</li>
                                        <li className="hover:bg-gray-100 py-2 px-4">Your account has been updated</li>
                                    </ul>
                                </div>
                                <div className="py-2 px-4 text-xs text-gray-500 text-center">See All Notifications</div>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        {/* Profile Button */}
                        <button
                            className="flex items-center space-x-3 rounded-lg p-1 hover:bg-gray-100"
                            onClick={toggleDropdown}
                        >
                            <img
                                src="https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWd5cHRpYW4lMjBtYW58ZW58MHx8MHx8fDA%3D"
                                alt="Profile"
                                className="h-8 w-8 rounded-full"
                            />
                            <div className="text-left">
                                <p className="text-sm font-medium">Anna Adame</p>
                                <p className="text-xs text-gray-500">Super Admin</p>
                            </div>
                        </button>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div
                                className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg transform transition-all duration-300 ease-out opacity-0 scale-95"
                                style={{
                                    opacity: dropdownOpen ? 1 : 0,
                                    transform: dropdownOpen ? 'scale(1)' : 'scale(0.95)',
                                }}
                            >
                                <ul>
                                    <li
                                        className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center"
                                        onClick={() => {
                                            onSubmenuSelect("My_Profile");  // Call the onSubmenuSelect with "My_Profile"
                                            toggleDropdown();  // Toggle dropdown state if necessary
                                        }}
                                    >
                                        <UserIcon className="mr-2 text-gray-500" /> {/* User Icon */}
                                        Profile
                                    </li>
                                    <li
                                        className="px-4 py-2 text-sm text-blue-500 hover:bg-gray-100 cursor-pointer flex items-center font-bold"
                                        onClick={handleLogout}
                                    >
                                        <MdLogout size={23} className="mr-2 text-gray-500 font-bold" />
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}