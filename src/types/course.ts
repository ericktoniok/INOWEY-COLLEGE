export interface Course {
  id: number
  title: string
  description: string
  thumbnail: string
  students: number
  rating: number
  reviews: number
  price: number
  status: 'published' | 'draft' | 'review'
  revenue: number
  completion: number
  lessons: number
  duration: string
  category: string
}

export interface CourseCreationData {
  title: string
  description: string
  category: string
  price: string
  thumbnail: File | null
  difficulty: string
  duration: string
  lessons: Lesson[]
}

export interface Lesson {
  id: number
  title: string
  description: string
  duration: string
  type: 'video' | 'document' | 'quiz' | 'assignment'
  completed: boolean
}
