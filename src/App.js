import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './style/theme';

// pre deploy
import LaunchCountdown from './components/sections/LaunchCountdown';

function App() {
    // exibição do pré-deploy 
  const isLaunchMode = true; 

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

  // código pra deploy (launch)
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
