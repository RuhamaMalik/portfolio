const flipCard = ({ project }) => {
    return (

        <div className=" mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
            <div
                className="group  h-[280px] w-[280px]  [perspective:1000px]"
            >
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front face with image */}
                    <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                            <img
                                className="object-cover cursor-pointer  h-full w-full rounded-xl"
                                src={project.image}
                                alt={project.name}
                            />
                        
                        <p className=" md:my-6 text-2xl">{project.name}</p>
                    </div>
                    {/* Back face with text */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h2 className="text-xl font-bold mb-4">
                                {project.name}
                            </h2>
                            <p className="text-lg text-pretty text-center mb-4 ">
                                {project.description}
                            </p>
                            <a href="tel:555-555-5555" className="inline-flex">
                                <button className="text-xl my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                                    <span>Schedule Service</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default flipCard;

