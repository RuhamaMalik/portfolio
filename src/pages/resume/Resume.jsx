import ContentInOut from '../../components/animations/content-in-out/ContentInOut';
import resume from "../../data/resume";

const Resume = ({ isVisible }) => {
  return (
    <>
      <ContentInOut isVisible={isVisible} id="resume">
        {/* <div className="  min-h-[400px] xl:h-[480px] my-4 text-xl w-full p-4 overflow-y-auto"> */}
        <div className="  min-h-[400px] xl:h-[480px] my-4 text-xl w-full p-4 overflow-y-auto">

          <h1 className=" xl:text-left text-center py-4   text-3xl font-semibold  my-4 " >
            <span className="text-[var(--text-1)] relative">R<span className="absolute top-2 -left-2 w-[38px] h-[38px] rounded-full  bg-gradient-to-r from-[var(--text-3)]  to-transparent"></span>
            </span>esume
          </h1>

          <div className="grid gap-2 lg:grid-cols-2 Resume">

            {/* Education */}
            <div className=" flex flex-col lg:gap-4 py-8 column">

              <h2 className="text-xl font-semibold mb-4 pl-4 lg:text-start uppercase tracking-wide">Education <i className="fa-solid fa-graduation-cap"></i></h2>

              {
                resume.education.map((edu, i) => (
                  <div key={i} className='edu py-8 px-4 min-h-[200px] text-start experience relative'>
                    <i className="fa-solid fa-circle absolute -top-2 text-[var(--text-1)] lg:hidden text-sm -left-2"></i>

                    <p className='border border-[var(--text-1)] py-[0.5px] my-4 w-[120px] text-center text-[var(--text-1)] text-sm '>
                      {edu.duration}
                    </p>
                    <h3 className="text-base  tracking-wide font-semibold mb-2">{edu.title}</h3>
                    <p className="text-sm text-[var(--text-2)] ">{edu.institute}</p>
                  {edu.certificate &&   <a href={edu.certificate} target="_blank" className=' flex hover:gap-1 items-center cursor-pointer hover:text-[var(--text-1)] py-4 text-base mt-2 '>
                      Certificate <i className="fa-solid fa-arrow-right ml-1"></i>
                    </a>
                    }
                  </div>
                ))}


            </div>

            {/* Experience */}

            <div className=" flex flex-col  py-8 column   ">

              <h2 className="text-xl font-semibold mb-4 pl-4 lg:text-start uppercase tracking-wide">Experience <i className="fa-solid fa-briefcase"></i></h2>



              {
                resume.experience.map((edu, i) => (
                  <div key={i} className=' edu py-8 px-4 min-h-[200px] text-start experience relative'>
                    <i className="fa-solid fa-circle absolute -top-2 text-[var(--text-1)] text-sm -left-2"></i>
                    <p className='border border-[var(--text-1)] py-[0.5px]  top-0 my-4 w-[120px] text-center text-[var(--text-1)] text-sm '>{edu.duration}</p>
                    <h3 className="text-lg tracking-wide font-semibold mb-2">{edu.title}</h3>
                    <p className="text-sm tracking-wide ">{edu.institute}</p>
                    <p className="text-sm text-[var(--text-2)] py-4">{edu.description}</p>
                  </div>
                ))}



            </div>
          </div>

        </div>
      </ContentInOut></>
  )
}

export default Resume
