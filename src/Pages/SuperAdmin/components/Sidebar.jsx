'use client'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard, BarChart2, ShoppingCart, Users, Search, Clipboard, ShoppingBag, FileText, DollarSign, User, Lock, Info, Phone, HelpCircle, Shield, Bell, UserPlus, Key, Package
} from 'lucide-react';
import { CreditCard, Settings, Store } from 'lucide-react';
import Login from '../../Login/Login';
import {   BookOpen } from 'lucide-react';

export default function Sidebar({ onSubmenuSelect }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState({});
  const [activeMenuIndex, setActiveMenuIndex] = useState(0); // Default to 0 for "Dashboard"
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track active submenu

  const handleToggleSubmenu = (index) => {
    setActiveMenuIndex(index); // Set the clicked menu item as active
    if (isSidebarOpen) {
      setOpenSubmenu(prevState => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    }
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(prevState => {
      const newSidebarState = !prevState;
      if (!newSidebarState) {
        setOpenSubmenu({});
      }
      return newSidebarState;
    });
  };

  useEffect(() => {
    console.log(activeSubmenu);
  }, [activeSubmenu]);

  // Define the menu items
  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      submenu: ['Overview'],
      submenuIcons: [Users], // Adjust icons if more submenu items are added
    },
    {
      title: 'Student',
      icon: User,
      submenu: ['Student List'],
      submenuIcons: [Users],
    },
    {
      title: 'Teacher',
      icon: User,
      submenu: ['Teacher List'],
      submenuIcons: [Users],
    },
    {
      title: 'Course',
      icon: BookOpen,
      submenu: ['Course List'],
      submenuIcons: [BookOpen],
    },
    {
      title: 'Invoice',
      icon: FileText,
      submenu: ['Invoice List'],
      submenuIcons: [FileText],
    },
  ];
  return (
    <aside className={`fixed left-0 top-0 z-40 h-screen bg-blue-600 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64 ' : 'w-20'}`}>
      <div className="flex h-16 items-center justify-between px-4">
        <h1 className={`text-2xl font-bold text-white ${!isSidebarOpen && 'hidden'}`}>Learning Craft</h1>
        <button
          onClick={handleSidebarToggle}
          className="rounded-lg p-1.5 hover:bg-white hover:text-blue-600"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isSidebarOpen ? "M4 6h16M4 12h16M4 18h16" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <div className="mt-4 px-3">
        <nav className="space-y-3">
          {menuItems.map((item, index) => (
            <div key={item.title}>
              <Link
                to="/system-control"
                className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-white hover:text-blue-600 ${activeMenuIndex === index ? 'bg-white text-blue-600' : 'text-white'}`}
                onClick={() => handleToggleSubmenu(index)}
              >
                <item.icon className="h-5 w-5 hover:text-blue-600" />
                {isSidebarOpen && (
                  <>
                    <span className="ml-3 flex-1">{item.title}</span>
                    {item.submenu && (
                      <svg
                        className="ml-3 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={openSubmenu[index] ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                        />
                      </svg>
                    )}
                  </>
                )}
              </Link>

              {openSubmenu[index] && item.submenu && (
                <div className="mt-1 space-y-1 pl-11">
                  {item.submenu.map(subItem => (
                    <Link
                      key={subItem}
                      to="/system-control"
                      onClick={() => {
                        setActiveSubmenu(subItem);
                        onSubmenuSelect(subItem); // Notify Dashboard of submenu selection
                      }}
                      className={`flex items-center rounded-lg py-2 pl-3 pr-4 text-sm font-medium ${activeSubmenu === subItem ? 'bg-white text-blue-600' : 'text-white'} hover:bg-white hover:text-blue-600`}
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
