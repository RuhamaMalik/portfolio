import React, { useState, useEffect } from 'react';

const ContentInOut = ({ children, isVisible , id }) => {
  const [animationClass, setAnimationClass] = useState('animate__fadeInLeft');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    if (isVisible) {
      setAnimationClass('animate__fadeInLeft');
    } else {
      setAnimationClass('animate__fadeOutLeft  -z-30');
    }
  }, [isVisible]);

  return (
    <div id={id} className={`animate__animated ${windowWidth > 1120 ? `${animationClass} h-full` : 'h-[300px] mt-4'} text-center bg-[var(--dark-3)]  text-white p-5`}>
      
      {children}
    </div>
  );
};

export default ContentInOut;
