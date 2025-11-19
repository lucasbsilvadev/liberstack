import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Product = () => {
  return (
    <Box
      id="product"
      sx={{
        py: 8,
        minHeight: '50vh',
        backgroundColor: 'background.paper'
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h2" align="center" gutterBottom>
          Produto
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: 'text.secondary' }}>
          Em breve...
        </Typography>
      </Container>
    </Box>
  );
};

export default Product;