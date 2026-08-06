import React from 'react'
import Reveal from './Reveal'

const Projects = () => {
  const projects = [
    {
      title: "CommuteCast",
      description: "A full-stack commute companion combining live PTV transit data (train, tram, bus, V/Line) with weather — installable as a PWA with light/dark mode.",
      technologies: ["React", "Vite", "Express", "Node.js", "PWA"],
      githubUrl: "https://github.com/sam666-deb/CommuteCast",
      liveUrl: "https://commute-cast-six.vercel.app",
      features: ["Live PTV timetable data", "Weather-aware commute advice", "Signed API requests (HMAC-SHA1)", "Installable PWA"],
      status: "Live"
    },
    {
      title: "Zulibo",
      description: "A real-time, Instagram-DM-style mobile chat app with messaging, stories, and voice & video calling, built with Expo and a Node/MongoDB backend.",
      technologies: ["React Native", "Expo", "TypeScript", "Express", "MongoDB", "Clerk"],
      githubUrl: "https://github.com/sam666-deb/Zulibo",
      features: ["Real-time messaging via WebSockets", "Voice & video calls (Stream Video)", "Clerk authentication end-to-end", "Cloudinary media hosting"],
      status: "Full-Stack"
    },
    {
      title: "TODO App",
      description: "A cross-platform task management app with a polished gradient UI, dark mode, and real-time sync powered by Convex.",
      technologies: ["React Native", "Expo", "TypeScript", "Convex"],
      githubUrl: "https://github.com/sam666-deb/To-Do-App",
      features: ["Real-time sync across devices", "Gradient UI with dark mode", "Progress tracking & stats", "Haptic feedback & animations"],
      status: "Mobile"
    },
    {
      title: "Linux Terminal Simulator",
      description: "A Python project that emulates basic Linux terminal commands, letting users practice shell commands in a safe, interactive environment.",
      technologies: ["Python", "CLI", "Education"],
      githubUrl: "https://github.com/sam666-deb/Linux-Terminal-Simulator",
      features: ["Interactive terminal emulation", "Safe learning environment", "Core Linux commands", "Open-source & beginner friendly"],
      status: "Educational"
    },
    {
      title: "2D Unity Game",
      description: "A Unity-based 2D game development project showcasing core game mechanics, physics, and interactive gameplay elements.",
      technologies: ["C#", "Unity", "2D Graphics"],
      githubUrl: "https://github.com/sam666-deb/2D-Game-Project-Unity-Development-BootCamp-Project-1",
      features: ["2D game mechanics", "Unity physics", "Interactive elements", "Game design fundamentals"],
      status: "Unity"
    },
    {
      title: "Object Detection System",
      description: "A computer vision project using OpenCV for real-time object detection and recognition.",
      technologies: ["Python", "OpenCV", "Computer Vision"],
      githubUrl: "https://github.com/sam666-deb/Object_Detection",
      features: ["Real-time detection", "OpenCV integration", "Image processing pipeline"],
      status: "Technical"
    },
    {
      title: "Sorting Algorithm Visualizer",
      description: "An interactive Python application that visualizes sorting algorithms to help understand how they work step by step.",
      technologies: ["Python", "Visualization", "Algorithms"],
      githubUrl: "https://github.com/sam666-deb/Sorting-Algorithm-Visualizer",
      features: ["Step-by-step visualization", "Multiple algorithms", "Educational tool"],
      status: "Educational"
    },
    {
      title: "Message Encryptor / Decryptor",
      description: "A secure messaging utility with encryption and decryption capabilities for basic data protection.",
      technologies: ["Python", "Cryptography", "Security"],
      githubUrl: "https://github.com/sam666-deb/message-encryptor-Decryptor",
      features: ["Data encryption", "Message protection", "Cryptographic algorithms"],
      status: "Security"
    }
  ]

  const getStatusColor = (status) => {
    const colors = {
      'Live': 'bg-green-100 text-green-800 dark:bg-green-500/15 dark:text-green-300',
      'Full-Stack': 'bg-blue-100 text-blue-800 dark:bg-blue-500/15 dark:text-blue-300',
      'Mobile': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-300',
      'Educational': 'bg-purple-100 text-purple-800 dark:bg-purple-500/15 dark:text-purple-300',
      'Unity': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-300',
      'Technical': 'bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-300',
      'Security': 'bg-red-100 text-red-800 dark:bg-red-500/15 dark:text-red-300',
    }
    return colors[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-500/15 dark:text-gray-300'
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Full-stack apps, mobile builds, Unity games, and other things I've shipped
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delay={(index % 3) * 100}>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-none dark:ring-1 dark:ring-slate-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-5 mt-auto pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to action */}
        <Reveal delay={200}>
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Want to see more of my work?</p>
            <a
              href="https://github.com/sam666-deb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 dark:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-cyan-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Visit My GitHub Profile
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Projects
