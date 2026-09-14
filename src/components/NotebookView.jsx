import React, { useState } from 'react';
import { Bookmark, Download, Trash2, MapPin, Star, Utensils, Edit3 } from 'lucide-react';
import { MOCK_DISHES, MOCK_RESTAURANTS } from '../data/mockData';

export default function NotebookView({ savedItems, onToggleSave, onSelectItem }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [personalNotes, setPersonalNotes] = useState({});

  // Resolve full saved objects from mock dataset
  const resolvedSaved = savedItems.map((saved) => {
    let detail = null;
    if (saved.type === 'dish') {
      detail = MOCK_DISHES.find((d) => d.id === saved.id);
    } else {
      detail = MOCK_RESTAURANTS.find((r) => r.id === saved.id);
    }
    return { ...saved, detail };
  }).filter((item) => item.detail !== null);

  const handleNoteChange = (id, noteText) => {
    setPersonalNotes((prev) => ({ ...prev, [id]: noteText }));
  };

  const handleExport = () => {
    const textContent = resolvedSaved
      .map(
        (s, i) =>
          `${i + 1}. ${s.detail.name} (${s.type.toUpperCase()})\n   Location: ${s.detail.neighborhood}\n   Note: ${personalNotes[s.id] || 'Must visit!'}\n`
      )
      .join('\n');

    const blob = new Blob([`FOODFINDRR FOOD ITINERARY\n========================\n\n${textContent}`], {
      type: 'text/plain;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `foodfindrr-food-itinerary.txt`;
    link.click();
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      {/* Notebook Header */}
      <div className="section-header">
        <div>
          <h2 className="section-title">My Tastemaker Notebook</h2>
          <p className="section-subtitle">
            Your personal curated list of must-try dishes, dining venues, and city tasting notes.
          </p>
        </div>

        {resolvedSaved.length > 0 && (
          <button className="btn-secondary" onClick={handleExport} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Download size={15} />
            <span>Export Itinerary</span>
          </button>
        )}
      </div>

      {resolvedSaved.length === 0 ? (
        <div className="empty-state">
          <Bookmark size={36} className="empty-state-icon" />
          <h3 className="font-serif" style={{ fontSize: '1.4rem' }}>Your notebook is empty</h3>
          <p style={{ maxWidth: '400px', margin: '0.5rem auto 1.5rem auto' }}>
            Save dishes and restaurants while exploring your city to build your personal culinary itinerary.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {resolvedSaved.map(({ id, type, detail }) => (
            <div
              key={id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                display: 'grid',
                gridTemplateColumns: '120px 1fr 180px',
                gap: '1.25rem',
                alignItems: 'center'
              }}
            >
              <img
                src={detail.image}
                alt={detail.name}
                style={{ width: '120px', height: '90px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span className="brand-badge" style={{ fontSize: '0.65rem' }}>
                    {type === 'dish' ? 'DISH' : 'RESTAURANT'}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {detail.neighborhood}
                  </span>
                </div>

                <h3
                  className="font-serif"
                  style={{ fontSize: '1.2rem', cursor: 'pointer', color: 'var(--text-primary)' }}
                  onClick={() => onSelectItem(detail)}
                >
                  {detail.name}
                </h3>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                  <Utensils size={13} />
                  <span>{type === 'dish' ? detail.restaurantName : detail.cuisine}</span>
                  <span>•</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>
                    {type === 'dish' ? (detail.price ? `₦${detail.price.toLocaleString()}` : '') : detail.priceRange}
                  </span>
                </div>
              </div>

              {/* Personal Notes & Remove Action */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.725rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                    <Edit3 size={11} />
                    <span>Personal Note:</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Add tasting note..."
                    value={personalNotes[id] || ''}
                    onChange={(e) => handleNoteChange(id, e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.35rem 0.5rem',
                      fontSize: '0.775rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-input)'
                    }}
                  />
                </div>

                <button
                  className="btn-secondary"
                  style={{ color: '#B91C1C', borderColor: 'var(--border-color)', padding: '0.3rem 0.6rem', fontSize: '0.775rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                  onClick={() => onToggleSave(id, type)}
                >
                  <Trash2 size={13} />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
