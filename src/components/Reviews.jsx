import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const [showMore, setShowMore] = useState(false);

  const initialReviews = [
    {
      author: 'Gregary',
      rating: 5,
      review: "This is a really good app, some features I'd like are already there like 400% volume boost and synced lyrics. Amazing sound quality and zero distortion!",
      date: 'Verified Android User',
    },
    {
      author: 'Adam',
      rating: 5,
      review: "This is a really good app. This app is great, and suggested features like 1:1 sheet gesture control and folder browsing are top-tier. Highly recommended.",
      date: 'Audiophile Community',
    },
    {
      author: 'Margarite',
      rating: 5,
      review: "I love it, and editing the albums, artists, and names is super easy. The theme palette that matches album art is gorgeous. Can't listen to music without it now.",
      date: 'Music Enthusiast',
    },
  ];

  const extraReviews = [
    {
      author: 'Carlos R.',
      rating: 5,
      review: "The 400% loudness booster made my quiet headphone tracks come alive without tearing or distortion. The peak limiter works wonders.",
      date: 'Verified Android User',
    },
    {
      author: 'Samantha W.',
      rating: 5,
      review: "Having LRCLIB integrated means almost every obscure track has scrolling LRC lyrics. Tap-to-seek timestamp seeking is brilliant.",
      date: 'Lossless Audio Collector',
    },
    {
      author: 'David K.',
      rating: 5,
      review: "Zero ads, 100% offline, pure local speed. In an age where every player wants a subscription, Weechy is a breath of fresh air.",
      date: 'Power User',
    },
  ];

  const displayedReviews = showMore ? [...initialReviews, ...extraReviews] : initialReviews;

  return (
    <section className="Reviews_section__VgXcy">
      <h2 className="Reviews_heading__a2bvN">
        Loved worldwide
      </h2>

      <div style={{ textAlign: 'center', marginTop: '-24px', marginBottom: '8px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '8px 20px', borderRadius: '24px', border: '1px solid var(--weechy-border)' }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} color="#ffc22d" fill="#ffc22d" />
            ))}
          </div>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>4.9 / 5</span>
          <span style={{ fontSize: '13px', color: 'var(--weechy-text-muted)' }}>Over 500,000+ local music sessions</span>
        </div>
      </div>

      <div className="Reviews_grid">
        {displayedReviews.map((r, i) => (
          <article key={i} className="Reviews_card__ttk1G">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={16} color="#ffc22d" fill="#ffc22d" />
                ))}
              </div>
              <span style={{ fontSize: '12px', color: 'var(--weechy-text-subtle)' }}>
                {r.date}
              </span>
            </div>

            <p style={{ fontSize: '15px', color: 'var(--weechy-text)', lineHeight: 1.6, fontStyle: 'italic' }}>
              "{r.review}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 'auto', paddingTop: '8px', borderTop: '1px solid var(--weechy-border)' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #E50914 0%, #600005 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '13px',
                  color: '#fff',
                }}
              >
                {r.author[0]}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                {r.author}
              </span>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="Reviews_more__aUTsn"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less -' : 'Show more +'}
      </button>
    </section>
  );
}
