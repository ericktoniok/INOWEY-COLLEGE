import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-green-400 to-green-500 text-white text-center py-3 px-4 text-sm">
        Last day to get new skills from $13.99 | Have big goals? We have the courses to match. Ends in 20h 33m 22s.
        <button className="ml-2 text-white hover:text-gray-200">×</button>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-violet-600">INOWEY COLLEGE</h1>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-gray-700">Explore</Button>
              <Button variant="ghost" className="text-gray-700">Plans & Pricing</Button>
              <Button variant="ghost" className="text-gray-700">INOWEY Business</Button>
              <Button variant="ghost" className="text-gray-700" asChild>
                <a href="/dashboard">Dashboard</a>
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
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Last day for courses from $13.99
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Your future's wide open, and so is our course library. Learn more for less.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-400 opacity-90"></div>
                <div className="relative z-10 flex justify-center">
                  <div className="w-64 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600">Student Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Coach Section */}
      <section className="bg-gradient-to-br from-violet-600 to-purple-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Meet your new AI conversation coach</h2>
          <p className="text-xl mb-8 opacity-90">
            Role Play is the interactive way to practice your business and communication skills.
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white/20 rounded-lg p-4 h-32 flex items-center justify-center">
                    <span className="text-white/80">Device {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button className="mt-8 bg-violet-500 hover:bg-violet-400 text-white px-8 py-3">
            Find courses with Role Play
          </Button>
        </div>
      </section>

      {/* Career Accelerators */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to reimagine your career?</h2>
            <p className="text-xl text-gray-600">
              Get the skills and real-world experience employers want with Career Accelerators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-lg mb-4"></div>
                <CardTitle className="text-xl">Full Stack Web Developer</CardTitle>
                <CardDescription>
                  $127,005 average salary (US) • 16,500 open roles (US)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>⭐ 4.7</span>
                  <span>452K ratings</span>
                  <span>87.6 total hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-500 rounded-lg mb-4"></div>
                <CardTitle className="text-xl">Digital Marketer</CardTitle>
                <CardDescription>
                  $61,126 average salary (US) • 36,600 open roles (US)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>⭐ 4.5</span>
                  <span>3.5K ratings</span>
                  <span>28.4 total hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-500 rounded-lg mb-4"></div>
                <CardTitle className="text-xl">Data Scientist</CardTitle>
                <CardDescription>
                  $126,629 average salary (US) • 20,800 open roles (US)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>⭐ 4.6</span>
                  <span>219K ratings</span>
                  <span>47.1 total hours</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50">
              All Career Accelerators
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">All the skills you need in one place</h2>
          <p className="text-xl text-gray-600 mb-12">
            From critical skills to technical topics, INOWEY COLLEGE supports your professional development.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="bg-gray-900 text-white px-4 py-2 text-sm">Data Science</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">IT Certifications</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">Leadership</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">Web Development</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">Communication</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">Business Analytics & Intelligence</Badge>
          </div>

          <p className="text-gray-600 mb-8">Trusted by over 16,000 companies and millions of learners around the world</p>

          <div className="flex justify-center items-center space-x-8 grayscale opacity-60">
            <div className="text-2xl font-bold">Samsung</div>
            <div className="text-2xl font-bold">cisco</div>
            <div className="text-2xl font-bold">Vimeo</div>
            <div className="text-2xl font-bold">P&G</div>
            <div className="text-2xl font-bold">Ericsson</div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Learners are viewing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg relative">
                <Badge className="absolute top-3 left-3 bg-orange-500">Bestseller</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight">100 Days of Code: The Complete Python Pro Bootcamp</CardTitle>
                <CardDescription>Dr. Angela Yu, Developer and Lead Instructor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-medium">4.7</span>
                    <span className="text-sm text-gray-500">(383,621)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold">$19.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$124.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-t-lg relative">
                <Badge className="absolute top-3 left-3 bg-orange-500">Bestseller</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight">The Complete Full-Stack Web Development Bootcamp</CardTitle>
                <CardDescription>Dr. Angela Yu, Developer and Lead Instructor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-medium">4.7</span>
                    <span className="text-sm text-gray-500">(447,382)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold">$18.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$119.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-600 rounded-t-lg relative">
                <Badge className="absolute top-3 left-3 bg-orange-500">Bestseller</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight">[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025</CardTitle>
                <CardDescription>Stephane Maarek | AWS Certified Cloud...</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-medium">4.7</span>
                    <span className="text-sm text-gray-500">(258,587)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold">$24.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$159.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-t-lg relative">
                <Badge className="absolute top-3 left-3 bg-orange-500">Bestseller</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight">Ultimate AWS Certified Solutions Architect Associate 2025</CardTitle>
                <CardDescription>Stephane Maarek | AWS Certified Cloud...</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-medium">4.7</span>
                    <span className="text-sm text-gray-500">(264,689)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold">$19.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$124.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">INOWEY COLLEGE</h3>
              <p className="text-gray-300 mb-4">
                The leading online learning platform with millions of students worldwide.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="text-white border-white">English</Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">About us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact us</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Investors</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Sitemap</a></li>
                <li><a href="#" className="hover:text-white">Accessibility</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Help and Support</a></li>
                <li><a href="#" className="hover:text-white">Get the app</a></li>
                <li><a href="#" className="hover:text-white">Affiliate</a></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="text-center text-gray-400">
            <p>© 2025 INOWEY COLLEGE, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
