import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsCard from './components/StatsCard'
import RevenueChart from './components/RevenueChart'
import SalesMap from './components/SalesMap'
import { BookOpen, User, DollarSign, Activity } from 'lucide-react';
import { useEffect, useState } from 'react'
import Student_list from './Pages/Student_list/Student_list'
import Teacher_List from './Pages/Teacher_List/Teacher_List'
import Course_List from './Pages/Course_List/Course_List'
import Invoince_LIst from './Pages/Invoince_LIst/Invoince_LIst'

export default function Dashboard() {
  const stats = [
    {
      title: 'TOTAL REVENUE',
      value: '$0.45k',
      change: { value: '+12.45%', trend: 'up' },
      link: { text: 'View revenue details', href: '#' },
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'COURSES ENROLLED',
      value: '246',
      change: { value: '+8.56%', trend: 'up' },
      link: { text: 'View all courses', href: '#' },
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'ACTIVE STUDENTS',
      value: '124',
      change: { value: '+22.17%', trend: 'up' },
      link: { text: 'See student details', href: '#' },
      icon: <User className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'INSTRUCTOR PERFORMANCE',
      value: '55.7%',
      change: { value: '-2.34%', trend: 'down' },
      link: { text: 'View performance metrics', href: '#' },
      icon: <Activity className="h-6 w-6 text-red-500" />,
    },
  ];

  const [dateRange, setDateRange] = useState('');
  const [activeSubmenu, setActiveSubmenu] = useState("Overview");

  useEffect(() => {
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Intl.DateTimeFormat('en-GB', options).format(date);
    };

    setDateRange(`${formatDate(startOfMonth)} to ${formatDate(endOfMonth)}`);
  }, []);

  // Handle submenu selection
  const handleSubmenuSelection = (submenu) => {
    setActiveSubmenu(submenu);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar onSubmenuSelect={handleSubmenuSelection} />
      <Header onSubmenuSelect={handleSubmenuSelection} />

      <main className="ml-64 p-5 pt-20">
        {
          activeSubmenu === "Overview" && (
            <>
              <div className="mb-8">
                <h1 className="text-2xl font-semibold">Good Morning, Faizan Khan!</h1>
                <p className="text-gray-500">Here's what's happening with your Learning Platform today.</p>
              </div>

              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-500">{dateRange}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Add Product
                  </button>
                </div>
              </div>
            </>
          )
        }



        {
          activeSubmenu === "Overview" && (
            <>
              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat, index) => (
                  <StatsCard key={index} {...stat} />
                ))}
              </div>

              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <RevenueChart />
                <SalesMap />
              </div>
            </>
          )}

        {
          activeSubmenu === "Student List" && (
            <Student_list />
          )}


        {
          activeSubmenu === "Teacher List" && (
            <Teacher_List />
          )}
        {
          activeSubmenu === "Course List" && (
            <Course_List />
          )}


        {
          activeSubmenu === "Invoice List" && (
            <Invoince_LIst />
          )}

      </main>
    </div>
  );
}
