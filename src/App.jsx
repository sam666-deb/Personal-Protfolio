import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

function Home() {
  const location = useLocation()

  useEffect(() => {
    const sectionId = location.state?.scrollTo
    if (!sectionId) return
    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [location.state])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <Education />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </div>
  )
}

export default App
