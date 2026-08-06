import React from 'react'
import Reveal from './Reveal'

const Research = () => {
  const researchAreas = [
    {
      icon: '🥽',
      title: 'AR/VR for Education & Training',
      description:
        "Building on my time training students in Unity and AR/VR, I'm interested in how immersive environments improve learning outcomes and skill transfer compared to traditional methods — especially in technical and vocational training.",
    },
    {
      icon: '🧠',
      title: 'Human-Computer Interaction & Immersive UX',
      description:
        'How interaction design choices in AR/VR and real-time apps affect usability, presence, and cognitive load — bridging game-design intuition with rigorous UX evaluation.',
    },
    {
      icon: '🔌',
      title: 'Real-Time & Distributed Systems',
      description:
        'Practical experience building real-time messaging and live-data systems (WebSockets, signed API integrations) motivates my interest in the reliability, latency, and consistency trade-offs behind real-time software.',
    },
    {
      icon: '👁️',
      title: 'Applied Machine Learning & Computer Vision',
      description:
        'From an early object-detection project with OpenCV, I want to go deeper into applied ML — particularly computer vision techniques that could feed into AR applications (tracking, recognition, scene understanding).',
    },
    {
      icon: '📱',
      title: 'Cross-Platform Software Engineering',
      description:
        'Shipping the same product across web and mobile (React, React Native/Expo) raises real engineering questions about code sharing, performance, and maintainability that I want to study more formally.',
    },
  ]

  return (
    <section id="research" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
              Research Interests
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Areas I want to pursue further — through my Master's, thesis work, or collaboration with
              academic and industry partners
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {researchAreas.map((area, index) => (
            <Reveal key={area.title} delay={(index % 3) * 100}>
              <div className="h-full bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{area.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-700 dark:to-blue-800 rounded-2xl p-8 md:p-10 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Open to Research Collaboration</h3>
            <p className="text-cyan-50 max-w-2xl mx-auto mb-6 leading-relaxed">
              If you're a professor, supervisor, or researcher working in AR/VR, HCI, applied ML, or
              real-time systems and think there's a fit — I'd welcome the conversation, whether that's a
              thesis direction, a research assistantship, or a collaborative project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200 shadow-lg"
            >
              Let's Talk Research
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Research
