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

  // lançamento prorrogado
  const launchDate = new Date('2026-09-29T00:00:00');

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
      } else {
        // Zera o contador caso a data passe
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

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

  const socialLinks = [
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com/liberstack' },
    { name: 'TikTok', icon: <TikTokIcon />, url: 'https://tiktok.com/@liberstack' }
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
          top: 0, left: 0, right: 0, bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.03) 0%, transparent 50%)
          `,
        }
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', top: '15%', left: '10%', width: 60, height: 60, border: '1px solid rgba(124, 58, 237, 0.1)', borderRadius: '50%' }}
      />
      
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '90vh', justifyContent: 'space-between', py: 8 }}>
          
          <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <Box sx={{ mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <Typography variant="h3" sx={{ color: '#7C3AED', fontWeight: 'bold', letterSpacing: '-0.02em' }}>
                  liberstack
               </Typography>
            </Box>
          </motion.div>

          <Box sx={{ flex:
