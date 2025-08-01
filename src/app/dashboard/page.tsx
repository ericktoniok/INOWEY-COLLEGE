import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
      category: "Programming"
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
      category: "Web Development"
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
      category: "Cloud Computing"
    }
  ]

  const achievements = [
    { title: "First Course Completed", date: "March 2024", icon: "🎓" },
    { title: "7-Day Learning Streak", date: "This week", icon: "🔥" },
    { title: "Python Certification", date: "February 2024", icon: "🏆" },
    { title: "100 Hours Learned", date: "January 2024", icon: "⏰" }
  ]

  const recommendedCourses = [
    {
      title: "Machine Learning A-Z: Hands-On Python & R",
      instructor: "Kirill Eremenko",
      rating: 4.5,
      price: "$89.99",
      thumbnail: "from-green-500 to-teal-600"
    },
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      instructor: "Maximilian Schwarzmüller",
      rating: 4.6,
      price: "$94.99",
      thumbnail: "from-blue-500 to-cyan-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-violet-600">INOWEY COLLEGE</h1>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-gray-700">Browse Courses</Button>
              <Button variant="ghost" className="text-violet-600 font-medium">Dashboard</Button>
              <Button variant="ghost" className="text-gray-700">My Learning</Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name}! 👋</h1>
          <p className="text-gray-600">Continue your learning journey and achieve your goals.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Courses Enrolled</CardDescription>
              <CardTitle className="text-3xl text-violet-600">{user.totalCourses}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Courses Completed</CardDescription>
              <CardTitle className="text-3xl text-green-600">{user.completedCourses}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Hours Learned</CardDescription>
              <CardTitle className="text-3xl text-blue-600">{user.totalHours}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Current Streak</CardDescription>
              <CardTitle className="text-3xl text-orange-600">{user.currentStreak} days</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Tabs defaultValue="continue" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="continue">Continue Learning</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>

          {/* Continue Learning Tab */}
          <TabsContent value="continue" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Learning</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {enrolledCourses.filter(course => course.progress > 0 && course.progress < 100).map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <div className={`w-full h-32 bg-gradient-to-br ${course.thumbnail} rounded-t-lg`}></div>
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">{course.category}</Badge>
                      <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                      <CardDescription>by {course.instructor}</CardDescription>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">All My Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <div className={`w-full h-32 bg-gradient-to-br ${course.thumbnail} rounded-t-lg relative`}>
                      {course.progress === 100 && (
                        <Badge className="absolute top-3 right-3 bg-green-500">Completed</Badge>
                      )}
                    </div>
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">{course.category}</Badge>
                      <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                      <CardDescription>by {course.instructor}</CardDescription>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <CardDescription>Earned on {achievement.date}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Learning Goals */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Goals</h3>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-lg">Complete 3 courses this month</CardTitle>
                          <CardDescription>2 of 3 completed</CardDescription>
                        </div>
                        <Badge variant="secondary">66%</Badge>
                      </div>
                      <Progress value={66} className="h-2 mt-2" />
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-lg">Study 20 hours this week</CardTitle>
                          <CardDescription>14 of 20 hours completed</CardDescription>
                        </div>
                        <Badge variant="secondary">70%</Badge>
                      </div>
                      <Progress value={70} className="h-2 mt-2" />
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
              <p className="text-gray-600 mb-6">Based on your learning history and interests</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedCourses.map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <div className={`w-full h-32 bg-gradient-to-br ${course.thumbnail} rounded-t-lg`}></div>
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                      <CardDescription>by {course.instructor}</CardDescription>
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
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Browse by Category</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Programming", "Data Science", "Web Development", "Cloud Computing", "AI & Machine Learning", "Digital Marketing", "Business", "Design"].map((category) => (
                    <Button key={category} variant="outline" className="h-12">
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
