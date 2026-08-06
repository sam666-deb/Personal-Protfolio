import React, { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { getPostBySlug, formatDate, estimateReadingTime } from '../lib/blog'

const BlogPost = () => {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = post ? `${post.title} — Ahsan Ahmed` : 'Post not found — Ahsan Ahmed'
  }, [post])

  const html = useMemo(() => {
    if (!post) return ''
    return DOMPurify.sanitize(marked.parse(post.content))
  }, [post])

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-950 dark:to-slate-900 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
          <Link to="/blog" className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold">
            ← Back to blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <article className="min-h-screen py-28 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 font-medium mb-8 transition-colors duration-200"
        >
          ← Back to blog
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{estimateReadingTime(post.content)} min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>
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
        </header>

        <div
          className="prose-blog text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Thanks for reading — questions or feedback are welcome.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get in touch
          </Link>
        </footer>
      </div>
    </article>
  )
}

export default BlogPost
