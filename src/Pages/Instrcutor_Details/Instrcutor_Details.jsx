import React from 'react'

const InstructorDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50  md:p-8">
      {/* Main Container */}
      <div className="container px-4 mx-auto bg-white rounded-xl ">
        {/* Profile Section */}
        <div className=" pt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Image & Social */}
            <div className="md:col-span-1">
              <div className="bg-rose-500 rounded-xl overflow-hidden">
                <img
                  src="https://themes.stackbros.in/eduport_r/assets/07-1QFyetCA.jpg"
                  alt="Instructor"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Rating */}
              
            </div>

            {/* Profile Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-2">Hi, I am</h1>
              <h2 className="text-3xl font-bold mb-4">Lori Stevens</h2>
              <p className="text-gray-600 mb-4">Graphic Designer</p>
              
              <p className="text-gray-600 mb-6">
                We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well-rounded Digital Marketer.
              </p>

              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">Address:</span>
                  <span>2002 Horton Ford Rd, Edison, TN, 37731</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">Email:</span>
                  <span>example@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">Phone number:</span>
                  <span>+896-789-546</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">Website:</span>
                  <span>#</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold">10+</div>
                  <div className="text-sm text-gray-600">Total Courses</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold">36K+</div>
                  <div className="text-sm text-gray-600">Total Students</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold">11+</div>
                  <div className="text-sm text-gray-600">Years in Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Education Section */}
    <div>
      <h3 className="text-2xl font-bold mb-6">Education</h3>
      <div className="space-y-6">
        {[
          { school: 'Harvard University', degree: 'Bachelor in Computer Graphics' },
          { school: 'University of Toronto', degree: 'Master in Computer Graphics' },
          { school: 'East Ray University', degree: 'Bachelor in Computer Graphics' },
        ].map((edu, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <h4 className="font-semibold">{edu.school}</h4>
              <p className="text-gray-600 text-sm">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Skills Section */}
    <div>
      <h3 className="text-2xl font-bold mb-6">Skills</h3>
      <div className="space-y-4">
        {[
          { name: 'Graphic design', level: '90%' },
          { name: 'Web design', level: '80%' },
          { name: 'HTML/CSS', level: '60%' },
          { name: 'UI/UX', level: '50%' },
        ].map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-600">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


          {/* Courses List */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Courses List</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Sketch from A to Z: for app designer',
                  level: 'All level',
                  rating: '4/5',
                  duration: '12h 56m',
                  lectures: '15 lectures',
                  image: 'https://static.vecteezy.com/system/resources/previews/023/958/737/non_2x/mobile-ui-ux-web-banner-design-with-analysis-mobile-app-screen-on-blue-circuit-background-vector.jpg',
                },
                {
                  title: 'Graphic Design Masterclass',
                  level: 'Intermediate',
                  rating: '4.5/5',
                  duration: '9h 56m',
                  lectures: '65 lectures',
                  image: 'https://img.freepik.com/premium-vector/abstract-blue-modern-banner-background-vector-abstract-graphic-design-banner-pattern-background-template_181182-18212.jpg',
                },
              ].map((course, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-blue-600">{course.level}</span>
                      <button className="text-rose-500">♥</button>
                    </div>
                    <h4 className="font-semibold mb-2">{course.title}</h4>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <span>⏱</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📚</span>
                        <span>{course.lectures}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorDetails

