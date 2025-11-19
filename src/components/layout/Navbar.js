import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Produto', href: '#product' },
    { name: 'Feedback', href: '#feedback' }
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: '#000000', 
          borderBottom: '1px solid rgba(124, 58, 237, 0.3)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            sx={{ 
              py: 2,
              minHeight: '80px !important',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              gap: 2
            }}
          >
            
            {/* Logo à ESQUERDA */}
            <Box sx={{ display: 'flex', flexShrink: 0 }}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Box
                  sx={{
                    width: 300,
                    height: 50,
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                  }}
                >
                  <img 
                    src="/assets/liberhorizontal-nobg.png" 
                    alt="liberstack" 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                    onError={(e) => {
                      console.log('Erro ao carregar logo:', e.target.src);
                      e.target.style.display = 'none';
                      const parent = e.target.parentNode;
                      parent.innerHTML = '<span style="color: #7C3AED; font-weight: bold; font-size: 1.2rem;">liberstack</span>';
                      parent.style.display = 'flex';
                      parent.style.alignItems = 'center';
                      parent.style.justifyContent = 'center';
                    }}
                    onLoad={(e) => {
                      console.log('Logo carregada com sucesso:', e.target.src);
                    }}
                  />
                </Box>
              </motion.div>
            </Box>

            {/* Links de navegação - CENTRO */}
            <Box sx={{ 
              display: { xs: 'none', lg: 'flex' }, 
              gap: 3,
              flex: 1,
              justifyContent: 'center',
              mx: 4
            }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    href={item.href}
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      '&:hover': {
                        // color: '#7C3AED',
                        // backgroundColor: 'rgba(124, 58, 237, 0.1)',
                        
                      },
                      transition: 'all 0.2s ease-in-out',
                      position: 'relative',
                    }}
                  >
                    {item.name}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: '2px',
                        backgroundColor: '#7C3AED',
                        transition: 'width 0.2s ease-in-out',
                      }}
                      className="link-underline"
                    />
                  </Button>
                </motion.div>
              ))}
            </Box>

            {/* CTA à DIREITA */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'flex-end',
              flexShrink: 0,
              gap: 2
            }}>
              
              {/* Menu Mobile */}
              <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
                <Button
                  sx={{
                    color: 'text.secondary',
                    minWidth: 'auto',
                    px: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(124, 58, 237, 0.1)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Box sx={{ width: 20, height: 2, backgroundColor: 'currentColor' }} />
                    <Box sx={{ width: 20, height: 2, backgroundColor: 'currentColor' }} />
                    <Box sx={{ width: 20, height: 2, backgroundColor: 'currentColor' }} />
                  </Box>
                </Button>
              </Box>

              {/* Botão CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#7C3AED',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: '#6D28D9',
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  Começar
                </Button>
              </motion.div>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;