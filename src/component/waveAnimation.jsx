import React from 'react';
import { useSpring, animated } from 'react-spring';
import Wave from 'react-wavify'
const WaveAnimation = () => {
 

  return (
    <Wave fill='#CE4444'
    paused={false}
    style={{ display: 'flex' }}
    options={{
      height: 50,
      amplitude: 40,
      speed: 0.30,
      points: 4
    }}
/>
  );
};

export default WaveAnimation;
