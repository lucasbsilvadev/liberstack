import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.css";

const MotionBox = motion.create(Box);

const WHATSAPP_NUMBER = "5561992899096"; 

const QUESTIONS = [
  {
    id: "gargalo",
    question: "Qual o maior gargalo da sua operação?",
    options: [
      { label: "Agenda / agendamento", value: "agenda" },
      { label: "Comunicação com cliente", value: "comunicacao" },
      { label: "Geração de relatório / planilha", value: "relatorio" },
      { label: "Não sei, quero entender", value: "nao_sei" },
    ],
  },
  {
    id: "tempo",
    question: "Quanto tempo por semana você perde em tarefa manual?",
    options: [
      { label: "Menos de 2h", value: "menos_2h" },
      { label: "2-5h", value: "2_5h" },
      { label: "5-10h", value: "5_10h" },
      { label: "Mais de 10h", value: "mais_10h" },
    ],
  },
  {
    id: "site",
    question: "Você já tem site / sistema no ar?",
    options: [
      { label: "Não, do zero", value: "do_zero" },
      { label: "Tenho site, mas não resolve", value: "site_nao_resolve" },
      { label: "Tenho sistema, mas é limitado", value: "sistema_limitado" },
      { label: "Tenho tudo, quero otimizar", value: "otimizar" },
    ],
  },
  {
    id: "prazo",
    question: "Qual o prazo pra resolver?",
    options: [
      { label: "Pra ontem", value: "pra_ontem" },
      { label: "Próximos 3 meses", value: "3_meses" },
      { label: "Próximos 6 meses", value: "6_meses" },
      { label: "Só pesquisando", value: "pesquisando" },
    ],
  },
];

function getRecommendation(answers) {
  const { gargalo, tempo, site } = answers;

  if (gargalo === "agenda" && site === "do_zero") {
    return "Sistema de Agendamento sob medida.";
  }
  if (gargalo === "relatorio" && (tempo === "5_10h" || tempo === "mais_10h")) {
    return "Automação de processos (ETL, relatório, integração).";
  }
  if (gargalo === "comunicacao" && site === "site_nao_resolve") {
    return "Landing page com CTA direto pro WhatsApp.";
  }
  return "Conversa direta — o seu caso pede um diagnóstico mais detalhado.";
}

const Contact = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const currentQuestion = QUESTIONS[step];
  const progress = ((step) / QUESTIONS.length) * 100;

  const handleSelect = (value) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (answers[currentQuestion.id] === undefined) return;
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const buildWhatsAppUrl = () => {
    const recommendation = getRecommendation(answers);
    const message = `
Olá, vim pelo dosômetro da liberstack.
Minhas respostas:
- Maior gargalo: ${answers.gargalo}
- Tempo perdido: ${answers.tempo}
- Situação atual: ${answers.site}
- Prazo: ${answers.prazo}

Recomendação do dosômetro: ${recommendation}
    `.trim();
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <MotionBox
      id="contact"
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <Box className="contact-container">
        {/* Coluna esquerda: proposta */}
        <Box className="contact-proposal">
          <Typography className="contact-heading" variant="h3">
            contato
          </Typography>
          <Typography className="contact-subtitle" variant="body1">
            a gente não vende. a gente entrega.
          </Typography>

          <Box className="contact-pillars">
            <Box className="contact-pillar">
              <Typography className="contact-pillar-title" variant="h4">
                4 meses de desenvolvimento
              </Typography>
              <Typography className="contact-pillar-desc" variant="body1">
                assinou, começou. o pagamento começa no mês subsequente, permitindo parcelamento.
              </Typography>
            </Box>

            <Box className="contact-pillar">
              <Typography className="contact-pillar-title" variant="h4">
                3 meses de garantia
              </Typography>
              <Typography className="contact-pillar-desc" variant="body1">
                se der qualquer problema depois da entrega, a gente resolve. sem cobrar extra.
              </Typography>
            </Box>

            <Box className="contact-pillar">
              <Typography className="contact-pillar-title" variant="h4">
                e-mail com tudo
              </Typography>
              <Typography className="contact-pillar-desc" variant="body1">
                código no GitHub, hospedagem, domínio. você é dono do que foi feito.
              </Typography>
            </Box>

            <Box className="contact-pillar">
              <Typography className="contact-pillar-title" variant="h4">
                sem mensalidade
              </Typography>
              <Typography className="contact-pillar-desc" variant="body1">
                nunca. só custo de hospedagem e domínio (a gente te mostra como).
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Coluna direita: dosômetro */}
        <Box className="contact-dosometro">
          <Box className="contact-dosometro-header">
            <Typography className="contact-dosometro-title" variant="h4">
              dosômetro
            </Typography>
            <Typography className="contact-dosometro-subtitle" variant="body2">
              4 perguntas rápidas. a gente te diz o que faz sentido.
            </Typography>
          </Box>

          {/* Barra de progresso */}
          <Box className="contact-progress-bar">
            <Box
              className="contact-progress-fill"
              style={{ width: finished ? "100%" : `${progress}%` }}
            />
          </Box>

          <AnimatePresence mode="wait">
            {!finished ? (
              <MotionBox
                key={step}
                className="contact-question"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Typography className="contact-question-text" variant="h5">
                  {step + 1}. {currentQuestion.question}
                </Typography>

                <Box className="contact-options">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`contact-option ${
                        answers[currentQuestion.id] === option.value ? "is-selected" : ""
                      }`}
                      onClick={() => handleSelect(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </Box>

                <Box className="contact-actions">
                  {step > 0 && (
                    <Button
                      variant="text"
                      className="contact-btn-back"
                      onClick={handleBack}
                    >
                      ← voltar
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    className="contact-btn-next"
                    onClick={handleNext}
                    disabled={answers[currentQuestion.id] === undefined}
                  >
                    {step === QUESTIONS.length - 1 ? "ver resultado →" : "próxima →"}
                  </Button>
                </Box>
              </MotionBox>
            ) : (
              <MotionBox
                key="result"
                className="contact-result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Typography className="contact-result-label" variant="body2">
                  com base nas suas respostas:
                </Typography>
                <Typography className="contact-result-title" variant="h4">
                  {getRecommendation(answers)}
                </Typography>
                <Typography className="contact-result-desc" variant="body1">
                  Envia pro WhatsApp e a gente continua a conversa por lá.
                </Typography>

                <Button
                  variant="contained"
                  className="contact-btn-whatsapp"
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  enviar pro WhatsApp →
                </Button>

                <Button
                  variant="text"
                  className="contact-btn-restart"
                  onClick={() => {
                    setStep(0);
                    setAnswers({});
                    setFinished(false);
                  }}
                >
                  refazer
                </Button>
              </MotionBox>
            )}
          </AnimatePresence>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default Contact;