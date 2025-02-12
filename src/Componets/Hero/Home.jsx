import React from 'react'
import Hero from '../../Pages/Hero/Hero'
import About from '../../Pages/About/About'
import Category from '../../Pages/Category/Category'
import Popular_Course from '../../Pages/Popular_Course/Popular_Course'
import Instructor from '../../Pages/Instructor/Instructor'
import Pricing from '../../Pages/Pricing/Pricing'
import Testemonial from '../../Pages/Testemonial/Testemonial'
import FAQS from '../../Pages/FAQS/FAQS'
import Course_HOme from '../../Pages/Course_HOme/Course_HOme'

const Home = () => {
  return (
    <div>
     <Hero/>
     <About/>
     {/* <Category/> */}
     <Popular_Course/>
     <Instructor/>
     <Course_HOme/>
     <FAQS/>
     <Pricing/>
     <Testemonial/>
    </div>
  )
}

export default Home
