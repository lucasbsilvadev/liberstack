import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const LaunchCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const launchDate = new Date('2025-12-15T00:00:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = launchDate - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  // Countdown minimalista
  const CountdownNumber = ({ number, label }) => (
    <Box sx={{ textAlign: 'center', mx: 2 }}>
      <Box
        sx={{
          backgroundColor: 'rgba(124, 58, 237, 0.1)',
          border: '1px solid rgba(124, 58, 237, 0.3)',
          borderRadius: 2,
          padding: 3,
          minWidth: 100,
          position: 'relative',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#7C3AED',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          {number.toString().padStart(2, '0')}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: '#9CA3AF',
          mt: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontSize: '0.875rem',
          fontWeight: 600
        }}
      >
        {label}
      </Typography>
    </Box>
  );

  // Ícones SVG inline para redes sociais
  const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const TikTokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
    </svg>
  );

  // Configuração das redes sociais
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <InstagramIcon />,
      url: 'https://instagram.com/liberstack' 
    },
    { 
      name: 'TikTok', 
      icon: <TikTokIcon />,
      url: 'https://tiktok.com/@liberstack' 
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.03) 0%, transparent 50%)
          `,
        }
      }}
    >

      {/* Elementos decorativos animados mais sutis */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: 60,
          height: 60,
          border: '1px solid rgba(124, 58, 237, 0.1)',
          borderRadius: '50%',
        }}
      />
      
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: 80,
          height: 80,
          border: '1px solid rgba(124, 58, 237, 0.08)',
          borderRadius: '50%',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center', 
          position: 'relative', 
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '90vh',
          justifyContent: 'space-between',
          py: 8
        }}>
          
          {/* Header com Logo - Agora no topo com mais destaque */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ 
              mb: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img 
                src="/assets/liberhorizontal-nobg.png" 
                alt="liberstack" 
                style={{ 
                  height: 100,
                  width: 'auto',
                  maxWidth: '100%',
                  marginBottom: '2rem'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const parent = e.target.parentNode;
                  parent.innerHTML = `
                    <span style="color: #7C3AED; font-weight: bold; font-size: 4rem; font-family: system-ui;">
                      liberstack
                    </span>
                  `;
                }}
              />
              
              {/* Linha decorativa abaixo da logo */}
              <Box
             
              />
            </Box>
          </motion.div>

          {/* Conteúdo Principal Centralizado */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            {/* Título Principal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '4.5rem' },
                  mb: 3,
                  lineHeight: 1.1
                }}
              >
                Em Construção
              </Typography>
            </motion.div>

            {/* Subtítulo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#9CA3AF',
                  fontWeight: 400,
                  mb: 8,
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.4rem' }
                }}
              >
                Estamos preparando algo incrível! 
                <Box component="span" sx={{ color: '#7C3AED', fontWeight: 600 }}>
                  {' '}Tecnologia que conecta e expande
                </Box>
              </Typography>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                flexWrap: 'wrap',
                gap: 3,
                mb: 8 
              }}>
                <CountdownNumber number={timeLeft.days} label="Dias" />
                <CountdownNumber number={timeLeft.hours} label="Horas" />
                <CountdownNumber number={timeLeft.minutes} label="Minutos" />
                <CountdownNumber number={timeLeft.seconds} label="Segundos" />
              </Box>
            </motion.div>

            {/* Mensagem de Missão */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#6B7280',
                  fontStyle: 'italic',
                  maxWidth: 500,
                  mx: 'auto',
                  borderTop: '1px solid rgba(124, 58, 237, 0.2)',
                  pt: 4,
                  mt: 4,
                  mb: 8,
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}
              >
                "Integrar e ampliar a tecnologia no sentido da distribuição de informação segura e confiável."
              </Typography>
            </motion.div>
          </Box>

          {/* Footer com Redes Sociais - Agora fixo na parte inferior */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Box sx={{ 
              mt: 8,
              pt: 4,
              borderTop: '1px solid rgba(124, 58, 237, 0.1)'
            }}>
              
              {/* Texto de chamada para redes sociais */}
              <Typography
                variant="body2"
                sx={{
                  color: '#6B7280',
                  mb: 3,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '0.875rem'
                }}
              >
                Acompanhe nosso lançamento
              </Typography>
              
              {/* Links de Redes Sociais com ícones SVG */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 3,
                flexWrap: 'wrap'
              }}>
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#9CA3AF',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        px: 4,
                        py: 1.5,
                        borderRadius: 3,
                        minWidth: 140,
                        '&:hover': {
                          color: '#7C3AED',
                          borderColor: '#7C3AED',
                          backgroundColor: 'rgba(124, 58, 237, 0.08)',
                          transform: 'translateY(-2px)'
                        },
                        transition: 'all 0.3s ease-in-out',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        fontSize: '0.95rem',
                        fontWeight: 500
                      }}
                    >
                      {social.icon}
                      {social.name}
                    </Button>
                  </motion.div>
                ))}
              </Box>

              {/* Copyright */}
              <Typography
                variant="caption"
                sx={{
                  color: '#4B5563',
                  mt: 4,
                  display: 'block',
                  fontSize: '0.8rem'
                }}
              >
                © 2025 Liberstack. Todos os direitos reservados.
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default LaunchCountdown;