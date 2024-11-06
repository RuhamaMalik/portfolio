import React, { useState } from 'react'
import ContentInOut from '../../components/animations/content-in-out/ContentInOut'
import FlipCard from '../../../src/components/cards/flipCard/flipCard'
import IMG1 from '../../../src/images/portfolio1.png'
import IMG2 from '../../../src/images/portfolio2.png'
import IMG3 from '../../../src/images/portfolio3.png'
import IMG4 from '../../../src/images/portfolio4.png'
import IMG5 from '../../../src/images/portfolio5.png'
import IMG6 from '../../../src/images/portfolio6.png'
import IMG7 from '../../../src/images/portfolio7.png'
import IMG8 from '../../../src/images/portfolio8.png'
import IMG9 from '../../../src/images/portfolio9.png'
import IMG10 from '../../../src/images/portfolio10.png'
import IMG611 from '../../../src/images/portfolio11.png'
import IMG12 from '../../../src/images/portfolio12.png'
import IMG13 from '../../../src/images/portfolio13.png'
import IMG14 from '../../../src/images/portfolio14.png'
import IMG15 from '../../../src/images/portfolio15.png'
import IMG16 from '../../../src/images/portfolio16.png'


const Works = ({ isVisible }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    { id: 1, image: IMG1, name: "Project A", category: "Full Stack", },
    { id: 2, image: IMG2, name: "Project B", category: "Frontend", },
    { id: 2, image: IMG2, name: "Project B", category: "Frontend", },
    { id: 2, image: IMG2, name: "Project B", category: "Frontend", },
    { id: 2, image: IMG2, name: "Project B", category: "Frontend", },
    { id: 2, image: IMG2, name: "Project B", category: "Frontend", },
    { id: 2, image: IMG2, name: "Project B", category: "Frontend", },
    { id: 2, image: IMG2, name: "Project B", category: "Frontend", },
    { id: 2, image: IMG2, name: "Project B", category: "Frontend", },
    { id: 2, image: IMG2, name: "Project B", category: "Frontend", },
    { id: 2, image: IMG2, name: "Project B", category: "Frontend", },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <ContentInOut isVisible={isVisible} id="works">
        <div className=" min-h-[400px] xl:h-[480px] my-4 text-xl w-full p-2 sm:p-4 overflow-y-auto">

          <div className="head md:flex items-center justify-between">
            <h1 className=" xl:text-left text-center py-4   text-3xl font-semibold  my-4 " >
              <span className="text-[var(--text-1)] relative">W<span className="absolute top-2 -left-2 w-[38px] h-[38px] rounded-full  bg-gradient-to-r from-[var(--text-3)]  to-transparent"></span>
              </span>orks
            </h1>

            <div className="flex flex-wrap text-sm sm:text-base gap-2 mb-4 " >
              {["All", "Full Stack", "Frontend", "Backend"].map((category, i) => (
                <button
                  key={i}
                  className={`sm:px-2 sm:m-2 py-1 rounded ${selectedCategory === category
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
