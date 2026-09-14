import React, { useState } from 'react';
import { X, Clock, ChefHat, Users, CheckSquare, Square, Sparkles, BookOpen } from 'lucide-react';

export default function RecipeModal({ dish, onClose }) {
  const [checkedIngredients, setCheckedIngredients] = useState({});

  if (!dish || !dish.recipe) return null;

  const { recipe } = dish;

  const toggleIngredient = (idx) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '640px', padding: '0', overflow: 'hidden' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ padding: '1.25rem 1.5rem', background: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.775rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase' }}>
              <ChefHat size={15} />
              <span>TRADITIONAL NIGERIAN RECIPE</span>
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.4rem', marginTop: '0.15rem' }}>
              How to Cook {dish.name}
            </h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close recipe modal">
            <X size={18} />
          </button>
        </div>

        {/* Recipe Stats Bar */}
        <div style={{ background: 'var(--bg-card-subtle)', borderBottom: '1px solid var(--border-color)', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            <Clock size={15} style={{ color: 'var(--color-accent)' }} />
            <span>Prep: {recipe.prepTime}</span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <span>Cook: {recipe.cookTime}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            <Users size={15} style={{ color: 'var(--color-olive)' }} />
            <span>{recipe.servings}</span>
          </div>

          <span className="brand-badge" style={{ background: 'var(--color-amber-bg)', color: 'var(--color-amber)', fontSize: '0.75rem' }}>
            Level: {recipe.difficulty}
          </span>
        </div>

        {/* Recipe Content */}
        <div style={{ padding: '1.5rem', maxHeight: '480px', overflowY: 'auto' }}>
          {/* Pro Chef Tip */}
          {recipe.proTip && (
            <div
              style={{
                background: 'var(--color-accent-bg)',
                border: '1px solid var(--color-accent)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.85rem 1rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem'
              }}
            >
              <Sparkles size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.775rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  Secret Master Chef Tip
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontStyle: 'italic' }}>
                  "{recipe.proTip}"
                </div>
              </div>
            </div>
          )}

          {/* Interactive Ingredients Checklist */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.65rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem' }}>
              Ingredients Checklist
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {recipe.ingredients.map((ing, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    color: checkedIngredients[idx] ? 'var(--text-muted)' : 'var(--text-primary)',
                    textDecoration: checkedIngredients[idx] ? 'line-through' : 'none'
                  }}
                  onClick={() => toggleIngredient(idx)}
                >
                  {checkedIngredients[idx] ? (
                    <CheckSquare size={16} style={{ color: 'var(--color-olive)' }} />
                  ) : (
                    <Square size={16} style={{ color: 'var(--text-muted)' }} />
                  )}
                  <span>{ing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Directions */}
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.65rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem' }}>
              Cooking Instructions
            </h4>
            <ol style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
              {recipe.instructions.map((step, idx) => (
                <li key={idx} style={{ marginBottom: '0.75rem' }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
