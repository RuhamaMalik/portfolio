import React from 'react'
import ContentInOut from '../../components/animations/content-in-out/ContentInOut'

const Contact = ({ isVisible }) => {
  return (
    <>
       <ContentInOut isVisible={isVisible}>
       Contact Content
      </ContentInOut>
    </>
  )
}

export default Contact
