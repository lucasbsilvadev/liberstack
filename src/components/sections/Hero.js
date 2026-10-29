import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import "./Hero.css";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const Hero = ({ onActivateNucleus }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHoveringLogo, setIsHoveringLogo] = React.useState(false);
  
  const isMobile = useMediaQuery("(max-width:900px)");

  const { scrollYProgress } = useScroll();

  const blurAmount = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const yShift = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const paragraphOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.45]);

  const blurFilter = useMotionTemplate`blur(${blurAmount}px)`;

  // === EFEITO 3D NO SCROLL (MOBILE) ===
  // O bloco central "mergulha" e gira levemente ao rolar a tela
  const scaleDown = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 25]);
  const zTranslation = useTransform(scrollYProgress, [0, 0.5], [0, -200]);

  const handleLogoClick = () => {
    onActivateNucleus();
  };

  return (
    <MotionBox
      id="home"
      className="hero-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "black",
        y: yShift,
        filter: blurFilter,
        // Permite que o 3D funcione (perspectiva)
        perspective: isMobile ? "1000px" : "none", 
      }}
      onMouseMove={(e) => {
        if (isMobile) return; 
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }}
    >
      {/* Título */}
      <motion.div
        className="hero-title-wrapper"
        initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: isMobile ? 0.2 : 0 }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "1.1rem", md: "1.5rem" }
          }}
        >
          usamos a tecnologia.
          <br />
          <Box component="span" sx={{ color: "#7C3AED" }}>
            libertamos a sua operação.
          </Box>
        </Typography>
      </motion.div>

      {/* Bloco Central com Efeito 3D no Mobile */}
      <Box
        className="hero-center-block"
        style={
          isMobile 
            ? { 
                scale: scaleDown, 
                rotateX: rotateX, 
                z: zTranslation,
                transformStyle: "preserve-3d" 
              } 
            : {}
        }
      >
        {[
          { liber: "#fff", stack: "#fff" },
          { liber: "transparent", stack: "transparent", outline: true },
          { liber: "#7C3AED", stack: "#7C3AED" },
          { liber: "#fff", stack: "#fff" },
        ].map((line, i) => (
          <motion.div
            key={i}
            className="hero-text-line"
            initial={
              isMobile 
                ? { opacity: 0, y: 30 } 
                : { opacity: 0, x: i % 2 === 0 ? -60 : 60 } 
            }
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: isMobile ? i * 0.15 + 0.3 : i * 0.25, 
              type: "spring",
              stiffness: 100
            }}
            whileHover={!isMobile ? { scale: 1.015, transition: { duration: 0.3 } } : {}}
            style={{
              transform: !isMobile ? `translate(${mousePos.x * 12}px, ${mousePos.y * 6}px)` : "none",
            }}
          >
            <motion.span
              style={{
                color: line.liber,
                WebkitTextStroke: line.outline ? "2px #7C3AED" : "0px transparent",
              }}
            >
              LIBER
            </motion.span>

            <span className="hero-gap"></span>

            <motion.span
              style={{
                color: line.stack,
                WebkitTextStroke: line.outline ? "2px #7C3AED" : "0px transparent",
              }}
            >
              STACK
            </motion.span>
          </motion.div>
        ))}

        {/* Logo */}
        <Box className="hero-logo-wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              x: !isMobile ? mousePos.x * 25 : 0,
              y: !isMobile ? mousePos.y * 15 : 0,
              // === EFEITO "RESPIRO" NO MOBILE (Pulse infinito) ===
              scale: isMobile 
                ? [1, 1.03, 1] 
                : (isHoveringLogo ? 1.15 : 1),
            }}
            transition={{
              // Configuração pra funcionar o pulse no mobile
              scale: isMobile 
                ? { duration: 3, repeat: Infinity, ease: "easeInOut" } 
                : { type: "spring", stiffness: 100, damping: 15 },
              opacity: { duration: 0.9, delay: isMobile ? 1 : 0 },
            }}
            whileHover={!isMobile ? {
              rotate: 3,
              transition: { type: "spring", stiffness: 150, damping: 8 },
            } : {}}
            whileTap={isMobile ? { scale: 0.95 } : {}} 
            onHoverStart={() => !isMobile && setIsHoveringLogo(true)}
            onHoverEnd={() => !isMobile && setIsHoveringLogo(false)}
            onClick={handleLogoClick}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              pointerEvents: "auto",
            }}
          >
            <motion.img
              src="/assets/libericon-nobg.png"
              alt="Icon liberstack"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: isHoveringLogo ? "drop-shadow(0 0 20px rgba(124, 58, 237, 0.6))" : "none",
                transition: "filter 0.3s ease",
              }}
            />
          </motion.div>
        </Box>
      </Box>

      {/* Parágrafo */}
      <MotionTypography
        className="hero-paragraph"
        initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: isMobile ? 0.8 : 0 }}
        variant="body1"
        style={{ opacity: paragraphOpacity }}
      >
        menos gambiarra.
        <br />
        mais controle.
        <br />
        mais autonomia.
        <br />
        mais tempo.
      </MotionTypography>
    </MotionBox>
  );
};

export default Hero;