import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../Assets/flutter_animation.json';

const FlutterAnimation = () => {
    return (
<div className="circle-container">
  <Lottie
    animationData={animationData}
    loop={true}
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
  />
</div>
    );
};

export default FlutterAnimation;
