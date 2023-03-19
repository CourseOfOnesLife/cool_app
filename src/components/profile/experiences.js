import ExperienceData from '../../data/experiences.json'


const Experience = () => {
    return (
        <div className="bg-white  h-full w-5/12 rounded-2xl  border-2">
            <p className="text-xl font-semibold text-[#335708] mt-3 ml-4">Deneyimler</p>
            <div className="w-full h-0.5 bg-gray-200 mt-3"></div>
            <div className="w-full h-full p-4 pb-[4.5rem] flex flex-row space-x-5">
                {ExperienceData.map((experience) => (
                    <div className="flex flex-col h-full w-full bg-[#335708] rounded-2xl">
                        <p className="text-white text-lg font-semibold pt-2 pl-3 max-w-[100px] pb-3">{experience.title}</p>
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