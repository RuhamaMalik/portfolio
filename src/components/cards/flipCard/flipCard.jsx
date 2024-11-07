const flipCard = ({ project }) => {
    return (
        <div
            className="group h-[250px] sm:h-[300px] m-auto w-full sm:w-[80%]   lg:h-[220px] lg:w-[340px] xl:w-[280px] rounded-xl  [perspective:1000px]"
            style={{ boxShadow: "4px 4px var(--text-3)" }}        >
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front  */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-white [backface-visibility:hidden]">

                    <img
                        className=" cursor-pointer  h-full w-full rounded-xl"
                        src={project.image}
                        alt={project.name}
                    />

                    <p className=" absolute bottom-10 min-w-[100px] text-white bg-[var(--text-1)] p-2  md:my-6 text-base">{project.name}</p>
                    <p className=" absolute bottom-0 min-w-[120px] text-white bg-green-500 p-1  md:my-6 text-sm">{project.status}</p>
                </div>

                {/* Back*/}

                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {/* Gradient Overlay */}
                    <div className="absolute -z-10  inset-0 bg-gradient-to-t from-white to-transparent opacity-60 rounded-xl"></div>

                    <div className="flex min-h-full flex-col items-center justify-center">
                        <h2 className="text-xl font-bold ">
                            {project.name}
                        </h2>
                        {project.demo ? (
                             <a href={project.demo} target="_blank" className=" text-base  text-[var(--text-1)] hover:text-white font-sembold py-1 px-4 w-auto rounded-full ">
                             Live Preview
                         </a> 
                        ): (
                            <p className=" text-base  text-[var(--text-1)]  font-sembold py-1 px-4 w-auto rounded-full ">
                           Not Deployed yet.
                        </p> 
                        )}
                       
                        {
                            project.github &&
                      
                        <a href={project.github} target="_blank" className=" text-base mb-2    text-[var(--text-1)] hover:text-white font-sembold  px-4 w-auto rounded-full">
                            Github
                        </a>
                          }
                             
                        <div className="flex gap-2 flex-wrap mt-6  justify-center px-4">
                                {project?.tech?.map((tech, i) => (
                                    <span key={i} className=" text-xs bg-[--text-1] text-[--dark-3] py-1 px-2 rounded-full">{tech}</span>
                                ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default flipCard;

