import Exams from "../../data/exams.json";



const ExamsComponent = ( ) => {
    return ( 
        <div className="bg-white h-64 w-6/12 rounded-2xl  border-2">

        <div>
            <p className="text-xl font-semibold text-[#335708] mt-3 ml-4">Geçtiği Sınavlar</p>
            <div className="w-full h-0.5 bg-gray-200 mt-3"></div>
        </div>
        <div className="w-full h-fit justify-center flex overflow-hidden">
            <div className=" flex flex-row p-3 justify-center  w-full h-full space-x-5">
                {Exams.slice(0,5).map((exam) => (
                    <div key={exam.id} className={`bg-${exam.status === 'success' ? '[#335708]' : 'gray-200'} rounded-2xl w-full h-full flex flex-col`}>
                        <div className={`text-[1.2rem] max-w-[1rem] font-semibold text-${exam.status === 'success' ? 'white' : '[#335708]'} pt-2 pb-4 pl-3`}>{exam.syntax}</div>
                        <div className={`w-full h-0.5 bg-${exam.status === 'success' ? '[#86EE03]' : '[#335708]'} `} />
                        <p className={`w-full h-full  font-semibold text-${exam.status === 'success' ? '[#86EE03]' : '[#335708]'} text-[1.2rem] flex justify-end items-end pb-2  pr-2`}><span className="text-4xl pr-0.5">{exam.score}</span>/100</p>
                    </div>

                ))}

            </div>
        </div>


    </div>
    )
}

export default ExamsComponent;