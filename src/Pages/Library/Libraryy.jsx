import React, { useState } from 'react';

const Libraryy = () => {
  // State to manage courses
  const [courses, setCourses] = useState([
    // IT Courses
    { category: 'IT', title: 'Introduction to Programming', description: 'Learn the basics of programming with hands-on examples.' },
    { category: 'IT', title: 'Web Development', description: 'Learn to build modern websites using HTML, CSS, and JavaScript.' },
    { category: 'IT', title: 'Data Structures & Algorithms', description: 'Master essential data structures and algorithms.' },
    { category: 'IT', title: 'Cybersecurity Fundamentals', description: 'Understand the basics of securing computer systems and networks.' },
    { category: 'IT', title: 'Machine Learning', description: 'Get started with machine learning using Python and libraries.' },
    { category: 'IT', title: 'Artificial Intelligence', description: 'Explore AI concepts and real-world applications.' },
    { category: 'IT', title: 'Cloud Computing', description: 'Learn about cloud service models and cloud deployment.' },
    { category: 'IT', title: 'Database Management Systems', description: 'Understand database design and SQL queries.' },
    { category: 'IT', title: 'Mobile App Development', description: 'Develop mobile applications for Android and iOS.' },
    { category: 'IT', title: 'Computer Networks', description: 'Learn about network protocols, models, and communication.' },
    { category: 'IT', title: 'Blockchain Basics', description: 'Understand blockchain technology and its applications.' },
    { category: 'IT', title: 'Game Development', description: 'Design and develop engaging 2D and 3D games.' },
    { category: 'IT', title: 'DevOps Practices', description: 'Learn about CI/CD pipelines and DevOps culture.' },
    { category: 'IT', title: 'Operating Systems', description: 'Understand the principles of operating systems.' },
    { category: 'IT', title: 'Software Testing', description: 'Learn manual and automated software testing techniques.' },
    { category: 'IT', title: 'Big Data Analytics', description: 'Analyze large datasets using tools like Hadoop and Spark.' },
    { category: 'IT', title: 'UI/UX Design', description: 'Design user interfaces and enhance user experiences.' },
    { category: 'IT', title: 'IoT (Internet of Things)', description: 'Understand IoT technology and its real-world use cases.' },
    { category: 'IT', title: 'Quantum Computing', description: 'Introduction to the concepts of quantum computation.' },
    { category: 'IT', title: 'Augmented Reality & Virtual Reality', description: 'Explore AR and VR technologies.' },
    { category: 'IT', title: 'Ethical Hacking', description: 'Learn ethical hacking techniques and penetration testing.' },
    { category: 'IT', title: 'Digital Marketing', description: 'Explore SEO, social media marketing, and online advertising.' },
    { category: 'IT', title: 'Artificial Neural Networks', description: 'Understand deep learning and neural networks.' },
    { category: 'IT', title: 'Robotic Process Automation', description: 'Learn automation using RPA tools.' },

    // Medical Courses
    { category: 'Medical', title: 'Anatomy Basics', description: 'Understand the human body structure and its functions.' },
    { category: 'Medical', title: 'Pharmacology', description: 'An overview of drugs and their effects on the human body.' },
    { category: 'Medical', title: 'Pathology', description: 'Study the causes and effects of diseases.' },
    { category: 'Medical', title: 'Biochemistry', description: 'Learn about chemical processes in living organisms.' },
    { category: 'Medical', title: 'Radiology Basics', description: 'Introduction to imaging techniques and radiology.' },
    { category: 'Medical', title: 'Surgery Fundamentals', description: 'Understand basic surgical techniques and procedures.' },
    { category: 'Medical', title: 'Physiology', description: 'Study the functions and mechanisms of the human body.' },
    { category: 'Medical', title: 'Microbiology', description: 'Learn about microorganisms and their role in health.' },
    { category: 'Medical', title: 'Pediatrics', description: 'Introduction to child healthcare and diseases.' },
    { category: 'Medical', title: 'Orthopedics', description: 'Study the musculoskeletal system and related issues.' },
    { category: 'Medical', title: 'Neurology', description: 'Understand the nervous system and its disorders.' },
    { category: 'Medical', title: 'Cardiology', description: 'Study the heart and circulatory system.' },
    { category: 'Medical', title: 'Dermatology', description: 'Introduction to skin-related diseases and treatments.' },
    { category: 'Medical', title: 'Ophthalmology', description: 'Learn about eye diseases and their treatments.' },
    { category: 'Medical', title: 'ENT (Ear, Nose, Throat)', description: 'Study conditions related to the ear, nose, and throat.' },
    { category: 'Medical', title: 'Gynecology', description: 'Learn about female reproductive health and care.' },
    { category: 'Medical', title: 'Oncology', description: 'Introduction to cancer studies and treatments.' },
    { category: 'Medical', title: 'Psychiatry', description: 'Study mental health and psychiatric treatments.' },
    { category: 'Medical', title: 'Dentistry', description: 'Learn about oral health and dental treatments.' },
    { category: 'Medical', title: 'Clinical Research', description: 'Understand the principles of clinical trials.' },
    { category: 'Medical', title: 'Emergency Medicine', description: 'Learn how to handle medical emergencies.' },
    { category: 'Medical', title: 'Rehabilitation Medicine', description: 'Study rehabilitation techniques and therapies.' },
    { category: 'Medical', title: 'Tropical Medicine', description: 'Learn about diseases prevalent in tropical regions.' },

    // Pharmacy Courses
    { category: 'Pharmacy', title: 'Pharmaceutical Chemistry', description: 'Learn about chemical aspects of drug design.' },
    { category: 'Pharmacy', title: 'Pharmacognosy', description: 'Study medicinal drugs obtained from plants.' },
    { category: 'Pharmacy', title: 'Pharmacokinetics', description: 'Understand the movement of drugs in the body.' },
    { category: 'Pharmacy', title: 'Toxicology', description: 'Study harmful effects of chemicals on living organisms.' },
    { category: 'Pharmacy', title: 'Clinical Pharmacy', description: 'Learn about providing patient care in pharmacy practice.' },
    { category: 'Pharmacy', title: 'Medicinal Chemistry', description: 'Explore the chemistry behind drug molecules.' },
    { category: 'Pharmacy', title: 'Drug Formulation', description: 'Understand the process of designing drug formulations.' },
    { category: 'Pharmacy', title: 'Pharmacovigilance', description: 'Monitor and prevent adverse drug effects.' },
    { category: 'Pharmacy', title: 'Biopharmaceutics', description: 'Study the bioavailability of drugs.' },
    { category: 'Pharmacy', title: 'Pharmaceutical Marketing', description: 'Learn about marketing strategies in the pharmaceutical industry.' },
    { category: 'Pharmacy', title: 'Industrial Pharmacy', description: 'Study the manufacturing of pharmaceutical products.' },
    { category: 'Pharmacy', title: 'Regulatory Affairs', description: 'Understand drug regulations and compliance.' },
    { category: 'Pharmacy', title: 'Pharmaceutical Biotechnology', description: 'Explore the use of biotechnology in pharmacy.' },

    // Civil Engineering Courses
    { category: 'Civil Engineering', title: 'Structural Analysis', description: 'Learn how to analyze and design structures.' },
    { category: 'Civil Engineering', title: 'Geotechnical Engineering', description: 'Study soil mechanics and foundation design.' },
    { category: 'Civil Engineering', title: 'Hydraulics', description: 'Understand fluid mechanics in civil engineering.' },
    { category: 'Civil Engineering', title: 'Environmental Engineering', description: 'Learn about environmental impact and waste management.' },
    { category: 'Civil Engineering', title: 'Transportation Engineering', description: 'Study the design and construction of transportation systems.' },
    { category: 'Civil Engineering', title: 'Surveying', description: 'Learn land measurement techniques for construction.' },
    { category: 'Civil Engineering', title: 'Construction Management', description: 'Manage construction projects efficiently.' },
    { category: 'Civil Engineering', title: 'Concrete Technology', description: 'Understand the properties and uses of concrete.' },
    { category: 'Civil Engineering', title: 'Water Resources Engineering', description: 'Study water resource management and distribution.' },
    { category: 'Civil Engineering', title: 'Bridge Engineering', description: 'Learn how to design and construct bridges.' },
    { category: 'Civil Engineering', title: 'Building Information Modeling (BIM)', description: 'Understand BIM and its applications in construction.' },
    { category: 'Civil Engineering', title: 'Highway Engineering', description: 'Learn about road construction and maintenance.' },
    { category: 'Civil Engineering', title: 'Tunnel Engineering', description: 'Study the design and construction of tunnels.' }
  ]);


  return (
    <div className='container mx-auto px-4 py-12'>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow-md relative cursor-pointer transition-shadow"
          >
            {/* Course Title */}
            <h3 className="text-lg font-bold">{course.title}</h3>

            {/* Course Description */}
            <p className="text-sm text-gray-600 mt-3">{course.description}</p>

            {/* Arrow Icon */}
            <div className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-tl-lg rounded-br-lg flex justify-center items-center transition-colors hover:bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Libraryy;
