import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function Dashboard() {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "",
    joinDate: "January 2024",
    totalCourses: 12,
    completedCourses: 8,
    totalHours: 156,
    currentStreak: 7
  }

  const enrolledCourses = [
    {
      id: 1,
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      instructor: "Dr. Angela Yu",
      progress: 75,
      totalLessons: 100,
      completedLessons: 75,
      timeRemaining: "2 weeks",
      thumbnail: "from-blue-500 to-purple-600",
      category: "Programming",
      rating: 4.7,
      difficulty: "Beginner to Advanced"
    },
    {
      id: 2,
      title: "The Complete Full-Stack Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      progress: 45,
      totalLessons: 85,
      completedLessons: 38,
      timeRemaining: "1 month",
      thumbnail: "from-orange-500 to-red-600",
      category: "Web Development",
      rating: 4.6,
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
      instructor: "Stephane Maarek",
      progress: 90,
      totalLessons: 120,
      completedLessons: 108,
      timeRemaining: "3 days",
      thumbnail: "from-purple-500 to-pink-600",
      category: "Cloud Computing",
      rating: 4.8,
      difficulty: "Beginner"
    },
    {
      id: 4,
      title: "Machine Learning A-Z: Complete Course",
      instructor: "Kirill Eremenko",
      progress: 100,
      totalLessons: 200,
      completedLessons: 200,
      timeRemaining: "Completed",
      thumbnail: "from-green-500 to-emerald-600",
      category: "Data Science",
      rating: 4.9,
      difficulty: "Advanced"
    }
  ]

  const achievements = [
    { title: "First Course Completed", date: "March 2024", icon: "🎓", description: "Completed your first course" },
    { title: "7-Day Learning Streak", date: "This week", icon: "🔥", description: "Studied for 7 consecutive days" },
    { title: "Python Certification", date: "February 2024", icon: "🏆", description: "Earned Python programming certificate" },
    { title: "100 Hours Learned", date: "January 2024", icon: "⏰", description: "Accumulated 100 hours of learning" },
    { title: "Data Science Expert", date: "March 2024", icon: "📊", description: "Completed advanced data science track" },
    { title: "Team Player", date: "February 2024", icon: "👥", description: "Participated in 5 study groups" }
  ]

  const recommendedCourses = [
    {
      title: "Advanced React Development",
      instructor: "Maximilian Schwarzmüller",
      rating: 4.6,
      price: "$94.99",
      thumbnail: "from-blue-500 to-cyan-600",
      students: "124,567",
      duration: "42 hours"
    },
    {
      title: "Docker & Kubernetes Complete Guide",
      instructor: "Stephen Grider",
      rating: 4.7,
      price: "$89.99",
      thumbnail: "from-indigo-500 to-purple-600",
      students: "89,234",
      duration: "36 hours"
    },
    {
      title: "Advanced SQL and Database Design",
      instructor: "Colt Steele",
      rating: 4.5,
      price: "$79.99",
      thumbnail: "from-teal-500 to-green-600",
      students: "156,789",
      duration: "28 hours"
    }
  ]

  const recentActivity = [
    { action: "Completed lesson", course: "AWS Cloud Practitioner", time: "2 hours ago" },
    { action: "Started new course", course: "Machine Learning A-Z", time: "1 day ago" },
    { action: "Earned certificate", course: "Python Bootcamp", time: "3 days ago" },
    { action: "Joined study group", course: "Web Development", time: "1 week ago" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-violet-600">INOWEY COLLEGE</Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-gray-700" asChild>
                <Link href="/explore">Explore</Link>
              </Button>
              <Button variant="ghost" className="text-gray-700" asChild>
                <Link href="/plans">Plans & Pricing</Link>
              </Button>
              <Button variant="ghost" className="text-gray-700" asChild>
                <Link href="/business">INOWEY Business</Link>
              </Button>
              <Button variant="default" className="bg-violet-600 text-white">Dashboard</Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">🔔</Button>
            <Avatar>
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="bg-violet-100 text-violet-600">JD</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="font-medium text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-500">Student since {user.joinDate}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name}! 👋</h1>
          <p className="text-gray-600">Continue your learning journey and achieve your goals.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardDescription>Courses Enrolled</CardDescription>
              <CardTitle className="text-3xl text-violet-600">{user.totalCourses}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">+2 this month</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardDescription>Courses Completed</CardDescription>
              <CardTitle className="text-3xl text-green-600">{user.completedCourses}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{Math.round((user.completedCourses / user.totalCourses) * 100)}% completion rate</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardDescription>Hours Learned</CardDescription>
              <CardTitle className="text-3xl text-blue-600">{user.totalHours}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">~13 hours/week</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardDescription>Current Streak</CardDescription>
              <CardTitle className="text-3xl text-orange-600">{user.currentStreak} days</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Keep it up! 🔥</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="continue" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="continue">Continue Learning</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          {/* Continue Learning Tab */}
          <TabsContent value="continue" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Learning</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {enrolledCourses.filter(course => course.progress > 0 && course.progress < 100).map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-full h-32 bg-gradient-to-br ${course.thumbnail} rounded-t-lg relative`}>
                      <div className="absolute inset-0 bg-black/20 rounded-t-lg"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <Badge variant="secondary" className="bg-white/20 text-white">{course.category}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                      <CardDescription className="flex items-center justify-between">
                        <span>by {course.instructor}</span>
                        <div className="flex items-center space-x-1 text-yellow-500">
                          <span>⭐</span>
                          <span className="text-sm">{course.rating}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{course.completedLessons} of {course.totalLessons} lessons</span>
                          <span>{course.progress}% complete</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">{course.timeRemaining} remaining</span>
                          <Button size="sm" className="bg-violet-600 hover:bg-violet-700">Continue</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* My Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">All My Courses</h2>
                <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50" asChild>
                  <Link href="/explore">Browse More Courses</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-full h-32 bg-gradient-to-br ${course.thumbnail} rounded-t-lg relative`}>
                      {course.progress === 100 && (
                        <Badge className="absolute top-3 right-3 bg-green-500">Completed ✓</Badge>
                      )}
                      <div className="absolute inset-0 bg-black/20 rounded-t-lg"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <Badge variant="secondary" className="bg-white/20 text-white">{course.category}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div>by {course.instructor}</div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center space-x-1 text-yellow-500">
                            <span>⭐</span>
                            <span>{course.rating}</span>
                          </span>
                          <span className="text-gray-500">{course.difficulty}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Progress value={course.progress} className="h-2" />
                        <div className="flex justify-between text-sm">
                          <span>{course.progress}% complete</span>
                          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                        </div>
                        <Button
                          variant={course.progress === 100 ? "outline" : "default"}
                          size="sm"
                          className="w-full"
                        >
                          {course.progress === 100 ? "Review Course" : "Continue Learning"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{achievement.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <CardDescription className="space-y-1">
                            <div>{achievement.description}</div>
                            <div className="text-sm">Earned on {achievement.date}</div>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Learning Goals */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Learning Goals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-lg">Complete 3 courses this month</CardTitle>
                          <CardDescription>2 of 3 completed</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">66%</Badge>
                      </div>
                      <Progress value={66} className="h-3 mt-3" />
                    </CardHeader>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-lg">Study 20 hours this week</CardTitle>
                          <CardDescription>14 of 20 hours completed</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">70%</Badge>
                      </div>
                      <Progress value={70} className="h-3 mt-3" />
                    </CardHeader>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-lg">Earn 2 certifications</CardTitle>
                          <CardDescription>1 of 2 completed</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-orange-100 text-orange-800">50%</Badge>
                      </div>
                      <Progress value={50} className="h-3 mt-3" />
                    </CardHeader>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-lg">30-day learning streak</CardTitle>
                          <CardDescription>{user.currentStreak} of 30 days</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">{Math.round((user.currentStreak / 30) * 100)}%</Badge>
                      </div>
                      <Progress value={(user.currentStreak / 30) * 100} className="h-3 mt-3" />
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Recommended Courses Tab */}
          <TabsContent value="recommended" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended for You</h2>
              <p className="text-gray-600 mb-6">Based on your learning history and interests in programming and cloud computing</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedCourses.map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-full h-32 bg-gradient-to-br ${course.thumbnail} rounded-t-lg relative`}>
                      <Badge className="absolute top-3 left-3 bg-orange-500">Recommended</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div>by {course.instructor}</div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">{course.students} students</span>
                          <span className="text-gray-500">{course.duration}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-yellow-500">⭐</span>
                            <span className="text-sm font-medium">{course.rating}</span>
                          </div>
                          <span className="text-lg font-bold text-violet-600">{course.price}</span>
                        </div>
                        <Button className="w-full bg-violet-600 hover:bg-violet-700">
                          Enroll Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Browse Categories */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Explore More Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Programming", "Data Science", "Web Development", "Cloud Computing", "AI & Machine Learning", "Digital Marketing", "Business", "Design"].map((category) => (
                    <Button key={category} variant="outline" className="h-12 hover:border-violet-600 hover:text-violet-600" asChild>
                      <Link href="/explore">{category}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center space-x-4 p-4">
                      <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.course}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Learning Statistics */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Learning Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="text-center">
                      <CardTitle className="text-3xl text-blue-600">42</CardTitle>
                      <CardDescription>Hours this month</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="text-center">
                      <CardTitle className="text-3xl text-green-600">18</CardTitle>
                      <CardDescription>Lessons completed</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="text-center">
                      <CardTitle className="text-3xl text-purple-600">95%</CardTitle>
                      <CardDescription>Average quiz score</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
