import ExperienceData from '../../data/experiences.json'


const Experience = () => {
    return (
        <div className="bg-white  h-64 max-xl:w-full  w-7/12 rounded-2xl  border-2">
            <p className="text-xl font-semibold text-[#335708] mt-3 ml-4">Deneyimler</p>
            <div className="w-full h-0.5 bg-gray-200 mt-3"></div>
            <div className="w-full h-full p-4 pb-[4.5rem] flex flex-row space-x-5">
                {ExperienceData.map((experience,index) => (
                    <div  key={index} className="flex flex-col h-full w-full bg-[#335708] rounded-2xl">
                        <p  className="text-white  text-[1.2rem] max-xl:text-[1.2rem] max-xl:pb-8 max-xl:max-w-[120px] font-semibold pt-2 pl-3 max-w-[120px] pb-7">{experience.title}</p>
                        <div className="w-full h-0.5 bg-[#86EE03]" />
                        <div className="flex justify-end content-end text-[#86EE03] font-semibold text-xl  pt-2 pr-3">{experience.company}</div>
                        <div className="flex justify-end content-end text-[#86EE03] font-semibold text-sm italic  pt-0 pr-3">{experience.startDate}-{experience.endDate}</div>
                    </div>
                    
                    ))}


            </div>

        </div>
    )
}

export default Experience;