import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: '1px solid rgba(124, 58, 237, 0.2)',
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            liberstack © {new Date().getFullYear()}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              contato@liberstack.com
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              (11) 99999-9999
            </Typography>
          </Box>
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Todos os direitos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;