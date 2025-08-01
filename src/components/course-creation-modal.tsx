"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Plus,
  Upload,
  Image,
  Video,
  FileText,
  Settings,
  X,
  Check
} from "lucide-react"

import { CourseCreationData } from "@/types/course"

interface CourseCreationModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (courseData: CourseCreationData) => void
}

export function CourseCreationModal({ isOpen, onClose, onSubmit }: CourseCreationModalProps) {
  const [step, setStep] = useState(1)
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    thumbnail: null,
    difficulty: "",
    duration: "",
    lessons: []
  })

  const categories = [
    "Web Development",
    "Data Science",
    "Digital Marketing",
    "Business",
    "Design",
    "IT & Software",
    "Personal Development",
    "Photography",
    "Music",
    "Language"
  ]

  const difficulties = ["Beginner", "Intermediate", "Advanced", "All Levels"]

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    onSubmit(courseData)
    onClose()
    // Reset form
    setCourseData({
      title: "",
      description: "",
      category: "",
      price: "",
      thumbnail: null,
      difficulty: "",
      duration: "",
      lessons: []
    })
    setStep(1)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold">Create New Course</h2>
            <p className="text-gray-600">Step {step} of 4</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= num ? 'bg-violet-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {step > num ? <Check className="w-4 h-4" /> : num}
                </div>
                {num < 4 && (
                  <div className={`w-16 h-1 mx-2 ${step > num ? 'bg-violet-600' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Basic Info</span>
            <span>Content</span>
            <span>Pricing</span>
            <span>Review</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Basic Course Information</h3>

              <div>
                <label className="block text-sm font-medium mb-2">Course Title *</label>
                <input
                  type="text"
                  value={courseData.title}
                  onChange={(e) => setCourseData({...courseData, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Enter your course title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Course Description *</label>
                <textarea
                  value={courseData.description}
                  onChange={(e) => setCourseData({...courseData, description: e.target.value})}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Describe what students will learn in this course"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category *</label>
                  <select
                    value={courseData.category}
                    onChange={(e) => setCourseData({...courseData, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Difficulty Level *</label>
                  <select
                    value={courseData.difficulty}
                    onChange={(e) => setCourseData({...courseData, difficulty: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <option value="">Select Difficulty</option>
                    {difficulties.map((diff) => (
                      <option key={diff} value={diff}>{diff}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Course Thumbnail</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-violet-500 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-600">Click to upload course thumbnail</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 2MB</p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Course Content</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Estimated Duration</label>
                  <input
                    type="text"
                    value={courseData.duration}
                    onChange={(e) => setCourseData({...courseData, duration: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="e.g., 5 hours"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Content Upload Options</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-violet-500">
                    <CardContent className="p-6 text-center">
                      <Video className="w-8 h-8 mx-auto text-violet-600 mb-2" />
                      <h5 className="font-medium">Video Lessons</h5>
                      <p className="text-sm text-gray-600">Upload MP4, MOV files</p>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-violet-500">
                    <CardContent className="p-6 text-center">
                      <FileText className="w-8 h-8 mx-auto text-violet-600 mb-2" />
                      <h5 className="font-medium">Documents</h5>
                      <p className="text-sm text-gray-600">Upload PDF, DOCX files</p>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-violet-500">
                    <CardContent className="p-6 text-center">
                      <Image className="w-8 h-8 mx-auto text-violet-600 mb-2" />
                      <h5 className="font-medium">Images</h5>
                      <p className="text-sm text-gray-600">Upload PNG, JPG files</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h4 className="text-lg font-medium mb-2">Upload Course Materials</h4>
                <p className="text-gray-600 mb-4">Drag and drop your files here, or click to browse</p>
                <Button className="bg-violet-600 hover:bg-violet-700">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Files
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Pricing & Settings</h3>

              <div>
                <label className="block text-sm font-medium mb-2">Course Price *</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={courseData.price}
                    onChange={(e) => setCourseData({...courseData, price: e.target.value})}
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-2 border-violet-500 bg-violet-50">
                  <CardContent className="p-4 text-center">
                    <h5 className="font-medium text-violet-700">Recommended</h5>
                    <p className="text-2xl font-bold text-violet-700">$59-99</p>
                    <p className="text-sm text-violet-600">Most popular range</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <h5 className="font-medium">Budget</h5>
                    <p className="text-2xl font-bold">$19-49</p>
                    <p className="text-sm text-gray-600">Affordable option</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <h5 className="font-medium">Premium</h5>
                    <p className="text-2xl font-bold">$100+</p>
                    <p className="text-sm text-gray-600">High-value content</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Course Settings</h4>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-violet-600" />
                    <span>Enable course discussions</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-violet-600" />
                    <span>Enable certificates upon completion</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-violet-600" />
                    <span>Allow course reviews</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Review & Publish</h3>

              <Card>
                <CardHeader>
                  <CardTitle>{courseData.title || "Course Title"}</CardTitle>
                  <CardDescription>{courseData.description || "Course description will appear here"}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {courseData.category && <Badge>{courseData.category}</Badge>}
                    {courseData.difficulty && <Badge variant="secondary">{courseData.difficulty}</Badge>}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Duration: </span>
                      <span>{courseData.duration || "Not specified"}</span>
                    </div>
                    <div>
                      <span className="font-medium">Price: </span>
                      <span>${courseData.price || "0.00"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Your course will be saved as a draft</li>
                  <li>• You can continue editing and adding content</li>
                  <li>• Submit for review when ready to publish</li>
                  <li>• Course will be live within 24-48 hours after approval</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t bg-gray-50">
          <Button variant="outline" onClick={handlePrevious} disabled={step === 1}>
            Previous
          </Button>

          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose}>
              Save as Draft
            </Button>
            {step < 4 ? (
              <Button onClick={handleNext} className="bg-violet-600 hover:bg-violet-700">
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-violet-600 hover:bg-violet-700">
                Create Course
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
