import React from 'react';
import { LayoutGrid, Map, Filter } from 'lucide-react';
import { NEIGHBORHOODS, DIETARY_OPTIONS } from '../data/mockData';

export default function FilterBar({
  activeCity,
  selectedNeighborhood,
  setSelectedNeighborhood,
  selectedDiet,
  setSelectedDiet,
  selectedPrice,
  setSelectedPrice,
  viewMode,
  setViewMode
}) {
  const neighborhoods = NEIGHBORHOODS[activeCity] || ['All Neighborhoods'];

  return (
    <div className="filter-bar">
      <div className="filter-inner">
        <div className="filter-groups">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>
            <Filter size={15} />
            <span>Filters:</span>
          </div>

          {/* Neighborhood Selector */}
          <select
            className="filter-select"
            value={selectedNeighborhood}
            onChange={(e) => setSelectedNeighborhood(e.target.value)}
            aria-label="Filter by Neighborhood"
          >
            {neighborhoods.map((nh) => (
              <option key={nh} value={nh}>
                {nh}
              </option>
            ))}
          </select>

          {/* Price Range Selector */}
          <select
            className="filter-select"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            aria-label="Filter by Price Tier"
          >
            <option value="all">All Prices</option>
            <option value="$">$ (Budget friendly)</option>
            <option value="$$">$$ (Moderate)</option>
            <option value="$$$">$$$ (Upscale)</option>
            <option value="$$$$">$$$$ (Fine Dining)</option>
          </select>

          {/* Dietary Pills */}
          <div className="tag-pills">
            {DIETARY_OPTIONS.map((diet) => (
              <button
                key={diet.id}
                className={`filter-pill ${selectedDiet === diet.id ? 'active' : ''}`}
                onClick={() => setSelectedDiet(diet.id)}
              >
                {diet.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid vs Map Toggle */}
        <div className="layout-toggle">
          <button
            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            title="Grid View"
          >
            <LayoutGrid size={15} />
            <span>Grid</span>
          </button>
          <button
            className={`toggle-btn ${viewMode === 'map' ? 'active' : ''}`}
            onClick={() => setViewMode('map')}
            title="Interactive Map View"
          >
            <Map size={15} />
            <span>Map Split</span>
          </button>
        </div>
      </div>
    </div>
  );
}
