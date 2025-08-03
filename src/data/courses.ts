import { Course } from '@/types/course'

export const sampleCourses: Course[] = [
  {
    id: 1,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    description: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    thumbnail: "/api/placeholder/400/300",
    students: 383621,
    rating: 4.7,
    reviews: 383621,
    price: 19.99,
    status: 'published',
    revenue: 7500000,
    completion: 85,
    lessons: 100,
    duration: "54 hours",
    category: "Programming",
    previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    instructor: "Dr. Angela Yu",
    level: "Beginner",
    lastUpdated: "December 2024",
    curriculum: [
      {
        id: 1,
        title: "Beginner Python",
        lessons: [
          {
            id: 1,
            title: "Introduction to Python",
            description: "Learn the basics of Python programming",
            duration: "15 min",
            type: "video",
            completed: false,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            isPreview: true
          },
          {
            id: 2,
            title: "Variables and Data Types",
            description: "Understanding Python variables and data types",
            duration: "20 min",
            type: "video",
            completed: false,
            isPreview: true
          }
        ]
      },
      {
        id: 2,
        title: "Intermediate Python",
        lessons: [
          {
            id: 3,
            title: "Functions and Modules",
            description: "Creating reusable code with functions",
            duration: "25 min",
            type: "video",
            completed: false,
            isPreview: false
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "The Complete Full-Stack Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. Build real-world projects.",
    thumbnail: "/api/placeholder/400/300",
    students: 447382,
    rating: 4.7,
    reviews: 447382,
    price: 18.99,
    status: 'published',
    revenue: 8500000,
    completion: 78,
    lessons: 65,
    duration: "52 hours",
    category: "Web Development",
    previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    instructor: "Dr. Angela Yu",
    level: "Beginner",
    lastUpdated: "January 2025",
    curriculum: [
      {
        id: 1,
        title: "Frontend Development",
        lessons: [
          {
            id: 1,
            title: "HTML Fundamentals",
            description: "Building the structure of web pages",
            duration: "30 min",
            type: "video",
            completed: false,
            isPreview: true
          },
          {
            id: 2,
            title: "CSS Styling",
            description: "Making websites beautiful with CSS",
            duration: "35 min",
            type: "video",
            completed: false,
            isPreview: true
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
    description: "Pass the AWS Certified Cloud Practitioner CLF-C02 exam with confidence. Complete with practice exams!",
    thumbnail: "/api/placeholder/400/300",
    students: 258587,
    rating: 4.7,
    reviews: 258587,
    price: 24.99,
    status: 'published',
    revenue: 6500000,
    completion: 92,
    lessons: 45,
    duration: "28 hours",
    category: "Cloud Computing",
    previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    instructor: "Stephane Maarek",
    level: "Beginner",
    lastUpdated: "January 2025",
    curriculum: [
      {
        id: 1,
        title: "AWS Fundamentals",
        lessons: [
          {
            id: 1,
            title: "Introduction to AWS",
            description: "Understanding Amazon Web Services",
            duration: "25 min",
            type: "video",
            completed: false,
            isPreview: true
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Ultimate AWS Certified Solutions Architect Associate 2025",
    description: "Pass the AWS Solutions Architect Associate Certification SAA-C03. Complete with practice exams and hands-on demos.",
    thumbnail: "/api/placeholder/400/300",
    students: 264689,
    rating: 4.7,
    reviews: 264689,
    price: 19.99,
    status: 'published',
    revenue: 5300000,
    completion: 88,
    lessons: 55,
    duration: "47 hours",
    category: "Cloud Computing",
    previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    instructor: "Stephane Maarek",
    level: "Intermediate",
    lastUpdated: "December 2024",
    curriculum: [
      {
        id: 1,
        title: "AWS Architecture",
        lessons: [
          {
            id: 1,
            title: "Architecting on AWS",
            description: "Design patterns and best practices",
            duration: "40 min",
            type: "video",
            completed: false,
            isPreview: true
          }
        ]
      }
    ]
  }
]

export function getCourseById(id: number): Course | undefined {
  return sampleCourses.find(course => course.id === id)
}

export function getAllCourses(): Course[] {
  return sampleCourses
}
