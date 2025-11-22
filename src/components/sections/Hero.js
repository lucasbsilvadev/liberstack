import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        width: "100%",
        background: "black",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Texto Superior Esquerdo - Ajustado para ficar mais acima */}
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          top: 100, // Aumentei de 150 para 100 para subir mais
          left: 60,
          color: "white",
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
          zIndex: 10, // Garantir que fique acima de outros elementos
        }}
      >
        Tecnologia que{" "}
        <Box component="span" sx={{ color: "#7C3AED" }}>
          conecta
        </Box>{" "}
        e expande.
      </Typography>

      {/* Container Principal */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "-40px", 
        }}
      >
       
        {[
          { liber: "#fff", stack: "#fff" },
          { liber: "transparent", stack: "transparent", outline: true },
          { liber: "#7C3AED", stack: "#7C3AED" },
          { liber: "#fff", stack: "#fff" },
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.25 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 900,
              fontSize: "4.4rem",
              height: "80px",
              position: "relative",
              zIndex: 2, // Texto atrás do ícone
            }}
          >
            {/* LIBER */}
            <span
              style={{
                color: line.liber,
                WebkitTextStroke: line.outline ? "2px #7C3AED" : "0px transparent",
              }}
            >
              LIBER
            </span>

            {/* ESPAÇO RESERVADO PARA O LOGO (300px de largura) */}
            <span style={{ width: "300px", display: "inline-block" }}></span>

            {/* STACK */}
            <span
              style={{
                color: line.stack,
                WebkitTextStroke: line.outline ? "2px #7C3AED" : "0px transparent",
              }}
            >
              STACK
            </span>
          </motion.div>
        ))}

        {/* LOGO ÚNICO CENTRALIZADO - COM zIndex MAIOR PARA SOBREPOR O TEXTO */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 5, // zIndex maior para ficar sobre o texto
            width: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/libericon-nobg.png"
            alt="Liberstack"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>

      {/* Texto Inferior Direito */}
      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          bottom: 60,
          right: 60,
          width: "350px",
          textAlign: "right",
          color: "white",
          fontSize: "1.1rem",
          lineHeight: 1.5,
          fontFamily: "Inter, sans-serif",
        }}
      >
        Integrar e ampliar a tecnologia no sentido da distribuição
        de informação segura e confiável.
      </Typography>
    </Box>
  );
};

export default Hero;