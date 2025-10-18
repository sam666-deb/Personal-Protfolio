import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Linux Terminal Simulator",
      description: "A Python project that emulates basic Linux terminal commands, allowing users to practice and learn in a safe, interactive environment.",
      technologies: ["Python", "Linux", "Shell", "CLI"],
      githubUrl: "https://github.com/sam666-deb/Linux-Terminal-Simulator",
      features: ["Interactive terminal emulation", "Safe learning environment", "Basic Linux commands", "Educational tool"],
      status: "Recent"
    },
    {
      title: "2D Game Project Unity",
      description: "A comprehensive Unity-based 2D game development project showcasing game mechanics, physics, and interactive elements.",
      technologies: ["C#", "Unity", "Game Development", "2D Graphics"],
      githubUrl: "https://github.com/sam666-deb/2D-Game-Project-Unity-Development-BootCamp-Project-1",
      features: ["2D Game Mechanics", "Unity Physics", "Interactive Elements", "Game Design"],
      status: "Featured"
    },
    {
      title: "Sorting Algorithm Visualizer",
      description: "An interactive Python application that visualizes various sorting algorithms to help understand their working principles.",
      technologies: ["Python", "Visualization", "Algorithms", "Data Structures"],
      githubUrl: "https://github.com/sam666-deb/Sorting-Algorithm-Visualizer",
      features: ["Algorithm Visualization", "Interactive Interface", "Educational Tool", "Python Graphics"],
      status: "Educational"
    },
    {
      title: "Object Detection System",
      description: "Computer vision project using OpenCV for real-time object detection and recognition applications.",
      technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
      githubUrl: "https://github.com/sam666-deb/Object_Detection",
      features: ["Real-time Detection", "OpenCV Integration", "Computer Vision", "Image Processing"],
      status: "Technical"
    },
    {
      title: "Wordle Game Clone",
      description: "A Python implementation of the popular Wordle word-guessing game with interactive gameplay and scoring system.",
      technologies: ["Python", "Game Development", "GUI", "Logic Programming"],
      githubUrl: "https://github.com/sam666-deb/Wordle-Game",
      features: ["Word Guessing Game", "Interactive GUI", "Scoring System", "Game Logic"],
      status: "Fun"
    },
    {
      title: "Message Encryptor/Decryptor",
      description: "A secure messaging application with encryption and decryption capabilities for data protection.",
      technologies: ["Python", "Cryptography", "Security", "Data Protection"],
      githubUrl: "https://github.com/sam666-deb/message-encryptor-Decryptor",
      features: ["Data Encryption", "Security Features", "Message Protection", "Cryptographic Algorithms"],
      status: "Security"
    },
    {
      title: "Flutter Mobile Apps",
      description: "Collection of mobile applications built with Flutter/Dart including cafe management, COVID-19 tracker, and e-commerce solutions.",
      technologies: ["Dart", "Flutter", "Mobile Development", "Cross-platform"],
      githubUrl: "https://github.com/sam666-deb/Sams-cafe",
      features: ["Mobile Apps", "Cross-platform", "UI/UX Design", "Business Applications"],
      status: "Mobile"
    },
    {
      title: "Virtual Keyboard",
      description: "A JavaScript-based virtual keyboard implementation with customizable layouts and interactive features.",
      technologies: ["JavaScript", "HTML", "CSS", "Web Development"],
      githubUrl: "https://github.com/sam666-deb/Virtual_Keyboard",
      features: ["Virtual Input", "Customizable Layout", "Web Interface", "Interactive Design"],
      status: "Web"
    }
  ]

  const getStatusColor = (status) => {
    const colors = {
      'Recent': 'bg-green-100 text-green-800',
      'Featured': 'bg-blue-100 text-blue-800',
      'Educational': 'bg-purple-100 text-purple-800',
      'Technical': 'bg-orange-100 text-orange-800',
      'Fun': 'bg-pink-100 text-pink-800',
      'Security': 'bg-red-100 text-red-800',
      'Mobile': 'bg-indigo-100 text-indigo-800',
      'Web': 'bg-cyan-100 text-cyan-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">My Game Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my Unity games, AR/VR experiences, and development work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/sam666-deb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Visit My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
