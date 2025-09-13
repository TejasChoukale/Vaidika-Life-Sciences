import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'
import logo from '../assets/vaidika_life_sciences_logo.jpeg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [imgError, setImgError] = useState(false) // handle missing image
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Inquiry', path: '/inquiry' },
  ]

  return (
    <>
      {/* Top Contact Bar (full width background, inner content constrained) */}
      <div className="bg-primary-800 text-white py-2 px-0 text-sm hidden md:block">
        <div className="inner-max flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone size={16} />
              <span>+91 94214 41032</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail size={16} />
              <span>info@vaidikalifesciences.com</span>
            </div>
          </div>
          <div className="text-accent-400 text-sm">
            Empowering Pharma Professionals Since 2024
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="inner-max px-0 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" aria-label="Vaidika Life Sciences home" className="flex items-center space-x-3">
              {!imgError ? (
                <img
                src={logo}
                alt="Vaidika Life Sciences Logo"
                className="w-12 h-12 object-contain"
                loading="lazy"
                decoding="async"
/>

              ) : (
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
              )}

              <div>
                <h1 className="text-lg md:text-xl font-heading font-bold text-gray-800">
                  Vaidika Life Sciences
                </h1>
                <p className="text-xs md:text-sm text-primary-600">Pharma Excellence</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm md:text-base font-medium transition-colors ${
                    location.pathname === item.path ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                      layoutId="navbar-underline"
                    />
                  )}
                </Link>
              ))}
              <Link
                to="/inquiry"
                className="hidden sm:inline-block bg-gradient-to-r from-primary-500 to-primary-700 text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm md:text-base"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-100"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/inquiry"
                onClick={() => setIsOpen(false)}
                className="block mx-4 mt-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg font-medium text-center"
              >
                Get Started
              </Link>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
