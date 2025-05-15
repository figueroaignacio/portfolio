import '@/styles/animations.css';
import React from 'react';

const NUM_STARS = 200;

const Starfield: React.FC = () => {
  const stars = Array.from({ length: NUM_STARS }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const left = Math.random() * 200;
    const duration = 50 + Math.random() * 50;
    const delay = Math.random() * 20;
    const opacity = Math.random() * 0.5 + 0.5;
    const top = Math.random() * 100;

    return (
      <div
        key={i}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          opacity,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return <div className="starfield">{stars}</div>;
};

export default Starfield;
