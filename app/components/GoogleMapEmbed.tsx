import React from 'react';

export default function GoogleMapEmbed() {
  const latitude = 13.553151261256435;
  const longitude =  100.36739403802997;

  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '1rem',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          height: '600px',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
      >
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
