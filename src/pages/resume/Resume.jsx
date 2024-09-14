import React from 'react'
import ContentInOut from '../../components/animations/content-in-out/ContentInOut'

const Resume = ({isVisible}) => {
  return (
    <>
     <ContentInOut isVisible={isVisible}>
     Resume Content
      </ContentInOut></>
  )
}

export default Resume
