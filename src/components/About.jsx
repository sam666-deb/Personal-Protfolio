import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate Unity Game Developer & AR/VR Specialist creating immersive digital experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Professional Summary */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  I am a passionate <span className="font-semibold text-cyan-600">Unity Game Developer</span> and 
                  <span className="font-semibold text-blue-600"> AR/VR Specialist</span> with a strong foundation in 
                  computer science and software engineering. Currently pursuing my Master of Information Technology 
                  and Systems at the University of Tasmania, I bring both academic excellence and practical 
                  development experience to every project.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My expertise spans across <span className="font-semibold text-cyan-600">Unity 3D development</span>, 
                  <span className="font-semibold text-blue-600"> augmented reality (AR)</span>, and 
                  <span className="font-semibold text-indigo-600"> virtual reality (VR)</span> applications. 
                  I specialize in creating immersive gaming experiences, interactive AR applications, and 
                  educational VR content that engages users and delivers exceptional user experiences.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With a strong background in <span className="font-semibold text-cyan-600">C# programming</span>, 
                  <span className="font-semibold text-blue-600"> 3D modeling</span>, and 
                  <span className="font-semibold text-indigo-600"> game design principles</span>, I excel at 
                  transforming creative concepts into polished, functional applications. I'm also experienced 
                  in teaching Unity development, having trained students in game development methodologies and 
                  best practices.
                </p>
              </div>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-3">🎓</div>
                  <h4 className="font-semibold text-cyan-900 mb-2">Education</h4>
                  <p className="text-sm text-cyan-700 font-medium">Master of IT & Systems</p>
                  <p className="text-sm text-cyan-600">University of Tasmania</p>
                  <p className="text-xs text-cyan-500 mt-1">2025 - Present</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-3">🎮</div>
                  <h4 className="font-semibold text-blue-900 mb-2">Unity Expertise</h4>
                  <p className="text-sm text-blue-700 font-medium">Game Development</p>
                  <p className="text-sm text-blue-600">AR/VR Applications</p>
                  <p className="text-xs text-blue-500 mt-1">C# Programming</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-3">👨‍🏫</div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Teaching Experience</h4>
                  <p className="text-sm text-indigo-700 font-medium">Unity Trainer</p>
                  <p className="text-sm text-indigo-600">Course Development</p>
                  <p className="text-xs text-indigo-500 mt-1">Student Support</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-3">🌏</div>
                  <h4 className="font-semibold text-purple-900 mb-2">Location</h4>
                  <p className="text-sm text-purple-700 font-medium">Truganina, VIC</p>
                  <p className="text-sm text-purple-600">Australia</p>
                  <p className="text-xs text-purple-500 mt-1">Remote Available</p>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-cyan-600 mb-3">Game Development</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-cyan-500 mr-2">•</span>Unity 3D Engine & Editor</li>
                    <li className="flex items-center"><span className="text-cyan-500 mr-2">•</span>C# Programming & Scripting</li>
                    <li className="flex items-center"><span className="text-cyan-500 mr-2">•</span>3D Modeling & Animation</li>
                    <li className="flex items-center"><span className="text-cyan-500 mr-2">•</span>Game Physics & Mechanics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-3">AR/VR Technologies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Augmented Reality Development</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Virtual Reality Applications</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Immersive User Experiences</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Cross-platform Deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
