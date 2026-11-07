import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does the 400% digital audio amplification work?',
      a: 'Weechy integrates directly with Android’s native LoudnessEnhancer audio effects pipeline. It calculates logarithmic digital gain up to 1204 mB (+12.04 dB) above unity gain, paired with automatic peak-limiter dynamic range compression to minimize digital clipping.',
    },
    {
      q: 'Will 400% volume boost damage my device speakers or hearing?',
      a: 'While the built-in limiter prevents digital clipping and output distortion, listening at extreme sound pressure levels for extended periods can cause hearing fatigue or damage. Weechy displays a hearing safety advisory whenever amplification exceeds 150%. Please listen responsibly.',
    },
    {
      q: 'How does Weechy find and synchronize song lyrics?',
      a: 'Weechy utilizes a multi-stage retrieval pipeline. First, it extracts embedded USLT/SYLT tags inside your audio files. Second, it checks local cache. Third, it queries the open LRCLIB database (https://lrclib.net) for synchronized LRC timestamps. Active singing lines are highlighted in real-time, and tapping any line jumps playback directly to that timestamp.',
    },
    {
      q: 'What happens if my music files do not have embedded album art?',
      a: 'Weechy searches MediaStore album art URIs first, falls back to embedded ID3 frame extraction, and writes a zero-byte placeholder cache (no_art_hash) on misses. This completely avoids repeating native JNI retriever calls and keeps the UI buttery smooth.',
    },
    {
      q: 'How does Weechy handle updates and signature conflicts?',
      a: 'Official builds are released directly via GitHub (itsmectrl/weechy-releases). If you reinstall or switch build signatures, Weechy includes a built-in JSON backup export utility so you can safely export and restore your custom playlists and favorites.',
    },
    {
      q: 'Is Weechy completely private and offline?',
      a: 'Yes. Weechy requires no account creation, collects no personal data, serves zero advertisements, and performs 100% of library indexing and audio playback offline on your device.',
    },
  ];

  return (
    <section
      id="faq-section"
      style={{
        maxWidth: '1000px',
        margin: '60px auto',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', color: '#fff', marginBottom: '12px' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--weechy-text-muted)' }}>
          Everything you need to know about Weechy, audio amplification, and local playback.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              style={{
                background: '#191919',
                borderRadius: '18px',
                border: '1px solid var(--weechy-border)',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: isOpen ? 'var(--weechy-accent)' : '#ffffff',
                }}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    flexShrink: 0,
                  }}
                />
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: '0 24px 20px 24px',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: 'var(--weechy-text-muted)',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '16px',
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
