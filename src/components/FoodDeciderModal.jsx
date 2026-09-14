import React, { useState } from 'react';
import { X, Dices, Utensils, Sparkles, ArrowRight } from 'lucide-react';
import { MOCK_DISHES } from '../data/mockData';

export default function FoodDeciderModal({ activeCity, onClose, onSelectDish }) {
  const cityDishes = MOCK_DISHES.filter((d) => d.cityId === activeCity);
  const [selectedMood, setSelectedMood] = useState('all');
  const [pickedDish, setPickedDish] = useState(null);

  const handleRoll = () => {
    let pool = cityDishes;
    if (selectedMood !== 'all') {
      pool = cityDishes.filter((d) => d.mood === selectedMood || d.dietary.includes(selectedMood));
    }
    if (pool.length === 0) pool = cityDishes;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setPickedDish(random);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Dices size={20} style={{ color: 'var(--color-accent)' }} />
            <h3 className="font-serif" style={{ fontSize: '1.35rem' }}>Food Decider</h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={16} />
          </button>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          Can't decide what to eat in {activeCity.toUpperCase()}? Select your current craving vibe and let Culinaria pick your next meal.
        </p>

        {/* Mood Selection */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>
            Choose Your Vibe / Craving:
          </label>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'Surprise Me' },
              { id: 'date-night', label: 'Date Night' },
              { id: 'casual-quick', label: 'Quick Bite' },
              { id: 'solo-dining', label: 'Solo Dining' },
              { id: 'vegetarian', label: 'Vegetarian' }
            ].map((m) => (
              <button
                key={m.id}
                className={`filter-pill ${selectedMood === m.id ? 'active' : ''}`}
                onClick={() => setSelectedMood(m.id)}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Picked Dish Recommendation Card */}
        {pickedDish ? (
          <div
            style={{
              background: 'var(--bg-card-subtle)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              marginBottom: '1.5rem'
            }}
          >
            <div style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Your Culinary Pick
            </div>
            <h4 className="font-serif" style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>
              {pickedDish.name}
            </h4>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              at <strong>{pickedDish.restaurantName}</strong> ({pickedDish.neighborhood}) • ${pickedDish.price}
            </div>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '0.75rem' }}>
              "{pickedDish.description}"
            </p>
            <button
              className="btn-primary"
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
              onClick={() => {
                onClose();
                onSelectDish(pickedDish);
              }}
            >
              <span>View Full Dish Details</span>
              <ArrowRight size={15} />
            </button>
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '2rem 1rem',
              background: 'var(--bg-card-subtle)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--border-color)',
              marginBottom: '1.5rem'
            }}
          >
            <Sparkles size={28} style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }} />
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Ready for a Recommendation?</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Click below to roll the food decider wheel</div>
          </div>
        )}

        <button
          className="btn-primary"
          style={{ width: '100%', background: 'var(--color-olive)', borderColor: 'var(--color-olive)', padding: '0.75rem' }}
          onClick={handleRoll}
        >
          {pickedDish ? 'Roll Again' : 'Roll Food Decider Wheel'}
        </button>
      </div>
    </div>
  );
}
