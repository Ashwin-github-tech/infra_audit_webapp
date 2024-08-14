import React, { useState, useEffect } from 'react';
import './GlowingCursor.css';

const GlowingCursor: React.FC = () => {
  const [glow, setGlow] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cursor = document.querySelector('.glowing-cursor') as HTMLElement;
      if (cursor) {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      setGlow(true);
    };

    const handleMouseLeave = () => {
      setGlow(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`glowing-cursor ${glow ? 'glow' : ''}`}>
      <div className="dot" />
    </div>
  );
};

export default GlowingCursor;
