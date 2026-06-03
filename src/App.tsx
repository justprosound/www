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
      <div className="status-bar">
        <div className="status-item">
          <div className="status-indicator"></div>
          <span>System Active: Just Enough Sound Identity</span>
        </div>
        <div className="status-item">
          <span>Namespace: justprosound.com</span>
        </div>
      </div>

      <div className="theme-toggle">
        <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <header>
        <div className="container logo-container">
          <img src={logo} className="logo" alt="Just Enough Sound Logo" />
          <span className="brand-identity">The Identity of</span>
          <h1 className="brand-title">Just Enough Sound</h1>
          <div className="domain-context">justprosound.com</div>
        </div>
      </header>

      <main>
        {/* Core Methodology */}
        <section className="section">
          <div className="container">
            <span className="section-label">01 // Methodology</span>
            <h2 className="section-title">The Engineering of "Enoughness"</h2>
            <p className="tagline" style={{ color: 'var(--text-card)', maxWidth: '800px', fontSize: '1.2rem', marginBottom: '4rem' }}>
              We operate on a philosophy of precise technical equilibrium. Not excessive, not lacking—but exactly the signal required for mission-critical stability.
            </p>
            <div className="technical-grid">
              <div className="tech-card">
                <div className="card-meta"><span>TYPE: SRV_AUDIO</span><span>LOC: FIELD</span></div>
                <h3>Audio Engineering</h3>
                <p>Advanced acoustic modeling and system deployment for environments where failure is not a technical option.</p>
              </div>
              <div className="tech-card">
                <div className="card-meta"><span>TYPE: NET_INFRA</span><span>LOC: FIELD</span></div>
                <h3>Technical Infrastructure</h3>
                <p>Hardened networking and low-latency signal routing designed for the rigors of live broadcast and theatre.</p>
              </div>
              <div className="tech-card">
                <div className="card-meta"><span>TYPE: DEV_CUSTOM</span><span>LOC: REMOTE</span></div>
                <h3>Custom Solutions</h3>
                <p>Targeted software development and technical consulting tailored to specific architectural challenges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOSS Modules */}
        <section className="section" style={{ background: 'var(--bg-accent)' }}>
          <div className="container">
            <span className="section-label">02 // Open Source Modules</span>
            <h2 className="section-title">Public Domain Infrastructure</h2>
            <div className="technical-grid">
              <div className="tech-card">
                <div className="card-meta"><span>ID: MICBOARD</span><span>VER: STABLE</span></div>
                <h3>django-micboard</h3>
                <p>Real-time telemetry and monitoring interface for wireless RF systems in high-density production environments.</p>
                <a href="https://github.com/justprosound/django-micboard" className="tech-link">Repo Access</a>
              </div>
              <div className="tech-card">
                <div className="card-meta"><span>ID: MEDIASTACK</span><span>VER: STABLE</span></div>
                <h3>media-stack</h3>
                <p>Containerized orchestration for professional media processing workflows and content delivery pipelines.</p>
                <a href="https://github.com/justprosound/media-stack" className="tech-link">Repo Access</a>
              </div>
              <div className="tech-card">
                <div className="card-meta"><span>ID: ZABBIX_AV</span><span>VER: STABLE</span></div>
                <h3>zabbix-proxy-av</h3>
                <p>Monitoring proxy optimized for resource-constrained AV hardware and mission-critical reliability.</p>
                <a href="https://github.com/justprosound/zabbix-proxy-sqlite3-av-edition" className="tech-link">Repo Access</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <div>
            <p>&copy; {new Date().getFullYear()} Just Enough Sound Co., LLC.</p>
            <p style={{ marginTop: '0.5rem' }}>Identity Protocol: JES-2026.06.03</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p>Access Point: <span style={{ color: 'var(--accent-color)' }}>justprosound.com</span></p>
            <p style={{ marginTop: '0.5rem' }}>Source: <a href="https://github.com/justprosound" style={{ color: 'inherit' }}>github.com/justprosound</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
