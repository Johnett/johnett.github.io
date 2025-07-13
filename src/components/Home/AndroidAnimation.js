import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../Assets/android_animation.json';

const AndroidAnimation = () => {
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


export default AndroidAnimation;
