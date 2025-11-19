import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './style/theme';

// Importe apenas o componente de countdown
import LaunchCountdown from './components/sections/LaunchCountdown';

function App() {
  // Para o deploy temporário, vamos exibir apenas o countdown
  const isLaunchMode = true; // Mude para false quando quiser voltar ao site completo

  if (isLaunchMode) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <LaunchCountdown />
        </div>
      </ThemeProvider>
    );
  }

  // Código original para quando voltar ao site completo
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {/* <Preloader />
        <Navbar />
        <Hero />
        <Services />
        <Product />
        <Feedback />
        <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;