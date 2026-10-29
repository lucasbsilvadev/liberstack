import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
  { label: "home", href: "#home" },
  { label: "services", href: "#services" },
  { label: "diff", href: "#diff" },
  { label: "parceiros", href: "#partners" },
  { label: "contato", href: "#contact" },
];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <AppBar position="fixed" elevation={0} className="navbar-appbar">
      <Toolbar className="navbar-toolbar">
        
        {/* Hamburger (Mobile) */}
        <IconButton className="navbar-hamburger" onClick={handleDrawerToggle} sx={{ color: '#ddd' }}>
          <MenuIcon />
        </IconButton>

        {/* Logo */}
         <Box className="navbar-logo-wrapper">
          <img src="/assets/liberhorizontal-nobg.png" alt="Liberstack" />
        </Box> 
        {/* Links Desktop */}
        <Box className="navbar-links">
          {navItems.map((item) => (
            <motion.a key={item.label} href={item.href} className="navbar-link" whileHover={{ scale: 1.06 }}>
              {item.label}
            </motion.a>
          ))}
        </Box>

        {/* CTA Right */}
        <Button variant="contained" className="navbar-cta">
          começar
        </Button>

      </Toolbar>

      {/* Drawer (Menu Mobile) */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            background: '#000000', // Fundo preto puro pra combinar com o tema
            width: '80%',
            maxWidth: '320px',
            borderRight: '1px solid rgba(124, 58, 237, 0.2)', // Borda sutil roxa
            padding: 0,
          }
        }}
      >
        {/* HEADER DA SIDEBAR */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '20px 24px',
          borderBottom: '1px solid rgba(124, 58, 237, 0.1)'
        }}>
          <Typography 
            sx={{ 
              fontFamily: 'VT323, monospace', 
              color: '#7C3AED', 
              fontSize: '1.8rem',
              letterSpacing: '0.05em',
              textTransform: 'lowercase',
              lineHeight: 1
            }}
          >
            liberstack
          </Typography>
          
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#555', '&:hover': { color: '#7C3AED' } }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* LISTA DE LINKS */}
        <List sx={{ padding: '20px 0' }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton 
                component="a" 
                href={item.href} 
                onClick={handleDrawerToggle}
                sx={{
                  padding: '12px 24px',
                  '&:hover': {
                    backgroundColor: 'rgba(124, 58, 237, 0.08)',
                    '& .MuiListItemText-primary': { color: '#7C3AED' }
                  }
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{
                    fontFamily: 'Space Mono, monospace',
                    color: '#ccc',
                    fontSize: '1.1rem',
                    textTransform: 'lowercase',
                    transition: 'color 0.2s ease'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;