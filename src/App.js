import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './style/theme';

// Components
import Preloader from './components/layout/Preloader';
import Navbar from './components/layout/Navbar';
import HeroDiffWrapper from './components/ui/DiffWrapper'; 
import Services from './components/sections/Services'; 
import Partners from './components/sections/Partners';
// import Feedback from './components/sections/Feedback';
import Footer from './components/layout/Footer';
import Contact from './components/sections/Contact';

function App() {
  const isLaunchMode = false;

  if (isLaunchMode) {
    // código do countdown
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Preloader />
        <Navbar />
        <HeroDiffWrapper />
        <Services /> 
        <Partners />
        {/* <Feedback /> */}
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;