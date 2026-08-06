import React from 'react'
import Reveal from './Reveal'

const Experience = () => {
  const experiences = [
    {
      title: "Independent Full-Stack Developer",
      company: "Self-directed Projects",
      location: "Remote / Australia",
      period: "2025 - Present",
      type: "Full-Stack & Mobile",
      responsibilities: [
        "Design and build full-stack web and mobile apps end to end",
        "Integrate third-party APIs and services (transit data, auth, real-time video)",
        "Own deployment and CI/CD (Vercel, GitHub Actions)",
        "Write technical posts documenting build decisions on my blog"
      ],
      achievements: [
        "Shipped CommuteCast, a live PTV transit + weather PWA, to production",
        "Built Zulibo, a real-time chat app with voice & video calling",
        "Built a cross-platform TODO app with real-time sync via Convex"
      ],
      technologies: ["React", "React Native", "Node.js", "MongoDB", "Convex", "TypeScript"]
    },
    {
      title: "Unity Developer Trainer & Project Manager",
      company: "Daffodil International University",
      location: "Bangladesh",
      period: "2023 - 2024",
      type: "AR/VR & Game Development Lab",
      responsibilities: [
        "Working with the wider development team",
        "Manage classes and train beginner students",
        "Develop Unity-based AR/VR applications",
        "Lead project management for game development initiatives",
        "Mentor students in Unity development and game design"
      ],
      achievements: [
        "Successfully trained multiple cohorts of students",
        "Led development of innovative AR/VR projects",
        "Improved student engagement and learning outcomes"
      ],
      technologies: ["Unity", "C#", "AR/VR", "Project Management", "Teaching"]
    },
    {
      title: "Vice President",
      company: "Daffodil International University",
      location: "Bangladesh",
      period: "2023 - 2024",
      type: "AR/VR & Game Development Lab",
      responsibilities: [
        "Working with the wider ER team",
        "Manage various seminars and workshops",
        "Oversee lab operations and student activities",
        "Coordinate with faculty and administration",
        "Plan and execute technical events"
      ],
      achievements: [
        "Organized successful technical seminars",
        "Enhanced lab infrastructure and resources",
        "Built strong relationships with industry partners"
      ],
      technologies: ["Leadership", "Event Management", "Team Coordination", "Strategic Planning"]
    },
    {
      title: "Teacher Prefect",
      company: "Daffodil International University",
      location: "Bangladesh",
      period: "2022 - 2023",
      type: "Various Courses",
      responsibilities: [
        "Conduct classes for various courses",
        "Assist the professor in conducting lectures more efficiently",
        "Support student learning and academic progress",
        "Help with course material preparation",
        "Provide additional tutoring and guidance"
      ],
      achievements: [
        "Improved lecture delivery and student comprehension",
        "Developed effective teaching methodologies",
        "Received positive feedback from students and faculty"
      ],
      technologies: ["Teaching", "Course Development", "Student Support", "Academic Assistance"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey across full-stack development, Unity/AR-VR, and teaching
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-none dark:ring-1 dark:ring-slate-700 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">{exp.company}</span>
                      <span className="text-gray-500 dark:text-gray-500">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="bg-blue-100 dark:bg-blue-500/15 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">{exp.type}</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    Technologies & Skills Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-100 dark:bg-purple-500/15 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Summary */}
        <Reveal delay={150}>
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
            <p className="text-lg leading-relaxed mb-4">
              My experience spans hands-on full-stack and Unity/AR-VR development, strategic leadership
              roles, and teaching — always with a focus on shipping real, working software and helping
              others learn to do the same.
            </p>
            <p className="text-lg leading-relaxed">
              I bring a unique combination of technical breadth (web, mobile, and immersive development),
              proven ability to lead teams and events, and genuine enjoyment in mentoring — a combination
              that translates well to both industry roles and research environments.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Experience
