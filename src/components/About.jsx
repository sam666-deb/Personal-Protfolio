import React from 'react'
import Reveal from './Reveal'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A full-stack developer and Unity / AR-VR specialist building interactive, real-time experiences
            </p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Professional Summary */}
            <Reveal>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-none dark:ring-1 dark:ring-slate-700 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Summary</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm a <span className="font-semibold text-cyan-600 dark:text-cyan-400">Unity Developer</span> and{' '}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Engineer</span> with a
                    Computer Science and Engineering background, currently completing my Master of Information
                    Technology and Systems at the University of Tasmania. I like working at the intersection of
                    immersive interaction and real-time software — places where good engineering directly shapes
                    how something feels to use.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    On the web and mobile side, I build full-stack products end to end — React and React Native
                    (Expo) front ends, Node.js/Express APIs, and databases like MongoDB and Convex — recent examples
                    include <span className="font-semibold text-cyan-600 dark:text-cyan-400">CommuteCast</span> (a
                    live transit + weather app) and{' '}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Zulibo</span> (a real-time chat
                    app with voice & video calling).
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    On the immersive side, I have hands-on experience in{' '}
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Unity 3D</span>,{' '}
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">C#</span>, and{' '}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">AR/VR development</span> —
                    including two years training and mentoring students in Unity development and game design at a
                    university AR/VR lab. I'm now looking to bring both skill sets into research and industry work
                    around immersive, real-time systems.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Key highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Reveal delay={0}>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-500/10 dark:to-blue-500/10 p-6 rounded-lg border border-cyan-200 dark:border-cyan-500/20 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🎓</div>
                    <h4 className="font-semibold text-cyan-900 dark:text-cyan-300 mb-2">Education</h4>
                    <p className="text-sm text-cyan-700 dark:text-cyan-400 font-medium">Master of IT & Systems</p>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400">University of Tasmania</p>
                    <p className="text-xs text-cyan-500 dark:text-cyan-500 mt-1">2025 - Present</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-500/10 dark:to-indigo-500/10 p-6 rounded-lg border border-blue-200 dark:border-blue-500/20 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="text-center">
                    <div className="text-3xl mb-3">💻</div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Full-Stack Dev</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-400 font-medium">React / React Native</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Node.js, MongoDB, Convex</p>
                    <p className="text-xs text-blue-500 dark:text-blue-500 mt-1">End-to-end shipping</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 p-6 rounded-lg border border-indigo-200 dark:border-indigo-500/20 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🎮</div>
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-2">Unity & AR/VR</h4>
                    <p className="text-sm text-indigo-700 dark:text-indigo-400 font-medium">Game Development</p>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">AR/VR Applications</p>
                    <p className="text-xs text-indigo-500 dark:text-indigo-500 mt-1">C# Programming</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 p-6 rounded-lg border border-purple-200 dark:border-purple-500/20 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🌏</div>
                    <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Location</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-400 font-medium">Truganina, VIC</p>
                    <p className="text-sm text-purple-600 dark:text-purple-400">Australia</p>
                    <p className="text-xs text-purple-500 dark:text-purple-500 mt-1">Remote Available</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Core Competencies */}
            <Reveal>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-none dark:ring-1 dark:ring-slate-700 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Competencies</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Full-Stack Development</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center"><span className="text-cyan-500 mr-2">•</span>React & React Native (Expo)</li>
                      <li className="flex items-center"><span className="text-cyan-500 mr-2">•</span>Node.js & Express APIs</li>
                      <li className="flex items-center"><span className="text-cyan-500 mr-2">•</span>MongoDB, Convex, Real-time sync</li>
                      <li className="flex items-center"><span className="text-cyan-500 mr-2">•</span>TypeScript & modern tooling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Unity & AR/VR</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Unity 3D Engine & Editor</li>
                      <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Augmented & Virtual Reality</li>
                      <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>C# Scripting & Game Physics</li>
                      <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Cross-platform Deployment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Beyond the Code</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center"><span className="text-indigo-500 mr-2">•</span>Teaching & mentoring developers</li>
                      <li className="flex items-center"><span className="text-indigo-500 mr-2">•</span>Team leadership & project management</li>
                      <li className="flex items-center"><span className="text-indigo-500 mr-2">•</span>Technical writing (see my blog)</li>
                      <li className="flex items-center"><span className="text-indigo-500 mr-2">•</span>Applied research interests</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
