import React, { useState } from 'react';
import { X, MapPin, Navigation, Car, Bus, Clock, ExternalLink, Copy, Check, Shield } from 'lucide-react';
import { MOCK_RESTAURANTS } from '../data/mockData';

export default function DirectionsModal({ item, type, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('drive'); // 'drive' | 'transit'

  if (!item) return null;

  // Resolve restaurant venue if item is a dish
  let venue = item;
  if (type === 'dish') {
    venue = MOCK_RESTAURANTS.find((r) => r.id === item.restaurantId) || {
      name: item.restaurantName,
      address: `${item.neighborhood}, Lagos, Nigeria`,
      neighborhood: item.neighborhood,
      travelInfo: {
        distanceKm: '7.8 km',
        travelTimeMinutes: 20,
        primaryRoute: 'via Main Expressway',
        uberFare: '₦3,500 - ₦4,200',
        brtOption: 'City BRT Bus Route'
      }
    };
  }

  const travel = venue.travelInfo || {
    distanceKm: '8.4 km',
    travelTimeMinutes: 22,
    primaryRoute: 'via Central Expressway',
    uberFare: '₦3,800 - ₦4,500',
    brtOption: 'City BRT Bus Route'
  };

  const turnByTurnSteps = [
    `Start from your current position towards ${venue.neighborhood}`,
    `Head southeast on main arterial road towards ${travel.primaryRoute}`,
    `Continue straight for ${travel.distanceKm} following directional signage for ${venue.name}`,
    `Turn into ${venue.address}`,
    `Destination arrived: ${venue.name} is on your right.`
  ];

  const handleCopy = () => {
    const text = `DIRECTIONS TO ${venue.name.toUpperCase()}\nAddress: ${venue.address}\nRoute: ${travel.primaryRoute}\nEstimated Time: ${travel.travelTimeMinutes} mins (${travel.distanceKm})\n\nTurn-by-Turn:\n` +
      turnByTurnSteps.map((s, i) => `${i + 1}. ${s}`).join('\n');
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.name + ' ' + venue.address)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '680px', padding: '0', overflow: 'hidden' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent)' }}>
              <Navigation size={15} />
              <span>INTERACTIVE MAP DIRECTIONS</span>
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.3rem', marginTop: '0.1rem' }}>
              {venue.name}
            </h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close directions modal">
            <X size={18} />
          </button>
        </div>

        {/* Interactive SVG Route Map Graphic */}
        <div style={{ position: 'relative', height: '240px', background: '#F1EDE5', borderBottom: '1px solid var(--border-color)' }}>
          <svg width="100%" height="100%" viewBox="0 0 680 240" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-dir" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E3DDD2" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-dir)" />

            {/* Stylized River Water (Lagos Lagoon / Jabi Lake) */}
            <path d="M -10,140 Q 200,100 400,180 T 700,120" fill="none" stroke="#D3E0DF" strokeWidth="35" />

            {/* Road Network Lines */}
            <path d="M 80,180 Q 240,60 480,110 T 600,60" fill="none" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
            <path d="M 80,180 Q 240,60 480,110 T 600,60" fill="none" stroke="#B94A24" strokeWidth="4" strokeDasharray="8 6" />

            {/* Start Marker (User Location) */}
            <g transform="translate(100, 175)">
              <circle r="14" fill="#38483B" stroke="#FFF" strokeWidth="3" />
              <text x="0" y="4" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="700">YOU</text>
            </g>

            {/* End Marker (Destination Venue) */}
            <g transform="translate(580, 65)">
              <circle r="18" fill="#B94A24" stroke="#FFF" strokeWidth="3" />
              <MapPin x="-7" y="-7" size={14} color="#FFF" />
              <foreignObject x="-75" y="-55" width="150" height="45">
                <div style={{ background: '#1C1917', color: '#FFF', fontSize: '0.725rem', padding: '0.25rem 0.5rem', borderRadius: '4px', textAlign: 'center', fontWeight: 600, boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
                  {venue.name.split(' ')[0]}
                </div>
              </foreignObject>
            </g>
          </svg>

          {/* Map Floating Summary Badge */}
          <div style={{ position: 'absolute', bottom: '12px', left: '16px', background: 'rgba(255,255,255,0.95)', border: '1px solid var(--border-strong)', padding: '0.4rem 0.75rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              <Clock size={14} style={{ color: 'var(--color-accent)' }} />
              <span>{travel.travelTimeMinutes} mins</span>
            </div>
            <div style={{ color: 'var(--border-color)' }}>|</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              {travel.distanceKm}
            </div>
          </div>
        </div>

        {/* Travel Info & Navigation Steps */}
        <div style={{ padding: '1.25rem 1.5rem', maxHeight: '320px', overflowY: 'auto' }}>
          {/* Mode Selector */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div
              style={{
                background: activeTab === 'drive' ? 'var(--color-accent-bg)' : 'var(--bg-card-subtle)',
                border: `1px solid ${activeTab === 'drive' ? 'var(--color-accent)' : 'var(--border-color)'}`,
                padding: '0.75rem',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer'
              }}
              onClick={() => setActiveTab('drive')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                <Car size={16} style={{ color: 'var(--color-accent)' }} />
                <span>Car / Uber / Bolt</span>
              </div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>
                Est. Fare: <strong>{travel.uberFare}</strong>
              </div>
            </div>

            <div
              style={{
                background: activeTab === 'transit' ? 'var(--color-olive-bg)' : 'var(--bg-card-subtle)',
                border: `1px solid ${activeTab === 'transit' ? 'var(--color-olive)' : 'var(--border-color)'}`,
                padding: '0.75rem',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer'
              }}
              onClick={() => setActiveTab('transit')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                <Bus size={16} style={{ color: 'var(--color-olive)' }} />
                <span>Public Transit / BRT</span>
              </div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>
                {travel.brtOption}
              </div>
            </div>
          </div>

          {/* Destination Details Table */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              Destination Address
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', background: 'var(--bg-card-subtle)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <MapPin size={14} style={{ display: 'inline', marginRight: '6px', color: 'var(--color-accent)' }} />
              {venue.address}
            </div>
          </div>

          {/* Turn by Turn Directions */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              Turn-by-Turn Navigation ({travel.primaryRoute})
            </div>
            <ol style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {turnByTurnSteps.map((step, idx) => (
                <li key={idx} style={{ marginBottom: '0.35rem' }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Modal Bottom Actions */}
          <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
            <button
              className="btn-secondary"
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
              onClick={handleCopy}
            >
              {copied ? <Check size={16} style={{ color: 'var(--color-olive)' }} /> : <Copy size={16} />}
              <span>{copied ? 'Directions Copied!' : 'Copy Directions'}</span>
            </button>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', textDecoration: 'none' }}
            >
              <ExternalLink size={16} />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
