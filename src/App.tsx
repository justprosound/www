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
            Boutique Live Event Production by <span className="accent">Just Enough Sound Co., LLC</span>
          </p>
        </div>
      </header>

      <main>
        {/* Production Services */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Professional Services</h2>
            <p className="tagline" style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
              We bring enterprise-grade stability and technical excellence to the world's most demanding live environments.
            </p>
            <div className="grid">
              <div className="card">
                <h3>Audio Engineering</h3>
                <p>Precision sound design, system tuning, and mix engineering for corporate theatre, concerts, and broadcast.</p>
              </div>
              <div className="card">
                <h3>Signal Infrastructure</h3>
                <p>High-reliability networking and redundant signal routing solutions designed to never fail.</p>
              </div>
              <div className="card">
                <h3>Technical Direction</h3>
                <p>Strategic technical planning and on-site management for complex multi-disciplinary productions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOSS & Infrastructure */}
        <section className="section" style={{ background: 'var(--bg-accent)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <h2 className="section-title">Open Source Infrastructure</h2>
            <p className="tagline" style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
              Just Enough Sound Co. develops and maintains a suite of FOSS tools optimized for 
              live production and AV monitoring.
            </p>
            <div className="grid">
              <div className="card" style={{ background: 'var(--bg-color)' }}>
                <h3>django-micboard</h3>
                <p>
                  Real-time wireless microphone monitoring and battery management for high-stakes RF environments.
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
