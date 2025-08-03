import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function BusinessPage() {
  const solutions = [
    {
      title: "Upskill Your Workforce",
      description: "Keep your team's skills current with the latest industry trends and technologies.",
      icon: "🎯",
      features: [
        "25,000+ business and technical courses",
        "Hands-on labs and practice exercises",
        "Skill assessments and gap analysis",
        "Personalized learning paths"
      ]
    },
    {
      title: "Measure Learning Impact",
      description: "Track progress and measure the ROI of your learning and development programs.",
      icon: "📊",
      features: [
        "Advanced analytics and reporting",
        "Learning progress tracking",
        "Skill development metrics",
        "Custom dashboard views"
      ]
    },
    {
      title: "Scale Efficiently",
      description: "Deliver training to teams of any size with our enterprise-grade platform.",
      icon: "🚀",
      features: [
        "Unlimited user management",
        "Bulk enrollment capabilities",
        "API integrations",
        "White-label solutions"
      ]
    },
    {
      title: "Ensure Compliance",
      description: "Meet industry standards and compliance requirements with certified courses.",
      icon: "🛡️",
      features: [
        "Industry-specific certifications",
        "Compliance tracking",
        "Audit-ready reporting",
        "Security and data protection"
      ]
    }
  ];

  const useCases = [
    {
      title: "Technology Teams",
      description: "Keep developers and IT professionals up-to-date with the latest technologies.",
      image: "bg-gradient-to-br from-blue-500 to-cyan-600",
      skills: ["Cloud Computing", "DevOps", "Cybersecurity", "Data Science", "Machine Learning"],
      companies: "Used by Google, Microsoft, Amazon"
    },
    {
      title: "Sales & Marketing",
      description: "Enhance sales techniques and marketing strategies to drive revenue growth.",
      image: "bg-gradient-to-br from-green-500 to-emerald-600",
      skills: ["Digital Marketing", "Sales Strategy", "Customer Success", "Social Media", "Analytics"],
      companies: "Used by Salesforce, HubSpot, Adobe"
    },
    {
      title: "Leadership Development",
      description: "Develop leadership skills and management capabilities across all levels.",
      image: "bg-gradient-to-br from-purple-500 to-violet-600",
      skills: ["Team Management", "Strategic Thinking", "Communication", "Change Management", "Project Management"],
      companies: "Used by IBM, Deloitte, PwC"
    },
    {
      title: "Data & Analytics",
      description: "Build data-driven capabilities to make better business decisions.",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      skills: ["Data Analysis", "Business Intelligence", "SQL", "Python", "Tableau"],
      companies: "Used by Netflix, Spotify, Airbnb"
    }
  ];

  const testimonials = [
    {
      company: "TechCorp Inc.",
      logo: "🏢",
      quote: "INOWEY Business has transformed our learning culture. Our team's productivity increased by 40% after implementing their platform.",
      author: "Sarah Johnson",
      role: "Chief Technology Officer",
      employees: "500+ employees"
    },
    {
      company: "Global Marketing Solutions",
      logo: "🌐",
      quote: "The analytics and reporting features help us track our team's progress and identify skill gaps quickly.",
      author: "Michael Chen",
      role: "VP of Human Resources",
      employees: "1,200+ employees"
    },
    {
      company: "DataFlow Analytics",
      logo: "📈",
      quote: "The quality of courses and the ability to create custom learning paths has been a game-changer for our data team.",
      author: "Emily Rodriguez",
      role: "Head of Data Science",
      employees: "300+ employees"
    }
  ];

  const integrations = [
    { name: "Slack", logo: "💬", description: "Learning notifications and updates" },
    { name: "Microsoft Teams", logo: "👥", description: "Collaborative learning experiences" },
    { name: "Salesforce", logo: "☁️", description: "CRM and learning data sync" },
    { name: "Workday", logo: "📋", description: "HR and learning management" },
    { name: "Google Workspace", logo: "📊", description: "Single sign-on and productivity" },
    { name: "Zoom", logo: "🎥", description: "Virtual classroom integration" },
    { name: "Jira", logo: "🔧", description: "Project and skill tracking" },
    { name: "Azure AD", logo: "🔐", description: "Enterprise identity management" }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              <Button variant="default" className="bg-violet-600 text-white">INOWEY Business</Button>
              <Button variant="ghost" className="text-gray-700" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Log in</Button>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">Get Demo</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-500 text-white mb-6 px-4 py-2">
                Trusted by 16,000+ companies worldwide
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Accelerate your team's growth with enterprise learning
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Empower your workforce with the skills they need to succeed. From technical training to leadership development,
                we provide comprehensive learning solutions for organizations of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 h-24 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">16K+</div>
                      <div className="text-sm opacity-80">Companies</div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 h-24 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">5M+</div>
                      <div className="text-sm opacity-80">Learners</div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 h-24 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">25K+</div>
                      <div className="text-sm opacity-80">Courses</div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 h-24 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">190+</div>
                      <div className="text-sm opacity-80">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive learning solutions for your business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your workforce with our enterprise-grade learning platform designed to scale with your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center text-3xl mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-lg">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solutions for every team
            </h2>
            <p className="text-xl text-gray-600">
              Specialized learning paths designed for different roles and departments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className={`h-32 ${useCase.image} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{useCase.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-violet-600 font-medium">{useCase.companies}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by industry leaders
            </h2>
            <p className="text-xl text-gray-600">
              See how companies are transforming their workforce with INOWEY Business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.logo}
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.company}</h3>
                      <p className="text-sm text-gray-600">{testimonial.employees}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless integrations with your existing tools
            </h2>
            <p className="text-xl text-gray-600">
              Connect INOWEY Business with the platforms your team already uses
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow p-6">
                <div className="text-4xl mb-4">{integration.logo}</div>
                <h3 className="font-semibold mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50">
              View All Integrations
            </Button>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="analytics" className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Enterprise-grade features
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to manage and scale your learning programs
              </p>
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="management">Management</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="analytics" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Advanced Learning Analytics</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Get deep insights into your team's learning progress, skill development, and training ROI with our comprehensive analytics dashboard.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Real-time progress tracking</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Skill gap analysis</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Custom reporting and dashboards</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>ROI measurement tools</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-semibold mb-4">Learning Progress Overview</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Course Completion Rate</span>
                        <span className="font-semibold text-green-600">87%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Active Learners</span>
                        <span className="font-semibold text-blue-600">1,247</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Skills Acquired</span>
                        <span className="font-semibold text-purple-600">3,456</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="management" className="space-y-8">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Team Management Features</h3>
                <p className="text-gray-600">Comprehensive tools for managing learners and content at scale.</p>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-8">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security with compliance certifications.</p>
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-8">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">24/7 Priority Support</h3>
                <p className="text-gray-600">Dedicated support team and customer success managers.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your workforce?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies that trust INOWEY Business to develop their teams.
            Get started with a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-3">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-3">
              Contact Sales
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            No credit card required • Setup in under 24 hours • 30-day money-back guarantee
          </p>
        </div>
      </section>
    </div>
  )
}
