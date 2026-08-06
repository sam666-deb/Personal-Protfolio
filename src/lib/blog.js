import { load as parseYaml } from 'js-yaml'

// Loads every markdown file in src/content/blog at build time and turns it
// into a list of post objects. Add a new .md file there and it shows up here
// automatically - no registration step needed.
const rawPosts = import.meta.glob('/src/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const [, frontmatter, content] = match
  const data = parseYaml(frontmatter) || {}

  // YAML auto-parses unquoted ISO dates into Date objects (e.g. Tina's output) -
  // normalize back to a plain "YYYY-MM-DD" string either way.
  if (data.date instanceof Date) {
    data.date = data.date.toISOString().slice(0, 10)
  }

  return { data, content: content.trim() }
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

export const posts = Object.entries(rawPosts)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    const slug = data.slug || slugFromPath(path)
    return {
      slug,
      title: data.title || slug,
      date: data.date || '1970-01-01',
      excerpt: data.excerpt || '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      cover: data.cover || null,
      content,
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}
