import { useState, useEffect } from 'react'
import './App.css'
import lightLogo from './assets/logo/light.svg'
import darkLogo from './assets/logo/dark.svg'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const logo = theme === 'dark' ? lightLogo : darkLogo

  return (
    <div className="app">
      <div className="theme-toggle">
        <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <header>
        <div className="container">
          <img src={logo} className="logo" alt="Just Enough Sound Logo" />
          <h1 className="brand-name">Just Enough Sound</h1>
          <p className="tagline">
            Live Event Production & Open Source Infrastructure
          </p>
        </div>
      </header>

      <main>
        {/* Professional Services */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Live Production Services</h2>
            <p className="tagline" style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
              Precision-engineered stability for high-stakes theatrical and broadcast environments.
            </p>
            <div className="grid">
              <div className="card">
                <h3>Audio Engineering</h3>
                <p>Sophisticated sound design and system optimization for corporate theatre, concerts, and touring.</p>
              </div>
              <div className="card">
                <h3>Signal Infrastructure</h3>
                <p>High-reliability networking and redundant signal routing solutions designed to never fail.</p>
              </div>
              <div className="card">
                <h3>Technical Direction</h3>
                <p>Comprehensive technical management and consulting to bridge the gap between creative vision and reality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOSS & Infrastructure */}
        <section className="section" style={{ background: 'var(--bg-accent)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <h2 className="section-title">Open Source Infrastructure</h2>
            <p className="tagline" style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
              We develop and maintain a suite of tools that solve real-world problems in the live production space.
            </p>
            <div className="grid">
              <div className="card" style={{ background: 'var(--bg-color)' }}>
                <h3>django-micboard</h3>
                <p>
                  A real-time wireless microphone monitoring dashboard built for high-stakes live productions.
                </p>
                <a href="https://github.com/justprosound/django-micboard" className="link">View on GitHub</a>
              </div>
              <div className="card" style={{ background: 'var(--bg-color)' }}>
                <h3>media-stack</h3>
                <p>
                  A comprehensive containerized suite for media production workflows and content delivery.
                </p>
                <a href="https://github.com/justprosound/media-stack" className="link">View on GitHub</a>
              </div>
              <div className="card" style={{ background: 'var(--bg-color)' }}>
                <h3>zabbix-proxy-sqlite3-av-edition</h3>
                <p>
                  Specialized monitoring proxy optimized for AV infrastructure and resource-constrained environments.
                </p>
                <a href="https://github.com/justprosound/zabbix-proxy-sqlite3-av-edition" className="link">View on GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Just Enough Sound Co., LLC. All rights reserved.</p>
          <p>justprosound.com | <a href="https://github.com/justprosound" style={{ color: 'inherit' }}>github.com/justprosound</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
