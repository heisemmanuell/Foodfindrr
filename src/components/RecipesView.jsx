import React from 'react';
import { ChefHat, Clock, Users, BookOpen } from 'lucide-react';
import { MOCK_DISHES } from '../data/mockData';

export default function RecipesView({ activeCity, onOpenRecipe }) {
  const dishesWithRecipes = MOCK_DISHES.filter((d) => d.recipe);

  return (
    <div>
      <div className="section-header">
        <div>
          <h1 className="section-title">Traditional Nigerian Recipes</h1>
          <p className="section-subtitle">
            Master authentic home cooking: step-by-step secret recipes for Smokey Jollof, Egusi, Suya, Fisherman Soup & Ofada.
          </p>
        </div>
      </div>

      <div className="editorial-grid">
        {dishesWithRecipes.map((dish) => (
          <article key={dish.id} className="card-item" onClick={() => onOpenRecipe(dish)} style={{ cursor: 'pointer' }}>
            <div className="card-media">
              <img src={dish.image} alt={dish.name} className="card-img" loading="lazy" />
              <span className="card-badge-top">Level: {dish.recipe.difficulty}</span>
            </div>

            <div className="card-body">
              <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>
                {dish.name}
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Clock size={14} style={{ color: 'var(--color-accent)' }} />
                  <span>{dish.recipe.cookTime}</span>
                </div>
                <span>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Users size={14} style={{ color: 'var(--color-olive)' }} />
                  <span>{dish.recipe.servings}</span>
                </div>
              </div>

              <p className="card-description" style={{ marginBottom: '1rem' }}>
                {dish.description}
              </p>

              <div className="card-footer" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.85rem' }}>
                  <ChefHat size={16} />
                  <span>View Step-by-Step Recipe</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
