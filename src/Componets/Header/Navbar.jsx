'use client'
import React, { useState } from 'react'
import { Search, Moon, ChevronDown, ChevronLeft, ChevronRight, Home, Code, Briefcase, FileText, BookOpen, Edit } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BsTools } from 'react-icons/bs'
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram, FaUserCircle } from 'react-icons/fa' // Importing social media icons
import Logo from '../../assets/Logo.png'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Databases')
  const [scrollPosition, setScrollPosition] = useState(0)

  const [technologies, setTechnologies] = useState([
    'SQL', 'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'PHP', 'C++',
    'Ruby', 'Swift', 'Kotlin', 'TypeScript', 'Go', 'Rust', 'C#', 'Ruby on Rails',
    'React', 'Node.js', 'Vue.js', 'Angular', 'Django', 'Laravel', 'Spring Boot',
    'Flutter', 'Sass', 'Bootstrap', 'jQuery', 'MongoDB', 'MySQL', 'PostgreSQL',
    'GraphQL', 'Firebase', 'AWS', 'Docker', 'Kubernetes'
  ])

  // Tech tools categorized by category
  const categoryTools = {
    'AI, ML, and Data Science': ['TensorFlow', 'Keras', 'PyTorch', 'SciKit Learn', 'NumPy', 'Pandas', 'OpenCV', 'Matplotlib', 'Seaborn', 'Scikit-image'],
    'Programming Languages': ['GIT', 'Jira', 'OpenShift', 'AWS', 'Docker', 'Kubernetes', 'GitHub', 'Bitbucket', 'Go', 'Rust'],
    'Web Development Languages': ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Angular', 'Node.js', 'Svelte', 'TypeScript', 'Bootstrap'],
    'DevOps': ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'GitLab', 'AWS', 'Ansible', 'Chef', 'Puppet', 'Vagrant'],
    'Databases': ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'GraphQL', 'Elasticsearch', 'SQLite', 'Oracle', 'Cassandra', 'Redis'],
    'Computer Science Subjects': ['Data Structures', 'Algorithms', 'Operating Systems', 'Networking', 'Database Management', 'Discrete Mathematics', 'Theory of Computation', 'Computer Architecture', 'Compiler Design', 'Software Engineering'],
    'Python Technologies': ['Django', 'Flask', 'TensorFlow', 'PyTorch', 'FastAPI', 'Pandas', 'Numpy', 'Keras', 'Matplotlib', 'Scikit-learn'],
    'Software Testing': ['Selenium', 'Jest', 'Mocha', 'Cypress', 'JUnit', 'TestNG', 'Karma', 'Appium', 'JUnit5', 'Robot Framework'],
    'Cyber Security': ['Wireshark', 'Metasploit', 'Nmap', 'Kali Linux', 'Snort', 'Burp Suite', 'Aircrack-ng', 'John the Ripper', 'OWASP ZAP', 'Nessus']
  }

  const [techTools, setTechTools] = useState(categoryTools['Databases']) // Default to 'Databases'

  const topNavItems = [
    { icon: <Home />, label: 'Home', link: "/" },
    { icon: <Code />, label: 'Online Compilers', link: "https://onecompiler.com/" },
    { icon: <Briefcase />, label: 'Jobs', link: "https://careerconnectin.netlify.app/" },
    { icon: <FileText />, label: 'Whiteboard', link: "https://app.ziteboard.com/" },
    { icon: <BsTools />, label: 'Tools', link: "/Library" },
    { icon: <BookOpen />, label: 'Articles', link: "" },
    { icon: <Edit />, label: 'Earn With Learning Craft', link: "/earningcraft" },
  ]

  const categories = [
    'AI, ML, and Data Science',
    'Programming Languages',
    'Web Development Languages',
    'DevOps',
    'Databases',
    'Computer Science Subjects',
    'Python Technologies',
    'Software Testing',
    'Cyber Security',
  ]

  const loadMoreTechnologies = () => {
    const moreTechnologies = [
      'Terraform', 'Vagrant', 'Ansible', 'Chef', 'Puppet', 'Jenkins', 'GitLab', 'GitHub',
      'Azure', 'Google Cloud', 'CloudFormation', 'CI/CD', 'Elasticsearch', 'Kafka',
      'Solr', 'Redis', 'Nginx', 'Apache', 'RubyMine', 'WebStorm', 'Xcode'
    ]
    setTechnologies((prevTechnologies) => [
      ...prevTechnologies,
      ...moreTechnologies,
    ])
  }

  const scrollTechnologies = (direction) => {
    const newPosition = direction === 'left'
      ? Math.max(scrollPosition - 200, 0)
      : scrollPosition + 200

    setScrollPosition(newPosition)

    // Load more technologies when user scrolls to the right
    if (direction === 'right' && scrollPosition + 200 >= 1000) {  // Adjust threshold as needed
      loadMoreTechnologies()
    }
  }

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    setTechTools(categoryTools[category]) // Update techTools based on the selected category
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const tutorials = [
    'Python Tutorial',
    'JavaScript Tutorial',
    'React Basics',
    'Node.js Guide',
    'CSS Tricks',
    'HTML Fundamentals',
    'Django Introduction',
    'Angular Overview',
    'Vue.js Essentials',
  ];

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter suggestions based on search term
    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      const filteredSuggestions = tutorials.filter((tutorial) =>
        tutorial.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion); // Set input value
    setSuggestions([]); // Clear suggestions to hide the dropdown
  };


  const token = localStorage.getItem('token')
  const userId = localStorage.getItem("userId")


  return (
    <nav className="w-full sticky top-0 z-50 bg-white">
      {/* Top Navigation */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex justify-center items-center space-x-6">
              {topNavItems.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  href="#"
                  className="flex items-center space-x-1 text-sm hover:text-blue-200"
                >
                  <Link to={item.link}><span className="text-xl">{item.icon}</span></Link>
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 hidden md:flex"> {/* Hide social icons on small screens */}
              <Link href="#" className="hover:text-blue-200">
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-blue-200">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-blue-200">
                <FaYoutube className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-blue-200">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-blue-200">
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                Learning Craft
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" flex items-center  space-x-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition-all duration-200"

              >

                <span className="text-sm font-medium text-gray-700">Category</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

            </div>

            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search your favourite tutorials ..."
                  className="w-full px-4 py-2 border rounded-md pr-10"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />

                {/* Suggestions Dropdown */}
                {suggestions.length > 0 && (
                  <ul className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg max-h-40 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSuggestionClick(suggestion)} // Handle click
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>


            <div className="hidden md:flex items-center space-x-6">
              <Link to={'/Library'} className="hover:text-blue-600">Library</Link>
              <Link to={'/course'} className="hover:text-blue-600">Courses</Link>
              <Link to="/certificate" className="hover:text-blue-600">Certifications</Link>
              <div className="nav-links flex items-center">
                {token ? (
                  <Link
                    to={
                      localStorage.getItem('role') === 'admin'
                        ? '/system-control'
                        : `/profile/${userId}`
                    }
                    className="user-icon"
                  >
                    <FaUserCircle className="w-10 h-10 text-blue-600 cursor-pointer" />
                  </Link>
                ) : (
                  <Link
                    to="/register"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-900"
                  >
                    Login
                  </Link>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Technology Scroll */}
      <div className="relative bg-gray-100 border-b hidden sm:block">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden">
            <button
              onClick={() => scrollTechnologies('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div
              className="flex space-x-4 py-2 transition-transform duration-300"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {technologies.map((tech) => (
                <Link to={`/tutorial/${tech}`}
                  key={tech}
                  className="whitespace-nowrap px-4 py-2 text-sm hover:text-blue-600"
                >
                  {tech}
                </Link>
              ))}
            </div>
            <button
              onClick={() => scrollTechnologies('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>


      {/* Category Panel with animation */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className={`absolute left-0 top-0 bottom-0 w-full sm:w-[90%] md:w-[800px] bg-white p-4 sm:p-6 transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform translate-x-[-100%]'
            }`}
        >
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold">Categories</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="flex h-[calc(100vh-120px)] sm:h-[calc(100vh-100px)]">
            <div className="w-1/3 border-r md:ml-0 -ml-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full text-left px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm ${activeCategory === category
                    ? 'bg-gray-100 text-blue-600'
                    : 'hover:bg-gray-50'
                    }`}
                >
                  {category}
                </button>
              ))}
              <button className="w-full text-center py-3 sm:py-4 text-xs sm:text-sm text-blue-600 hover:underline">
                All Categories
              </button>
            </div>
            <div className="w-2/3 p-3 sm:p-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {techTools.map((tool) => (
                  <button
                    key={tool}
                    className="p-2 sm:p-4 text-left border rounded text-xs sm:text-sm hover:border-blue-600 hover:text-blue-600"
                  >
                    {tool}
                  </button>
                ))}
                <button className="p-2 sm:p-4 text-center text-xs sm:text-sm text-blue-600 hover:underline">
                  See all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
}
