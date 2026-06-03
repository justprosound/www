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
    <div className="app-frame">
      {/* System Status Layer */}
      <nav className="status-bar">
        <div className="status-item">
          <div className="status-indicator"></div>
          <span>Identity: Just Enough Sound</span>
        </div>
        <div className="status-group">
          <div className="status-item"><span>Region: GBL</span></div>
          <div className="status-item"><span>Status: Mission Critical</span></div>
          <div className="status-item"><span>Domain: justprosound.com</span></div>
        </div>
      </nav>

      {/* Hero Layer */}
      <header>
        <div className="container">
          <div className="identity-label">Identity Protocol JES_01</div>
          <img src={logo} className="logo" alt="Just Enough Sound" />
          <h1 className="hero-title">Just Enough Sound</h1>
          <p className="hero-sub">
            Precision engineering for live event production and 
            mission-critical open source infrastructure.
          </p>
        </div>
      </header>

      <main>
        {/* Services Layer - Production Focused */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-num">01</span>
              <span className="section-label">Field Operations</span>
              <h2 className="section-title">Professional Production</h2>
            </div>
            <div className="grid-system">
              <div className="card-dynamic">
                <div className="card-tag"><span>Type: Service</span><span>Class: A</span></div>
                <h3>Audio Engineering</h3>
                <p>Sophisticated sound design and system optimization for corporate theatre, broadcast, and live concerts. We translate creative vision into perfectly balanced acoustic reality.</p>
                <span className="card-action">View Capabilities</span>
              </div>
              <div className="card-dynamic">
                <div className="card-tag"><span>Type: Infra</span><span>Class: S</span></div>
                <h3>Signal Infrastructure</h3>
                <p>Enterprise-grade networking and redundant signal routing solutions. We build the invisible backbone that ensures your show never misses a beat.</p>
                <span className="card-action">View Solutions</span>
              </div>
              <div className="card-dynamic">
                <div className="card-tag"><span>Type: Strategy</span><span>Class: A</span></div>
                <h3>Technical Direction</h3>
                <p>Comprehensive management of technical workflows. Bridging the gap between executive production and field engineering with disciplined precision.</p>
                <span className="card-action">View Consulting</span>
              </div>
            </div>
          </div>
        </section>

        {/* FOSS Layer - Developer Focused */}
        <section className="section" style={{ background: 'var(--bg-accent)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-num">02</span>
              <span className="section-label">Code Base</span>
              <h2 className="section-title">Open Source Modules</h2>
            </div>
            <div className="grid-system">
              <div className="card-dynamic" style={{ background: 'var(--bg-color)' }}>
                <div className="card-tag"><span>ID: Micboard</span><span>Status: Stable</span></div>
                <h3>django-micboard</h3>
                <p>Real-time telemetry and monitoring interface for wireless RF systems. Designed for high-density, high-stakes wireless environments.</p>
                <a href="https://github.com/justprosound/django-micboard" className="card-action">Access Repository</a>
              </div>
              <div className="card-dynamic" style={{ background: 'var(--bg-color)' }}>
                <div className="card-tag"><span>ID: MediaStack</span><span>Status: Active</span></div>
                <h3>media-stack</h3>
                <p>Containerized orchestration for professional media processing workflows. Streamline your content delivery with robust technical architecture.</p>
                <a href="https://github.com/justprosound/media-stack" className="card-action">Access Repository</a>
              </div>
              <div className="card-dynamic" style={{ background: 'var(--bg-color)' }}>
                <div className="card-tag"><span>ID: ZabbixProxy</span><span>Status: LTS</span></div>
                <h3>zabbix-proxy-av</h3>
                <p>Monitoring proxy optimized for resource-constrained AV hardware. Ensuring total visibility into your technical infrastructure.</p>
                <a href="https://github.com/justprosound/zabbix-proxy-sqlite3-av-edition" className="card-action">Access Repository</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Layer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <img src={logo} className="footer-logo" alt="Just Enough Sound" />
              <p>Just Enough Sound is a philosophy of precise technical equilibrium. We provide exactly what is needed for mission-critical stability.</p>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <p>Operations: Field/Remote</p>
              <p>Email: sam@justprosound.com</p>
              <p>GitHub: @justprosound</p>
            </div>
            <div className="footer-col">
              <h4>Access</h4>
              <p>justprosound.com</p>
              <p>denimarcade.com</p>
              <p>micboard.io</p>
            </div>
          </div>
          <div className="legal-bar">
            <div>&copy; {new Date().getFullYear()} Just Enough Sound Co., LLC.</div>
            <div>Identity Protocol: JES_01 // All Rights Reserved</div>
          </div>
        </div>
      </footer>

      <div className="theme-switch">
        <button className="theme-trigger" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  )
}

export default App
