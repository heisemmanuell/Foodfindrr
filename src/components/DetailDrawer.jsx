import React from 'react';
import { X, Star, MapPin, Bookmark, Utensils, Clock, Navigation, ChefHat, ExternalLink } from 'lucide-react';

export default function DetailDrawer({ item, type, isSaved, onToggleSave, onClose, onOpenDirections, onOpenRecipe }) {
  if (!item) return null;

  const formattedPrice = item.price ? `₦${item.price.toLocaleString()}` : item.priceRange;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="brand-badge" style={{ background: 'var(--color-olive-bg)', color: 'var(--color-olive)' }}>
              {type === 'dish' ? 'Signature Dish' : 'Dining Venue'}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              {item.neighborhood}
            </span>
          </div>

          <button className="drawer-close-btn" onClick={onClose} aria-label="Close drawer">
            <X size={18} />
          </button>
        </div>

        {/* Hero Image */}
        <img src={item.image || item.coverImage} alt={item.name || item.title} className="drawer-hero-img" />

        {/* Drawer Body */}
        <div className="drawer-content">
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
              <h2 className="font-serif" style={{ fontSize: '1.75rem', lineHeight: 1.25 }}>
                {item.name || item.title}
              </h2>
              <div className="card-score" style={{ fontSize: '0.95rem', padding: '0.35rem 0.65rem' }}>
                <Star size={15} fill="var(--color-amber)" />
                <span>{item.signatureScore || item.rating || 9.5}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              <Utensils size={15} style={{ color: 'var(--color-accent)' }} />
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                {type === 'dish' ? item.restaurantName : item.cuisine}
              </span>
              <span>•</span>
              <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>
                {formattedPrice}
              </span>
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              {item.description || item.vibe || item.subtitle}
            </p>
          </div>

          {/* Chef / Tastemaker Note */}
          {item.chefNote && (
            <div
              style={{
                background: 'var(--bg-card-subtle)',
                borderLeft: '3px solid var(--color-accent)',
                padding: '1rem',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                border: '1px solid var(--border-color)',
                borderLeftWidth: '3px'
              }}
            >
              <div style={{ fontSize: '0.775rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                Chef & Tastemaker Secret
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontStyle: 'italic' }}>
                "{item.chefNote}"
              </div>
            </div>
          )}

          {/* Structured Attributes Table */}
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem' }}>
              Details & Attributes
            </h4>
            <table className="drawer-meta-table">
              <tbody>
                <tr>
                  <td>Neighborhood</td>
                  <td>{item.neighborhood || 'Central City'}</td>
                </tr>
                {item.address && (
                  <tr>
                    <td>Address</td>
                    <td>{item.address}</td>
                  </tr>
                )}
                {item.hours && (
                  <tr>
                    <td>Operating Hours</td>
                    <td>{item.hours}</td>
                  </tr>
                )}
                {item.dietary && item.dietary.length > 0 && (
                  <tr>
                    <td>Dietary Flags</td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                        {item.dietary.map((d) => (
                          <span key={d} className="badge-diet">
                            {d}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Interactive Feature Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <button
                className="btn-primary"
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
                onClick={() => onOpenDirections(item, type)}
              >
                <Navigation size={16} />
                <span>Get Interactive Directions</span>
              </button>

              {item.recipe && (
                <button
                  className="btn-secondary"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', borderColor: 'var(--color-olive)', color: 'var(--color-olive)' }}
                  onClick={() => onOpenRecipe(item)}
                >
                  <ChefHat size={16} />
                  <span>Cook Recipe</span>
                </button>
              )}
            </div>

            <button
              className={`btn-secondary ${isSaved ? 'saved' : ''}`}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
              onClick={() => onToggleSave(item.id, type)}
            >
              <Bookmark size={16} fill={isSaved ? '#FFF' : 'none'} />
              <span>{isSaved ? 'Saved in Notebook' : 'Save to Notebook'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
