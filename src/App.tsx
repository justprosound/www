import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import lightLogo from './assets/logo/light.svg'
import darkLogo from './assets/logo/dark.svg'

// --- Types ---

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

interface LogoProps {
  logo: string;
}

// --- Shared Components ---

function SystemNav({ theme, toggleTheme }: ThemeProps) {
  const location = useLocation();
  const isDev = location.pathname === '/dev';

  return (
    <>
      <nav className="status-bar">
        <div className="status-item">
          <div className="status-indicator"></div>
          <span>Identity: Just Enough Sound</span>
        </div>
        <div className="status-group">
          <div className="status-item">
            <Link to="/" className={`status-link ${!isDev ? 'active' : ''}`}>[ 01: Production ]</Link>
          </div>
          <div className="status-item">
            <Link to="/dev" className={`status-link ${isDev ? 'active' : ''}`}>[ 02: Infrastructure ]</Link>
          </div>
          <div className="status-item hide-mobile"><span>Namespace: justprosound.com</span></div>
        </div>
      </nav>

      <div className="theme-switch">
        <button className="theme-trigger" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </>
  )
}

function Footer({ logo }: LogoProps) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src={logo} className="footer-logo" alt="Just Enough Sound" />
            <p>Just Enough Sound is a philosophy of precise technical equilibrium. We provide exactly what is needed for mission-critical stability.</p>
          </div>
          <div className="footer-col">
            <h4>Direct Access</h4>
            <p>Identity: Just Enough Sound Co., LLC</p>
            <p>Email: sam@justprosound.com</p>
            <p>GitHub: github.com/justprosound</p>
          </div>
        </div>
        <div className="legal-bar">
          <div>&copy; {new Date().getFullYear()} Just Enough Sound Co., LLC.</div>
          <div>Access Point: justprosound.com // Protocol: JES-SIG-01</div>
        </div>
      </div>
    </footer>
  )
}

// --- View: Production (Root) ---

function ProductionView({ logo }: LogoProps) {
  return (
    <div className="view-fade-in">
      <header>
        <div className="container">
          <div className="identity-label">Identity Protocol // FIELD_OPS</div>
          <img src={logo} className="logo" alt="Just Enough Sound" />
          <h1 className="hero-title">Professional Production</h1>
          <p className="hero-sub">
            Precision engineering for live event production and high-stakes theatrical delivery. 
            Identified by the <span className="accent">Blue Ring</span> signature of stability.
          </p>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-num">01</span>
              <span className="section-label">Field Capabilities</span>
              <h2 className="section-title">Specialized Engineering</h2>
            </div>
            <div className="grid-system">
              <div className="card-dynamic">
                <div className="card-tag"><span>Type: SRV_AUDIO</span><span>Class: A</span></div>
                <h3>Audio Engineering</h3>
                <p>Sophisticated sound design and system optimization for corporate theatre and live broadcast. We translate creative vision into perfectly balanced acoustic reality.</p>
                <span className="card-action">View Tech Specs</span>
              </div>
              <div className="card-dynamic">
                <div className="card-tag"><span>Type: NET_INFRA</span><span>Class: S</span></div>
                <h3>Signal Infrastructure</h3>
                <p>Enterprise-grade networking and redundant signal routing solutions. We build the invisible backbone that ensures your show never misses a beat.</p>
                <span className="card-action">View Architecture</span>
              </div>
              <div className="card-dynamic">
                <div className="card-tag"><span>Type: DIR_TECH</span><span>Class: A</span></div>
                <h3>Technical Direction</h3>
                <p>Comprehensive management of technical workflows. Bridging the gap between executive production and field engineering with disciplined precision.</p>
                <span className="card-action">Request Consultation</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// --- View: FOSS (Dev) ---

function DevView({ logo }: LogoProps) {
  return (
    <div className="view-fade-in">
      <header style={{ background: 'none', padding: '8rem 0 4rem' }}>
        <div className="container">
          <div className="identity-label">Identity Protocol // CORE_DEV</div>
          <img src={logo} className="logo" alt="Just Enough Sound" />
          <h1 className="hero-title" style={{ fontSize: '4rem' }}>Infrastructure</h1>
          <p className="hero-sub">
            The technical foundation of Just Enough Sound. 
            Open source modules optimized for live production environments.
          </p>
        </div>
      </header>

      <main>
        <section className="section" style={{ background: 'var(--bg-accent)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-num">02</span>
              <span className="section-label">Source Modules</span>
              <h2 className="section-title">FOSS Repositories</h2>
            </div>
            <div className="grid-system">
              <div className="card-dynamic" style={{ background: 'var(--bg-color)' }}>
                <div className="card-tag"><span>ID: Micboard</span><span>Status: Stable</span></div>
                <h3>django-micboard</h3>
                <p>Real-time telemetry and monitoring interface for wireless RF systems. Designed for high-density, high-stakes wireless environments.</p>
                <a href="https://github.com/justprosound/django-micboard" className="card-action">Fetch Source</a>
              </div>
              <div className="card-dynamic" style={{ background: 'var(--bg-color)' }}>
                <div className="card-tag"><span>ID: MediaStack</span><span>Status: Active</span></div>
                <h3>media-stack</h3>
                <p>Containerized orchestration for professional media processing workflows. Streamline your content delivery with robust technical architecture.</p>
                <a href="https://github.com/justprosound/media-stack" className="card-action">Fetch Source</a>
              </div>
              <div className="card-dynamic" style={{ background: 'var(--bg-color)' }}>
                <div className="card-tag"><span>ID: ZABBIX_AV</span><span>Status: LTS</span></div>
                <h3>zabbix-proxy-av</h3>
                <p>Monitoring proxy optimized for resource-constrained AV hardware. Ensuring total visibility into your technical infrastructure.</p>
                <a href="https://github.com/justprosound/zabbix-proxy-sqlite3-av-edition" className="card-action">Fetch Source</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// --- Main App ---

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
    <Router>
      <div className="app-frame">
        <SystemNav theme={theme} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={<ProductionView logo={logo} />} />
          <Route path="/dev" element={<DevView logo={logo} />} />
        </Routes>

        <Footer logo={logo} />
      </div>
    </Router>
  )
}

export default App
