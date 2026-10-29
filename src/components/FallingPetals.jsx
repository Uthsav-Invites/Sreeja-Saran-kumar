import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * సాంప్రదాయ పుష్ప వృష్టి (Auspicious Flower Petals Shower)
 * Beautiful rose and jasmine petals falling slowly and gracefully from the top.
 */

// 1. Classic Royal Pink Rose Petal
const RosePetalSVG = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 24 28" fill="none" className={className}>
    <defs>
      <linearGradient id="roseGradRoyal" x1="10%" y1="0%" x2="90%" y2="100%">
        <stop offset="0%" stopColor="#FED7E2" />
        <stop offset="35%" stopColor="#F687B3" />
        <stop offset="75%" stopColor="#D53F8C" />
        <stop offset="100%" stopColor="#97266D" />
      </linearGradient>
    </defs>
    <path
      d="M12 2 C17 4 23 9 22 17 C21 23 16 26 12 26 C8 26 3 23 2 17 C1 9 7 4 12 2 Z"
      fill="url(#roseGradRoyal)"
      opacity="0.92"
    />
    <path
      d="M12 4 C13 10 13 18 12 24"
      stroke="#97266D"
      strokeWidth="0.6"
      strokeLinecap="round"
      opacity="0.3"
    />
  </svg>
);

// 2. Soft Blush Pink Rose Petal
const BlushRosePetalSVG = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 22 26" fill="none" className={className}>
    <defs>
      <linearGradient id="roseGradBlush" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF5F7" />
        <stop offset="45%" stopColor="#FEB2B2" />
        <stop offset="85%" stopColor="#E53E3E" />
        <stop offset="100%" stopColor="#9B2C2C" />
      </linearGradient>
    </defs>
    <path
      d="M11 2 C16 3 21 8 20 16 C19 22 15 25 11 25 C7 25 3 22 2 16 C1 8 6 3 11 2 Z"
      fill="url(#roseGradBlush)"
      opacity="0.88"
    />
  </svg>
);

// 3. Curved Fluttering Rose Petal
const CurvedRosePetalSVG = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 20 28" fill="none" className={className}>
    <defs>
      <linearGradient id="roseGradCurved" x1="30%" y1="0%" x2="70%" y2="100%">
        <stop offset="0%" stopColor="#FBB6CE" />
        <stop offset="50%" stopColor="#ED64A6" />
        <stop offset="100%" stopColor="#B83280" />
      </linearGradient>
    </defs>
    <path
      d="M10 2 C15 5 19 11 17 19 C15 25 10 27 7 26 C4 25 2 20 3 14 C4 8 7 4 10 2 Z"
      fill="url(#roseGradCurved)"
      opacity="0.9"
    />
  </svg>
);

// 4. Fragrant Jasmine Blossom Petal
const JasminePetalSVG = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 16 22" fill="none" className={className}>
    <defs>
      <linearGradient id="jasmineGradFull" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#FFF9EB" />
        <stop offset="100%" stopColor="#F6E05E" />
      </linearGradient>
    </defs>
    <path
      d="M8 1 C12 3 15 8 14 14 C13 19 11 21 8 21 C5 21 3 19 2 14 C1 8 4 3 8 1 Z"
      fill="url(#jasmineGradFull)"
      opacity="0.9"
    />
  </svg>
);

// Pure, deterministic pseudorandom function to satisfy React 19 purity rules
const getDeterministicRandom = (seed) => {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};

const FallingPetals = ({ count = 20, className = "" }) => {
  const petals = useMemo(() => {
    const types = ['rose', 'blush', 'curved', 'rose', 'blush', 'jasmine'];
    return Array.from({ length: count }, (_, i) => {
      const r1 = getDeterministicRandom(i + 1);
      const r2 = getDeterministicRandom(i + 42);
      const r3 = getDeterministicRandom(i + 99);
      const r4 = getDeterministicRandom(i + 144);

      const startX = (i * (100 / count) + (r1 * 6 - 3) + 100) % 96 + 2;
      const driftX = (r2 - 0.5) * 18;
      const duration = 9 + (i % 6) * 1.2 + r3 * 2;
      const delay = (i * 0.6) % 10;
      const size = 15 + (i % 5) * 2.2 + r4 * 2;
      const type = types[i % types.length];
      const rotateStart = (i * 41) % 360;
      const rotateEnd = rotateStart + 180 + r1 * 180;

      return {
        id: i,
        startX,
        driftX,
        duration,
        delay,
        size,
        type,
        rotateStart,
        rotateEnd,
      };
    });
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 overflow-hidden pointer-events-none z-30 ${className}`}
    >
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            y: '-10vh',
            x: `${petal.startX}vw`,
            rotate: petal.rotateStart,
            rotateX: 0,
            opacity: 0,
          }}
          animate={{
            y: ['-8vh', '108vh'],
            x: [
              `${petal.startX}vw`,
              `${petal.startX + petal.driftX * 0.5}vw`,
              `${petal.startX - petal.driftX * 0.3}vw`,
              `${petal.startX + petal.driftX}vw`,
            ],
            rotate: [petal.rotateStart, petal.rotateStart + 90, petal.rotateEnd],
            rotateX: [0, 55, 0, -55, 0],
            rotateY: [0, 90, 180, 270, 360],
            opacity: [0, 0.9, 0.95, 0.85, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${petal.size}px`,
            height: `${petal.size * 1.25}px`,
            filter: 'drop-shadow(0 2px 4px rgba(130, 10, 36, 0.15))',
            willChange: 'transform, opacity',
          }}
        >
          {petal.type === 'rose' && <RosePetalSVG />}
          {petal.type === 'blush' && <BlushRosePetalSVG />}
          {petal.type === 'curved' && <CurvedRosePetalSVG />}
          {petal.type === 'jasmine' && <JasminePetalSVG />}
        </motion.div>
      ))}
    </div>
  );
};

export default FallingPetals;
