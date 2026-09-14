import React, { useState } from 'react';
import { MapPin, Star, Utensils, Info, Navigation, ChefHat } from 'lucide-react';
import DishCard from './DishCard';
import RestaurantCard from './RestaurantCard';

export default function CityMap({
  items,
  activeTab,
  activeCity,
  savedItems,
  onToggleSave,
  onSelectItem,
  onOpenDirections,
  onOpenRecipe
}) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const cityNameUpper = activeCity === 'lagos' ? 'LAGOS METROPOLIS' : activeCity === 'abuja' ? 'ABUJA CAPITAL TERRITORY' : activeCity.toUpperCase();

  return (
    <div className="map-split-container">
      {/* Map Viewport Canvas */}
      <div className="map-viewport">
        <div className="map-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={16} style={{ color: 'var(--color-accent)' }} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>
              Interactive Neighborhood Map — {cityNameUpper}
            </span>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Info size={13} />
            <span>Click any pin to view prices & directions</span>
          </div>
        </div>

        <div className="map-svg-wrapper">
          {/* SVG Map Base Graphic */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
            style={{ background: '#F4F1EA', width: '100%', height: '100%' }}
          >
            <defs>
              <pattern id="grid-ng" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E6E1D7" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-ng)" />

            {/* Stylized Lagoon / River / Lake Graphic */}
            <path
              d="M -10,340 Q 220,290 420,400 T 820,310"
              fill="none"
              stroke="#D2E2E2"
              strokeWidth="55"
              strokeLinecap="round"
            />

            {/* Major Arterial Bridge Line (e.g. Third Mainland Bridge / Lekki Link) */}
            <path
              d="M 120,480 Q 280,320 540,360"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeDasharray="10 6"
            />

            {/* Nigerian Neighborhood / Landmark Labels */}
            {activeCity === 'lagos' ? (
              <>
                <text x="120" y="100" fill="#B3ACA0" fontSize="13" fontWeight="700" fontFamily="sans-serif">
                  IKEJA & MAINLAND
                </text>
                <text x="500" y="120" fill="#B3ACA0" fontSize="13" fontWeight="700" fontFamily="sans-serif">
                  LEKKI & IKOYI
                </text>
                <text x="220" y="480" fill="#B3ACA0" fontSize="13" fontWeight="700" fontFamily="sans-serif">
                  VICTORIA ISLAND & EKO ATLANTIC
                </text>
                <text x="320" y="360" fill="#88A0A0" fontSize="11" fontWeight="600" fontFamily="sans-serif" fontStyle="italic">
                  Lagos Lagoon
                </text>
              </>
            ) : (
              <>
                <text x="120" y="100" fill="#B3ACA0" fontSize="13" fontWeight="700" fontFamily="sans-serif">
                  MAITAMA & ASO ROCK
                </text>
                <text x="500" y="120" fill="#B3ACA0" fontSize="13" fontWeight="700" fontFamily="sans-serif">
                  WUSE II & GARKI
                </text>
                <text x="220" y="480" fill="#B3ACA0" fontSize="13" fontWeight="700" fontFamily="sans-serif">
                  JABI LAKE DISTRICT
                </text>
              </>
            )}

            {/* Render Item Pin Markers */}
            {items.map((item) => {
              const coords = item.mapCoords || { x: 50, y: 50 };
              const svgX = (coords.x / 100) * 800;
              const svgY = (coords.y / 100) * 600;
              const isHovered = hoveredItem?.id === item.id;
              const isSaved = savedItems.some((s) => s.id === item.id);
              const label = activeTab === 'dishes' ? (item.price ? `₦${(item.price / 1000).toFixed(1)}k` : '₦') : item.rating;

              return (
                <g
                  key={item.id}
                  transform={`translate(${svgX}, ${svgY})`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => onSelectItem(item)}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <circle
                    r={isHovered ? '24' : '18'}
                    fill={isHovered ? 'var(--color-accent)' : isSaved ? 'var(--color-olive)' : 'var(--text-primary)'}
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    style={{ transition: 'all 0.2s ease-out' }}
                  />

                  <text
                    x="0"
                    y="4"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="10"
                    fontWeight="700"
                    fontFamily="sans-serif"
                  >
                    {label}
                  </text>

                  {/* Hover Tooltip Card */}
                  {isHovered && (
                    <foreignObject x="-110" y="-90" width="220" height="85">
                      <div
                        style={{
                          background: 'var(--bg-card)',
                          border: '1px solid var(--border-strong)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.45rem 0.65rem',
                          boxShadow: 'var(--shadow-overlay)',
                          textAlign: 'center'
                        }}
                      >
                        <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                          {item.neighborhood} • {activeTab === 'dishes' ? item.restaurantName : item.cuisine}
                        </div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                          {activeTab === 'dishes' ? `₦${item.price.toLocaleString()}` : item.priceRange}
                        </div>
                      </div>
                    </foreignObject>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Map Sidebar Items List */}
      <div className="map-list-sidebar">
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
          Showing {items.length} mapped locations in {activeCity.toUpperCase()}
        </div>
        {items.length === 0 ? (
          <div className="empty-state">
            <Utensils size={28} className="empty-state-icon" />
            <h3>No results in this map area</h3>
            <p>Try switching neighborhoods or clearing filters.</p>
          </div>
        ) : (
          items.map((item) =>
            activeTab === 'dishes' ? (
              <DishCard
                key={item.id}
                dish={item}
                isSaved={savedItems.some((s) => s.id === item.id)}
                onToggleSave={onToggleSave}
                onClick={onSelectItem}
                onOpenDirections={onOpenDirections}
                onOpenRecipe={onOpenRecipe}
              />
            ) : (
              <RestaurantCard
                key={item.id}
                restaurant={item}
                isSaved={savedItems.some((s) => s.id === item.id)}
                onToggleSave={onToggleSave}
                onClick={onSelectItem}
                onOpenDirections={onOpenDirections}
              />
            )
          )
        )}
      </div>
    </div>
  );
}
