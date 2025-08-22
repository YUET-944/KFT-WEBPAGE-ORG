"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12">
              <img
                src="/images/kft-logo-new.png"
                alt="KFT Logo - Khegarha Falahi Tanzeem"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-green-600">K.F.T</div>
              <div className="text-xs text-gray-500 leading-none">Khegarha Falahi Tanzeem</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/apply-aid"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group"
            >
              Apply for Aid
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/volunteer"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group"
            >
              Volunteer
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Emergency Contact */}
            <a
              href="tel:+923009077229"
              className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
              title="Emergency Contact"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Emergency</span>
            </a>

            {/* Donate Button */}
            <Button
              asChild
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/donate">
                <Heart className="mr-2 h-4 w-4" />
                Donate
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/apply-aid"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply for Aid
              </Link>
              <Link
                href="/volunteer"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Volunteer
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+923009077229"
                  className="flex items-center text-gray-600 hover:text-green-600 transition-colors px-2 py-1"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Contact
                </a>
                <Button
                  asChild
                  className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-full w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/donate">
                    <Heart className="mr-2 h-4 w-4" />
                    Donate
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
