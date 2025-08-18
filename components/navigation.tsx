"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { NavLink } from "./ui/nav-link"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close mobile menu on click
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <h1 className="text-2xl font-serif font-black text-primary hover:opacity-80 transition-opacity">IPTV Kopen</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <NavLink href="/#pricing" targetId="#pricing">Pricing</NavLink>
            <NavLink href="/#features" targetId="#features">Features</NavLink>
            <NavLink href="/#testimonials" targetId="#testimonials">Reviews</NavLink>
            <NavLink href="/#faq" targetId="#faq">FAQ</NavLink>
            <NavLink href="/#contact" targetId="#contact">Contact</NavLink>
          </div>

          {/* Contact and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm">24/7 Support</span>
            </div>
            <NavLink href="/#pricing" targetId="#pricing">
              <Button className="bg-primary hover:bg-primary/90">Start Free Trial</Button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2">
              <Link 
                href="/" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <NavLink href="/#pricing" targetId="#pricing" className="block px-3 py-2 hover:text-primary">
                Pricing
              </NavLink>
              <NavLink href="/#features" targetId="#features" className="block px-3 py-2 hover:text-primary">
                Features
              </NavLink>
              <NavLink href="/#testimonials" targetId="#testimonials" className="block px-3 py-2 hover:text-primary">
                Reviews
              </NavLink>
              <NavLink href="/#faq" targetId="#faq" className="block px-3 py-2 hover:text-primary">
                FAQ
              </NavLink>
              <NavLink href="/#contact" targetId="#contact" className="block px-3 py-2 hover:text-primary">
                Contact
              </NavLink>
              <div className="px-3 py-2">
                <NavLink href="/#pricing" targetId="#pricing">
                  <Button className="w-full bg-primary hover:bg-primary/90">Start Free Trial</Button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
