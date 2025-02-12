
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Tutorial_Details() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('{name} Tutorial')
    const { name } = useParams();
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const menuItems = [
        {
            title: `${capitalizedName} Tutorial`,
            items: [
                `${capitalizedName} Tutorial`,
                `${capitalizedName} Features`,
                `${capitalizedName} History`,
                `${capitalizedName} Applications`,
                `${capitalizedName} Install`,
                `${capitalizedName} Example`,
                `${capitalizedName} Variables`,
                `${capitalizedName} Data Types`,
                `${capitalizedName} Keywords`,
                `${capitalizedName} Literals`,
                `${capitalizedName} Operators`,
                `${capitalizedName} Comments`,
                `${capitalizedName} If else`,
                `${capitalizedName} Loops`,
                `${capitalizedName} For Loop`,
                `${capitalizedName} While Loop`,
                `${capitalizedName} Break`,
                `${capitalizedName} Continue`,
                `${capitalizedName} Pass`,
                `${capitalizedName} Strings`,
                `${capitalizedName} Lists`
            ]
        }
    ];
    

    return (
        <div className="min-h-screen bg-white">
            {/* Mobile menu button */}
            <div className="lg:hidden p-4 bg-gray-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center space-x-2 text-gray-600"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                    <span>Menu</span>
                </button>
            </div>

            <div className="lg:grid lg:grid-cols-[280px_1fr]">
                {/* Sidebar */}
                <aside
                    className={`${isOpen ? 'block' : 'hidden'
                        } lg:block bg-[#f8fafb] border-r border-gray-200`}
                >
                    <nav className="sticky top-0 p-4">
                        {menuItems.map((section) => (
                            <div key={section.title}>
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="font-medium text-gray-900">{section.title}</h2>
                                    <svg
                                        className="w-4 h-4 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                                <ul className="space-y-1">
                                    {section.items.map((item) => (
                                        <li key={item}>
                                            <button
                                                onClick={() => {
                                                    setActiveTab(item)
                                                    setIsOpen(false)
                                                }}
                                                className={`w-full text-left px-2 py-1.5 rounded-md text-sm ${activeTab === item
                                                        ? 'bg-blue-100 text-blue-600'
                                                        : 'text-gray-600 hover:bg-gray-100'
                                                    }`}
                                            >
                                                {item}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main content */}
                <main className="p-6 pt-5">
                    <div className="container mx-auto">

                        {/* Content section */}
                        <div className="prose max-w-none">
                            <h1 className="text-3xl font-bold mb-6">
                                {capitalizedName} Tutorial | Master {capitalizedName} Programming
                            </h1>

                            <p className="mb-4">
                                <strong>{capitalizedName}</strong> is a high-level, versatile programming language that has become the backbone of modern technology development. Known for its simplicity and efficiency, {name} empowers developers to create powerful applications in less time and with fewer errors. Unlike traditional languages such as <strong>Java</strong> and <strong>C++</strong>, {name}'s intuitive syntax and vast ecosystem have made it a preferred choice for a wide range of applications—from web development and data analysis to artificial intelligence and scientific computing.
                            </p>

                            <p className="mb-4">
                                This comprehensive {capitalizedName} tutorial is designed to cater to learners of all levels. It offers a clear pathway from the basics to advanced topics, covering everything you need to build a strong foundation and excel as a {name} developer. Topics include {name} installation, conditional statements, loops, data structures, Object-Oriented Programming, Exception Handling, and practical implementations using libraries like NumPy, Pandas, and TensorFlow. Whether you're a student, professional, or enthusiast, this guide will help you unlock {name}'s full potential.
                            </p>

                            <p className="mb-6">
                                {capitalizedName}'s story began in the late 1980s when <strong>Guido van Rossum</strong>, inspired by the desire to create a language that combined simplicity with power, introduced {name}. The first version, <strong>{name} 0.9.0</strong>, was released in 1991, and since then, {name} has evolved into the world's most popular programming language. Its rise to prominence is attributed to its adaptability and extensive applications in fields like machine learning, automation, and cloud computing.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">What is {capitalizedName}?</h2>
                            <p className="mb-6">
                                {capitalizedName} is an open-source, general-purpose programming language known for its high-level capabilities and easy-to-read syntax. It supports multiple programming paradigms, including object-oriented, procedural, and functional programming. {name}'s unique ability to combine simplicity with advanced functionality has made it a favorite for beginners and experienced developers alike.
                            </p>
                            <p className="mb-6">
                                With built-in garbage collection, dynamic typing, and cross-platform compatibility, {capitalizedName} is the ideal choice for creating scalable and maintainable solutions. It’s not just a programming language—it’s a tool that enables developers to innovate without limits.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">Key Features of {capitalizedName}</h2>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>
                                    <strong>Simple and Readable:</strong> {capitalizedName}'s clean and beginner-friendly syntax reduces the learning curve, making it easier to understand and write code quickly.
                                </li>
                                <li>
                                    <strong>Dynamically Typed:</strong> Developers don't need to specify variable data types explicitly. {capitalizedName} determines types at runtime, offering greater flexibility.
                                </li>
                                <li>
                                    <strong>Extensive Libraries and Frameworks:</strong> {capitalizedName} boasts a vast array of libraries and frameworks, including Django for web development, NumPy and Pandas for data analysis, and TensorFlow for machine learning.
                                </li>
                                <li>
                                    <strong>Platform Independence:</strong> {capitalizedName} programs can run seamlessly on multiple platforms without modifications, enhancing portability and reducing development time.
                                </li>
                                <li>
                                    <strong>Rapid Development:</strong> {capitalizedName}'s straightforward syntax and powerful tools allow developers to prototype and build applications quickly, saving time and effort.
                                </li>
                                <li>
                                    <strong>Community Support:</strong> {capitalizedName}’s extensive community provides a wealth of resources, including tutorials, forums, and libraries, ensuring continuous support for developers worldwide.
                                </li>
                                <li>
                                    <strong>Scalability:</strong> From small scripts to large-scale enterprise applications, {capitalizedName} scales effortlessly, making it a reliable choice for projects of all sizes.
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}

