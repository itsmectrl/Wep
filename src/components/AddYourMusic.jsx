import React, { useState } from 'react';
import { Smartphone, HardDrive, FolderTree, Cloud, CheckCircle, Shield } from 'lucide-react';

export default function AddYourMusic() {
  const [activeTab, setActiveTab] = useState(0); // 0: Phone or computer, 1: Google Drive, 2: Any folder

  const tabs = [
    { id: 'feature-tabs-add-your-music-tab-0', label: 'Phone or computer', icon: Smartphone },
    { id: 'feature-tabs-add-your-music-tab-1', label: 'Google Drive', icon: Cloud },
    { id: 'feature-tabs-add-your-music-tab-2', label: 'Any folder', icon: FolderTree },
  ];

  return (
    <section
      id="add-your-music"
      className="Features_section__a4X80 Features_stacked__Z13vW"
      aria-label="Add your music"
    >
      <h2 className="Features_heading__LYnBy">
        Add your music
      </h2>

      {/* Tabs list */}
      <div
        className="Features_tabs__2_bDY"
        role="tablist"
        aria-label="Add your music"
      >
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            type="button"
            id={tab.id}
            role="tab"
            aria-selected={activeTab === idx}
            aria-controls="feature-tabs-add-your-music-panel"
            tabIndex={activeTab === idx ? 0 : -1}
            className={`Features_tab__TsHVL ${activeTab === idx ? 'active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panel */}
      <div
        id="feature-tabs-add-your-music-panel"
        className="Features_tabPanel__1gxJ7"
        role="tabpanel"
        aria-labelledby={tabs[activeTab].id}
      >
        {activeTab === 0 && (
          <>
            <div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  color: 'var(--weechy-accent)',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '8px',
                }}
              >
                AUTOMATIC MEDIASTORE SCANNER
              </span>
              <h3 style={{ fontSize: '28px', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '16px' }}>
                Instant Device Indexing
              </h3>
              <p style={{ color: 'var(--weechy-text-muted)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                Weechy queries Android's MediaStore directly, indexing all local tracks in milliseconds.
                Intelligent filters automatically exclude audio clips under 30 seconds and non-music audio.
                Embedded ID3 tags and album cover art are extracted with zero performance stutter.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '14px' }}>
                  <CheckCircle size={16} color="#00ca92" />
                  Negative art caching (<code>no_art_hash</code>) prevents native JNI lag
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '14px' }}>
                  <CheckCircle size={16} color="#00ca92" />
                  Supports internal flash storage and external microSD cards
                </div>
              </div>
            </div>

            <div style={{ background: '#0a0a0c', borderRadius: '20px', padding: '24px', border: '1px solid var(--weechy-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--weechy-text-muted)' }}>LOCAL LIBRARY STATUS</span>
                <span style={{ fontSize: '12px', color: '#00ca92', fontWeight: 700 }}>SYNCHRONIZED</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', textAlign: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px 8px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>2,840</div>
                  <div style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>Tracks</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px 8px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>194</div>
                  <div style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>Albums</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px 8px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>86</div>
                  <div style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>Artists</div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 1 && (
          <>
            <div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  color: 'var(--weechy-accent)',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '8px',
                }}
              >
                CLOUD SYNC & BACKUP PROTECTION
              </span>
              <h3 style={{ fontSize: '28px', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '16px' }}>
                Google Drive & JSON Backup
              </h3>
              <p style={{ color: 'var(--weechy-text-muted)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                Safeguard your custom playlists and favorite tracks against Android signature mismatches or app reinstallations.
                Export your library database to external JSON storage or synchronize backups directly with Google Drive.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '14px' }}>
                  <Shield size={16} color="#00ca92" />
                  Package Identity Conflict prevention with one-tap JSON export
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '14px' }}>
                  <CheckCircle size={16} color="#00ca92" />
                  Preserves track order, playlists, and favorite metadata
                </div>
              </div>
            </div>

            <div style={{ background: '#0a0a0c', borderRadius: '20px', padding: '24px', border: '1px solid var(--weechy-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Cloud size={28} color="#2596ff" />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}>Backup & Restore Service</div>
                  <div style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>weechy_backup_v4.1.json</div>
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '14px', borderRadius: '12px', marginBottom: '16px' }}>
                <div style={{ fontSize: '13px', color: '#fff', marginBottom: '4px' }}>Automatic Protection Active</div>
                <div style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>
                  All playlists and favorites are serialized into clean portable JSON.
                </div>
              </div>
              <button
                type="button"
                className="btn-weechy-primary"
                style={{ width: '100%', fontSize: '14px', padding: '10px' }}
                onClick={() => alert('Weechy export backup: In the Android app, tap Settings > Backup & Restore > Export JSON.')}
              >
                Export JSON Backup
              </button>
            </div>
          </>
        )}

        {activeTab === 2 && (
          <>
            <div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  color: 'var(--weechy-accent)',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '8px',
                }}
              >
                HIERARCHICAL DIRECTORY NAVIGATOR
              </span>
              <h3 style={{ fontSize: '28px', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '16px' }}>
                Any Folder On Disk
              </h3>
              <p style={{ color: 'var(--weechy-text-muted)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                Prefer organizing songs by folder structure? Weechy's dedicated <code>FolderDetailScreen</code> provides
                a lightning-fast directory browser that mirrors your exact PC or SD card folder hierarchy.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '14px' }}>
                  <CheckCircle size={16} color="#00ca92" />
                  Custom folder blacklist to hide audiobooks, podcasts, or recording memos
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '14px' }}>
                  <CheckCircle size={16} color="#00ca92" />
                  Direct play whole folder with subfolder recursion toggle
                </div>
              </div>
            </div>

            <div style={{ background: '#0a0a0c', borderRadius: '20px', padding: '24px', border: '1px solid var(--weechy-border)' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--weechy-text-muted)', marginBottom: '12px' }}>
                FOLDER DIRECTORY BROWSER
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { name: '/Music/Hi-Res Albums', count: '142 tracks' },
                  { name: '/Music/Soundtracks & OST', count: '68 tracks' },
                  { name: '/Download/Lossless FLAC', count: '94 tracks' },
                ].map((f, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FolderTree size={16} color="#E50914" />
                      <span style={{ fontSize: '13px', color: '#fff', fontWeight: 500 }}>{f.name}</span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>{f.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
