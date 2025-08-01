'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { useCart } from "@/context/cart-context"
import { getCourseById } from "@/data/courses"
import { Star, Clock, Users, Calendar, Play, Lock } from "lucide-react"

export default function CoursePage() {
  const params = useParams()
  const courseId = Number(params.id)
  const course = getCourseById(courseId)
  const { addToCart, isInCart } = useCart()
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
          <p className="text-gray-600 mt-2">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(course)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Badge className="bg-orange-500 text-white">{course.category}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.description}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-gray-300">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Last updated {course.lastUpdated}</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-300">Created by <span className="text-violet-400 font-medium">{course.instructor}</span></p>
              </div>
            </div>

            {/* Purchase Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                {/* Video Preview */}
                <div className="relative aspect-video bg-gray-900 rounded-t-lg overflow-hidden">
                  {selectedVideo || course.previewVideo ? (
                    <video
                      controls
                      className="w-full h-full object-cover"
                      poster="/api/placeholder/400/225"
                    >
                      <source src={selectedVideo || course.previewVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-violet-600 to-purple-700">
                      <Play className="h-16 w-16 text-white opacity-80" />
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-black/70 text-white">Preview</Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold">${course.price}</CardTitle>
                      <CardDescription>One-time purchase</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-violet-600 border-violet-600">
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Button
                    onClick={handleAddToCart}
                    disabled={isInCart(course.id)}
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                    size="lg"
                  >
                    {isInCart(course.id) ? 'Already in Cart' : 'Add to Cart'}
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      if (!isInCart(course.id)) {
                        addToCart(course)
                      }
                      window.location.href = '/checkout'
                    }}
                  >
                    Buy Now
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    30-Day Money-Back Guarantee
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">This course includes:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {course.duration} on-demand video
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {course.lessons} lessons
                      </li>
                      <li className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Full lifetime access
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="curriculum" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
          </TabsList>

          <TabsContent value="curriculum" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
              <p className="text-gray-600 mb-6">
                {course.lessons} lessons • {course.duration} total length
              </p>

              <div className="space-y-4">
                {course.curriculum.map((section) => (
                  <Card key={section.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                      <CardDescription>
                        {section.lessons.length} lessons
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {section.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                            onClick={() => {
                              if (lesson.isPreview && lesson.videoUrl) {
                                setSelectedVideo(lesson.videoUrl)
                              }
                            }}
                          >
                            <div className="flex items-center gap-3">
                              {lesson.isPreview ? (
                                <Play className="h-4 w-4 text-violet-600" />
                              ) : (
                                <Lock className="h-4 w-4 text-gray-400" />
                              )}
                              <div>
                                <h4 className="font-medium">{lesson.title}</h4>
                                <p className="text-sm text-gray-600">{lesson.description}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {lesson.isPreview && (
                                <Badge variant="outline" className="text-xs">
                                  Preview
                                </Badge>
                              )}
                              <span className="text-sm text-gray-500">{lesson.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="instructor" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">About the Instructor</h2>
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{course.instructor}</CardTitle>
                      <CardDescription className="text-base">
                        Developer and Lead Instructor
                      </CardDescription>
                      <div className="mt-2 space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{course.rating} Instructor Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{course.students.toLocaleString()} Students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    An experienced developer with years of teaching experience, specializing in
                    making complex programming concepts accessible to students worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">John D.</CardTitle>
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "Excellent course! The instructor explains everything clearly and the projects
                      are very practical. Highly recommended for beginners."
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Sarah M.</CardTitle>
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "Amazing content and great value for money. I learned so much and was able
                      to apply the knowledge immediately in my job."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="requirements" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>• No programming experience needed - I'll teach you everything you need to know</li>
                    <li>• A computer with access to the internet</li>
                    <li>• No paid software required</li>
                    <li>• Willingness to learn and practice</li>
                  </ul>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-xl font-bold mb-4">What you'll learn</h3>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-2 text-gray-600">
                      <li>• Master the fundamentals and advanced concepts</li>
                      <li>• Build real-world projects and applications</li>
                      <li>• Understand best practices and industry standards</li>
                      <li>• Gain confidence to tackle complex problems</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
