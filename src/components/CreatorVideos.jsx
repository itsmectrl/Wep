import React from 'react';
import { Play } from 'lucide-react';

export default function CreatorVideos() {
  const creators = [
    {
      name: 'Mau McMahon',
      subscribers: '33.8M subscribers',
      title: 'The Best Offline Android Music Player with 400% Audio Boost',
      url: 'https://www.youtube.com/watch?v=a84qJE-OZps&t=193s',
      gradient: 'linear-gradient(135deg, #1f070b 0%, #3d0a11 100%)',
    },
    {
      name: 'MARIANA',
      subscribers: '20.8M subscribers',
      title: 'Transform Your Phone Sound: Best Equalizer & Lyrics Player',
      url: 'https://www.youtube.com/watch?v=084EvNVIOgk&t=100s',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    },
    {
      name: 'Shorts Jairitosolano',
      subscribers: '10.4M subscribers',
      title: 'How to Boost Android Volume to 400% Safely',
      url: 'https://www.youtube.com/shorts/cxgcgn-uS_I',
      gradient: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
    },
    {
      name: 'Shorts Zolard',
      subscribers: '3.7M subscribers',
      title: 'The Most Fluid Sheet Gesture Animations in Any Music App',
      url: 'https://www.youtube.com/shorts/FAZi2HpMWxo',
      gradient: 'linear-gradient(135deg, #1e1e24 0%, #2b1016 100%)',
    },
    {
      name: 'Luis Alfonso Ferrer',
      subscribers: '5.2M subscribers',
      title: 'Weechy Full Review: High-Res FLAC & Synchronized Lyrics',
      url: 'https://www.youtube.com/watch?v=q3GFeBDjb6s&t=175s',
      gradient: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
    },
    {
      name: 'Darkan',
      subscribers: '126K subscribers',
      title: 'Local Music Player Showdown: Why Offline Beats Streaming',
      url: 'https://www.youtube.com/watch?v=TECbndg4Z-E&t=60s',
      gradient: 'linear-gradient(135deg, #280509 0%, #140507 100%)',
    },
  ];

  return (
    <section className="CreatorVideos_section__XMZ8k">
      <h2 className="CreatorVideos_heading__n_qlP">
        Top creators are talking about Lark Player
      </h2>

      <div className="CreatorVideos_grid">
        {creators.map((c, i) => (
          <a
            key={i}
            className="CreatorVideos_card__67p6K"
            href={c.url}
            target="_blank"
            rel="noreferrer"
            style={{
              background: '#191919',
              borderRadius: '20px',
              border: '1px solid var(--weechy-border)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.25s ease, border-color 0.25s ease',
            }}
          >
            {/* Video Thumbnail Placeholder */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                background: c.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(229, 9, 20, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
                }}
              >
                <Play size={24} color="#fff" style={{ marginLeft: '2px' }} />
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.7)',
                  borderRadius: '12px',
                  padding: '4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11px',
                  color: '#fff',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff0000">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                HD Video
              </div>
            </div>

            {/* Video Meta */}
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>
                {c.title}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--weechy-accent)' }}>
                  {c.name}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--weechy-text-muted)' }}>
                  {c.subscribers}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
