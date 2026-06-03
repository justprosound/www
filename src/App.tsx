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
          <img src={logo} className="logo" alt="Just Pro Sound Logo" />
          <h1 className="brand-name">Just Pro Sound</h1>
          <p className="tagline">
            Boutique Live Event Production & Open Source Infrastructure
          </p>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <h2 className="section-title">FOSS Projects</h2>
            <div className="grid">
              <div className="card">
                <h3>django-micboard</h3>
                <p>
                  A real-time wireless microphone monitoring dashboard built for high-stakes live productions.
                </p>
                <a href="https://github.com/justprosound/django-micboard" className="link">View on GitHub</a>
              </div>
              <div className="card">
                <h3>media-stack</h3>
                <p>
                  A comprehensive containerized suite for media production workflows and content delivery.
                </p>
                <a href="https://github.com/justprosound/media-stack" className="link">View on GitHub</a>
              </div>
              <div className="card">
                <h3>zabbix-proxy-sqlite3-av-edition</h3>
                <p>
                  Specialized monitoring proxy optimized for AV infrastructure and resource-constrained environments.
                </p>
                <a href="https://github.com/justprosound/zabbix-proxy-sqlite3-av-edition" className="link">View on GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--bg-accent)' }}>
          <div className="container">
            <h2 className="section-title">Live Production</h2>
            <p className="tagline" style={{ marginBottom: '2rem' }}>
              We bring enterprise-grade stability to live events through technical excellence and custom-built tooling.
            </p>
            <div className="grid">
              <div className="card">
                <h3>Audio Engineering</h3>
                <p>Precision sound design and reinforcement for corporate events, concerts, and broadcasts.</p>
              </div>
              <div className="card">
                <h3>Technical Infrastructure</h3>
                <p>Robust networking and signal routing solutions that never skip a beat.</p>
              </div>
              <div className="card">
                <h3>Custom Development</h3>
                <p>Unique software solutions tailored to the specific needs of your production environment.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Just Enough Sound Co., LLC. All rights reserved.</p>
          <p>Founded by Sam Kuonen</p>
        </div>
      </footer>
    </div>
  )
}

export default App
