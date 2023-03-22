import ProjectsData from '../../data/projects.json'



const Projects = () => {
    return (
        <div className="bg-white  h-full  max-xl:w-full  w-5/12 rounded-2xl  border-2">
            <p className="text-xl font-semibold text-[#335708] mt-3 ml-4">Projeler</p>
            <div className="w-full h-0.5  mt-3 bg-gray-200"></div>
            
                <div className="h-full w-full rounded-2xl p-4 pb-[4.5rem] grid grid-cols-2 grid-rows-1  gap-4">
                {ProjectsData.map((project,index) => (
                <div key={index} className="flex flex-col h-full w-full justify-around bg-[#335708] rounded-2xl">
                    <p className="text-white text-2xl font-semibold pt-2 pl-3 max-w-[100px] ">{project.name}</p>
                    <div className="flex justify-end content-end text-[#86EE03] font-semibold text-xl  pb-2 pr-3">{project.date}</div>

                </div>
           
            ))}
             </div>
            

        </div>
    )
}

export default Projects;