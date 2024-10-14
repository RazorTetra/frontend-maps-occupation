import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../providers/themeProvider'; // Sesuaikan path import sesuai struktur proyek Anda

const AnimatedGridBackground: React.FC = () => {
  const { mode } = useTheme();
  const [gridColor, setGridColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#F3F4F6');

  useEffect(() => {
    if (mode === 'dark') {
      setGridColor('#FFFFFF');
      setBackgroundColor('#1F2937');
    } else {
      setGridColor('#000000');
      setBackgroundColor('#F3F4F6');
    }
  }, [mode]);

  const gridSize = 20;
  const cellSize = 100 / gridSize;

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor }}>
      <motion.div
        className="w-full h-full"
        initial={{ rotateX: 60, rotateZ: 0 }}
        animate={{ rotateX: 60, rotateZ: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Horizontal lines */}
          {Array.from({ length: gridSize + 1 }).map((_, index) => (
            <motion.line
              key={`h-${index}`}
              x1="0%"
              y1={`${index * cellSize}%`}
              x2="100%"
              y2={`${index * cellSize}%`}
              stroke={gridColor}
              strokeWidth="0.5"
              strokeOpacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: index * 0.1, ease: "easeInOut" }}
            />
          ))}
          {/* Vertical lines */}
          {Array.from({ length: gridSize + 1 }).map((_, index) => (
            <motion.line
              key={`v-${index}`}
              x1={`${index * cellSize}%`}
              y1="0%"
              x2={`${index * cellSize}%`}
              y2="100%"
              stroke={gridColor}
              strokeWidth="0.5"
              strokeOpacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: index * 0.1, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

export default AnimatedGridBackground;