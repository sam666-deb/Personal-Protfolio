import React from 'react'
import { Link } from 'react-router-dom'
import { posts, formatDate, estimateReadingTime } from '../lib/blog'
import Reveal from '../components/Reveal'

const BlogList = () => {
  return (
    <section className="min-h-screen py-28 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Notes on Unity, AR/VR, full-stack development, and what I'm learning along the way.
            </p>
          </div>
        </Reveal>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 80}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="block bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>•</span>
                    <span>{estimateReadingTime(post.content)} min read</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  )}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <Link
            to="/"
            className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 font-semibold transition-colors duration-200"
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogList
