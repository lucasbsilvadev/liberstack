import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { WarningIcon } from './CustomIcons';

const WarningAlert = ({ isOpen, onClose, onProceed }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#000000',
              border: '2px solid #7C3AED',
              borderRadius: '8px',
              padding: '2rem',
              maxWidth: '400px',
              width: '90%',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(124, 58, 237, 0.3)',
            }}
          >
            {/* Efeito de linhas de caderno no tema */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  linear-gradient(90deg, transparent 24px, rgba(124, 58, 237, 0.1) 25px, transparent 26px),
                  linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '25px 25px',
                pointerEvents: 'none',
                opacity: 0.3,
                borderRadius: '6px',
              }}
            />

            {/* Ícone de alerta */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              style={{
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  border: '2px solid #7C3AED',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  backgroundColor: 'rgba(124, 58, 237, 0.1)',
                }}
              >
                <WarningIcon size={32} color="#7C3AED" />
              </Box>
            </motion.div>

            {/* Mensagem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 700,
                  mb: 2,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Alerta de Risco
              </Typography>
              
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: '#9CA3AF',
                  lineHeight: 1.6,
                  mb: 3,
                  position: 'relative',
                  zIndex: 1,
                  fontStyle: 'italic',
                }}
              >
                "Cuidado! Ao executar essa ação você corre grandes riscos de gerar mais resultados com seu negócio"
              </Typography>
            </motion.div>

            {/* Botões */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
              }}
            >
              <Button
                onClick={onClose}
                sx={{
                  color: '#9CA3AF',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  px: 3,
                  '&:hover': {
                    color: '#7C3AED',
                    borderColor: '#7C3AED',
                    backgroundColor: 'rgba(124, 58, 237, 0.1)',
                  },
                }}
              >
                Voltar
              </Button>
              
              <Button
                onClick={onProceed}
                variant="contained"
                sx={{
                  backgroundColor: '#7C3AED',
                  color: 'white',
                  px: 3,
                  '&:hover': {
                    backgroundColor: '#6D28D9',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Prosseguir
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WarningAlert;