'use client'

import { useState } from 'react'
import lady from '../../assets/hero.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { token, role, userId } = response.data;

      // Store role, token, and userId in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('userId', userId);

      // Show success notification
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'You have logged in successfully.',
        toast: true,
        position: 'top-right',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      console.log('Response:', response.data);

     
      navigate('/');
    } catch (error) {
      console.error('Login Error:', error);

      // Show error notification
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.response?.data?.error || 'Invalid email or password. Please try again.',
        toast: true,
        position: 'top-right',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mx-auto container px-4">
        <div className="rounded-lg bg-white shadow-sm">
          {/* Header Badge */}
          <div className="mb-6">
            <span className="inline-block rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
              Login
            </span>
          </div>

          <h1 className="mb-8 text-3xl font-bold text-gray-900">Welcome Back</h1>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column - Image */}
            <div className="relative">
                          <img
                            src={lady}
                            alt="Student"
                            className="rounded-lg object-cover h-full"
                          />
                          {/* Decorative Elements */}
                          <div className="absolute left-4 top-4 h-12 w-12 rounded-lg bg-white/90 shadow-lg backdrop-blur-sm" />
                          <div className="absolute right-20 top-20 h-12 w-12 rounded-lg bg-white/90 shadow-lg backdrop-blur-sm" />
                          <div className="absolute bottom-20 left-20 h-4 w-4 rounded-full bg-blue-500" />
                          <div className="absolute right-12 top-1/2 h-4 w-4 rounded-full bg-orange-400" />
                        </div>

            {/* Right Column - Form */}
            <div className="space-y-6 p-4 lg:p-6">
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-gray-900">Login to Your Account</h2>
                <p className="text-gray-600">
                  Access your personalized dashboard and explore more.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Login
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>

              {/* Don't Have an Account Section */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Don’t have an account?{' '}
                  <Link
                    to="/register"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
