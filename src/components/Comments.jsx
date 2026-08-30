import React, { useEffect, useRef } from 'react'
import { useTheme } from '../hooks/useTheme.js'

// One-time setup required before this works - see DEVELOPMENT.md "Enabling comments":
// 1. Enable Discussions: repo Settings -> General -> Features -> Discussions
// 2. Visit https://giscus.app, select this repo, create/pick a category, and copy the
//    "data-category" and "data-category-id" values from the generated snippet into
//    GISCUS_CATEGORY / GISCUS_CATEGORY_ID below.
const GISCUS_REPO = 'sam666-deb/Personal-Protfolio'
const GISCUS_REPO_ID = 'R_kgDOQEskdQ'
const GISCUS_CATEGORY = 'Announcements'
const GISCUS_CATEGORY_ID = 'DIC_kwDOQEskdc4DEgqu'

const Comments = ({ term }) => {
  const containerRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current || !GISCUS_CATEGORY_ID) return
    containerRef.current.innerHTML = ''

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-repo', GISCUS_REPO)
    script.setAttribute('data-repo-id', GISCUS_REPO_ID)
    script.setAttribute('data-category', GISCUS_CATEGORY)
    script.setAttribute('data-category-id', GISCUS_CATEGORY_ID)
    script.setAttribute('data-mapping', 'specific')
    script.setAttribute('data-term', term)
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
    script.setAttribute('data-lang', 'en')

    containerRef.current.appendChild(script)
    // theme is intentionally read only at creation time - the effect below keeps
    // an already-mounted widget in sync without tearing down the whole embed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term])

  // Keep an already-loaded widget in sync when the site's theme toggle changes,
  // without re-creating the whole embed.
  useEffect(() => {
    const iframe = containerRef.current?.querySelector('iframe.giscus-frame')
    if (!iframe) return
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: theme === 'dark' ? 'dark' : 'light' } } },
      'https://giscus.app'
    )
  }, [theme])

  if (!GISCUS_CATEGORY_ID) return null

  return (
    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Comments</h3>
      <div ref={containerRef} />
    </div>
  )
}

export default Comments
