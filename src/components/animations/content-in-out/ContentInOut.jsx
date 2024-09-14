import React, { useState, useEffect } from 'react';

const ContentInOut = ({ children, isVisible }) => {
  const [animationClass, setAnimationClass] = useState('animate__fadeInLeft');
  
  useEffect(() => {
    if (isVisible ) {
      setAnimationClass('animate__fadeInLeft');
    } else {
      setAnimationClass('animate__fadeOutLeft  -z-30');
    }
  }, [isVisible]);

  return (
    <div className={`animate__animated ${animationClass} h-full text-center  text-white p-5`}>
      {children}
    </div>
  );
};

export default ContentInOut;
