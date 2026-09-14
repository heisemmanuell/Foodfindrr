import React from 'react';
import { Star, MapPin, Bookmark, Utensils, Navigation } from 'lucide-react';

export default function RestaurantCard({ restaurant, isSaved, onToggleSave, onClick, onOpenDirections }) {
  return (
    <article className="card-item" onClick={() => onClick(restaurant)}>
      <div className="card-media">
        <img src={restaurant.image} alt={restaurant.name} className="card-img" loading="lazy" />
        <span className="card-badge-top">{restaurant.neighborhood}</span>
        <button
          className={`card-bookmark-btn ${isSaved ? 'saved' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(restaurant.id, 'restaurant');
          }}
          title={isSaved ? 'Remove from Notebook' : 'Save to Notebook'}
        >
          <Bookmark size={15} fill={isSaved ? '#FFF' : 'none'} />
        </button>
      </div>

      <div className="card-body">
        <div className="card-header-row">
          <h3 className="card-title">{restaurant.name}</h3>
          <span className="card-price">{restaurant.priceRange}</span>
        </div>

        <div className="card-venue-link" style={{ marginBottom: '0.4rem' }}>
          <span style={{ fontWeight: 600, color: 'var(--color-olive)' }}>{restaurant.cuisine}</span>
        </div>

        <p className="card-description">{restaurant.vibe}</p>

        <div style={{ background: 'var(--bg-card-subtle)', padding: '0.55rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', marginBottom: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>
            <Utensils size={12} />
            <span>MUST-ORDER NIGERIAN DISH</span>
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            {restaurant.signatureDish}
          </div>
        </div>

        <div className="card-footer">
          <button
            className="btn-secondary"
            style={{ padding: '0.25rem 0.6rem', fontSize: '0.775rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            onClick={(e) => {
              e.stopPropagation();
              onOpenDirections(restaurant, 'restaurant');
            }}
          >
            <Navigation size={13} style={{ color: 'var(--color-accent)' }} />
            <span>Directions</span>
          </button>

          <div className="card-score">
            <Star size={13} fill="var(--color-amber)" />
            <span>{restaurant.rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
