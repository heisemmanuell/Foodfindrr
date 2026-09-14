import React from 'react';
import { Compass, Utensils, Store, BookOpen, Bookmark, Search, Dices, MapPin, ChefHat } from 'lucide-react';
import { CITIES } from '../data/mockData';

export default function Header({
  activeCity,
  setActiveCity,
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  savedCount,
  onOpenNotebook,
  onOpenDecider
}) {
  return (
    <header className="site-header">
      <div className="header-top">
        {/* Brand & City Selection */}
        <div className="brand-section">
          <div className="brand-logo">
            <Compass size={24} style={{ color: 'var(--color-accent)' }} />
            <span>CULINARIA</span>
            <span className="brand-badge">Naija</span>
          </div>

          <div className="city-selector">
            <MapPin size={15} style={{ color: 'var(--color-accent)' }} />
            <select
              value={activeCity}
              onChange={(e) => setActiveCity(e.target.value)}
              aria-label="Select Nigerian City"
            >
              {CITIES.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name} ({city.code})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Nav View Switcher Tabs */}
        <nav className="view-tabs" aria-label="Main Navigation">
          <button
            className={`tab-btn ${activeTab === 'dishes' ? 'active' : ''}`}
            onClick={() => setActiveTab('dishes')}
          >
            <Utensils size={16} />
            <span>Dishes</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'restaurants' ? 'active' : ''}`}
            onClick={() => setActiveTab('restaurants')}
          >
            <Store size={16} />
            <span>Restaurants</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'recipes' ? 'active' : ''}`}
            onClick={() => setActiveTab('recipes')}
          >
            <ChefHat size={16} />
            <span>Recipes</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'guides' ? 'active' : ''}`}
            onClick={() => setActiveTab('guides')}
          >
            <BookOpen size={16} />
            <span>Guides</span>
          </button>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <div className="search-input-wrapper">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search Jollof, Suya, Amala, Bukka..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button className="btn-decider" onClick={onOpenDecider} title="Food Decider Wheel">
            <Dices size={16} />
            <span>Food Decider</span>
          </button>

          <button className="btn-notebook" onClick={onOpenNotebook} title="View Saved Notebook">
            <Bookmark size={16} style={{ color: savedCount > 0 ? 'var(--color-accent)' : 'inherit' }} />
            <span>Notebook</span>
            {savedCount > 0 && <span className="badge-count">{savedCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
