import { useState } from 'react'
import lady from '../../assets/hero.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Register() {
  const navigate =useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    dob: '', // Added for Date of Birth
    termsAccepted: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.termsAccepted) {
      Swal.fire({
        icon: 'warning',
        title: 'Terms & Conditions',
        text: 'You must accept the terms and conditions to proceed.',
        toast: true,
        position: 'top-right',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }
  
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobile: formData.phoneNumber,
      password: formData.password,
      dob: formData.dob,
    };
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Show success notification
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'You have successfully registered. Redirecting to login...',
        toast: true,
        position: 'top-right',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
  
      console.log('Response:', response.data);
  
      // Redirect to login after 3 seconds
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      console.error('Error:', error);
  
      // Handle duplicate email error
      if (error.response && error.response.data.error === 'Email is already registered. Please use a different email.') {
        Swal.fire({
          icon: 'error',
          title: 'Email Already Registered',
          text: 'The provided email is already associated with an account.',
          toast: true,
          position: 'top-right',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        // Generic error notification
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.response?.data?.error || 'An error occurred. Please try again.',
          toast: true,
          position: 'top-right',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    }
  };
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mx-auto container px-4">
        <div className="rounded-lg bg-white shadow-sm">
          {/* Header Badge */}
          <div className="mb-6">
            <span className="inline-block rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
              Student
            </span>
          </div>

          <h1 className="mb-8 text-3xl font-bold text-gray-900">Apply As Student</h1>

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
                <h2 className="mb-2 text-2xl font-semibold text-gray-900">Student Registration</h2>
                <p className="text-gray-600">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="First name..."
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Last name..."
                    />
                  </div>
                </div>

                {/* Phone and Email Fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phoneNumber" className="mb-1 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Phone number..."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="dob" className="mb-1 block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Date of Birth"
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
                    placeholder="Password"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="termsAccepted" className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <Link to="/termscondition" className="text-blue-600 hover:underline">
                      terms and conditions
                    </Link>.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Register
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
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Sign in here
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
