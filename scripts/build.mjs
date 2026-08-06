#!/usr/bin/env node
// Builds the site. The Tina CMS admin (/admin) only gets built in when
// TinaCloud credentials are present, so the portfolio itself always builds
// and deploys successfully even before TinaCloud is set up - see README.md.
import { execSync } from 'node:child_process'

const hasTinaCredentials = process.env.TINA_CLIENT_ID && process.env.TINA_TOKEN

if (hasTinaCredentials) {
  console.log('TinaCloud credentials found - building CMS admin at /admin ...')
  execSync('npx tinacms build', { stdio: 'inherit' })
} else {
  console.log('No TinaCloud credentials (TINA_CLIENT_ID/TINA_TOKEN) - skipping CMS admin build.')
  console.log('The site will still build and deploy normally; see README.md to enable the CMS.')
}

execSync('npx vite build', { stdio: 'inherit' })
