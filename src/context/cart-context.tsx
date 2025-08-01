'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { CartContextType, CartState, CartItem, Course } from '@/types/course'
import { useToast } from '@/hooks/use-toast'

// Cart Actions
type CartAction =
  | { type: 'ADD_TO_CART'; payload: Course }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { courseId: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState }

// Cart Reducer
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.course.id === action.payload.id)

      if (existingItem) {
        // Course already in cart, don't add again (courses are usually bought once)
        return state
      }

      const newItem: CartItem = {
        id: Date.now(),
        course: action.payload,
        quantity: 1,
        addedAt: new Date()
      }

      const newItems = [...state.items, newItem]
      const newTotal = newItems.reduce((sum, item) => sum + (item.course.price * item.quantity), 0)

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItems.length
      }
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.course.id !== action.payload)
      const newTotal = newItems.reduce((sum, item) => sum + (item.course.price * item.quantity), 0)

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItems.length
      }
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.course.id === action.payload.courseId
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      const newTotal = newItems.reduce((sum, item) => sum + (item.course.price * item.quantity), 0)

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItems.length
      }
    }

    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
        itemCount: 0
      }

    case 'LOAD_CART':
      return action.payload

    default:
      return state
  }
}

// Initial state
const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Cart Provider
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState)
  const { toast } = useToast()

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('inowey-cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        dispatch({ type: 'LOAD_CART', payload: parsedCart })
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('inowey-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (course: Course) => {
    const isAlreadyInCart = cart.items.some(item => item.course.id === course.id)

    if (isAlreadyInCart) {
      toast({
        title: "Already in cart",
        description: `${course.title} is already in your cart.`,
        variant: "destructive"
      })
      return
    }

    dispatch({ type: 'ADD_TO_CART', payload: course })
    toast({
      title: "Added to cart",
      description: `${course.title} has been added to your cart.`
    })
  }

  const removeFromCart = (courseId: number) => {
    const item = cart.items.find(item => item.course.id === courseId)
    dispatch({ type: 'REMOVE_FROM_CART', payload: courseId })

    if (item) {
      toast({
        title: "Removed from cart",
        description: `${item.course.title} has been removed from your cart.`
      })
    }
  }

  const updateQuantity = (courseId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(courseId)
      return
    }

    dispatch({ type: 'UPDATE_QUANTITY', payload: { courseId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart."
    })
  }

  const isInCart = (courseId: number) => {
    return cart.items.some(item => item.course.id === courseId)
  }

  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
