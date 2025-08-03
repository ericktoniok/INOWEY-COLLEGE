'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Link from "next/link"
import { CheckCircle, Download, PlayCircle } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
            <p className="text-xl text-gray-600">
              Welcome to INOWEY COLLEGE! Your courses are now available in your dashboard.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
              <CardDescription>
                Get started with your new courses right away
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <PlayCircle className="h-5 w-5 text-green-600" />
                <div className="text-left">
                  <h3 className="font-medium">Start Learning</h3>
                  <p className="text-sm text-gray-600">Access your courses anytime from your dashboard</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Download className="h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <h3 className="font-medium">Download Resources</h3>
                  <p className="text-sm text-gray-600">Get additional materials and course files</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                <div className="text-left">
                  <h3 className="font-medium">Track Progress</h3>
                  <p className="text-sm text-gray-600">Monitor your learning journey and achievements</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-violet-600 hover:bg-violet-700">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>

            <p className="text-sm text-gray-600">
              You'll receive a confirmation email with your receipt and course access details.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
