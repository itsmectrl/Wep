import React, { useState } from 'react';

export default function Header() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFeatures = () => setFeaturesOpen(!featuresOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const scrollTo = (id) => {
    setFeaturesOpen(false);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isNavOpen = featuresOpen || mobileMenuOpen;

  return (
    <header className="Header_header__qBw1J">
      <a className="Header_brand__W9fbJ" href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="Header_brandLogo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" fill="white" />
            <path d="M12 2C6.48 2 2 6.48 2 12" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
        </div>
        <span>Weechy</span>
      </a>

      <nav className="Header_nav__DMp9j">
        <button
          type="button"
          className="Header_featureToggle__kQ9A0"
          aria-controls="home-navigation"
          aria-expanded={featuresOpen}
          onClick={toggleFeatures}
        >
          Features
        </button>

        <button
          type="button"
          className="Header_menuToggle__asOp_"
          aria-label="Open menu"
          aria-controls="home-navigation"
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
        </button>

        <div
          id="home-navigation"
          className="Header_panel__tWakc"
          style={{ display: isNavOpen ? 'flex' : 'none' }}
        >
          <span className="Header_menuLabel__s8zyE">Features</span>
          <div className="Header_featureLinks__rTRz9">
            <button type="button" onClick={() => scrollTo('powerful-features')}>
              Powerful features
            </button>
            <button type="button" onClick={() => scrollTo('great-sound')}>
              Great sound
            </button>
            <button type="button" onClick={() => scrollTo('beautiful-interface')}>
              Beautiful interface
            </button>
            <button type="button" onClick={() => scrollTo('add-your-music')}>
              Add your music
            </button>
          </div>

          <div className="Header_mobileLinks__2BmkI">
            <a
              className="btn-weechy-primary"
              href="https://github.com/itsmectrl/weechy-releases/releases/tag/new-version-4.1"
              target="_blank"
              rel="noreferrer"
            >
              Download APK
            </a>
            <a
              href="mailto:support@weechy.com"
              style={{ padding: '8px 0', color: 'var(--weechy-text-muted)' }}
            >
              Support
            </a>
          </div>
        </div>

        <div className="Header_desktopLinks__rBDxp">
          <a
            className="btn-weechy-primary"
            style={{ padding: '8px 20px', fontSize: '14px', borderRadius: '20px' }}
            href="https://github.com/itsmectrl/weechy-releases/releases/tag/new-version-4.1"
            target="_blank"
            rel="noreferrer"
          >
            Download APK
          </a>
          <a
            href="mailto:support@weechy.com"
            style={{ fontSize: '15px', color: 'var(--weechy-text-muted)' }}
          >
            Support
          </a>
        </div>
      </nav>
    </header>
  );
}
