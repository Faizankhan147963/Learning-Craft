import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Componets/Header/Navbar'
import Footer from './Componets/Footer/Footer'
import Home from './Componets/Hero/Home'
import Course_Details from './Pages/Course_Details/Course_Details'
import ScrollToTop from './Pages/ScrollToPage/ScrollToPage'
import Course from './Pages/Course/Course'
import Details_Of_Event from './Pages/Details_Of_Event/Details_Of_Event'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Privacy_Policy from './Pages/Privacy_Policy/Privacy_Policy'
import Instrcutor_Details from './Pages/Instrcutor_Details/Instrcutor_Details'
import Certificate from './Pages/Certificate/Certificate'
import Tutorial_Details from './Pages/Tutorial_Details/Tutorial_Details'
import CART from './Pages/CART/CART'
import ProtectedRoute from './Pages/ProtectedRoute/ProtectedRoute'
import User_profile from './Pages/User_profile/User_profile'
import Libraryy from './Pages/Library/Libraryy'
import Refer_Earn from './Pages/Refer_Earn/Refer_Earn'
import SuperAdmin from './Pages/SuperAdmin/SuperAdmin'
import UserDashboard from './Pages/UserDashboard/UserDashboard'
import Instrcuro_Daboard from './Pages/Intructor_Dashabord/Instrcuro_Daboard'
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

const AppContent = () => {
  const location = useLocation()

  // Check if the current route is '/profile/:id' or '/system-control'
  const hideNavbarFooter = ['/profile/', '/system-control','/userdashbaord','/instructordashbaord'].some(route => location.pathname.includes(route))

  return (
    <>
      {/* Conditionally render Navbar and Footer */}
      {!hideNavbarFooter && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<Course_Details />} />
        <Route path="/event/:id" element={<Details_Of_Event />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdashbaord" element={<UserDashboard/>} />
        <Route path="/instructordashbaord" element={<Instrcuro_Daboard/>} />
        <Route path="/termscondition" element={<Privacy_Policy />} />
        <Route path="/Library" element={<Libraryy />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/earningcraft" element={<Refer_Earn />} />
        <Route path="/instructor/:id" element={<Instrcutor_Details />} />
        <Route path="/tutorial/:name" element={<Tutorial_Details />} />
        <Route path="/cart" element={<CART />} />
        {/* Protected Route */}
        <Route
          path="/system-control"
          element={
              <SuperAdmin />
          }
        />
        <Route path="/profile/:id" element={<User_profile />} />
      </Routes>
      {/* Conditionally render Footer */}
      {!hideNavbarFooter && <Footer />}
    </>
  )
}

export default App
