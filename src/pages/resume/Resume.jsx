import React from 'react'
import ContentInOut from '../../components/animations/content-in-out/ContentInOut'

const Resume = ({isVisible}) => {
  return (
    <>
     <ContentInOut isVisible={isVisible} id="resume">
     Resume Content
      </ContentInOut></>
  )
}

export default Resume
