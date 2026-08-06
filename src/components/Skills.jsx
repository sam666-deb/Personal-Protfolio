import React from 'react'
import Reveal from './Reveal'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "Python", level: 90 },
        { name: "C#", level: 85 },
        { name: "C++", level: 75 },
        { name: "Dart", level: 70 },
        { name: "HTML / CSS", level: 85 }
      ],
      icon: "💻"
    },
    {
      title: "Full-Stack & Mobile",
      skills: [
        { name: "React", level: 88 },
        { name: "React Native (Expo)", level: 82 },
        { name: "Node.js / Express", level: 82 },
        { name: "MongoDB", level: 75 },
        { name: "Convex", level: 70 },
        { name: "Flutter", level: 70 }
      ],
      icon: "🌐"
    },
    {
      title: "Unity & AR/VR",
      skills: [
        { name: "Unity 3D Engine", level: 90 },
        { name: "AR/VR Development", level: 85 },
        { name: "Game Physics & Mechanics", level: 80 },
        { name: "3D Modeling Basics", level: 65 },
        { name: "Mobile Games", level: 80 },
        { name: "OpenCV / Computer Vision", level: 70 }
      ],
      icon: "🎮"
    },
    {
      title: "Tools, Platforms & Soft Skills",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Vite / Tailwind CSS", level: 85 },
        { name: "CI/CD (GitHub Actions)", level: 75 },
        { name: "Teaching & Mentoring", level: 90 },
        { name: "Project Management", level: 82 },
        { name: "Team Leadership", level: 80 }
      ],
      icon: "🛠️"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical and professional capabilities
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-none dark:ring-1 dark:ring-slate-700 p-6 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional skills section */}
        <Reveal delay={150}>
          <div className="mt-16 bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-none dark:ring-1 dark:ring-slate-700 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Additional Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Real-time Systems (WebSockets)",
                "REST & Auth (Clerk, JWT)",
                "PWA & Offline-first",
                "Cross-platform Deployment",
                "Technical Writing",
                "Problem Solving",
                "Adaptability",
                "Client Communication"
              ].map((skill, index) => (
                <div key={index} className="bg-blue-50 dark:bg-blue-500/10 rounded-lg p-3 text-center hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors duration-200">
                  <span className="text-sm font-medium text-blue-900 dark:text-blue-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Skills
