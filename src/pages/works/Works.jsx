import React, { useState } from 'react'
import ContentInOut from '../../components/animations/content-in-out/ContentInOut'
import FlipCard from '../../../src/components/cards/flipCard/flipCard'
import projects from '../../data/works'

const Works = ({ isVisible }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category  === selectedCategory || project.category2  === selectedCategory);

  return (
    <>
      <ContentInOut isVisible={isVisible} id="works">
        <div className=" min-h-[400px] xl:h-[480px] my-4 text-xl w-full p-2 sm:p-4 overflow-y-auto">

          <div className="head md:flex items-center justify-between">
            <h1 className=" xl:text-left text-center py-4   text-3xl font-semibold  my-4 " >
              <span className="text-[var(--text-1)] relative">W<span className="absolute top-2 -left-2 w-[38px] h-[38px] rounded-full  bg-gradient-to-r from-[var(--text-3)]  to-transparent"></span>
              </span>orks ({filteredProjects.length})
            </h1>

            <div className="flex flex-wrap text-sm sm:text-base gap-2 mb-4 " >
              {["All", "Full Stack", "Frontend", "Work Tasks"].map((category, i) => (
                <button
                  key={i}
                  className={` nav-link px-2 hover:text-[var(--text-1)]  py-1 rounded ${selectedCategory === category
                    ? " text-[var(--text-1)]"
                    : " text-[var(--text-2)]"
                    }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>


          <div className="grid lg:grid-cols-2 gap-4 ">
            {filteredProjects.map((project, i) => (
              <div key={i}>
                <FlipCard project={project} />
              </div> 
            ))}
          </div>


        </div>
      </ContentInOut>
    </>
  )
}

export default Works
