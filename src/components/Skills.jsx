import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C#", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C++", level: 75 },
        { name: "Dart", level: 70 },
        { name: "HTML/CSS", level: 85 }
      ],
      icon: "💻"
    },
    {
      title: "Development Tools & Frameworks",
      skills: [
        { name: "Unity", level: 90 },
        { name: "React", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "OpenCV", level: 70 },
        { name: "Git", level: 85 },
        { name: "Vite", level: 80 }
      ],
      icon: "🛠️"
    },
    {
      title: "AR/VR & Game Development",
      skills: [
        { name: "Unity AR/VR", level: 90 },
        { name: "Game Development", level: 85 },
        { name: "3D Modeling", level: 70 },
        { name: "Animation", level: 75 },
        { name: "Physics Simulation", level: 80 },
        { name: "Mobile Games", level: 85 }
      ],
      icon: "🎮"
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Team Collaboration", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Adaptability", level: 90 },
        { name: "Leadership", level: 80 }
      ],
      icon: "🤝"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Customer Service",
              "Sales Expertise", 
              "Strong Communication",
              "Team Collaboration",
              "Time Management",
              "Problem Solving",
              "Professional Appearance",
              "Flexibility",
              "Professionalism",
              "Adaptability",
              "Multitasking",
              "Project Management"
            ].map((skill, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-3 text-center hover:bg-blue-100 transition-colors duration-200">
                <span className="text-sm font-medium text-blue-900">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
