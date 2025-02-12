'use client'

import { useEffect, useState } from 'react'
import { Bell, ChevronDown, Copy, Lock, LogOut, Mail, MessageSquare, Search, Settings, Shield, Users } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UserProfile() {
    const { id } = useParams()
    const [isSidebarOpen, setSidebarOpen] = useState(true)
    const [activeTab, setActiveTab] = useState('profile')
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        email: 'daniellepimentel@gmail.com',
        phone: '555-55-2261',
        city: 'Los Angeles',
        username: "Faizan Khan",
        role: "user"
    })

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/users/${id}`)

                if (!response.ok) {
                    throw new Error('Failed to fetch user data')
                }

                const data = await response.json()

                setFormData({
                    email: data.user.email, // Adjusting based on your API structure
                    phone: data.user.mobile, // Adjust if 'phone' field is named differently in the response
                    city: data.user.city || "Canada",// Default value if city is missing
                    username: data.user.firstName || "Faizan",
                    role: data.user.role || "User",
                })
                console.log(formData)
            } catch (error) {
                console.error('Error fetching user data:', error)
            }
        }

        fetchUser()
    }, [])

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("role")
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        navigate("/")
    }

    const sidebarItems = [
        { id: 'profile', label: 'Profile', icon: <Users className="w-5 h-5" /> },
        { id: 'teams', label: 'Teams', icon: <Users className="w-5 h-5" /> },
        { id: 'reset-password', label: 'Reset Password', icon: <Lock className="w-5 h-5" /> },
        { id: 'sign-as-user', label: 'Sign As User', icon: <LogOut className="w-5 h-5" /> },
        { id: 'notification', label: 'Notification', icon: <Bell className="w-5 h-5" /> },
        { id: 'billing', label: 'Billing', icon: <Settings className="w-5 h-5" /> },
        { id: 'block-access', label: 'Block Access', icon: <Shield className="w-5 h-5" /> },
        { id: 'delete-account', label: 'Delete Account', icon: <LogOut className="w-5 h-5" /> },
    ]

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <>
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <div className="flex items-center gap-6 mb-6">
                                <img src="https://cdn-icons-png.flaticon.com/512/6325/6325109.png" alt="Profile" className="w-24 h-24 rounded-full " />
                                <div>
                                    <h2 className="text-xl font-semibold">{formData.username}</h2>
                                    <p className="text-gray-500">
                                        {formData.role.charAt(0).toUpperCase() + formData.role.slice(1)}
                                    </p>

                                </div>
                                <div className="flex gap-3 ml-auto">
                                    <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg">
                                        <Copy className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg">
                                        <Mail className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold">Staff Member Information</h3>
                                <button
                                    onClick={() => setIsEditing(!isEditing)}
                                    className="px-4 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200"
                                >
                                    {isEditing ? 'Save' : 'Edit'}
                                </button>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {isEditing ? (
                                    <>
                                        <div>
                                            <label className="block text-sm text-gray-500 mb-1">Email</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-500 mb-1">Phone</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-500 mb-1">City</label>
                                            <input
                                                type="text"
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <label className="block text-sm text-gray-500 mb-1">Email</label>
                                            <p className="text-sm">{formData.email}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-500 mb-1">Phone</label>
                                            <p className="text-sm">{formData.phone}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-500 mb-1">City</label>
                                            <p className="text-sm">{formData.city}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-semibold mb-6">Staff Website</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1">Account Status</label>
                                    <p className="text-sm">Account Created</p>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1">Two Factor Authentication</label>
                                    <p className="text-sm">Not Set</p>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1">Role</label>
                                    <p className="text-sm">Leasing Agent</p>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1">User Type</label>
                                    <p className="text-sm">Staff Member</p>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1">Property Access</label>
                                    <p className="text-sm">All Property</p>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1">City</label>
                                    <p className="text-sm">New York</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            case 'teams':
                return (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold mb-4">Team Management</h3>
                        <div className="space-y-4">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">Sales Team</h4>
                                <p className="text-sm text-gray-500">8 members</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">Marketing Team</h4>
                                <p className="text-sm text-gray-500">5 members</p>
                            </div>
                        </div>
                    </div>
                )
            case 'reset-password':
                return (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Current Password</label>
                                <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">New Password</label>
                                <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Confirm New Password</label>
                                <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                Update Password
                            </button>
                        </form>
                    </div>
                )
            case 'sign-as-user':
                return (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold mb-4">Sign in as Another User</h3>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter user email"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                Sign in as User
                            </button>
                        </div>
                    </div>
                )
            case 'notification':
                return (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">Email Notifications</h4>
                                    <p className="text-sm text-gray-500">Receive email updates</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">Push Notifications</h4>
                                    <p className="text-sm text-gray-500">Receive push notifications</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                )
            case 'billing':
                return (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
                        <div className="space-y-4">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">Current Plan</h4>
                                <p className="text-sm text-gray-500">Professional Plan - $29/month</p>
                                <button className="mt-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                                    Upgrade Plan
                                </button>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">Payment Method</h4>
                                <p className="text-sm text-gray-500">Visa ending in 4242</p>
                                <button className="mt-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                                    Update Payment Method
                                </button>
                            </div>
                        </div>
                    </div>
                )
            case 'block-access':
                return (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold mb-4">Access Control</h3>
                        <div className="space-y-4">
                            <div className="p-4 border rounded-lg bg-red-50">
                                <h4 className="font-medium text-red-600">Block User Access</h4>
                                <p className="text-sm text-red-500 mb-4">Blocking access will prevent the user from logging in.</p>
                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                                    Block Access
                                </button>
                            </div>
                        </div>
                    </div>
                )
            case 'delete-account':
                return (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold mb-4 text-red-600">Delete Account</h3>
                        <div className="space-y-4">
                            <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                                <h4 className="font-medium text-red-600">Warning</h4>
                                <p className="text-sm text-red-500 mb-4">
                                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm text-gray-500 mb-1">Type "DELETE" to confirm</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                                        Delete Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="relative flex-1 max-w-xs">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <MessageSquare className="w-6 h-6 text-gray-500" />
                        <Bell className="w-6 h-6 text-gray-500" />
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 text-sm"
                            >
                                <img src="https://cdn-icons-png.flaticon.com/512/6325/6325109.png" alt="User" className="w-8 h-8 rounded-full" />
                                <span>{formData.email}</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                                    <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50">Profile Settings</button>
                                    <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50">Account</button>
                                    <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50">Help Center</button>
                                    <hr className="my-1" />
                                    <button className="w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-50" onClick={handleLogout}>Sign Out</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className={`${isSidebarOpen ? 'w-64' : 'w-0'}  transition-all duration-300 bg-white border-r h-[calc(100vh-64px)] overflow-hidden`}>
                    <nav className="p-4 space-y-2">
                        {sidebarItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition-colors
                  ${activeTab === item.id ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                {item.icon}
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    <h1 className="text-2xl font-semibold mb-6">{sidebarItems.find(item => item.id === activeTab)?.label}</h1>
                    {renderContent()}
                </main>
            </div>
        </div>
    )
}

