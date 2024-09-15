import React from 'react'
import ContentInOut from '../../components/animations/content-in-out/ContentInOut'

const Works = ({isVisible}) => {
  return (
    <>
       <ContentInOut isVisible={isVisible} id="works">
       Works Content
      </ContentInOut>
    </>
  )
}

export default Works
