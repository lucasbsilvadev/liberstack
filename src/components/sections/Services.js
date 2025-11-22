import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Container, Card, CardContent, Button } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import WarningAlert from '../ui/WarningAlert';
import { RocketIcon, BriefcaseIcon, ChartIcon } from '../ui/CustomIcons';

const Services = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [hasWarningBeenShown, setHasWarningBeenShown] = useState(false);
  const [userHasScrolledToServices, setUserHasScrolledToServices] = useState(false);
  
  const sectionRef = useRef(null);
  
  // Ajuste importante: aumentar o threshold e usar uma lógica mais precisa
  const isInView = useInView(sectionRef, { 
    once: false, 
    threshold: 0.6 // ↑ Aumentei de 0.3 para 0.6 - precisa ver mais da seção
  });

  // Disparar alerta apenas quando o usuário realmente scrollou até a seção Services
  useEffect(() => {
    if (isInView && !userHasScrolledToServices) {
      setUserHasScrolledToServices(true);
      
      // Pequeno delay para garantir que o usuário está realmente vendo a seção
      const timer = setTimeout(() => {
        if (!hasWarningBeenShown) {
          setShowWarning(true);
          setHasWarningBeenShown(true);
          
          // sessionStorage com chave específica por dia
          const today = new Date().toDateString();
          const warningKey = `services_warning_shown_${today}`;
          sessionStorage.setItem(warningKey, 'true');
        }
      }, 1500); 

      return () => clearTimeout(timer);
    }
  }, [isInView, userHasScrolledToServices, hasWarningBeenShown]);

 
  useEffect(() => {
    const today = new Date().toDateString();
    const warningKey = `services_warning_shown_${today}`;
    
    
    if (sessionStorage.getItem(warningKey)) {
      setHasWarningBeenShown(true);
    } else {
      setHasWarningBeenShown(false);
    }
    
    // Resetar o estado de scroll quando o componente monta
    setUserHasScrolledToServices(false);
  }, []);

  const services = [
    {
      id: 1,
      title: 'Criação de Landing Pages',
      description: 'Desenvolvemos landing pages conversoras com design único e otimizadas para conversão, focadas em resultados tangíveis para seu negócio.',
      icon: <RocketIcon size={56} color="#7C3AED" />,
      features: ['Design Responsivo', 'Otimização SEO', 'Alta Conversão', 'Performance'],
      price: 'R$ 340,00',
      ctaText: 'Quero minha Landing Page'
    },
    {
      id: 2,
      title: 'SaaS - Em Breve',
      description: 'Sistema de gerenciamento completo para diversos nichos (educação física, saúde e bem-estar). Ferramentas integradas para escalar seu negócio.',
      icon: <BriefcaseIcon size={56} color="#7C3AED" />,
      features: ['Multi-nicho', 'Gestão Integrada', 'Relatórios Avançados', 'Suporte 24/7'],
      price: 'R$ 1.500,00',
      ctaText: 'Ser avisado do lançamento',
      comingSoon: true
    },
    {
      id: 3,
      title: 'Impulsionamento Digital',
      description: 'Estratégias de marketing digital personalizadas para aumentar sua visibilidade e atrair clientes qualificados para seu negócio.',
      icon: <ChartIcon size={56} color="#7C3AED" />,
      features: ['Gestor de Tráfego', 'Análise de Métricas', 'Campanhas Otimizadas', 'ROI Aumentado'],
      price: 'A combinar',
      ctaText: 'Potencializar meu negócio'
    }
  ];

  const handleCtaClick = (service) => {
    setSelectedService(service);
    setShowWarning(true);
  };

  const handleProceed = () => {
    setShowWarning(false);
    
    // Marcar que o alerta foi mostrado hoje
    const today = new Date().toDateString();
    const warningKey = `services_warning_shown_${today}`;
    sessionStorage.setItem(warningKey, 'true');
    
    console.log('Usuário prosseguiu com:', selectedService?.title);
    // Aqui você pode redirecionar para formulário de contato
  };

  const handleCloseWarning = () => {
    setShowWarning(false);
    
    // Marcar que o alerta foi mostrado hoje mesmo ao fechar
    const today = new Date().toDateString();
    const warningKey = `services_warning_shown_${today}`;
    sessionStorage.setItem(warningKey, 'true');
  };

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <>
      <Box
        id="services"
        ref={sectionRef}
        sx={{
          py: { xs: 8, md: 12 },
          minHeight: '100vh',
          backgroundColor: '#000000',
          background: `
            radial-gradient(circle at 10% 20%, rgba(124, 58, 237, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(124, 58, 237, 0.03) 0%, transparent 50%)
          `,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Elementos decorativos */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '200px',
            height: '200px',
            border: '1px solid rgba(124, 58, 237, 0.1)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' }
            }
          }}
        />

        <Container maxWidth="xl">
          {/* Header da seção */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              align="center" 
              gutterBottom
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2
              }}
            >
              Nossos Serviços
            </Typography>
            <Typography 
              variant="h6" 
              align="center" 
              sx={{ 
                color: '#9CA3AF',
                maxWidth: '600px',
                mx: 'auto',
                mb: 8,
                lineHeight: 1.6
              }}
            >
              Soluções completas para impulsionar seu negócio no digital. 
              Do primeiro contato à escala, estamos com você.
            </Typography>
          </motion.div>

          {/* Cards dos serviços */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
              },
              gap: 4,
              alignItems: 'stretch'
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                custom={index}
              >
                <Card
                  sx={{
                    backgroundColor: 'rgba(17, 17, 17, 0.8)',
                    border: '1px solid rgba(124, 58, 237, 0.2)',
                    borderRadius: 4,
                    padding: 0,
                    height: '100%',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'rgba(124, 58, 237, 0.5)',
                      boxShadow: '0 20px 40px rgba(124, 58, 237, 0.15)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    
                    {/* Ícone e Título */}
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          mb: 2,
                          height: 80
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{
                          color: 'white',
                          fontWeight: 600
                        }}
                      >
                        {service.title}
                        {service.comingSoon && (
                          <Box
                            component="span"
                            sx={{
                              backgroundColor: '#7C3AED',
                              color: 'white',
                              fontSize: '0.7rem',
                              px: 1,
                              py: 0.5,
                              borderRadius: 2,
                              ml: 1,
                              verticalAlign: 'middle'
                            }}
                          >
                            EM BREVE
                          </Box>
                        )}
                      </Typography>
                    </Box>

                    {/* Descrição */}
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#9CA3AF',
                        lineHeight: 1.6,
                        mb: 3,
                        flex: 1
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Features */}
                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1,
                            color: '#7C3AED'
                          }}
                        >
                          <Box
                            sx={{
                              width: 4,
                              height: 4,
                              backgroundColor: '#7C3AED',
                              borderRadius: '50%',
                              mr: 2
                            }}
                          />
                          <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Preço e CTA */}
                    <Box sx={{ mt: 'auto' }}>
                      <Typography 
                        variant="h6" 
                        align="center"
                        sx={{ 
                          color: '#7C3AED',
                          fontWeight: 700,
                          mb: 2
                        }}
                      >
                        {service.price}
                      </Typography>
                      
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={() => handleCtaClick(service)}
                        disabled={service.comingSoon}
                        sx={{
                          backgroundColor: service.comingSoon ? '#374151' : '#7C3AED',
                          color: 'white',
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: service.comingSoon ? '#374151' : '#6D28D9',
                            transform: service.comingSoon ? 'none' : 'translateY(-2px)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {service.ctaText}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Alertas interativos */}
      <WarningAlert
        isOpen={showWarning}
        onClose={handleCloseWarning}
        onProceed={handleProceed}
      />
    </>
  );
};

export default Services;