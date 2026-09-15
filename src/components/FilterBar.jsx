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
          {/* Top Controls Row for Mobile & Desktop */}
          <div className="filter-controls-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontSize: '0.825rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
              <Filter size={14} />
              <span>Filters:</span>
            </div>

            {/* Neighborhood Dropdown */}
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

            {/* Price Tier Dropdown */}
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
          </div>

          {/* Category Pills Horizontal Scroll Bar */}
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

        {/* View Layout Toggle (Grid vs Map Split) */}
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
