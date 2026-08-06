#!/usr/bin/env node
// Scaffolds a new blog post: npm run new:post -- "My Post Title"
import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const title = process.argv.slice(2).join(' ').trim()

if (!title) {
  console.error('Usage: npm run new:post -- "My Post Title"')
  process.exit(1)
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '')

const blogDir = join(__dirname, '..', 'src', 'content', 'blog')
if (!existsSync(blogDir)) mkdirSync(blogDir, { recursive: true })

const filePath = join(blogDir, `${slug}.md`)
if (existsSync(filePath)) {
  console.error(`A post with slug "${slug}" already exists at ${filePath}`)
  process.exit(1)
}

const date = new Date().toISOString().slice(0, 10)

const template = `---
title: "${title}"
date: "${date}"
excerpt: "One or two sentences describing this post — shown on the blog list page."
tags: [tag1, tag2]
---

Start writing here. Standard Markdown is supported: **bold**, _italics_, [links](https://example.com), lists, and code blocks.
`

writeFileSync(filePath, template)
console.log(`Created ${filePath}`)
console.log('Run "npm run dev" to preview it, then commit + push to publish.')
