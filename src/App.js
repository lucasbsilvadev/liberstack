import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './style/theme';

// Components
import Preloader from './components/layout/Preloader';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services'; 
import Product from './components/sections/Product';
import Feedback from './components/sections/Feedback';
import Footer from './components/layout/Footer';

function App() {
  // Para desenvolvimento, vamos mostrar o site completo
  const isLaunchMode = false; // ← Mude para false para desenvolvimento

  if (isLaunchMode) {
    // código do countdown, como não estamos usando, fica vazio
  }

  // Código completo para desenvolvimento
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Preloader />
        <Navbar />
        <Hero />
        <Services /> 
        <Product />
        <Feedback />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;