import React from 'react';
import { Download, ShieldCheck, Smartphone, ArrowDownCircle, CheckCircle } from 'lucide-react';

export default function DownloadHub() {
  return (
    <section
      id="download-section"
      style={{
        maxWidth: '1280px',
        margin: '60px auto',
        padding: '0 24px',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(180deg, #191919 0%, #101014 100%)',
          borderRadius: '32px',
          border: '1px solid rgba(229, 9, 20, 0.3)',
          padding: '60px 48px',
          boxShadow: '0 24px 60px rgba(0,0,0,0.7), 0 0 40px rgba(229, 9, 20, 0.15)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(229, 9, 20, 0.15)', padding: '6px 14px', borderRadius: '16px', marginBottom: '16px' }}>
            <ShieldCheck size={16} color="#E50914" />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#ff4f5e' }}>
              OFFICIAL VERIFIED RELEASE
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', color: '#fff', marginBottom: '16px', lineHeight: 1.15 }}>
            Download Weechy 4.1 for Android
          </h2>

          <p style={{ fontSize: '17px', color: 'var(--weechy-text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
            Experience pure high-fidelity playback with 400% loudness enhancement.
            Direct APK download signed and verified on GitHub Releases.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <a
              className="btn-weechy-primary"
              href="https://github.com/itsmectrl/weechy-releases/releases/tag/new-version-4.1"
              target="_blank"
              rel="noreferrer"
              style={{ padding: '16px 36px', fontSize: '18px' }}
            >
              <Download size={22} />
              Download Weechy APK (v4.1)
            </a>

            <a
              className="btn-weechy-secondary"
              href="https://github.com/itsmectrl/weechy-releases/releases/tag/new-version-4.1"
              target="_blank"
              rel="noreferrer"
              style={{ padding: '16px 28px', fontSize: '16px' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub Release Page
            </a>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '28px', fontSize: '13px', color: 'var(--weechy-text-subtle)' }}>
            <span>• No Ads</span>
            <span>• No Subscriptions</span>
            <span>• 100% Offline</span>
            <span>• Android 8.0 to Android 15</span>
          </div>
        </div>

        {/* Release Specifications Card */}
        <div
          style={{
            background: '#09090C',
            borderRadius: '24px',
            border: '1px solid var(--weechy-border)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', borderBottom: '1px solid var(--weechy-border)', paddingBottom: '12px' }}>
            RELEASE SPECIFICATIONS
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ color: 'var(--weechy-text-muted)' }}>Package Name</span>
            <span style={{ color: '#fff', fontWeight: 600 }}>com.itsmectrl.weechy</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ color: 'var(--weechy-text-muted)' }}>Version</span>
            <span style={{ color: '#fff', fontWeight: 600 }}>4.1 (Build 410)</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ color: 'var(--weechy-text-muted)' }}>Target Architecture</span>
            <span style={{ color: '#fff', fontWeight: 600 }}>arm64-v8a / armeabi-v7a</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ color: 'var(--weechy-text-muted)' }}>Minimum OS</span>
            <span style={{ color: '#fff', fontWeight: 600 }}>Android 8.0 Oreo (API 26)</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ color: 'var(--weechy-text-muted)' }}>Target OS</span>
            <span style={{ color: '#fff', fontWeight: 600 }}>Android 15 (API 35)</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ color: 'var(--weechy-text-muted)' }}>Developer</span>
            <span style={{ color: 'var(--weechy-accent)', fontWeight: 600 }}>itsmectrl</span>
          </div>
        </div>
      </div>
    </section>
  );
}
