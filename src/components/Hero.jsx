import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, ShieldCheck, Heart, Sparkles, Sliders } from 'lucide-react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(42);
  const [isFavorited, setIsFavorited] = useState(true);
  const [boostLevel, setBoostLevel] = useState(400);

  const duration = 214; // 3:34

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev >= duration ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = (currentTime / duration) * 100;

  return (
    <div className="HomeSections_hero__KtmP1">
      <div>
        <div className="Hero_badges">
          <span className="Hero_badge">
            <span className="Hero_badgeDot"></span>
            Version 4.1 Released
          </span>
          <span className="Hero_badge">
            <ShieldCheck size={14} color="#00ca92" />
            Android 8.0 – 15
          </span>
          <span className="Hero_badge">
            <Sparkles size={14} color="#E50914" />
            100% Offline & Private
          </span>
        </div>

        <h1 className="HomeSections_heroIn__3braP">
          The music player <br />
          <span className="Hero_highlight">for all your music</span>
        </h1>

        <p className="Hero_tagline">
          Engineered for audiophiles and local music lovers. Experience studio-grade
          <strong> 400% loudness enhancement</strong> (+12.04 dB), fluid 1:1 vertical gestures,
          automatic synchronized lyrics, and dynamic themes tailored to your album art.
        </p>

        <div className="Hero_actions">
          <a
            className="btn-weechy-primary HomeDownloadActions_apk__9hXJ9"
            href="https://github.com/itsmectrl/weechy-releases/releases/tag/new-version-4.1"
            target="_blank"
            rel="noreferrer"
            style={{ padding: '16px 36px', fontSize: '18px' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Weechy directly
          </a>

          <a
            className="btn-weechy-secondary"
            href="https://github.com/itsmectrl/weechy-releases/releases/tag/new-version-4.1"
            target="_blank"
            rel="noreferrer"
          >
            <Sliders size={18} />
            GitHub Release (v4.1)
          </a>
        </div>
      </div>

      {/* Interactive Phone Player Mockup */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '380px',
            background: 'linear-gradient(180deg, #1c1a26 0%, #09090C 100%)',
            border: '2px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '44px',
            padding: '24px',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(229, 9, 20, 0.2)',
            position: 'relative',
          }}
        >
          {/* Top Speaker / Camera Notch */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <div style={{ width: '80px', height: '5px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '3px' }}></div>
          </div>

          {/* Player Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--weechy-text-muted)', letterSpacing: '0.5px' }}>
              NOW PLAYING · LOCAL FLAC
            </span>
            <div
              style={{
                background: 'rgba(229, 9, 20, 0.2)',
                color: '#ff4f5e',
                fontSize: '11px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '12px',
                border: '1px solid rgba(229, 9, 20, 0.4)',
              }}
            >
              +{Math.round(2000 * Math.log10(boostLevel / 100) / 100)} dB GAIN
            </div>
          </div>

          {/* Album Cover Card with Dynamic Glow */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1/1',
              borderRadius: '24px',
              overflow: 'hidden',
              marginBottom: '24px',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.6), 0 0 30px rgba(229, 9, 20, 0.3)',
              background: 'radial-gradient(circle at 30% 30%, #3a0d16 0%, #120508 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Spinning Vinyl Record Decorative Graphic */}
            <div
              style={{
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #242426 0%, #101012 50%, #000 100%)',
                border: '4px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 0 20px rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: isPlaying ? 'spin 12s linear infinite' : 'none',
              }}
            >
              <div
                style={{
                  width: '36%',
                  height: '36%',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #E50914 0%, #80050B 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 12px rgba(229, 9, 20, 0.6)',
                }}
              >
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fff' }}></div>
              </div>
            </div>

            {/* Live Visualizer Overlay Bars */}
            <div
              style={{
                position: 'absolute',
                bottom: '14px',
                left: '20px',
                right: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '24px',
                gap: '4px',
              }}
            >
              {[12, 18, 24, 16, 22, 14, 20, 24, 15, 19, 10, 16].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: isPlaying ? `${Math.max(6, (h * ((currentTime + i) % 7 + 1)) / 4)}px` : '4px',
                    backgroundColor: i % 2 === 0 ? '#E50914' : '#ffffff',
                    borderRadius: '2px',
                    transition: 'height 0.15s ease',
                    opacity: 0.85,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Track Info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                Midnight Echoes
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--weechy-text-muted)' }}>
                Nova Hart · Synthwave Collection (24-bit/96kHz)
              </p>
            </div>
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              aria-label="Toggle favorite"
              style={{ padding: '8px' }}
            >
              <Heart
                size={22}
                color={isFavorited ? '#E50914' : 'rgba(255,255,255,0.4)'}
                fill={isFavorited ? '#E50914' : 'none'}
              />
            </button>
          </div>

          {/* Timeline & Scrubber */}
          <div style={{ marginBottom: '20px' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '6px',
                background: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '3px',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setCurrentTime(Math.floor(pos * duration));
              }}
            >
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #ff4f5e 0%, #E50914 100%)',
                  borderRadius: '3px',
                  boxShadow: '0 0 10px rgba(229, 9, 20, 0.6)',
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '12px', color: 'var(--weechy-text-muted)' }}>
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Transport Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '20px' }}>
            <button
              onClick={() => setCurrentTime((t) => Math.max(0, t - 10))}
              aria-label="Previous track"
              style={{ color: '#ffffff', padding: '10px' }}
            >
              <SkipBack size={26} />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--weechy-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 8px 24px var(--weechy-accent-glow)',
                transition: 'transform 0.15s ease',
              }}
            >
              {isPlaying ? <Pause size={30} /> : <Play size={30} style={{ marginLeft: '4px' }} />}
            </button>

            <button
              onClick={() => setCurrentTime((t) => Math.min(duration, t + 10))}
              aria-label="Next track"
              style={{ color: '#ffffff', padding: '10px' }}
            >
              <SkipForward size={26} />
            </button>
          </div>

          {/* Synced Lyrics Snippet Card */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '12px 16px',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--weechy-text-subtle)', display: 'block' }}>
                SYNCHRONIZED LRC LYRIC
              </span>
              <span style={{ fontWeight: 600, color: '#ffffff' }}>
                "Chasing shadows through the midnight neon glow..."
              </span>
            </div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E50914', boxShadow: '0 0 8px #E50914' }}></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
