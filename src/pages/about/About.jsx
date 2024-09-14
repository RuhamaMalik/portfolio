import ContentInOut from '../../components/animations/content-in-out/ContentInOut';
import './app.css';

import React from 'react'

const About = ({ isVisible}) => {
  return (
    <  >
      <ContentInOut isVisible={isVisible} >
        About Content
      </ContentInOut>
      
    </>
  )
}

export default About
