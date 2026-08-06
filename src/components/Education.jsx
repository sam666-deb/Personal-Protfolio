import React from 'react'
import Reveal from './Reveal'

const Education = () => {
  const education = [
    {
      degree: "Master of Information Technology and Systems",
      institution: "University of Tasmania",
      location: "Australia",
      period: "2025 - Present",
      status: "Current",
      description: "Pursuing advanced studies in information technology and systems with focus on modern software development, data management, and emerging technologies.",
      coursework: [
        "Advanced Software Engineering",
        "Database Systems",
        "Information Systems Design",
        "Project Management",
        "Research Methods",
        "Emerging Technologies"
      ],
      achievements: [
        "Maintaining excellent academic performance",
        "Active participation in research projects",
        "Collaboration with international students"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Daffodil International University",
      location: "Bangladesh",
      period: "2020 - 2024",
      status: "Completed",
      description: "Comprehensive undergraduate program covering fundamental and advanced concepts in computer science, software engineering, and technology applications.",
      coursework: [
        "Data Structures and Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Machine Learning",
        "Web Development",
        "Mobile Application Development"
      ],
      achievements: [
        "Graduated with distinction",
        "Active involvement in university clubs and societies",
        "Led multiple technical projects",
        "Received recognition for academic excellence"
      ]
    }
  ]

  const certifications = [
    {
      title: "Unity Developer Certification",
      issuer: "Unity Technologies",
      year: "2023",
      description: "Professional certification in Unity game development and AR/VR applications"
    },
    {
      title: "Python Programming Certification",
      issuer: "Python Institute",
      year: "2022",
      description: "Comprehensive certification in Python programming and software development"
    },
    {
      title: "Project Management Fundamentals",
      issuer: "Daffodil International University",
      year: "2023",
      description: "Certification in project management methodologies and best practices"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">Education & Certifications</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My academic journey and professional certifications
            </p>
          </div>
        </Reveal>

        {/* Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-8 hover:shadow-lg dark:ring-1 dark:ring-slate-700 transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Current'
                          ? 'bg-green-100 text-green-800 dark:bg-green-500/15 dark:text-green-300'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-500/15 dark:text-blue-300'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">{edu.institution}</span>
                      <span className="text-gray-500 dark:text-gray-500">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{edu.location}</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{edu.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Coursework */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Coursework
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{course}</span>
                        </div>
                      ))}
                    </div>
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
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications */}
        <Reveal>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-500/10 dark:to-blue-500/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md dark:shadow-none dark:ring-1 dark:ring-slate-700 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">{cert.year}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Education
