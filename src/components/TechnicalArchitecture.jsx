import React, { useState } from 'react';
import { Cpu, Music, Mic, ArrowRight, CornerDownRight, Check } from 'lucide-react';

export default function TechnicalArchitecture() {
  const [activeLyricIndex, setActiveLyricIndex] = useState(2);

  const sampleLyrics = [
    { time: '0:14.20', text: 'Drifting down the neon highway alone' },
    { time: '0:22.85', text: 'Frequencies echo in the midnight twilight' },
    { time: '0:31.40', text: 'Four hundred percent amplification turns up the pulse' },
    { time: '0:40.10', text: 'Every transient hits with acoustic clarity' },
    { time: '0:48.75', text: 'Synchronized words breathing in harmony' },
  ];

  return (
    <section
      style={{
        maxWidth: '1280px',
        margin: '60px auto',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <span
          style={{
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '1.5px',
            color: 'var(--weechy-accent)',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '10px',
          }}
        >
          ENGINEERING SPOTLIGHT
        </span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', color: '#fff', marginBottom: '16px' }}>
          Groundbreaking Android Interaction & Audio Architecture
        </h2>
        <p style={{ fontSize: '18px', color: 'var(--weechy-text-muted)', lineHeight: 1.6 }}>
          Weechy is built from scratch with modern Jetpack Compose, Kotlin Coroutines, and native Android audio effects.
          Explore the systems that set Weechy apart from ordinary music players.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
        {/* Architecture Card 1: 1:1 Gesture System */}
        <div
          style={{
            background: 'var(--weechy-surface)',
            border: '1px solid var(--weechy-border)',
            borderRadius: '28px',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(229, 9, 20, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Cpu size={24} color="var(--weechy-accent)" />
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>
                1:1 Directional Axis Lock
              </h3>
              <span style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>
                Zero Gesture Conflict System
              </span>
            </div>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--weechy-text-muted)', lineHeight: 1.6 }}>
            In traditional music players, dragging down to collapse the sheet conflicts with horizontal cover-art swiping to skip tracks.
            Weechy introduces a unified vector-slop arbitrator:
          </p>

          <div
            style={{
              background: '#09090C',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid var(--weechy-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              fontSize: '13px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{ color: '#00ca92', fontWeight: 700 }}>•</div>
              <div>
                <strong style={{ color: '#fff' }}>Vertical Dominance (|dy| &gt; |dx|):</strong>
                <div style={{ color: 'var(--weechy-text-muted)' }}>
                  Axis locks to vertical. Artwork remains 100% stationary horizontally while the sheet tracks your finger 1:1.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{ color: '#E50914', fontWeight: 700 }}>•</div>
              <div>
                <strong style={{ color: '#fff' }}>Horizontal Dominance (|dx| &ge; |dy|):</strong>
                <div style={{ color: 'var(--weechy-text-muted)' }}>
                  Axis locks to horizontal. Sheet stays vertically anchored while album art glides smoothly to skip tracks.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Card 2: Synchronized LRC Lyrics & Tap-to-Seek */}
        <div
          style={{
            background: 'var(--weechy-surface)',
            border: '1px solid var(--weechy-border)',
            borderRadius: '28px',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(229, 9, 20, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Mic size={24} color="var(--weechy-accent)" />
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>
                Synchronized LRC Engine
              </h3>
              <span style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>
                LRCLIB + Binary Search Indexing (O(log N))
              </span>
            </div>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--weechy-text-muted)', lineHeight: 1.6 }}>
            Multi-stage lyrics resolution checks embedded ID3 frames, queries local Room DB,
            and searches open LRCLIB. Tap any lyric line below to test interactive timestamp seeking:
          </p>

          <div
            style={{
              background: '#09090C',
              borderRadius: '16px',
              padding: '16px',
              border: '1px solid var(--weechy-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {sampleLyrics.map((line, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveLyricIndex(idx)}
                style={{
                  textAlign: 'left',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  background: activeLyricIndex === idx ? 'rgba(229, 9, 20, 0.2)' : 'transparent',
                  border: activeLyricIndex === idx ? '1px solid rgba(229, 9, 20, 0.4)' : '1px solid transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: activeLyricIndex === idx ? 700 : 400,
                    color: activeLyricIndex === idx ? '#fff' : 'var(--weechy-text-muted)',
                  }}
                >
                  {line.text}
                </span>
                <span style={{ fontSize: '11px', color: activeLyricIndex === idx ? '#E50914' : 'var(--weechy-text-subtle)' }}>
                  [{line.time}]
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
