'use client'

import { useState } from 'react'

export default function Third() {
  const [openQuestion, setOpenQuestion] = useState('Who can become an instructor?')

  const faqs = [
    {
      question: 'Who can become an instructor?',
      answer: 'Anyone with a deep understanding of a subject and a passion for teaching can apply to become an instructor. You don’t need to be a professional educator—if you have valuable knowledge to share, you can become an instructor on our platform.'
    },
    {
      question: 'How do I become an instructor?',
      answer: 'To become an instructor, simply register on our platform, submit the required details, complete the verification process, and upload your course content. Once approved, your courses will be live for students to enroll.'
    },
    {
      question: 'What are the benefits of being an instructor?',
      answer: 'Being an instructor offers numerous benefits: you can earn income by selling your courses, gain exposure to a large audience, receive rewards for referring students, and build your own community of learners while having full control over your course content and pricing.'
    },
    {
      question: 'Do I need to refer students to become an instructor?',
      answer: 'Referring students is not a requirement for becoming an instructor, but it is a great way to boost your earnings. By sharing your referral code with prospective learners, you can earn additional rewards through our Refer & Earn program.'
    },
    {
      question: 'How do I earn rewards as an instructor?',
      answer: 'Instructors earn rewards by referring new students to the platform. When a student enrolls in a course using your referral code, you can earn up to ₹1000 in Amazon gift vouchers. The more students you refer, the higher your rewards.'
    },
    {
      question: 'Is there any qualification required to be an instructor?',
      answer: 'There are no formal educational qualifications required, but instructors must have in-depth knowledge of the subject they teach. We look for individuals who can create high-quality, engaging content that provides value to learners.'
    },
    {
      question: 'What support do instructors receive?',
      answer: 'We provide full support to instructors, including access to training materials, marketing resources, and technical assistance. Our team is here to help you create successful courses and promote them to a wide audience.'
    },
    {
      question: 'How will I get paid for my courses?',
      answer: 'Instructors are paid through our secure payment system. Payments are processed monthly, and you will receive your earnings directly to your bank account or through other available payment methods. You’ll also be able to track your earnings in real time.'
    },
    {
      question: 'Can I set my own course prices?',
      answer: 'Yes, as an instructor, you have the freedom to set your own course prices. You can offer discounts, promotions, or bundle courses to make them more attractive to students.'
    },
    {
      question: 'Do I need to create video content to become an instructor?',
      answer: 'While video content is highly encouraged and often preferred by students, it is not mandatory. You can also create text-based lessons, quizzes, and assignments to engage your learners. However, we recommend using a variety of formats to enhance the learning experience.'
    }
  ]
  

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="container md:px-4 mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#2B6777]">
  Become an Instructor - Frequently Asked Questions
</h1>


        <div className="space-y-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenQuestion(
                  openQuestion === faq.question ? '' : faq.question
                )}
                className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                  openQuestion === faq.question
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-50 text-[#2B6777] hover:bg-blue-100'
                }`}
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openQuestion === faq.question ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openQuestion === faq.question && (
                <div className="bg-white p-4 text-gray-600 border-x border-b rounded-b-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

