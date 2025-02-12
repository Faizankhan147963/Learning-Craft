import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const role = localStorage.getItem('role')

  // If the role is not 'admin', redirect to the login page or homepage
  if (role !== 'admin') {
    return <Navigate to="/login" /> // Redirect to homepage, or change to '/login' if needed
  }

  return children
}

export default ProtectedRoute
