import React from 'react';
import { Star, MapPin, Bookmark, Navigation, ChefHat } from 'lucide-react';

export default function DishCard({ dish, isSaved, onToggleSave, onClick, onOpenDirections, onOpenRecipe }) {
  const formattedPrice = dish.price ? `₦${dish.price.toLocaleString()}` : '';

  return (
    <article className="card-item" onClick={() => onClick(dish)}>
      <div className="card-media">
        <img src={dish.image} alt={dish.name} className="card-img" loading="lazy" />
        <span className="card-badge-top">{dish.neighborhood}</span>
        <button
          className={`card-bookmark-btn ${isSaved ? 'saved' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(dish.id, 'dish');
          }}
          title={isSaved ? 'Remove from Notebook' : 'Save to Notebook'}
        >
          <Bookmark size={15} fill={isSaved ? '#FFF' : 'none'} />
        </button>
      </div>

      <div className="card-body">
        <div className="card-header-row">
          <h3 className="card-title">{dish.name}</h3>
          <span className="card-price" style={{ fontSize: '1.05rem' }}>{formattedPrice}</span>
        </div>

        <div className="card-venue-link">
          <MapPin size={13} style={{ color: 'var(--text-muted)' }} />
          <span>{dish.restaurantName}</span>
        </div>

        <p className="card-description">{dish.description}</p>

        <div className="card-footer">
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
            <button
              className="btn-secondary"
              style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              onClick={(e) => {
                e.stopPropagation();
                onOpenDirections(dish, 'dish');
              }}
              title="Get Directions on Map"
            >
              <Navigation size={12} style={{ color: 'var(--color-accent)' }} />
              <span>Directions</span>
            </button>

            {dish.recipe && (
              <button
                className="btn-secondary"
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', borderColor: 'var(--color-olive)' }}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenRecipe(dish);
                }}
                title="View Cooking Recipe"
              >
                <ChefHat size={12} style={{ color: 'var(--color-olive)' }} />
                <span>Recipe</span>
              </button>
            )}
          </div>

          <div className="card-score" title="Signature Score">
            <Star size={13} fill="var(--color-amber)" />
            <span>{dish.signatureScore}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
