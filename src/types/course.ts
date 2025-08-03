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
  // Add video preview for course details
  previewVideo?: string
  instructor: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  lastUpdated: string
  curriculum: CourseSection[]
}

export interface CourseSection {
  id: number
  title: string
  lessons: Lesson[]
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
  videoUrl?: string
  isPreview?: boolean
}

// Cart Types
export interface CartItem {
  id: number
  course: Course
  quantity: number
  addedAt: Date
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

export interface CartContextType {
  cart: CartState
  addToCart: (course: Course) => void
  removeFromCart: (courseId: number) => void
  updateQuantity: (courseId: number, quantity: number) => void
  clearCart: () => void
  isInCart: (courseId: number) => boolean
}
