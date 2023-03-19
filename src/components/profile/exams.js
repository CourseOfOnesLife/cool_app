import Exams from "../../data/exams.json";



const ExamsComponent = ( ) => {
    return ( 
        <div className="bg-white  h-full w-7/12 rounded-2xl  border-2">

        <div>
            <p className="text-xl font-semibold text-[#335708] mt-3 ml-4">Geçtiği Sınavlar</p>
            <div className="w-full h-0.5 bg-gray-200 mt-3"></div>
        </div>
        <div className="w-full h-full  pb-14 overflow-hidden">
            <div className=" flex flex-row p-3  w-full h-full space-x-5">
                {Exams.slice(0,5).map((exam) => (
                    <div key={exam.id} className="bg-[#335708] rounded-2xl w-full h-full flex flex-col">
                        <div className="text-[1.2rem] max-w-[1rem] font-semibold text-white pt-1 pb-4 pl-3">{exam.syntax}</div>
                        <div className=" w-full h-0.5 bg-[#86EE03]" />
                        <p className="w-full h-full text-[#86EE03] font-semibold text-[1.4rem] flex justify-end items-end pb-2  pr-2 "><span className="text-5xl pr-0.5">{exam.score}</span>/100</p>
                    </div>

                ))}

            </div>
        </div>


    </div>
    )
}

export default ExamsComponent;