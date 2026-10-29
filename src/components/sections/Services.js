import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import "./Services.css";

const MotionBox = motion.create(Box);

const SERVICES = [
  {
    id: "site",
    title: "Site no ar, rápido, com a sua cara.",
    description:
      "landing page com animação, interação e CTA direto pro WhatsApp. ou formulário que estrutura os dados e manda pro seu comercial.",
    images: [
      "/assets/services/site/site-1.png",
      "/assets/services/site/site-2.png",
      "/assets/services/site/site-3.png",
    ],
  },
  {
    id: "automacao",
    title: "do Excel pro sistema, sem ctrl + c e ctrl + v.",
    description:
      "integração entre sistemas, ETL, geração automática de relatório, alimentação de dados. o que era manual vira software.",
    images: [
      "/assets/services/automacao/automacao-1.png",
      "/assets/services/automacao/automacao-2.png",
      "/assets/services/automacao/automacao-3.png",
    ],
  },
  {
    id: "sistema",
    title: "uma ferramenta que resolve os seus processos, não o contrário.",
    description:
      "agendamento com regra de disponibilidade, carrinho com checkout, geração de PDF, painel admin. sistema que faz o que a sua operação precisa.",
    images: [
      "/assets/services/sistema/sistema-1.png",
      "/assets/services/sistema/sistema-2.png",
      "/assets/services/sistema/sistema-3.png",
    ],
  },
];

const ServiceCard = ({ service }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <MotionBox
      className="service-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Imagem principal com crossfade */}
      <Box className="service-card-image-wrapper">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={service.images[activeImage]}
            alt={service.title}
            className="service-card-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      </Box>

      {/* Miniaturas */}
      <Box className="service-card-thumbs">
        {service.images.map((img, idx) => (
          <button
            key={img}
            type="button"
            className={`service-thumb ${activeImage === idx ? "is-active" : ""}`}
            onMouseEnter={() => setActiveImage(idx)}
            onFocus={() => setActiveImage(idx)}
            onClick={() => setActiveImage(idx)}
            aria-label={`Ver variação ${idx + 1}`}
          >
            <img src={img} alt="" />
          </button>
        ))}
      </Box>

      {/* Texto */}
      <Box className="service-card-info">
        <Typography className="service-card-title" variant="h4">
          {service.title}
        </Typography>
        <Typography className="service-card-desc" variant="body1">
          {service.description}
        </Typography>
      </Box>
    </MotionBox>
  );
};

const Services = () => {
  return (
    <MotionBox
      id="services"
      className="services-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <Box className="services-container">
        <Typography className="services-heading" variant="h3">
          nossos <Box component="span" sx={{ color: "#7C3AED" }}>serviços</Box>
        </Typography>

        <Box className="services-grid">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </Box>
      </Box>
    </MotionBox>
  );
};

export default Services;