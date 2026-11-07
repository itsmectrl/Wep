import React, { useState } from 'react';
import { Info, Volume2, Sliders, Headphones, AlertTriangle } from 'lucide-react';

export default function GreatSound() {
  const [musicCreditsOpen, setMusicCreditsOpen] = useState(false);
  const [vizStyle, setVizStyle] = useState('Harmony');
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [boostPercent, setBoostPercent] = useState(200);
  const [showWarning, setShowWarning] = useState(false);
  const [eqPreset, setEqPreset] = useState('Bass Booster');
  const [eqBands, setEqBands] = useState({
    b60: 6,
    b230: 4,
    b910: 0,
    b3600: 2,
    b14000: 5,
  });

  const handleBoostSelect = (pct) => {
    setBoostPercent(pct);
    if (pct > 150) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  const calculateGainDb = (pct) => {
    if (pct <= 100) return '0.00';
    return (20 * Math.log10(pct / 100)).toFixed(2);
  };

  const presets = {
    'Flat': { b60: 0, b230: 0, b910: 0, b3600: 0, b14000: 0 },
    'Bass Booster': { b60: 8, b230: 6, b910: 1, b3600: 0, b14000: 2 },
    'Treble Booster': { b60: 0, b230: 1, b910: 2, b3600: 6, b14000: 8 },
    'Vocal': { b60: -2, b230: 1, b910: 6, b3600: 4, b14000: -1 },
    'Rock': { b60: 5, b230: 3, b910: -1, b3600: 3, b14000: 6 },
    'Pop': { b60: 2, b230: 4, b910: 5, b3600: 3, b14000: 1 },
  };

  const handlePresetChange = (presetName) => {
    setEqPreset(presetName);
    if (presets[presetName]) {
      setEqBands(presets[presetName]);
    }
  };

  return (
    <section
      id="great-sound"
      className="Features_section__a4X80 Features_stacked__Z13vW"
      aria-label="Great sound"
    >
      <h2 className="Features_heading__LYnBy">
        Great sound
      </h2>

      <div className="Features_grid grid-2-col">
        {/* Card 1: Music visualizer */}
        <div className="Feature_card">
          <div className="Features_title__BjQ_H">
            <span>Music visualizer</span>
            <button
              type="button"
              className="previews_infoButton__ROlFs"
              aria-label="Music credits and license"
              aria-controls="visualizer-music-credits"
              aria-expanded={musicCreditsOpen}
              onClick={() => setMusicCreditsOpen(!musicCreditsOpen)}
            >
              <Info size={16} />
            </button>
          </div>

          <p className="Feature_desc">
            Responsive real-time waveform and frequency bar visualizers that react dynamically
            to your audio transients.
          </p>

          {/* Credits Dialog */}
          <div
            id="visualizer-music-credits"
            className="previews_mvCredit__NOtRq"
            role="note"
            style={{ display: musicCreditsOpen ? 'flex' : 'none' }}
          >
            <a
              href="https://commons.wikimedia.org/wiki/File:Synth_pop_with_4_on_the_floor.ogg"
              target="_blank"
              rel="noreferrer"
              tabIndex={0}
            >
              Synth pop with 4 on the floor — Mesostic
            </a>
            {' · '}
            <a
              href="https://creativecommons.org/publicdomain/zero/1.0/"
              target="_blank"
              rel="noreferrer"
              tabIndex={0}
            >
              CC0 1.0
            </a>
            <span>Excerpt · cover art made for this demo</span>
          </div>

          {/* Visualizer Canvas Demonstration */}
          <div
            style={{
              background: '#0a0a0c',
              borderRadius: '16px',
              padding: '24px 20px',
              border: '1px solid var(--weechy-border)',
              marginTop: '12px',
            }}
          >
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              {['Harmony', 'Bounce', 'Rise', 'Flow'].map((style) => (
                <button
                  key={style}
                  type="button"
                  className="previews_vizStyle__JXtHN"
                  onClick={() => setVizStyle(style)}
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    padding: '6px 14px',
                    borderRadius: '14px',
                    background: vizStyle === style ? 'var(--weechy-accent)' : 'rgba(255,255,255,0.06)',
                    color: '#fff',
                    transition: 'all 0.2s',
                  }}
                >
                  {style}
                </button>
              ))}
            </div>

            {/* Visualizer Frequency Bars */}
            <div
              style={{
                height: '70px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '6px',
                padding: '0 4px',
                marginBottom: '16px',
              }}
            >
              {[25, 45, 60, 35, 75, 90, 50, 65, 80, 40, 55, 70, 85, 30, 48].map((val, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    height: isPlayingSound ? `${val}%` : `${Math.max(15, val * 0.4)}%`,
                    background: `linear-gradient(180deg, #ff4f5e 0%, #E50914 70%, #600005 100%)`,
                    borderRadius: '3px 3px 0 0',
                    boxShadow: '0 0 8px rgba(229, 9, 20, 0.4)',
                    transition: 'height 0.2s ease',
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              className="previews_vizSound__Y_af6"
              onClick={() => setIsPlayingSound(!isPlayingSound)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '12px',
                background: isPlayingSound ? 'rgba(229, 9, 20, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                color: isPlayingSound ? '#ff4f5e' : '#ffffff',
                border: isPlayingSound ? '1px solid rgba(229, 9, 20, 0.5)' : '1px solid var(--weechy-border)',
                fontWeight: 600,
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <Volume2 size={16} />
              {isPlayingSound ? 'Pause demo sound' : 'Play with sound'}
            </button>
          </div>
        </div>

        {/* Card 2: Volume booster (400% Loudness Enhancement) */}
        <div className="Feature_card">
          <div className="Features_title__BjQ_H">
            <span>Volume booster</span>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#E50914' }}>
              +{calculateGainDb(boostPercent)} dB
            </div>
          </div>

          <p className="Feature_desc">
            Powered by Android's <code>LoudnessEnhancer</code> engine. Delivers up to
            <strong> 400% digital audio amplification</strong> (+12.04 dB) with built-in
            peak-limiter compression to protect against digital distortion.
          </p>

          <div
            style={{
              background: '#0a0a0c',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid var(--weechy-border)',
              marginTop: '12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '13px', color: 'var(--weechy-text-muted)' }}>AMPLIFICATION LEVEL</span>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>{boostPercent}%</span>
            </div>

            {/* Quick Level Preset Buttons */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              {[100, 150, 200, 300, 400].map((pct) => (
                <button
                  key={pct}
                  type="button"
                  className="previews_volumeLevel__ZFIKg"
                  onClick={() => handleBoostSelect(pct)}
                  style={{
                    flex: 1,
                    minWidth: '50px',
                    padding: '8px 0',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: 600,
                    background: boostPercent === pct ? 'var(--weechy-accent)' : 'rgba(255,255,255,0.06)',
                    color: '#ffffff',
                    border: '1px solid var(--weechy-border)',
                    boxShadow: boostPercent === pct ? '0 0 12px var(--weechy-accent-glow)' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {pct}%
                </button>
              ))}
            </div>

            {/* Slider */}
            <input
              type="range"
              min="100"
              max="400"
              value={boostPercent}
              onChange={(e) => handleBoostSelect(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#E50914',
                cursor: 'pointer',
              }}
            />

            {/* Safety Warning Dialogue when > 150% */}
            {showWarning && (
              <div
                style={{
                  marginTop: '16px',
                  background: 'rgba(229, 9, 20, 0.12)',
                  border: '1px solid rgba(229, 9, 20, 0.4)',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  animation: 'fadeIn 0.2s ease',
                }}
              >
                <AlertTriangle size={18} color="#ff4f5e" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '12px', lineHeight: 1.5, color: '#fcd3d5' }}>
                  <strong>Hearing Safety Warning:</strong> Amplification above 150%
                  delivers high sound pressure levels. Protect your hearing and monitor volume levels when using headphones.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Card 3: Equalizer */}
        <div className="Feature_card">
          <div className="Features_title__BjQ_H">
            <span>Equalizer</span>
            <Sliders size={22} color="var(--weechy-accent)" />
          </div>

          <p className="Feature_desc">
            Precision 5-band frequency equalizer with handcrafted presets tailored for
            headphones, Bluetooth speakers, and car audio systems.
          </p>

          <div
            style={{
              background: '#0a0a0c',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid var(--weechy-border)',
              marginTop: '12px',
            }}
          >
            {/* Presets */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {Object.keys(presets).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => handlePresetChange(p)}
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    padding: '5px 10px',
                    borderRadius: '10px',
                    background: eqPreset === p ? 'var(--weechy-accent)' : 'rgba(255,255,255,0.06)',
                    color: '#fff',
                    transition: 'all 0.2s',
                  }}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* 5-Band Sliders */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              {[
                { label: '60 Hz', key: 'b60' },
                { label: '230 Hz', key: 'b230' },
                { label: '910 Hz', key: 'b910' },
                { label: '3.6 kHz', key: 'b3600' },
                { label: '14 kHz', key: 'b14000' },
              ].map(({ label, key }) => (
                <div key={key} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <input
                      type="range"
                      min="-10"
                      max="10"
                      value={eqBands[key]}
                      onChange={(e) => setEqBands({ ...eqBands, [key]: Number(e.target.value) })}
                      style={{
                        writingMode: 'bt-lr',
                        WebkitAppearance: 'slider-vertical',
                        width: '8px',
                        height: '70px',
                        accentColor: '#E50914',
                      }}
                    />
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--weechy-text-muted)', marginTop: '6px' }}>{label}</div>
                  <div style={{ fontSize: '10px', color: '#fff', fontWeight: 600 }}>{eqBands[key] > 0 ? `+${eqBands[key]}` : eqBands[key]}dB</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 4: Seamless playback */}
        <div className="Feature_card">
          <div className="Features_title__BjQ_H">
            <span>Seamless playback</span>
            <Headphones size={22} color="var(--weechy-accent)" />
          </div>

          <p className="Feature_desc">
            Gapless cross-fading, automatic audio ducking on incoming notifications,
            and instant auto-pause when headphones unplug (<code>ACTION_AUDIO_BECOMING_NOISY</code>).
          </p>

          <div
            style={{
              background: '#0a0a0c',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid var(--weechy-border)',
              marginTop: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {[
              { title: 'Audio Focus Ducking', desc: 'Gracefully lowers volume during phone calls or GPS alerts' },
              { title: 'Becoming Noisy Protection', desc: 'Immediate pause when Bluetooth or jack disconnects' },
              { title: 'MediaSession Service', desc: 'Lock screen controls and Android 13+ background playback tile' },
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ca92', flexShrink: 0 }}></div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
