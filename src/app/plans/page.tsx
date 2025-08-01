import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function PlansPage() {
  const personalPlans = [
    {
      name: "Free",
      price: 0,
      period: "forever",
      description: "Perfect for getting started",
      popular: false,
      features: [
        "Access to free courses",
        "Basic course certificates",
        "Community forums",
        "Mobile app access",
        "Limited course downloads"
      ],
      limitations: [
        "No premium courses",
        "Limited certificate features",
        "Ads in content"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const
    },
    {
      name: "Personal",
      price: 29.99,
      period: "month",
      description: "Best for individual learners",
      popular: true,
      features: [
        "Access to 250,000+ courses",
        "Certificates of completion",
        "Offline viewing on mobile",
        "Practice exercises",
        "Q&A with instructors",
        "30-day money-back guarantee",
        "Ad-free experience",
        "Progress tracking"
      ],
      limitations: [],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const
    },
    {
      name: "Annual Personal",
      price: 199.99,
      period: "year",
      originalPrice: 359.88,
      description: "Save 44% with annual billing",
      popular: false,
      features: [
        "Everything in Personal plan",
        "Save $160 per year",
        "Priority customer support",
        "Early access to new features",
        "Advanced progress analytics",
        "Goal setting and reminders",
        "Personalized course recommendations"
      ],
      limitations: [],
      buttonText: "Start Annual Plan",
      buttonVariant: "default" as const
    }
  ];

  const businessPlans = [
    {
      name: "Team",
      price: 12.99,
      period: "user/month",
      minUsers: 5,
      description: "For small teams and organizations",
      popular: false,
      features: [
        "Everything in Personal plan",
        "Team management dashboard",
        "Progress reporting",
        "25 users minimum",
        "Bulk user management",
        "Team analytics",
        "Custom learning paths"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    },
    {
      name: "Enterprise",
      price: 19.99,
      period: "user/month",
      minUsers: 20,
      description: "For large organizations",
      popular: true,
      features: [
        "Everything in Team plan",
        "Advanced analytics & reporting",
        "Custom integrations (LMS/HRIS)",
        "Dedicated customer success manager",
        "Custom course creation tools",
        "White-label solution",
        "Advanced security features",
        "SSO integration",
        "API access",
        "24/7 priority support"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "default" as const
    },
    {
      name: "Custom",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for your needs",
      popular: false,
      features: [
        "Everything in Enterprise plan",
        "Custom course development",
        "Dedicated infrastructure",
        "On-premise deployment options",
        "Custom reporting",
        "Compliance certifications",
        "Professional services",
        "Training and onboarding"
      ],
      buttonText: "Contact Us",
      buttonVariant: "outline" as const
    }
  ];

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. If you cancel during your free trial or within 30 days of purchase, you'll get a full refund."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 7-day free trial for our Personal plan. You can access all premium features during this period."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes, we offer a 50% discount for students with a valid .edu email address. Contact our support team to apply for the student discount."
    },
    {
      question: "What's included in the business plans?",
      answer: "Business plans include team management features, advanced analytics, progress reporting, and dedicated support. Enterprise plans also include custom integrations and white-label options."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Our certificates are widely recognized in the industry. Many of our courses are created in partnership with leading companies and include real-world projects."
    },
    {
      question: "Can I download courses for offline viewing?",
      answer: "Yes, with our Personal and business plans, you can download courses to our mobile app for offline viewing."
    }
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
              <Button variant="default" className="bg-violet-600 text-white">Plans & Pricing</Button>
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Choose the plan that's right for you</h1>
          <p className="text-xl mb-8 opacity-90">
            Start learning today with our flexible pricing options. From free courses to premium subscriptions,
            we have something for everyone.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Badge className="bg-green-500 text-white px-4 py-2">💰 30-day money-back guarantee</Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2">📱 Mobile & desktop access</Badge>
            <Badge className="bg-orange-500 text-white px-4 py-2">🏆 Certificates included</Badge>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="personal" className="w-full">
            <div className="text-center mb-12">
              <TabsList className="grid w-fit grid-cols-2 mx-auto">
                <TabsTrigger value="personal" className="px-8 py-3">Personal Plans</TabsTrigger>
                <TabsTrigger value="business" className="px-8 py-3">Business Plans</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="personal" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {personalPlans.map((plan, index) => (
                  <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-violet-600 shadow-lg scale-105' : ''
                  }`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="my-4">
                        <span className="text-4xl font-bold">
                          {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                        </span>
                        <span className="text-gray-600">/{plan.period}</span>
                        {plan.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            ${plan.originalPrice}/{plan.period}
                          </div>
                        )}
                      </div>
                      <CardDescription className="text-lg">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <span className="text-green-500">✓</span>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <div key={limitationIndex} className="flex items-center space-x-3">
                            <span className="text-red-500">✗</span>
                            <span className="text-sm text-gray-500">{limitation}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        className={`w-full py-3 ${plan.popular ? 'bg-violet-600 hover:bg-violet-700' : ''}`}
                        variant={plan.buttonVariant}
                      >
                        {plan.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="business" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {businessPlans.map((plan, index) => (
                  <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-violet-600 shadow-lg scale-105' : ''
                  }`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="my-4">
                        <span className="text-4xl font-bold">
                          {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                        </span>
                        <span className="text-gray-600">/{plan.period}</span>
                        {plan.minUsers && (
                          <div className="text-sm text-gray-500">
                            Minimum {plan.minUsers} users
                          </div>
                        )}
                      </div>
                      <CardDescription className="text-lg">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <span className="text-green-500">✓</span>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        className={`w-full py-3 ${plan.popular ? 'bg-violet-600 hover:bg-violet-700' : ''}`}
                        variant={plan.buttonVariant}
                      >
                        {plan.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Features</h2>
            <p className="text-xl text-gray-600">See what's included in each plan</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6 font-semibold">Features</th>
                  <th className="text-center py-4 px-6 font-semibold">Free</th>
                  <th className="text-center py-4 px-6 font-semibold">Personal</th>
                  <th className="text-center py-4 px-6 font-semibold">Team</th>
                  <th className="text-center py-4 px-6 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Course Access", free: "Limited", personal: "250,000+", team: "250,000+", enterprise: "250,000+" },
                  { feature: "Certificates", free: "Basic", personal: "✓", team: "✓", enterprise: "✓" },
                  { feature: "Mobile Downloads", free: "✗", personal: "✓", team: "✓", enterprise: "✓" },
                  { feature: "Practice Exercises", free: "✗", personal: "✓", team: "✓", enterprise: "✓" },
                  { feature: "Team Management", free: "✗", personal: "✗", team: "✓", enterprise: "✓" },
                  { feature: "Analytics & Reporting", free: "✗", personal: "Basic", team: "Advanced", enterprise: "Advanced" },
                  { feature: "Custom Integrations", free: "✗", personal: "✗", team: "✗", enterprise: "✓" },
                  { feature: "Priority Support", free: "✗", personal: "✗", team: "✓", enterprise: "✓" }
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">{row.free}</td>
                    <td className="py-4 px-6 text-center">{row.personal}</td>
                    <td className="py-4 px-6 text-center">{row.team}</td>
                    <td className="py-4 px-6 text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our pricing and plans</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to start your learning journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of learners worldwide and advance your career with our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-3">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
