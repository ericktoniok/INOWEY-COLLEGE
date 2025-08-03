"use client"

import { useState } from "react"
import { CourseCreationModal } from "@/components/course-creation-modal"
import { Course, CourseCreationData } from "@/types/course"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Plus,
  BookOpen,
  Users,
  TrendingUp,
  DollarSign,
  Eye,
  Edit3,
  Trash2,
  Upload,
  Play,
  FileText,
  Star,
  Clock,
  BarChart3
} from "lucide-react"
import Link from "next/link"

// Mock data for courses
const mockCourses: Course[] = [
  {
    id: 1,
    title: "Complete React Development Bootcamp",
    description: "Learn React from scratch with hands-on projects",
    thumbnail: "/api/placeholder/300/200",
    students: 1250,
    rating: 4.8,
    reviews: 324,
    price: 89.99,
    status: "published",
    revenue: 111875,
    completion: 95,
    lessons: 45,
    duration: "32 hours",
    category: "Web Development",
    instructor: "Instructor Name",
    level: "Beginner",
    lastUpdated: "January 2025",
    curriculum: []
  },
  {
    id: 2,
    title: "Python for Data Science Masterclass",
    description: "Master Python programming for data analysis and machine learning",
    thumbnail: "/api/placeholder/300/200",
    students: 890,
    rating: 4.7,
    reviews: 156,
    price: 79.99,
    status: "published",
    revenue: 71191,
    completion: 88,
    lessons: 38,
    duration: "28 hours",
    category: "Data Science",
    instructor: "Instructor Name",
    level: "Intermediate",
    lastUpdated: "December 2024",
    curriculum: []
  },
  {
    id: 3,
    title: "Digital Marketing Strategy 2025",
    description: "Complete guide to modern digital marketing techniques",
    thumbnail: "/api/placeholder/300/200",
    students: 0,
    rating: 0,
    reviews: 0,
    price: 69.99,
    status: "draft",
    revenue: 0,
    completion: 60,
    lessons: 25,
    duration: "18 hours",
    category: "Marketing",
    instructor: "Instructor Name",
    level: "Beginner",
    lastUpdated: "January 2025",
    curriculum: []
  }
]

export default function InstructorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [courses, setCourses] = useState<Course[]>(mockCourses)

  // Calculate total stats
  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0)
  const totalRevenue = courses.reduce((sum, course) => sum + course.revenue, 0)
  const avgRating = courses.filter(c => c.rating > 0).reduce((sum, course) => sum + course.rating, 0) / courses.filter(c => c.rating > 0).length
  const publishedCourses = courses.filter(c => c.status === "published").length

  const handleCreateCourse = (courseData: CourseCreationData) => {
    const newCourse: Course = {
      id: courses.length + 1,
      title: courseData.title,
      description: courseData.description,
      thumbnail: "/api/placeholder/300/200",
      students: 0,
      rating: 0,
      reviews: 0,
      price: parseFloat(courseData.price) || 0,
      status: "draft" as const,
      revenue: 0,
      completion: 0,
      lessons: courseData.lessons.length,
      duration: courseData.duration || "0 hours",
      category: courseData.category,
      instructor: "Instructor Name",
      level: courseData.difficulty as 'Beginner' | 'Intermediate' | 'Advanced',
      lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      curriculum: [{
        id: 1,
        title: "Course Content",
        lessons: courseData.lessons
      }]
    }
    setCourses([...courses, newCourse])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Instructor Dashboard</h1>
            <p className="text-gray-600">Manage your courses and track your teaching success</p>
          </div>
          <Button
            className="bg-violet-600 hover:bg-violet-700"
            onClick={() => setIsCreateModalOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Course
          </Button>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStudents.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +8% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgRating.toFixed(1)}</div>
              <p className="text-xs text-muted-foreground">
                Across {publishedCourses} published courses
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Course Completion</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">
                Average completion rate
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest updates on your courses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New student enrolled in React Bootcamp</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Course review received (5 stars)</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Python course reached 850 students</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks to manage your courses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Course Content
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Manage Students
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Create Assignment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Courses</h2>
              <Button
                className="bg-violet-600 hover:bg-violet-700"
                onClick={() => setIsCreateModalOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Course
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-violet-500 to-purple-600 rounded-t-lg relative">
                      <div className="absolute top-3 right-3">
                        <Badge variant={course.status === "published" ? "default" : "secondary"}>
                          {course.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{course.students} students</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{course.rating > 0 ? course.rating.toFixed(1) : "No ratings"}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Completion</span>
                        <span>{course.completion}%</span>
                      </div>
                      <Progress value={course.completion} className="w-full" />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">${course.price}</span>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/instructor/courses/${course.id}/edit`}>
                            <Edit3 className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Performance Analytics</CardTitle>
                <CardDescription>Track your course performance and student engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.filter(c => c.status === "published").map((course) => (
                    <div key={course.id} className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">{course.title}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Revenue:</span>
                          <span className="font-medium">${course.revenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Students:</span>
                          <span className="font-medium">{course.students}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rating:</span>
                          <span className="font-medium">{course.rating}/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Reviews:</span>
                          <span className="font-medium">{course.reviews}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>Manage your students and their progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Sarah Johnson", course: "React Bootcamp", progress: 85, joined: "2 weeks ago" },
                    { name: "Mike Chen", course: "Python Data Science", progress: 92, joined: "1 month ago" },
                    { name: "Emily Davis", course: "React Bootcamp", progress: 67, joined: "3 days ago" },
                    { name: "David Wilson", course: "Python Data Science", progress: 78, joined: "1 week ago" }
                  ].map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.course}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{student.progress}% complete</p>
                        <p className="text-xs text-gray-600">Joined {student.joined}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <CourseCreationModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateCourse}
      />
    </div>
  )
}
