import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export default function CuratedGuideCard({ guide, onClick }) {
  return (
    <article className="card-item" onClick={() => onClick(guide)} style={{ cursor: 'pointer' }}>
      <div className="card-media" style={{ height: '220px' }}>
        <img src={guide.coverImage} alt={guide.title} className="card-img" loading="lazy" />
        <span className="card-badge-top">{guide.dishCount} Curated Dishes</span>
      </div>

      <div className="card-body">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.775rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
          <BookOpen size={13} />
          <span>{guide.curator}</span>
          <span>•</span>
          <Clock size={13} />
          <span>{guide.readTime}</span>
        </div>

        <h3 className="card-title" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
          {guide.title}
        </h3>

        <p className="card-description" style={{ marginBottom: '1.25rem' }}>
          {guide.subtitle}
        </p>

        <div className="card-footer" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
          <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--color-accent)' }}>
            Explore City Guide
          </span>
          <ArrowRight size={16} style={{ color: 'var(--color-accent)' }} />
        </div>
      </div>
    </article>
  );
}
