import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./Partners.css";

const MotionBox = motion.create(Box);

const PARTNERS = [
  {
    id: "luissaboia",
    name: "Luis Saboia Personal Trainer",
    tag: "landing page",
    description:
      "landing page editorial com form de anamnese (one-question-per-screen). direciona o cliente e coleta informações para o operacional",
    image: "/assets/partners/partners-luissaboia.png",
    link: "https://luissaboia.com.br",
  },
  {
    id: "cromadrip",
    name: "Croma Drip",
    tag: "loja virtual",
    description:
      "loja virtual com carrinho, checkout e integração com WhatsApp. cada pedido vira mensagem estruturada que facilita o atendimento do cliente.",
    image: "/assets/partners/partners-croma-drip.png",
    link: "https://cromadrip.com.br",
  },
];

const PartnerCard = ({ partner, index }) => (
  <MotionBox
    className="partner-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
  >
    <a
      href={partner.link}
      target="_blank"
      rel="noopener noreferrer"
      className="partner-card-link"
    >
      <Box className="partner-card-image-wrapper">
        <img
          src={partner.image}
          alt={partner.name}
          className="partner-card-image"
        />
        <Box className="partner-card-tag">{partner.tag}</Box>
      </Box>
      <Box className="partner-card-info">
        <Typography className="partner-card-name" variant="h4">
          {partner.name}
        </Typography>
        <Typography className="partner-card-desc" variant="body1">
          {partner.description}
        </Typography>
        <Typography className="partner-card-cta" variant="body2">
          visitar →
        </Typography>
      </Box>
    </a>
  </MotionBox>
);

const Partners = () => {
  return (
    <MotionBox
      id="partners"
      className="partners-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <Box className="partners-container">
        <Box className="partners-header">
          <Typography className="partners-heading" variant="h3">
            parceiros
          </Typography>
          <Typography className="partners-subtitle" variant="body1">
            o que já tá no ar.
          </Typography>
        </Box>

        <Box className="partners-grid">
          {PARTNERS.map((partner, index) => (
            <PartnerCard key={partner.id} partner={partner} index={index} />
          ))}
        </Box>
      </Box>
    </MotionBox>
  );
};

export default Partners;