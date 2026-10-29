// components/ui/DiffWrapper.js
import React from 'react';
import Hero from '../../components/sections/Hero';
import Diff from '../../components/sections/Diff';

const DiffWrapper = () => {
  const handleActivateNucleus = () => {
    // Rolagem suave para a seção Diff
    const diffSection = document.getElementById('diff');
    if (diffSection) {
      diffSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero onActivateNucleus={handleActivateNucleus} />
      <Diff />
    </>
  );
};

export default DiffWrapper;