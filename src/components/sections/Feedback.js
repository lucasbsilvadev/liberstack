import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Feedback = () => {
  return (
    <Box
      id="feedback"
      sx={{
        py: 8,
        minHeight: '50vh',
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h2" align="center" gutterBottom>
          Feedback
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: 'text.secondary' }}>
          Em breve...
        </Typography>
      </Container>
    </Box>
  );
};

export default Feedback;