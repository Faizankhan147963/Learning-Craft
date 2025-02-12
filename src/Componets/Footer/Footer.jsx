import React from "react"
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const Courses = [
    "Python Course", "Java Course", "C++ Course", "C Programming Course",
    "C# Course", "PHP Course", "R Course", "HTML Course", "CSS Course",
    "JavaScript Course", "SQL Course"
  ]

  const technologies = [
    "Cloud Computing Course", "Amazon Web Services Course", "Microsoft Azure Course",
    "Git Course", "Ethical Hacking Course", "Docker Course", "Kubernetes Course",
    "DSA Course", "Spring Boot Course", "SDLC Course", "Unix Course"
  ]

  const certifications = [
    "Business Analytics Certification", "Java & Spring Boot Advanced Certification",
    "Data Science Advanced Certification", "Cloud Computing And DevOps",
    "Advanced Certification In Business Analytics", "Artificial Intelligence And Machine Learning",
    "DevOps Certification", "Game Development Certification", "Front-End Developer Certification",
    "AWS Certification Training", "Python Programming Certification"
  ]

  const compilers = [
    "Online Java Compiler", "Online Python Compiler", "Online Go Compiler",
    "Online C Compiler", "Online C++ Compiler", "Online C# Compiler",
    "Online PHP Compiler", "Online MATLAB Compiler", "Online Bash Compiler",
    "Online SQL Compiler", "Online Html Editor"
  ]

  const footerLinks = [
    "ABOUT US", "OUR TEAM", "CAREERS", "JOBS", "CONTACT US",
    "TERMS OF USE", "PRIVACY POLICY", "REFUND POLICY", "COOKIES POLICY", "FAQ'S"
  ]

  return (
    <footer className="bg-blue-600 text-white  py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* TOP CourseS */}
          <div>
            <h2 className="text-xl font-bold mb-4">TOP Course</h2>
            <ul className="space-y-2">
              {Courses.map((Course) => (
                <li key={Course}>
                  <a href="#" className="text-white hover:text-white text-sm">
                    {Course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* TRENDING TECHNOLOGIES */}
          <div>
            <h2 className="text-xl font-bold mb-4">TRENDING TECHNOLOGIES</h2>
            <ul className="space-y-2">
              {technologies.map((tech) => (
                <li key={tech}>
                  <a href="#" className="text-white hover:text-white text-sm">
                    {tech}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h2 className="text-xl font-bold mb-4">CERTIFICATIONS</h2>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert}>
                  <a href="#" className="text-white hover:text-white text-sm">
                    {cert}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPILERS & EDITORS */}
          <div>
            <h2 className="text-xl font-bold mb-4">COMPILERS & EDITORS</h2>
            <ul className="space-y-2">
              {compilers.map((compiler) => (
                <li key={compiler}>
                  <a href="#" className="text-white hover:text-white text-sm">
                    {compiler}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {footerLinks.map((link, index) => (
              <React.Fragment key={link}>
                <a href="#" className="text-white hover:text-white text-sm">
                  {link}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Social Links and Apps */}
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex items-center gap-8">

              <div className="flex gap-6">
                <a href="#" className="text-white hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Company Description and Copyright */}
          <div className="text-center">
            <p className="text-white mb-4 max-w-3xl mx-auto">
              Courses Point is a leading Learning Craft striving to provide the best learning material on technical and non-technical subjects.
            </p>
            <p className="text-gray-400 text-sm">
              © Copyright {currentYear}. All Rights Reserved. Developed by Faizan Khan Pathan.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

