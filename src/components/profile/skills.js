const Skills = () => {
    return (
        <div className="bg-white h-64 max-xl:w-8/12 w-3/12 rounded-2xl pb-14  border-2">
            <p className="text-xl font-semibold text-[#582270] mt-3 ml-4">Skiller</p>
            <div className="w-full h-0.5 bg-gray-200 mt-3"></div>
            <div className="h-full w-full grid grid-cols-2 grid-rows-2  gap-2 p-4">
                <div className="h-full w-full py-2 px-1 bg-[#582270] rounded-2xl flex content-center">
                    <p className="font-semibold text-md px-3 text-white">Javascript</p>
                </div>
                <div className="h-full w-full py-2 px-1 bg-[#582270] rounded-2xl flex content-center">
                    <p className="font-semibold text-md px-3 text-white">SQL</p>
                </div>
                <div className="h-full w-full py-2 px-1 bg-[#582270] rounded-2xl flex content-center">
                    <p className="font-semibold text-md px-3 text-white">HTML-CSS</p>
                </div>
                <div className="h-full w-full py-2 px-1 bg-[#582270] rounded-2xl flex content-center">
                    <p className="font-semibold text-md px-3 text-white">React</p>
                </div>
   
        
                
                

                
            </div>

        </div>
    )
}

export default Skills;