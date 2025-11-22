import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { label: "home", href: "#home" },
    { label: "services", href: "#services" },
    { label: "about us", href: "#about" },
    { label: "clients", href: "#clients" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "black",
        py: 1.5, 
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Box sx={{ width: 150 }}> 
          <img
            src="/assets/liberhorizontal-nobg.png"
            alt="Liberstack"
            style={{ width: "120%"}}
          />
        </Box>

        {/* Center Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            textTransform: "lowercase",
          }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.06 }}
              style={{
                color: "#ddd",
                fontSize: "1.05rem",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </Box>

        {/* CTA Right */}
        <Button
          variant="contained"
          sx={{
            background: "#7C3AED",
            color: "white",
            px: 3,
            py: 1,
            borderRadius: "6px",
            fontWeight: 600,
            "&:hover": { background: "#6D28D9" },
          }}
        >
          começar
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
