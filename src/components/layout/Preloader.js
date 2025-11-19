import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import '../../style/preloader.css';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simula o carregamento
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return Math.min(oldProgress + Math.random() * 10, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeOut" }
          }}
        >
          <Box className="preloader-container">
            
            {/* Container da Logo e Barra de Progresso */}
            <Box className="preloader-content">
              
              {/* Logo - Sua imagem com rotação */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <img 
                  src="/assets/libericon.png" 
                  alt="liberstack" 
                  className="preloader-logo"
                  onError={(e) => {
                    // Fallback caso a imagem não carregue
                    e.target.style.display = 'none';
                    console.log('Imagem não encontrada em /assets/libericon.png');
                  }}
                />
              </motion.div>

              {/* Barra de Progresso Retangular */}
              <Box className="preloader-progress-container">
                
                {/* Barra de progresso */}
                <Box className="preloader-progress-bar">
                  
                  {/* Preenchimento animado */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                    className="preloader-progress-fill"
                  />
                  
                  {/* Padrão de linhas no fundo */}
                  <Box className="preloader-progress-pattern" />
                </Box>

                {/* Porcentagem */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Typography className="preloader-percentage">
                    {Math.round(progress)}%
                  </Typography>
                </motion.div>
              </Box>

              {/* Texto "liberstack" abaixo da barra */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Typography className="preloader-text">
                  liberstack
                </Typography>
              </motion.div>
            </Box>

            {/* Mensagem de carregamento sutil */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Typography className="preloader-subtitle">
                preparando sua experiência...
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;