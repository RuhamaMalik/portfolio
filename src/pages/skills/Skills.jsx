import React from 'react'
import ContentInOut from '../../components/animations/content-in-out/ContentInOut'

const Skills = ({ isVisible }) => {
  return (
    <>
      <ContentInOut isVisible={isVisible} id="skills">
        <div className=" min-h-[400px] xl:h-[480px] my-4 text-xl w-full p-4 overflow-y-auto">
          <h1 className=" xl:text-left text-center py-4   text-3xl font-semibold  my-4 " >
            <span className="text-[var(--text-1)] relative">S<span className="absolute top-2 -left-2 w-[38px] h-[38px] rounded-full  bg-gradient-to-r from-[var(--text-3)]  to-transparent"></span>
            </span>kills
          </h1>

          <div className="grid md:grid-cols-2 gap-6 justify-center">
            {
              [{ skill: "HTML5", level: 95 },
              { skill: "CSS3", level: 95 },
              { skill: "Js", level: 85 },
              { skill: "ReactJs", level: 85 },
              { skill: "NextJs", level: 60 },
              { skill: "TypeScript", level: 60 },
              { skill: "Bootstrap", level: 95 },
              { skill: "Tailwind", level: 95 },
              { skill: "NodeJs", level: 70 },
              { skill: "Firebase", level: 80 },
              { skill: "Express Js", level: 80 },
              { skill: "Mongo DB", level: 80 },
              { skill: "SQL", level: 80 },
              { skill: "Github", level: 80 },
              ].map((data, i) => (
                <div className="flex flex-col items-start gap-2" key={i}>
                  <div className="font-semibold">{data?.skill}</div>
                  <div className="bar relative w-[250px] h-[6px] bg-gray-200 rounded-full">
                    <div className={`absolute top-0 left-0 h-full bg-[var(--text-1)] w-[${data?.level}%] rounded-full`}></div>
                  </div>
                </div>
              ))
            }
          </div>
          
        </div>
      </ContentInOut>
    </>
  )
}

export default Skills
