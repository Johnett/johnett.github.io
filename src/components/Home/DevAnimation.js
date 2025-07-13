import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../Assets/dev_animation.json';

const DevAnimation = () => {
  return (
    <div style={{ height: '80%', width: '80%' }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default DevAnimation;
