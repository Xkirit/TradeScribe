// src/components/ParticlesBackground.js
import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          move: {
            speed: 1,
          },
          line_linked: {
            enable: true,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
