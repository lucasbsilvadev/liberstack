import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const NetworkDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [key, setKey] = useState(0); // Chave para forçar re-render

  useEffect(() => {
    // Reset completo quando o componente montar
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Aumentei um pouco o delay para garantir

    return () => {
      clearTimeout(timer);
      setIsVisible(false); // Reset ao desmontar
    };
  }, []);

  // FORÇA RE-RENDER AO ENTRAR NA HOME
  useEffect(() => {
    // Quando o componente é montado, muda a key para forçar re-render
    setKey(prev => prev + 1);
  }, []);

  // Configuração de variantes para animação em lote
  const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const lineVariants = {
    hidden: { 
      pathLength: 0,
      opacity: 0 
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          duration: 1.5, // Aumentei a duração para ser mais visível
          ease: "easeInOut",
          delay: 0.3 // Delay adicional para garantir que comece do zero
        },
        opacity: { 
          duration: 0.4,
          delay: 0.1
        }
      }
    }
  };

  const nodeVariants = {
    hidden: { 
      scale: 0,
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.8 // Delay maior para aparecer depois das linhas
      }
    }
  };

  const gearVariants = {
    hidden: { 
      scale: 0, 
      rotate: -180,
      opacity: 0 
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { 
        duration: 1, 
        delay: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  };

  // Pontos do diagrama
  const nodes = [
    // Camada 1 - Central e pontos cardeais
    { id: 'center', cx: 200, cy: 200, r: 12, type: 'main' },
    { id: 'north', cx: 200, cy: 80, r: 8, type: 'primary' },
    { id: 'east', cx: 320, cy: 200, r: 8, type: 'primary' },
    { id: 'south', cx: 200, cy: 320, r: 8, type: 'primary' },
    { id: 'west', cx: 80, cy: 200, r: 8, type: 'primary' },
    
    // Camada 2 - Pontos diagonais
    { id: 'ne', cx: 260, cy: 140, r: 6, type: 'secondary' },
    { id: 'se', cx: 260, cy: 260, r: 6, type: 'secondary' },
    { id: 'sw', cx: 140, cy: 260, r: 6, type: 'secondary' },
    { id: 'nw', cx: 140, cy: 140, r: 6, type: 'secondary' },
    
    // Camada 3 - Pontos externos
    { id: 'far-ne', cx: 300, cy: 100, r: 5, type: 'tertiary' },
    { id: 'far-se', cx: 300, cy: 300, r: 5, type: 'tertiary' },
    { id: 'far-sw', cx: 100, cy: 300, r: 5, type: 'tertiary' },
    { id: 'far-nw', cx: 100, cy: 100, r: 5, type: 'tertiary' },
  ];

  // Conexões
  const connections = [
    // Conexões principais do centro (mais espessas)
    { path: "M200,200 L200,80", width: 3, opacity: 1 },    // Centro → Norte
    { path: "M200,200 L320,200", width: 3, opacity: 1 },   // Centro → Leste
    { path: "M200,200 L200,320", width: 3, opacity: 1 },   // Centro → Sul
    { path: "M200,200 L80,200", width: 3, opacity: 1 },    // Centro → Oeste
    
    // Conexões diagonais do centro
    { path: "M200,200 L260,140", width: 2.5, opacity: 0.9 },   // Centro → NE
    { path: "M200,200 L260,260", width: 2.5, opacity: 0.9 },   // Centro → SE
    { path: "M200,200 L140,260", width: 2.5, opacity: 0.9 },   // Centro → SW
    { path: "M200,200 L140,140", width: 2.5, opacity: 0.9 },   // Centro → NW
    
    // Conexões entre pontos primários
    { path: "M200,80 L260,140", width: 2, opacity: 0.8 },    // Norte → NE
    { path: "M200,80 L140,140", width: 2, opacity: 0.8 },    // Norte → NW
    { path: "M320,200 L260,140", width: 2, opacity: 0.8 },   // Leste → NE
    { path: "M320,200 L260,260", width: 2, opacity: 0.8 },   // Leste → SE
    { path: "M200,320 L260,260", width: 2, opacity: 0.8 },   // Sul → SE
    { path: "M200,320 L140,260", width: 2, opacity: 0.8 },   // Sul → SW
    { path: "M80,200 L140,140", width: 2, opacity: 0.8 },    // Oeste → NW
    { path: "M80,200 L140,260", width: 2, opacity: 0.8 },    // Oeste → SW
  ];

  return (
    <Box
      key={key} // 🔥 FORÇA RE-RENDER COMPLETO
      sx={{
        width: '100%',
        maxWidth: 500,
        height: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 2
      }}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        style={{ 
          filter: 'drop-shadow(0 0 20px rgba(124, 58, 237, 0.5))'
        }}
      >
        {/* CONEXÕES - Renderizadas PRIMEIRO (no fundo) */}
        {connections.map((connection, index) => (
          <motion.path
            key={`connection-${index}-${key}`} // 🔥 Chave única por render
            d={connection.path}
            fill="none"
            stroke="#7C3AED"
            strokeLinecap="round"
            variants={lineVariants}
            strokeWidth={connection.width}
            strokeOpacity={connection.opacity}
            // 🔥 FORÇA REINÍCIO DA ANIMAÇÃO
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          />
        ))}

        {/* NÓS - Renderizados DEPOIS das linhas */}
        {nodes.map((node) => (
          <motion.circle
            key={`node-${node.id}-${key}`} // 🔥 Chave única por render
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#7C3AED"
            variants={nodeVariants}
            // 🔥 FORÇA REINÍCIO DA ANIMAÇÃO
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            style={{
              filter: node.type === 'main' 
                ? 'drop-shadow(0 0 12px rgba(124, 58, 237, 1))' 
                : 'drop-shadow(0 0 6px rgba(124, 58, 237, 0.7))'
            }}
          />
        ))}

        {/* ELEMENTO CENTRAL ESPECIAL */}
        <motion.g
          variants={gearVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Ícone de engrenagem no centro */}
          <circle cx="200" cy="200" r="14" fill="#7C3AED" />
          <circle cx="200" cy="200" r="6" fill="#000000" />
          
          {/* Pequenos raios da engrenagem */}
          {[...Array(8)].map((_, i) => (
            <rect
              key={`gear-${i}-${key}`} // 🔥 Chave única por render
              x="196"
              y="182"
              width="8"
              height="6"
              fill="#7C3AED"
              transform={`rotate(${i * 45} 200 200)`}
            />
          ))}
        </motion.g>

        {/* EFEITO DE PULSO NO CENTRO - SÓ COMEÇA DEPOIS DA ANIMAÇÃO PRINCIPAL */}
        <motion.circle
          cx="200"
          cy="200"
          r="20"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { 
            scale: [0, 2.5, 0],
            opacity: [0.8, 0.3, 0]
          } : { scale: 0, opacity: 0 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeOut",
            times: [0, 0.6, 1],
            delay: 1.5 // 🔥 Delay maior para começar após a animação principal
          }}
        />

      </motion.svg>
    </Box>
  );
};

export default NetworkDiagram;