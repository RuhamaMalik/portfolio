import React from 'react'
import ContentInOut from '../../components/animations/content-in-out/ContentInOut'

const Skills = ({isVisible}) => {
  return (
    <>
       <ContentInOut isVisible={isVisible} id="skills">
       Skills Content
      </ContentInOut>
    </>
  )
}

export default Skills
