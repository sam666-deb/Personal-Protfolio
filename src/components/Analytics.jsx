import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// One-time setup required - see DEVELOPMENT.md "Analytics":
// 1. Sign up free at https://www.goatcounter.com and create a site (pick a site code).
// 2. Put that site code below.
const GOATCOUNTER_CODE = 'ahsanahmed'

// GoatCounter is loaded with no_onload so it never auto-fires: this component
// fires one pageview per in-app route change itself, since the site uses
// HashRouter and plain page loads can't see client-side navigation.
const Analytics = () => {
  const location = useLocation()
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (!GOATCOUNTER_CODE || scriptLoaded.current) return
    scriptLoaded.current = true

    const script = document.createElement('script')
    script.async = true
    script.src = '//gc.zgo.at/count.js'
    script.setAttribute('data-goatcounter', `https://${GOATCOUNTER_CODE}.goatcounter.com/count`)
    script.setAttribute('data-goatcounter-settings', JSON.stringify({ no_onload: true, allow_local: false }))
    document.head.appendChild(script)
  }, [])

  useEffect(() => {
    if (!GOATCOUNTER_CODE) return

    const path = location.pathname + location.search
    let attempts = 0

    const fire = () => {
      if (window.goatcounter?.count) {
        window.goatcounter.count({ path })
      } else if (attempts < 10) {
        // the async script may not have finished loading yet, especially on first visit
        attempts += 1
        setTimeout(fire, 300)
      }
    }
    fire()
  }, [location])

  return null
}

export default Analytics
