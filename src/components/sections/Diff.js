import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import BinaryRain from "../ui/BinaryRain";

const MotionBox = motion.create(Box);

const Diff = () => { 
  const diffContent = [
    {
      title: "sem caixa preta",
      description:
        "você sabe exatamente o que está acontecendo: nossa política valoriza termos claros, não vamos te ligar no meio da madrugada, muito menos cobrar sem avisar no meio do mês!",
    },
    {
      title: "seu negócio, sua operação, nosso cuidado",
      description:
        "cada operação tem processos, limites e objetivos distintos. a liberstack não vende soluções genéricas, cria experiências personalizadas",
    },
    {
      title: "menos desorganização, mais estrutura",
      description:
        "todo mundo já parou pra pensar que se algo tivesse um pouco mais de tempo pra ser trabalhado, estaria ganhando bem mais. a liberstack quer fazer o seu meio de campo: a informação fica clara e facilmente acessível, você tem mais segurança e previsibilidade.",
    },
  ];

  return (
    <MotionBox
      id="diff"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: "100vh", // Mudou de height para minHeight pra não cortar no mobile
        width: "100%",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "100px 20px 60px", md: "60px" }, // Espaço pro navbar no topo mobile
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          width: "100%",
          maxWidth: "1400px",
          gap: { xs: 6, lg: 6 },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Conteúdo textual */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: "600px",
            justifyContent: "center",
            padding: { xs: "10px 0", md: "20px 0" },
            zIndex: 3, // Fica por cima da chuva se ela transbordar
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: 700,
              fontFamily: "Inter, sans-serif",
              marginBottom: 3,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            por que a{" "}
            <Box component="span" sx={{ color: "#7C3AED" }}>
              liberstack © ?
            </Box>
          </Typography>

          {diffContent.map((item, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.3 }}
              sx={{
                marginBottom: index < diffContent.length - 1 ? 2 : 0,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#7C3AED",
                  fontWeight: 700,
                  fontFamily: "Inter, sans-serif",
                  marginBottom: 1,
                  fontSize: { xs: "1rem", md: "1.1rem" }, 
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.5,
                  opacity: 0.9,
                  fontSize: { xs: "0.85rem", md: "0.9rem" }, 
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                {item.description}
              </Typography>

              {index < diffContent.length - 1 && (
                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    background: "rgba(124, 58, 237, 0.3)",
                    margin: "1rem 0", 
                    display: { xs: "none", lg: "block" },
                  }}
                />
              )}
            </MotionBox>
          ))}
        </Box>

        {/* Imagem com chuva binária (UM pássaro só) */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            minHeight: { xs: "350px", md: "500px" }, // Altura garantida pro efeito
            overflow: "hidden", // A chuva não vaza pros lados no mobile
          }}
        >
          {/* Chuva binária */}
          <BinaryRain
            columns={18}
            charsPerColumn={30}
            opacity={0.22}
            color="#7C3AED"
            speed={1}
          />

          {/* Pássaro único */}
          <Box
            component="img"
            src="/assets/liberbird.png"
            alt="Liberstack"
            sx={{
              position: "relative",
              zIndex: 2,
              width: { xs: "70%", md: "60%", lg: "55%" },
              maxWidth: "340px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 25px rgba(124, 58, 237, 0.35))",
            }}
          />
        </MotionBox>
      </Box>
    </MotionBox>
  );
};

export default Diff;