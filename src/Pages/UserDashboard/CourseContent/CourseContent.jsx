"use client"

import { useState } from "react"
import { Play, Download, CheckCircle, Lock, FileText, Video, File } from "lucide-react"
import CourseHeader from "./CourseHeader"
import CourseProgress from "./CourseProgress"

const CourseContent = () => {
  const [activeModule, setActiveModule] = useState(1)
  const [activeLesson, setActiveLesson] = useState(1)

  const course = {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    progress: 35,
    totalLessons: 48,
    completedLessons: 17,
    description:
      "Learn web development from scratch. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js and more.",
    modules: [
      {
        id: 1,
        title: "Introduction to Web Development",
        lessons: [
          { id: 1, title: "Course Overview", duration: "10:15", type: "video", completed: true, locked: false },
          {
            id: 2,
            title: "Setting Up Your Development Environment",
            duration: "15:30",
            type: "video",
            completed: true,
            locked: false,
          },
          { id: 3, title: "Web Development Basics", duration: "12:45", type: "video", completed: true, locked: false },
          { id: 4, title: "Introduction Quiz", duration: "10 questions", type: "quiz", completed: true, locked: false },
        ],
      },
      {
        id: 2,
        title: "HTML Fundamentals",
        lessons: [
          { id: 5, title: "HTML Document Structure", duration: "14:20", type: "video", completed: true, locked: false },
          { id: 6, title: "HTML Tags and Elements", duration: "18:45", type: "video", completed: true, locked: false },
          { id: 7, title: "HTML Forms", duration: "20:10", type: "video", completed: true, locked: false },
          { id: 8, title: "HTML Practice Assignment", type: "assignment", completed: true, locked: false },
          { id: 9, title: "HTML Cheat Sheet", type: "pdf", completed: false, locked: false },
        ],
      },
      {
        id: 3,
        title: "CSS Styling",
        lessons: [
          { id: 10, title: "CSS Selectors", duration: "16:30", type: "video", completed: true, locked: false },
          { id: 11, title: "CSS Box Model", duration: "14:15", type: "video", completed: true, locked: false },
          { id: 12, title: "CSS Flexbox", duration: "22:40", type: "video", completed: true, locked: false },
          { id: 13, title: "CSS Grid", duration: "25:10", type: "video", completed: true, locked: false },
          { id: 14, title: "Responsive Design", duration: "28:05", type: "video", completed: false, locked: false },
          { id: 15, title: "CSS Quiz", duration: "15 questions", type: "quiz", completed: false, locked: false },
        ],
      },
      {
        id: 4,
        title: "JavaScript Basics",
        lessons: [
          {
            id: 16,
            title: "JavaScript Introduction",
            duration: "12:20",
            type: "video",
            completed: true,
            locked: false,
          },
          {
            id: 17,
            title: "Variables and Data Types",
            duration: "18:30",
            type: "video",
            completed: true,
            locked: false,
          },
          { id: 18, title: "Functions and Scope", duration: "22:15", type: "video", completed: false, locked: false },
          { id: 19, title: "Arrays and Objects", duration: "24:40", type: "video", completed: false, locked: false },
          { id: 20, title: "DOM Manipulation", duration: "26:55", type: "video", completed: false, locked: false },
          { id: 21, title: "JavaScript Project", type: "assignment", completed: false, locked: false },
        ],
      },
      {
        id: 5,
        title: "Advanced JavaScript",
        lessons: [
          {
            id: 22,
            title: "Asynchronous JavaScript",
            duration: "28:15",
            type: "video",
            completed: false,
            locked: true,
          },
          {
            id: 23,
            title: "Promises and Async/Await",
            duration: "24:30",
            type: "video",
            completed: false,
            locked: true,
          },
          { id: 24, title: "Error Handling", duration: "18:45", type: "video", completed: false, locked: true },
          { id: 25, title: "JavaScript Modules", duration: "20:10", type: "video", completed: false, locked: true },
        ],
      },
    ],
  }

  const currentModule = course.modules.find((module) => module.id === activeModule)
  const currentLesson = currentModule?.lessons.find((lesson) => lesson.id === activeLesson)

  const handleLessonClick = (moduleId, lessonId) => {
    if (course.modules.find((m) => m.id === moduleId)?.lessons.find((l) => l.id === lessonId)?.locked) {
      return
    }
    setActiveModule(moduleId)
    setActiveLesson(lessonId)
  }

  return (
    <div className="space-y-6">
      <CourseHeader course={course} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Course Content Sidebar */}
        <div className="lg:col-span-1">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-4 sm:p-6">
              <CourseProgress course={course} />

              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Course Content</h3>
                <div className="mt-4 space-y-4">
                  {course.modules.map((module) => (
                    <div key={module.id} className="overflow-hidden rounded-md border border-gray-200">
                      <button
                        className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium ${
                          activeModule === module.id ? "bg-blue-50 text-blue-700" : "bg-white text-gray-900"
                        }`}
                        onClick={() => setActiveModule(module.id)}
                      >
                        <span>{module.title}</span>
                        <span className="text-xs text-gray-500">{module.lessons.length} lessons</span>
                      </button>

                      {activeModule === module.id && (
                        <div className="border-t border-gray-200 bg-gray-50">
                          {module.lessons.map((lesson) => (
                            <button
                              key={lesson.id}
                              className={`flex w-full items-center px-4 py-3 text-left text-sm ${
                                activeLesson === lesson.id
                                  ? "bg-blue-100 text-blue-700"
                                  : "text-gray-700 hover:bg-gray-100"
                              } ${lesson.locked ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                              onClick={() => handleLessonClick(module.id, lesson.id)}
                            >
                              <div className="mr-3 flex-shrink-0">
                                {lesson.completed ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : lesson.locked ? (
                                  <Lock className="h-5 w-5 text-gray-400" />
                                ) : lesson.type === "video" ? (
                                  <Video className="h-5 w-5 text-blue-500" />
                                ) : lesson.type === "quiz" ? (
                                  <FileText className="h-5 w-5 text-orange-500" />
                                ) : lesson.type === "assignment" ? (
                                  <FileText className="h-5 w-5 text-purple-500" />
                                ) : (
                                  <File className="h-5 w-5 text-gray-500" />
                                )}
                              </div>
                              <div className="flex-1 truncate">
                                <div className="font-medium">{lesson.title}</div>
                                {lesson.duration && <div className="text-xs text-gray-500">{lesson.duration}</div>}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Player and Content */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            {currentLesson?.type === "video" ? (
              <div className="aspect-w-16 aspect-h-9 bg-gray-900">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Play className="mx-auto h-16 w-16 text-white opacity-80" />
                    <p className="mt-2 text-sm text-white">{currentLesson.title}</p>
                  </div>
                </div>
              </div>
            ) : currentLesson?.type === "quiz" ? (
              <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-orange-50 p-8">
                <div className="text-center">
                  <FileText className="mx-auto h-16 w-16 text-orange-500" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">{currentLesson.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">Test your knowledge with this quiz</p>
                  <button className="mt-4 inline-flex items-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    Start Quiz
                  </button>
                </div>
              </div>
            ) : currentLesson?.type === "assignment" ? (
              <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-purple-50 p-8">
                <div className="text-center">
                  <FileText className="mx-auto h-16 w-16 text-purple-500" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">{currentLesson.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">Complete this assignment to practice your skills</p>
                  <button className="mt-4 inline-flex items-center rounded-md border border-transparent bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                    View Assignment
                  </button>
                </div>
              </div>
            ) : currentLesson?.type === "pdf" ? (
              <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-blue-50 p-8">
                <div className="text-center">
                  <File className="mx-auto h-16 w-16 text-blue-500" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">{currentLesson.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">Download this resource for reference</p>
                  <button className="mt-4 inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            ) : (
              <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-gray-100 p-8">
                <p className="text-gray-500">Select a lesson to start learning</p>
              </div>
            )}

            {currentLesson && (
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">{currentLesson.title}</h2>
                  {currentLesson.type === "video" && (
                    <div className="flex space-x-2">
                      <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-4 space-y-4">
                  <p className="text-sm text-gray-500">
                    This lesson covers the fundamentals of {currentLesson.title.toLowerCase()}. Make sure to complete
                    all exercises and quizzes to reinforce your learning.
                  </p>

                  <div className="rounded-md bg-blue-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">Learning Objectives</h3>
                        <div className="mt-2 text-sm text-blue-700">
                          <ul className="list-disc space-y-1 pl-5">
                            <li>Understand the core concepts of {currentLesson.title.toLowerCase()}</li>
                            <li>Apply these concepts in practical scenarios</li>
                            <li>Build a strong foundation for advanced topics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    disabled={!currentModule.lessons.some((l) => l.id < activeLesson && !l.locked)}
                  >
                    Previous Lesson
                  </button>
                  <button
                    className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    disabled={!currentModule.lessons.some((l) => l.id > activeLesson && !l.locked)}
                  >
                    Next Lesson
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseContent

