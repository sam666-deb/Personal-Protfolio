import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } })
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const sectionItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  const barClasses = isScrolled || location.pathname !== '/'
    ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-cyan-500/20'
    : 'bg-transparent'

  const linkColor = isScrolled || location.pathname !== '/'
    ? 'text-slate-700 dark:text-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-100 hover:bg-cyan-500/10'
    : 'text-cyan-100 hover:text-white hover:bg-white/10'

  const logoColor = isScrolled || location.pathname !== '/'
    ? 'from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400'
    : 'from-cyan-300 to-blue-300'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${barClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="flex-shrink-0">
            <span className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${logoColor}`}>
              Ahsan Ahmed
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {sectionItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${linkColor}`}
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/blog"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${linkColor}`}
            >
              Blog
            </Link>
            <ThemeToggle className={`ml-2 ${isScrolled || location.pathname !== '/' ? '!text-slate-500 dark:!text-cyan-300 !border-slate-300 dark:!border-cyan-500/30' : ''}`} />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle className={isScrolled || location.pathname !== '/' ? '!text-slate-500 dark:!text-cyan-300 !border-slate-300 dark:!border-cyan-500/30' : ''} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-all duration-200 ${linkColor}`}
            >
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg border border-cyan-500/20">
            {sectionItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-100 hover:bg-cyan-500/10 w-full text-left transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-100 hover:bg-cyan-500/10 w-full text-left transition-all duration-200"
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
