'use client'

import { useState } from 'react'

const FAQS = () => {
    const [openIndex, setOpenIndex] = useState(1)

    const faqData = [
        {
            question: "What do Learning Craft courses include?",
            answer: "Our courses include comprehensive learning materials, interactive assignments, and lifetime access to course content."
        },
        {
            question: "How do I take a Learning Craft course?",
            answer: "Dokan is not compatible with WordPress multisite system but if you want to use it on a single subdomain of your multi-site installation then it can be possible. One Dokan plugin can be used on 1 database. That means you can activate the plugin only on one subsite."
        },
        {
            question: "Where can I go for help?",
            answer: "Our support team is available 24/7 to assist you with any questions or concerns you may have about the course content or platform."
        },
        {
            question: "Is there any way to preview a course?",
            answer: "Yes, many courses offer preview sections where you can sample the content before making a purchase decision."
        },
        {
            question: "Is Learning Craft an accredited institution? Do I receive anything after I complete a course?",
            answer: "While we're not an accredited institution, you'll receive a certificate of completion for each course you finish."
        },
        {
            question: "What if I don't like a course I purchased?",
            answer: "We offer a 30-day money-back guarantee if you're not satisfied with your course purchase."
        },
        {
            question: "Can the Admin control how much resource a Tutor can consume?",
            answer: "Yes, administrators have full control over resource allocation and usage limits for tutors."
        }
    ]

    const relatedArticles = [
        "What do Learning Craft courses include?",
        "Lifetime Access",
        "Teaching on Learning Craft: FAQ",
        "How to Refund a Course",
        "How Can I Become e-Teacher?",
        "Payment Methods on Learning Craft",
        "Certificate of Completion (on a Browser)"
    ]

    return (
        <div>
           <div className="text-center mb-10">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center pt-16">
    Frequently Asked Questions
  </h2>
  <p className="text-gray-600 max-w-3xl mx-auto">
    Have questions? We've got answers! Explore our comprehensive FAQ section to find detailed explanations and helpful insights about our platform, services, and policies.
  </p>
</div>

            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">

                {/* Main FAQ Section */}
                <div className="md:w-3/5 flex-grow">



                    {/* Breadcrumb */}


                    {faqData.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-6 flex justify-between items-center text-left hover:text-blue-600 transition-colors duration-200"
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                <span className="text-2xl font-light text-blue-600">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-gray-600 pr-8">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar */}
                <div className="md:w-2/5 bg-blue-50 p-6 rounded-lg h-fit">
                    <h2 className="text-xl font-bold mb-4">Related articles</h2>
                    <ul className="space-y-3">
                        {relatedArticles.map((article, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                    {article}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded mt-6 hover:bg-blue-700 transition-colors duration-200">
                        Contact Us
                    </button>
                </div>
            </div>

        </div>

    )
}

export default FAQS

