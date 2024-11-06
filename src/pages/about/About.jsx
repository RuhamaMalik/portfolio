import ContentInOut from '../../components/animations/content-in-out/ContentInOut';
import './app.css';

import React from 'react'

const About = ({ isVisible }) => {
  return (
    <  >
      <ContentInOut isVisible={isVisible} id="about" >
        <div className=" min-h-[400px] xl:h-[480px] my-4 text-xl  w-full p-4 overflow-y-auto">
          <h1 className=" xl:text-left text-center py-4   text-3xl font-bold  my-4 " >
            <span className="text-[var(--text-1)] relative">A<span className="absolute top-2 -left-2 w-[38px] h-[38px] rounded-full  bg-gradient-to-r from-[var(--text-3)]  to-transparent"></span>
            </span>bout Me
          </h1>
          <p className="text-[--text-2] text-justify text-lg">
            I look forward to bringing my strong creative, technical, and analytical skills to <span className="text-[var(--text-1)]">Full-Stack Development</span> with developing and delivering user-centric applications and solutions.
            Throughout my career, I have been recognized as a professional who is focused on finding solutions and is capable of designing and developing cutting-edge applications using cutting-edge technologies.
            I have two years experience of teaching front-end technologies. More over Completed two internships: one as a front-end developer and the other as a full-stack developer, gaining valuable hands-on experience in web development, including React.js, Next.js, and backend technologies.
          </p>

          <div className="grid lg:grid-cols-2 my-12  font-semibold text-left text-base" style={{ fontFamily: "var(--poppin) !important" }}>
            <p>DOB. . . . .<span className='text-[var(--text-2)] text-lg '> 10<sup>th</sup> Aug, 2001</span></p>
            <p>RESIDENCE. . . . .<span className='text-[var(--text-2)] text-lg '> Pakistan</span></p>
            <p>FREELANCE. . . . .<span className='text-[var(--text-2)] text-lg'> AVAILABLE</span></p>
            <p>ADDRESS. . . . .<span className='text-[var(--text-2)] text-lg'> Karachi, Pakistan.</span></p>
          </div>

        </div>
      </ContentInOut>

    </>
  )
}

export default About
