import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export const useCursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { position, isHovering, setIsHovering };
};

export const CursorFollower = ({ position, isHovering }: { position: { x: number; y: number }; isHovering: boolean }) => {
  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary z-[999] pointer-events-none mix-blend-difference hidden lg:block"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovering ? 3 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/30 z-[998] pointer-events-none hidden lg:block"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 1 }}
      />
    </>
  );
};
