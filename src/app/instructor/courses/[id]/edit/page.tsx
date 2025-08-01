"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUpload } from "@/components/file-upload"
import {
  Save,
  ArrowLeft,
  Plus,
  Edit3,
  Trash2,
  Eye,
  Settings,
  Users,
  BarChart3,
  Play,
  FileText,
  Clock
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock course data
const mockCourse = {
  id: 1,
  title: "Complete React Development Bootcamp",
  description: "Learn React from scratch with hands-on projects and real-world applications",
  category: "Web Development",
  difficulty: "Intermediate",
  price: 89.99,
  thumbnail: "/api/placeholder/400/250",
  status: "published",
  students: 1250,
  rating: 4.8,
  reviews: 324,
  lessons: [
    {
      id: 1,
      title: "Introduction to React",
      description: "Overview of React and its ecosystem",
      duration: "15 min",
      type: "video",
      completed: true
    },
    {
      id: 2,
      title: "Setting up Development Environment",
      description: "Installing Node.js, React, and development tools",
      duration: "20 min",
      type: "video",
      completed: true
    },
    {
      id: 3,
      title: "Your First React Component",
      description: "Creating and understanding React components",
      duration: "25 min",
      type: "video",
      completed: false
    }
  ],
  objectives: [
    "Build modern React applications from scratch",
    "Understand component-based architecture",
    "Master React hooks and state management",
    "Deploy React applications to production"
  ]
}

export default function CourseEditor() {
  const params = useParams()
  const [course, setCourse] = useState(mockCourse)
  const [activeTab, setActiveTab] = useState("content")
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    // Save course changes
    console.log("Saving course:", course)
    setIsEditing(false)
  }

  const addLesson = () => {
    const newLesson = {
      id: course.lessons.length + 1,
      title: "New Lesson",
      description: "Add lesson description",
      duration: "0 min",
      type: "video",
      completed: false
    }
    setCourse({
      ...course,
      lessons: [...course.lessons, newLesson]
    })
  }

  const removeLesson = (lessonId: number) => {
    setCourse({
      ...course,
      lessons: course.lessons.filter(lesson => lesson.id !== lessonId)
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/instructor">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Edit Course</h1>
              <p className="text-gray-600">{course.title}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant={course.status === "published" ? "default" : "secondary"}>
              {course.status}
            </Badge>
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button
              onClick={handleSave}
              className="bg-violet-600 hover:bg-violet-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Course Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{course.students.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Course Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{course.rating}/5</div>
              <p className="text-sm text-gray-600">{course.reviews} reviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Lessons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{course.lessons.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Course Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${course.price}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Course Content</h2>
              <Button onClick={addLesson} className="bg-violet-600 hover:bg-violet-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Lesson
              </Button>
            </div>

            {/* Lessons List */}
            <div className="space-y-4">
              {course.lessons.map((lesson, index) => (
                <Card key={lesson.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold">{lesson.title}</h3>
                        <p className="text-sm text-gray-600">{lesson.description}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-xs text-gray-500 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {lesson.duration}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {lesson.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => removeLesson(lesson.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* File Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Course Materials</CardTitle>
                <CardDescription>
                  Add videos, documents, and other learning materials to your course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FileUpload
                  acceptedTypes={['video/*', 'application/pdf', 'image/*']}
                  maxSize={100}
                  multiple={true}
                  onUpload={(files) => console.log('Uploaded files:', files)}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
                <CardDescription>Basic details about your course</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Course Title</label>
                  <input
                    type="text"
                    value={course.title}
                    onChange={(e) => setCourse({...course, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={course.description}
                    onChange={(e) => setCourse({...course, description: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                      value={course.category}
                      onChange={(e) => setCourse({...course, category: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Business">Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Difficulty Level</label>
                    <select
                      value={course.difficulty}
                      onChange={(e) => setCourse({...course, difficulty: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="All Levels">All Levels</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Learning Objectives</label>
                  <div className="space-y-2">
                    {course.objectives.map((objective, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={objective}
                          onChange={(e) => {
                            const newObjectives = [...course.objectives]
                            newObjectives[index] = e.target.value
                            setCourse({...course, objectives: newObjectives})
                          }}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            const newObjectives = course.objectives.filter((_, i) => i !== index)
                            setCourse({...course, objectives: newObjectives})
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      onClick={() => {
                        setCourse({
                          ...course,
                          objectives: [...course.objectives, "New learning objective"]
                        })
                      }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Objective
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Pricing</CardTitle>
                <CardDescription>Set your course price and promotional options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Course Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={course.price}
                      onChange={(e) => setCourse({...course, price: parseFloat(e.target.value)})}
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card className="border-2 border-violet-500 bg-violet-50">
                    <CardContent className="p-4 text-center">
                      <h5 className="font-medium text-violet-700">Current Price</h5>
                      <p className="text-2xl font-bold text-violet-700">${course.price}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <h5 className="font-medium">Revenue/Month</h5>
                      <p className="text-2xl font-bold">${(course.students * course.price * 0.1).toFixed(0)}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <h5 className="font-medium">Total Revenue</h5>
                      <p className="text-2xl font-bold">${(course.students * course.price).toLocaleString()}</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>View and manage students enrolled in this course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Student Management</h3>
                  <p className="text-gray-600">
                    Detailed student management features will be available here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Analytics</CardTitle>
                <CardDescription>Track your course performance and student engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-600">
                    Detailed analytics and performance metrics will be displayed here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
