'use client'

import { useState } from 'react'

const Privacy_Policy = () => {
    const [activeSection, setActiveSection] = useState('Privacy Policy')

    const navigationItems = [
        { id: 1, title: 'Privacy Policy' },
        { id: 2, title: 'User Policy' },
        { id: 3, title: 'Copyright Policy' },
        { id: 4, title: 'Cookies Policy' },
        { id: 5, title: 'Account & Billing' },
        { id: 6, title: 'Sign Up Guidelines' },
    ];

    const contentSections = {
        'Privacy Policy': {
            title: '1. Privacy Policy',
            content: [
                {
                    type: 'paragraph',
                    text: 'We are dedicated to protecting your privacy and ensuring that your personal information is handled securely. This section explains how we manage your data and your rights regarding it.',
                    hasLink: true,
                },
                {
                    type: 'checklist',
                    items: [
                        'We collect only the information necessary to provide our services.',
                        'Your data is stored securely and is accessible only by authorized personnel.',
                        'Third-party services we use are carefully vetted to ensure compliance with data protection laws.',
                        'You have the right to access, modify, or delete your personal data upon request.',
                        'Data retention policies ensure that unused or old data is deleted appropriately.',
                    ],
                },
                {
                    type: 'paragraph',
                    text: 'For more details, read our full Privacy Policy, including specifics on data sharing, user rights, and compliance with international privacy regulations.',
                },
            ],
        },
        'User Policy': {
            title: '2. User Policy',
            content: [
                {
                    type: 'paragraph',
                    text: 'Our User Policy is designed to create a safe and respectful environment for all learners. Please adhere to these guidelines to ensure a positive experience for everyone.',
                    hasLink: false,
                },
                {
                    type: 'checklist',
                    items: [
                        'Respect intellectual property and do not share unauthorized materials.',
                        'Maintain professionalism in interactions with instructors and peers.',
                        'Do not use the platform for malicious purposes, including spreading harmful content.',
                        'Report any violations or technical issues promptly to our support team.',
                        'Use real and verifiable information for creating your account and communication.',
                    ],
                },
                {
                    type: 'paragraph',
                    text: 'Violations of this policy may result in warnings, account suspension, or permanent removal from the platform.',
                },
            ],
        },
        'Copyright Policy': {
            title: '3. Copyright Policy',
            content: [
                {
                    type: 'paragraph',
                    text: 'All materials on this platform, including course content, images, and resources, are protected by copyright laws. Unauthorized use or duplication is strictly prohibited.',
                    hasLink: true,
                },
                {
                    type: 'checklist',
                    items: [
                        'Content is for personal learning use only and cannot be redistributed.',
                        'Always credit the original source when using platform materials for authorized purposes.',
                        'If you believe content on our platform violates copyright laws, report it immediately.',
                        'Instructors must ensure their uploaded content complies with copyright regulations.',
                        'Unauthorized use of platform materials may lead to legal actions or account suspension.',
                    ],
                },
                {
                    type: 'paragraph',
                    text: 'By using our platform, you agree to respect the intellectual property rights of others and comply with our copyright policies.',
                },
            ],
        },
        'Cookies Policy': {
            title: '4. Cookies Policy',
            content: [
                {
                    type: 'paragraph',
                    text: 'Our use of cookies enhances your experience and provides personalized recommendations. This policy explains how cookies are used and managed on our platform.',
                    hasLink: false,
                },
                {
                    type: 'checklist',
                    items: [
                        'Session cookies help maintain your login state and preferences.',
                        'Analytical cookies allow us to understand how users interact with the platform.',
                        'You can opt out of certain cookies via your browser settings.',
                        'We do not use cookies for intrusive advertising or unnecessary tracking.',
                        'Cookies are stored securely and comply with international standards.',
                    ],
                },
                {
                    type: 'paragraph',
                    text: 'For more details on managing cookies, please refer to your browser’s support documentation or contact our support team.',
                },
            ],
        },
        'Account & Billing': {
            title: '5. Account & Billing',
            content: [
                {
                    type: 'paragraph',
                    text: 'Managing your account and billing information is simple and secure. This section outlines how you can control your subscription and payment details.',
                    hasLink: true,
                },
                {
                    type: 'checklist',
                    items: [
                        'Update your payment methods securely from your account settings.',
                        'View detailed invoices and billing history for all transactions.',
                        'Cancel, upgrade, or downgrade your subscription anytime.',
                        'Billing support is available for any queries or disputes.',
                        'Receive reminders for upcoming renewals to avoid interruptions.',
                    ],
                },
                {
                    type: 'paragraph',
                    text: 'We strive to make account management and billing as transparent and user-friendly as possible.',
                },
            ],
        },
        'Sign Up Guidelines': {
            title: '6. Sign Up Guidelines',
            content: [
                {
                    type: 'paragraph',
                    text: 'Getting started on our platform is quick and secure. Follow these steps to ensure a seamless sign-up process.',
                    hasLink: false,
                },
                {
                    type: 'checklist',
                    items: [
                        'Provide accurate and complete personal information during registration.',
                        'Verify your email address to activate your account securely.',
                        'Read and agree to our terms and conditions before signing up.',
                        'Choose a strong password to protect your account from unauthorized access.',
                        'Contact support if you encounter any issues during the sign-up process.',
                    ],
                },
                {
                    type: 'paragraph',
                    text: 'Your learning journey begins here. Take the first step by creating an account today.',
                },
            ],
        },
    };

    return (
        <div className="container mx-auto px-4 py-8 h-auto">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sticky Navigation Sidebar */}
                <div className="md:w-64 flex-shrink-0">
                    <nav className="space-y-1 md:sticky md:top-8">
                        {navigationItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.title)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${activeSection === item.title
                                        ? 'bg-white shadow-sm border border-black font-bold'
                                        : 'hover:bg-white/50'
                                    }`}
                            >
                                <span className={`${activeSection === item.title ? 'text-blue-600' : 'text-gray-600'
                                    }`}>
                                    {item.id}. {item.title}
                                </span>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Content Area */}
                <div className="flex-grow bg-white rounded-lg shadow-sm p-3 border">
                    <div className="animate-fadeIn">
                        <h1 className="text-2xl font-semibold mb-6">
                            {contentSections[activeSection]?.title}
                        </h1>
                        <div className="space-y-6">
                            {contentSections[activeSection]?.content.map((section, index) => {
                                if (section.type === 'paragraph') {
                                    return (
                                        <p key={index} className="text-gray-600 leading-relaxed">
                                            {section.text}
                                            {section.hasLink && (
                                                <a href="#" className="text-blue-600 hover:underline ml-1">
                                                    Contact Us
                                                </a>
                                            )}
                                        </p>
                                    )
                                }
                                if (section.type === 'checklist') {
                                    return (
                                        <ul key={index} className="space-y-3">
                                            {section.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                                                    <svg
                                                        className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy_Policy

