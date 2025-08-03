'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { useCart } from "@/context/cart-context"
import Link from "next/link"
import { ShoppingCart, Trash2, ChevronDown } from "lucide-react"

export function Header() {
  const { cart, removeFromCart } = useCart()

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-green-400 to-green-500 text-white text-center py-3 px-4 text-sm">
        Last day to get new skills from $13.99 | Have big goals? We have the courses to match. Ends in 20h 33m 22s.
        <button className="ml-2 text-white hover:text-gray-200">×</button>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <h1 className="text-2xl font-bold text-violet-600 cursor-pointer hover:text-violet-700">
                INOWEY COLLEGE
              </h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 flex items-center space-x-1">
                    <span>Dashboard</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/my-elearning" className="w-full font-semibold text-violet-600">
                      📚 My E-Learning
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/explore" className="w-full">Explore</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/plans" className="w-full">Price & Listing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/business" className="w-full">INOWEY Business</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" className="text-gray-700" asChild>
                <Link href="/instructor">Instructor</Link>
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="relative">
                  <ShoppingCart className="h-4 w-4" />
                  {cart.itemCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    >
                      {cart.itemCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Shopping Cart ({cart.itemCount} items)</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {cart.items.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                  ) : (
                    <>
                      {cart.items.map((item) => (
                        <div key={item.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                          <div className="w-16 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm leading-tight">{item.course.title}</h4>
                            <p className="text-sm text-gray-600">{item.course.instructor}</p>
                            <p className="font-bold text-lg">${item.course.price.toFixed(2)}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.course.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-semibold">Total:</span>
                          <span className="font-bold text-xl">${cart.total.toFixed(2)}</span>
                        </div>
                        <Button className="w-full bg-violet-600 hover:bg-violet-700" asChild>
                          <Link href="/checkout">Proceed to Checkout</Link>
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Button variant="outline" asChild>
              <Link href="/my-elearning">Log in</Link>
            </Button>
            <Button className="bg-gray-900 text-white hover:bg-gray-800" asChild>
              <Link href="/my-elearning">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
