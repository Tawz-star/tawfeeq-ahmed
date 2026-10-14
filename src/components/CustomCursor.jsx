import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"], .glass-card, .clickable');
      setIsHovering(!!isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing position lerp
  useEffect(() => {
    if (isTouchDevice) return;
    let animId;
    const lerp = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer subtle glow ring */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out rounded-full"
        style={{
          transform: `translate3d(${trailingPos.x - (isHovering ? 24 : 14)}px, ${trailingPos.y - (isHovering ? 24 : 14)}px, 0)`,
          width: isHovering ? '48px' : '28px',
          height: isHovering ? '48px' : '28px',
          border: isHovering ? '1.5px solid rgba(0, 240, 255, 0.8)' : '1px solid rgba(168, 85, 247, 0.4)',
          backgroundColor: isHovering ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
          boxShadow: isHovering ? '0 0 20px rgba(0, 240, 255, 0.4)' : 'none',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s, background-color 0.2s'
        }}
      />
      {/* Inner sharp dot */}
      <div
        className="fixed pointer-events-none z-[10000] rounded-full bg-[#00F0FF]"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          width: '6px',
          height: '6px',
          boxShadow: '0 0 10px #00F0FF'
        }}
      />
    </>
  );
}
