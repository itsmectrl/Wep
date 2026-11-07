import React, { useState } from 'react';
import { Palette, Smartphone, Moon, Sun, Monitor } from 'lucide-react';

export default function BeautifulInterface() {
  const [selectedTrack, setSelectedTrack] = useState('midnight'); // 'silence', 'midnight', 'neon'
  const [themeMode, setThemeMode] = useState('dark');
  const [selectedAccent, setSelectedAccent] = useState('#E50914');

  const tracks = {
    silence: {
      title: 'When the Silence Starts to Scream',
      artist: 'Seraphine Vale',
      time: '0:41',
      duration: '4:12',
      primary: '#9b2226',
      gradient: 'linear-gradient(135deg, #ae2012 0%, #001219 100%)',
      lyricsActive: '#ee9b00',
    },
    midnight: {
      title: 'Midnight Echoes',
      artist: 'Nova Hart',
      time: '2:05',
      duration: '3:31',
      primary: '#E50914',
      gradient: 'linear-gradient(135deg, #E50914 0%, #09090C 100%)',
      lyricsActive: '#ff4f5e',
    },
    neon: {
      title: 'Neon Rain',
      artist: 'Luma Grey',
      time: '1:24',
      duration: '3:48',
      primary: '#2596ff',
      gradient: 'linear-gradient(135deg, #2596ff 0%, #0a1128 100%)',
      lyricsActive: '#4deec8',
    },
  };

  const current = tracks[selectedTrack];

  return (
    <section
      id="beautiful-interface"
      className="Features_section__a4X80 Features_stacked__Z13vW"
      aria-label="Beautiful interface"
    >
      <h2 className="Features_heading__LYnBy">
        Beautiful interface
      </h2>

      <div className="Features_grid grid-3-col">
        {/* Card 1: Landscape Mode */}
        <div className="Feature_card">
          <div className="Features_title__BjQ_H">
            <span>Landscape Mode</span>
            <Smartphone size={22} color="var(--weechy-accent)" />
          </div>

          <p className="Feature_desc">
            A thoughtfully engineered dual-pane interface that transforms your listening
            setup for car docks, tablets, and desktop workstations.
          </p>

          <div
            style={{
              background: '#0a0a0c',
              borderRadius: '16px',
              padding: '16px',
              border: '1px solid var(--weechy-border)',
              marginTop: '12px',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            {/* Left cover art */}
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                background: current.gradient,
                boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
                flexShrink: 0,
              }}
            />
            {/* Right details */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Dual Split Layout</div>
              <div style={{ fontSize: '11px', color: 'var(--weechy-text-muted)', marginBottom: '6px' }}>
                Artwork on left · Timeline & lyrics on right
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: '8px', color: '#fff' }}>
                  Auto-Rotate
                </span>
                <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: '8px', color: '#fff' }}>
                  1:1 Gestures
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Adaptive Colors (Dynamic Palette Engine) */}
        <div className="Feature_card">
          <div className="Features_title__BjQ_H">
            <span>Adaptive Colors</span>
            <Palette size={22} color={current.primary} />
          </div>

          <p className="Feature_desc">
            Weechy's dynamic palette engine extracts vibrant tones from album artwork
            and interpolates smoothly between tracks with 550ms cinematic transitions.
          </p>

          {/* Album Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
            <button
              type="button"
              className={`previews_palettePhone__3hnJ7 previews_paletteSlot2__N5XUL ${selectedTrack === 'silence' ? 'active-track' : ''}`}
              onClick={() => setSelectedTrack('silence')}
              style={{
                padding: '10px 14px',
                borderRadius: '12px',
                background: selectedTrack === 'silence' ? 'rgba(174, 32, 18, 0.25)' : 'rgba(255,255,255,0.04)',
                border: selectedTrack === 'silence' ? '1px solid #ae2012' : '1px solid var(--weechy-border)',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.2s',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>When the Silence Starts to Scream</div>
                <div style={{ fontSize: '11px', color: 'var(--weechy-text-muted)' }}>Seraphine Vale · 0:41 / 4:12</div>
              </div>
              <span style={{ fontSize: '11px', color: '#ee9b00', fontWeight: 600 }}>Lyrics</span>
            </button>

            <button
              type="button"
              className={`previews_palettePhone__3hnJ7 previews_paletteSlot0__fV0Ch ${selectedTrack === 'midnight' ? 'active-track' : ''}`}
              onClick={() => setSelectedTrack('midnight')}
              style={{
                padding: '10px 14px',
                borderRadius: '12px',
                background: selectedTrack === 'midnight' ? 'rgba(229, 9, 20, 0.25)' : 'rgba(255,255,255,0.04)',
                border: selectedTrack === 'midnight' ? '1px solid #E50914' : '1px solid var(--weechy-border)',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.2s',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Midnight Echoes</div>
                <div style={{ fontSize: '11px', color: 'var(--weechy-text-muted)' }}>Nova Hart · 2:05 / 3:31</div>
              </div>
              <span style={{ fontSize: '11px', color: '#ff4f5e', fontWeight: 600 }}>Lyrics</span>
            </button>

            <button
              type="button"
              className={`previews_palettePhone__3hnJ7 previews_paletteSlot1__XT4Ja ${selectedTrack === 'neon' ? 'active-track' : ''}`}
              onClick={() => setSelectedTrack('neon')}
              style={{
                padding: '10px 14px',
                borderRadius: '12px',
                background: selectedTrack === 'neon' ? 'rgba(37, 150, 255, 0.25)' : 'rgba(255,255,255,0.04)',
                border: selectedTrack === 'neon' ? '1px solid #2596ff' : '1px solid var(--weechy-border)',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.2s',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Neon Rain</div>
                <div style={{ fontSize: '11px', color: 'var(--weechy-text-muted)' }}>Luma Grey · 1:24 / 3:48</div>
              </div>
              <span style={{ fontSize: '11px', color: '#4deec8', fontWeight: 600 }}>Lyrics</span>
            </button>
          </div>

          {/* Color Swatches */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>Palette:</span>
            <button
              type="button"
              className="previews_swatch__VlPdU"
              style={{ width: '22px', height: '22px', borderRadius: '50%', background: current.primary, border: '2px solid #fff' }}
            />
            <button
              type="button"
              className="previews_swatch__VlPdU previews_selectedSwatch__xKXqd"
              style={{ width: '22px', height: '22px', borderRadius: '50%', background: current.lyricsActive }}
            />
            <button
              type="button"
              className="previews_swatch__VlPdU"
              style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#14131A' }}
            />
          </div>
        </div>

        {/* Card 3: Themes */}
        <div className="Feature_card">
          <div className="Features_title__BjQ_H">
            <span>Themes</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <Moon size={18} color="var(--weechy-accent)" />
            </div>
          </div>

          <p className="Feature_desc">
            Deep true-black OLED optimization with customizable accents.
            Seamlessly adapts to your preferred light, dark, or system environment.
          </p>

          <div
            style={{
              background: '#0a0a0c',
              borderRadius: '16px',
              padding: '18px',
              border: '1px solid var(--weechy-border)',
              marginTop: '12px',
            }}
          >
            {/* Mode selection */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              {[
                { name: 'Dark', icon: Moon },
                { name: 'Light', icon: Sun },
                { name: 'System', icon: Monitor },
              ].map(({ name, icon: Icon }) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setThemeMode(name.toLowerCase())}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '8px 0',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: 600,
                    background: themeMode === name.toLowerCase() ? 'var(--weechy-accent)' : 'rgba(255,255,255,0.06)',
                    color: '#fff',
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon size={14} />
                  {name}
                </button>
              ))}
            </div>

            {/* Accent color swatches */}
            <div style={{ fontSize: '12px', color: 'var(--weechy-text-muted)', marginBottom: '8px' }}>
              Bespoke Accent Tints
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['#E50914', '#2596ff', '#00ca92', '#ffc22d', '#9b5de5', '#f15bb5'].map((color) => (
                <button
                  key={color}
                  type="button"
                  className="previews_themeSwatch__yXNgR"
                  onClick={() => setSelectedAccent(color)}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: color,
                    border: selectedAccent === color ? '2px solid #ffffff' : '1px solid rgba(255,255,255,0.2)',
                    boxShadow: selectedAccent === color ? `0 0 10px ${color}` : 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.15s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
