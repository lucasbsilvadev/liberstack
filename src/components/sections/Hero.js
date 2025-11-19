import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import NetworkDiagram from '../ui/NetworkDiagram';

const Hero = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    efficiency: 0
  });

  useEffect(() => {
    // Animação dos contadores
    const animateCounters = () => {
      const targetValues = { projects: 150, clients: 89, efficiency: 97 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let step = 0;

      const timer = setInterval(() => {
        step += 1;
        const progress = step / steps;

        setCounters({
          projects: Math.floor(targetValues.projects * progress),
          clients: Math.floor(targetValues.clients * progress),
          efficiency: Math.floor(targetValues.efficiency * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targetValues);
        }
      }, stepDuration);
    };

    // Inicia a animação após um delay
    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 8,
            alignItems: 'center'
          }}
        >
          {/* Conteúdo à ESQUERDA */}
          <Box sx={{ order: { xs: 2, lg: 1 } }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Título com destaque em roxo */}
              <Typography 
                variant="h1" 
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 600,
                  lineHeight: 1.1,
                  mb: 3
                }}
              >
                Tecnologia que{' '}
                <Box 
                  component="span" 
                  sx={{ color: '#7C3AED' }}
                >
                  conecta
                </Box>{' '}
                e{' '}
                <Box 
                  component="span" 
                  sx={{ color: '#7C3AED' }}
                >
                  expande
                </Box>
                .
              </Typography>
              
              {/* Parágrafo da missão */}
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  color: 'text.secondary',
                  lineHeight: 1.6
                }}
              >
                Integrar e ampliar a tecnologia no sentido da distribuição de informação segura e confiável.
              </Typography>
            </motion.div>

            {/* INDICADORES DE DESEMPENHO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box 
                sx={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 3,
                  mb: 4,
                  py: 3,
                  borderTop: '1px solid',
                  borderBottom: '1px solid',
                  borderColor: 'rgba(124, 58, 237, 0.2)'
                }}
              >
                {/* Projetos */}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: '#7C3AED',
                      fontWeight: 700,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      mb: 1
                    }}
                  >
                    +{counters.projects}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      fontSize: '0.875rem',
                      letterSpacing: '0.1em'
                    }}
                  >
                    Projetos
                  </Typography>
                </Box>

                {/* Clientes */}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: '#7C3AED',
                      fontWeight: 700,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      mb: 1
                    }}
                  >
                    +{counters.clients}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      fontSize: '0.875rem',
                      letterSpacing: '0.1em'
                    }}
                  >
                    Clientes
                  </Typography>
                </Box>

                {/* Eficiência */}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: '#7C3AED',
                      fontWeight: 700,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      mb: 1
                    }}
                  >
                    {counters.efficiency}%
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      fontSize: '0.875rem',
                      letterSpacing: '0.1em'
                    }}
                  >
                    Eficiência
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            {/* BOTÃO CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#7C3AED',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#6D28D9',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(124, 58, 237, 0.4)'
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                Iniciar Projeto
              </Button>
            </motion.div>
          </Box>

          {/* Animação à DIREITA */}
          <Box sx={{ 
            order: { xs: 1, lg: 2 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <NetworkDiagram />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;