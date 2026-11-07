import React, { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

export default function Footer() {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');

  const languages = ['English', 'العربية', 'Español', 'Português', 'Français'];

  return (
    <footer className="Footer_footer__9S97q">
      <div className="Footer_inner__78UEX">
        {/* Brand column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '320px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="Header_brandLogo" style={{ width: '32px', height: '32px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="white" />
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, color: '#fff' }}>
              Weechy
            </span>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--weechy-text-muted)', lineHeight: 1.6 }}>
            The ultimate high-fidelity Android local music player with 400% loudness enhancement, fluid 1:1 gestures, and synchronized lyrics.
          </p>
        </div>

        {/* Links */}
        <div className="Footer_links__XGQyc">
          <div className="Footer_column__cPS7K">
            <h3>Explore</h3>
            <a
              href="https://github.com/itsmectrl/weechy-releases/releases/tag/new-version-4.1"
              target="_blank"
              rel="noreferrer"
            >
              Download APP
            </a>
            <a
              className="Footer_link__HfGPU"
              href="https://github.com/itsmectrl/weechy-releases/releases/tag/new-version-4.1"
              target="_blank"
              rel="noreferrer"
            >
              Download APK
            </a>
            <a href="mailto:support@weechy.com">User Support</a>
          </div>

          <div className="Footer_column__cPS7K">
            <h3>Company</h3>
            <a href="mailto:biz@weechy.com">Partnerships</a>
            <a href="mailto:press@weechy.com">Media Inquiry</a>
            <a
              href="https://github.com/itsmectrl/weechy-releases"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Project
            </a>
          </div>

          <div className="Footer_column__cPS7K">
            <h3>Social Media</h3>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href="https://www.kwai.com" target="_blank" rel="noreferrer">
              Kwai
            </a>
          </div>
        </div>
      </div>

      <div className="Footer_bottom__o_GvS">
        <div className="Footer_legal__MZbgN">
          <p>Copyright © 2026 itsmectrl — Weechy. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/termsOfService.html">Terms of Service</a>
            <a href="/privacyPolicy.html">Privacy Policy</a>
            <a href="/openSource.html">Open Source Licenses</a>
          </div>
        </div>

        {/* Language selector dropdown */}
        <div className="dropdown w-fit max-w-full" style={{ position: 'relative' }}>
          <button
            type="button"
            aria-expanded={langOpen}
            onClick={() => setLangOpen(!langOpen)}
            className="max-w-full flex justify-center gap-2 items-center px-5 py-3 text-base text-content_weak bg-bg_overlay_top rounded-full cursor-pointer hover:text-content_main"
            style={{
              background: '#222324',
              borderRadius: '24px',
              padding: '10px 20px',
              color: '#f4f6f8',
              fontSize: '14px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid var(--weechy-border)',
            }}
          >
            <Globe size={16} />
            <span>{selectedLang}</span>
            <ChevronDown
              size={16}
              style={{
                transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            />
          </button>

          {langOpen && (
            <div className="Footer_languageMenu__hWGgl dropdown-content menu">
              <ul>
                {languages.map((lang) => (
                  <li key={lang}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
