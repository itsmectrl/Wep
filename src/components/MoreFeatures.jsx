import React from 'react';
import { Gauge, Clock, Bell, CloudUpload } from 'lucide-react';

export default function MoreFeatures() {
  const features = [
    {
      title: 'Speed Changer',
      desc: 'Play at any speed in one tap. Adjust playback speed smoothly between 0.5x, 0.75x, 1.0x, 1.25x, 1.5x, and 2.0x with pitch correction.',
      icon: Gauge,
    },
    {
      title: 'Sleep Timer',
      desc: 'Stop playback after a set time. Choose 15, 30, 45, or 60-minute presets or gentle end-of-track fadeout to rest peacefully.',
      icon: Clock,
    },
    {
      title: 'Ringtone',
      desc: 'Make a ringtone from any song. Effortlessly trim and assign high-fidelity tracks as phone ringtones or alarms.',
      icon: Bell,
    },
    {
      title: 'Back up songs',
      desc: 'Back up 3,000+ songs to Google Drive. Export playlists and favorites to cloud storage or portable JSON for effortless migrations.',
      icon: CloudUpload,
    },
  ];

  return (
    <section
      className="HomeSections_otherFeatures__6sXuK"
      aria-label="More features"
    >
      <h2 className="HomeSections_otherHeading__CDWvM">
        More features
      </h2>

      <div className="HomeSections_otherGrid">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <article key={i} className="HomeSections_otherCard__0B9_y">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(229, 9, 20, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color="var(--weechy-accent)" />
                </div>
                <h3>{f.title}</h3>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--weechy-text-muted)', lineHeight: 1.5 }}>
                {f.desc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
