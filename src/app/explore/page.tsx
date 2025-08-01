import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ExplorePage() {
  const categories = [
    {
      name: "Development",
      icon: "💻",
      courses: 15420,
      students: "2.1M+",
      color: "bg-blue-500",
      description: "Web development, mobile apps, programming languages"
    },
    {
      name: "Business",
      icon: "📊",
      courses: 8950,
      students: "1.8M+",
      color: "bg-green-500",
      description: "Entrepreneurship, communication, management"
    },
    {
      name: "Data Science",
      icon: "📈",
      courses: 6240,
      students: "890K+",
      color: "bg-purple-500",
      description: "Python, machine learning, data analysis"
    },
    {
      name: "Design",
      icon: "🎨",
      courses: 4680,
      students: "1.2M+",
      color: "bg-pink-500",
      description: "Web design, graphic design, user experience"
    },
    {
      name: "Marketing",
      icon: "📱",
      courses: 5320,
      students: "950K+",
      color: "bg-orange-500",
      description: "Digital marketing, social media, SEO"
    },
    {
      name: "Photography",
      icon: "📸",
      courses: 3150,
      students: "780K+",
      color: "bg-indigo-500",
      description: "Digital photography, photo editing, portraits"
    },
    {
      name: "Music",
      icon: "🎵",
      courses: 2890,
      students: "620K+",
      color: "bg-red-500",
      description: "Instruments, music production, theory"
    },
    {
      name: "Health & Fitness",
      icon: "💪",
      courses: 4120,
      students: "1.1M+",
      color: "bg-emerald-500",
      description: "Nutrition, yoga, fitness, mental health"
    }
  ];

  const featuredCourses = [
    {
      title: "Complete React Developer Course",
      instructor: "Andrew Mead",
      rating: 4.7,
      students: 186543,
      price: 84.99,
      originalPrice: 199.99,
      image: "bg-gradient-to-br from-cyan-400 to-blue-600",
      category: "Development",
      level: "All Levels",
      duration: "42 hours"
    },
    {
      title: "The Complete Digital Marketing Course",
      instructor: "Rob Percival",
      rating: 4.5,
      students: 234671,
      price: 94.99,
      originalPrice: 199.99,
      image: "bg-gradient-to-br from-green-400 to-emerald-600",
      category: "Marketing",
      level: "Beginner",
      duration: "36 hours"
    },
    {
      title: "Python for Data Science and Machine Learning",
      instructor: "Jose Portilla",
      rating: 4.8,
      students: 324589,
      price: 89.99,
      originalPrice: 199.99,
      image: "bg-gradient-to-br from-purple-400 to-violet-600",
      category: "Data Science",
      level: "Intermediate",
      duration: "52 hours"
    },
    {
      title: "Complete Web Design Course",
      instructor: "Brad Schiff",
      rating: 4.6,
      students: 154329,
      price: 79.99,
      originalPrice: 179.99,
      image: "bg-gradient-to-br from-pink-400 to-rose-600",
      category: "Design",
      level: "Beginner",
      duration: "28 hours"
    }
  ];

  const trendingTopics = [
    "ChatGPT", "React", "Python", "AWS", "Machine Learning", "Figma", "Node.js", "TypeScript",
    "Blockchain", "Data Analysis", "UI/UX Design", "Digital Marketing", "Excel", "Photography"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-violet-600">INOWEY COLLEGE</Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="default" className="bg-violet-600 text-white">Explore</Button>
              <Button variant="ghost" className="text-gray-700" asChild>
                <Link href="/plans">Plans & Pricing</Link>
              </Button>
              <Button variant="ghost" className="text-gray-700" asChild>
                <Link href="/business">INOWEY Business</Link>
              </Button>
              <Button variant="ghost" className="text-gray-700" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Log in</Button>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">Sign up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 to-purple-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Explore 250,000+ online courses</h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Choose from a wide range of courses taught by expert instructors.
            Whether you're looking to advance your career or learn something new, we have the perfect course for you.
          </p>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="w-full px-6 py-4 text-lg rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-violet-300"
              />
              <Button className="absolute right-2 top-2 bg-violet-600 hover:bg-violet-700 rounded-full px-8">
                Search
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {trendingTopics.slice(0, 6).map((topic) => (
              <Badge key={topic} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 px-4 py-2">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-600">Find the perfect course in your field of interest</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="font-semibold">{category.courses.toLocaleString()} courses</p>
                    <p>{category.students} students</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600">Hand-picked courses from our expert instructors</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredCourses.map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className={`w-full h-48 ${course.image} rounded-t-lg relative`}>
                      <Badge className="absolute top-3 left-3 bg-orange-500">Featured</Badge>
                      <Badge variant="outline" className="absolute top-3 right-3 bg-white text-gray-700">
                        {course.level}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>{course.category}</span>
                        <span>{course.duration}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight line-clamp-2">{course.title}</CardTitle>
                      <CardDescription>{course.instructor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-yellow-500">⭐</span>
                          <span className="text-sm font-medium">{course.rating}</span>
                          <span className="text-sm text-gray-500">({course.students.toLocaleString()})</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-right">
                          <span className="text-lg font-bold">${course.price}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">${course.originalPrice}</span>
                        </div>
                        <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                          Enroll Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Similar content for other tabs would go here */}
            <TabsContent value="development">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Development Courses</h3>
                <p className="text-gray-600">Specialized development courses coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="business">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Business Courses</h3>
                <p className="text-gray-600">Business and entrepreneurship courses coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="design">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Design Courses</h3>
                <p className="text-gray-600">Creative design courses coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="marketing">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Marketing Courses</h3>
                <p className="text-gray-600">Digital marketing courses coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Trending Topics</h2>
          <p className="text-xl text-gray-600 mb-12">Stay ahead with the most in-demand skills</p>

          <div className="flex flex-wrap justify-center gap-4">
            {trendingTopics.map((topic, index) => (
              <Badge
                key={topic}
                variant="outline"
                className={`px-6 py-3 text-lg hover:bg-violet-600 hover:text-white transition-colors cursor-pointer ${
                  index < 6 ? 'border-violet-600 text-violet-600' : 'border-gray-300 text-gray-600'
                }`}
              >
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to start learning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of learners and start your journey today. Choose from thousands of courses taught by expert instructors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-3">
              Browse Courses
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-3">
              Try for Free
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
