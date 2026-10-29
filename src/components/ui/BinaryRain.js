// src/components/ui/BinaryRain.js
import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

/**
 * Chuva de "0" e "1" para usar como fundo decorativo.
 * Props:
 *  - columns: número de colunas verticais (default 20)
 *  - charsPerColumn: altura de cada coluna em caracteres (default 24)
 *  - opacity: opacidade geral (default 0.18)
 *  - color: cor dos caracteres (default '#7C3AED')
 *  - speed: multiplicador de velocidade (default 1). Menor = mais rápido.
 *  - density: proporção da altura que a coluna preenche (0-1, default 0.7)
 */
const BinaryRain = ({
  columns = 10,
  charsPerColumn = 24,
  opacity = 0.18,
  color = '#7C3AED',
  speed = 1,
  density = 0.7,
}) => {
  // useMemo garante que as colunas só são geradas uma vez por montagem,
  // evitando recriação a cada re-render (performance).
  const cols = useMemo(() => {
    return Array.from({ length: columns }).map((_, i) => {
      const chars = Array.from({ length: charsPerColumn })
        .map(() => (Math.random() > 0.5 ? '1' : '0'))
        .join('\n');
      return {
        id: i,
        chars,
        delay: Math.random() * 5,
        duration: (8 + Math.random() * 8) * speed,
        left: `${(i / columns) * 100}%`,
        charsPerColumn,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns, charsPerColumn]);

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        opacity,
        color,
        fontFamily: 'monospace',
        fontSize: { xs: '0.55rem', sm: '0.65rem', md: '0.75rem' },
        lineHeight: 1.1,
        userSelect: 'none',
        whiteSpace: 'pre',
      }}
    >
      {cols.map((col) => (
        <motion.div
          key={col.id}
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{
            duration: col.duration,
            delay: col.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: col.left,
            height: `${density * 100}%`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          {col.chars}
        </motion.div>
      ))}
    </Box>
  );
};

export default BinaryRain;