import React, { useState } from 'react';
import { Info, Smartphone, WifiOff, Disc, Maximize2, MoveVertical, Layers } from 'lucide-react';

export default function PowerfulFeatures() {
  const [videoCreditsOpen, setVideoCreditsOpen] = useState(false);

  return (
    <section
      id="powerful-features"
      className="Features_section__a4X80 Features_stacked__Z13vW"
      aria-label="Powerful features"
    >
      <h2 className="Features_heading__LYnBy">
        Powerful features
      </h2>

      <div className="Features_grid grid-2-col">
        {/* Card 1: MV mode / Visual Playback */}
        <div className="Feature_card">
          <div className="Features_title__BjQ_H">
            <span>MV mode</span>
            <button
              type="button"
              className="previews_infoButton__ROlFs"
              aria-label="Video credits and license"
              aria-controls="mv-media-credits"
              aria-expanded={videoCreditsOpen}
              onClick={() => setVideoCreditsOpen(!videoCreditsOpen)}
            >
              <Info size={16} />
            </button>
          </div>

          <p className="Feature_desc">
            Seamlessly switch between audio playback and synchronized video or visualizer modes.
            Enjoy immersive music videos with zero lag and instant audio alignment.
          </p>

          {/* Credits Dialog / Note */}
          <div
            id="mv-media-credits"
            className="previews_mvCredit__NOtRq"
            role="note"
            style={{ display: videoCreditsOpen ? 'flex' : 'none' }}
          >
            <a
              href="https://commons.wikimedia.org/wiki/File:Allday_-_one_time_(Official_Music_Video).webm"
              target="_blank"
              rel="noreferrer"
              tabIndex={0}
            >
              one time — Allday
            </a>
            {' · '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer"
              tabIndex={0}
            >
              CC BY 4.0
            </a>
            <span>Excerpt · muted · cropped</span>
          </div>

          <div
            style={{
              background: '#0a0a0c',
              borderRadius: '16px',
              border: '1px solid var(--weechy-border)',
              padding: '20px',
              marginTop: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #E50914, #4a0004)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Disc size={22} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}>Allday — One Time</div>
                <div style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>1080p High-Res MV Track</div>
              </div>
            </div>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#00ca92',
                background: 'rgba(0, 202, 146, 0.1)',
                padding: '4px 10px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 202, 146, 0.2)',
              }}
            >
              ACTIVE
            </span>
          </div>
        </div>

        {/* Card 2: Free & offline */}
        <div className="Feature_card">
          <div className="Features_title__BjQ_H">
            <span>Free & offline</span>
            <WifiOff size={22} color="var(--weechy-accent)" />
          </div>

          <p className="Feature_desc">
            Your entire music collection stays on your phone. Play anywhere without internet,
            without subscriptions, without forced account logins, and with zero telemetry tracking.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginTop: '12px',
            }}
          >
            <div style={{ background: '#0a0a0c', padding: '16px', borderRadius: '14px', border: '1px solid var(--weechy-border)' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#00ca92', marginBottom: '4px' }}>100% Offline</div>
              <div style={{ fontSize: '13px', color: 'var(--weechy-text-muted)' }}>Zero cloud dependency</div>
            </div>
            <div style={{ background: '#0a0a0c', padding: '16px', borderRadius: '14px', border: '1px solid var(--weechy-border)' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#E50914', marginBottom: '4px' }}>Zero Ads</div>
              <div style={{ fontSize: '13px', color: 'var(--weechy-text-muted)' }}>Pure, uninterrupted music</div>
            </div>
          </div>
        </div>

        {/* Card 3: Every format */}
        <div className="Feature_card">
          <div className="Features_title__BjQ_H">
            <span>Every format</span>
            <Disc size={22} color="var(--weechy-accent)" />
          </div>

          <p className="Feature_desc">
            Universal codec support. From studio master 24-bit/192kHz FLAC to AAC, MP3, WAV, OGG, M4A, and Opus.
            Experience your audio exactly as the artist mixed it.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
            {['FLAC 24-bit', 'WAV Lossless', 'MP3 320k', 'AAC-LC', 'OGG Vorbis', 'M4A', 'Opus Audio'].map((fmt, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '16px',
                  border: '1px solid var(--weechy-border)',
                }}
              >
                {fmt}
              </span>
            ))}
          </div>
        </div>

        {/* Card 4: Large screens */}
        <div className="Feature_card">
          <div className="Features_title__BjQ_H">
            <span>Large screens</span>
            <Maximize2 size={22} color="var(--weechy-accent)" />
          </div>

          <p className="Feature_desc">
            Tailored layouts for Android tablets, foldables, and landscape car dashboards.
            Enjoy dual-pane navigation with prominent cover art, real-time lyrics, and quick controls.
          </p>

          <div
            style={{
              background: '#0a0a0c',
              borderRadius: '14px',
              padding: '16px',
              border: '1px solid var(--weechy-border)',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              marginTop: '12px',
            }}
          >
            <div style={{ width: '48px', height: '48px', background: '#1c1b24', borderRadius: '8px', border: '1px solid var(--weechy-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={22} color="#E50914" />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>Adaptive Landscape Mode</div>
              <div style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>Split-screen player with live synced lyrics column</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
