import Exams from "../../data/exams.json";
import { useState, useEffect } from 'react';



const ExamsComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const ExamSlice = windowWidth > 768 ? Exams.slice(0, 4) : Exams.slice(0, 2);



    return (
        <div className="bg-white max-lg:h-56 max-sm:w-full  h-64 w-6/12  max-[510px]:w-full  max-xl:w-9/12 rounded-2xl  border-2">

            <div>
                <p className="text-xl font-semibold text-[#335708] mt-3 ml-4">Geçtiği Sınavlar</p>
                <div className="w-full h-0.5 bg-gray-200 mt-3"></div>
            </div>
            <div className="w-full h-full pb-[4rem] justify-center flex overflow-hidden">
                <div className=" flex flex-row p-3 justify-center items-center  w-full h-full space-x-5">

                    {ExamSlice.map((exam, index) => (
                        <div key={exam.id} className={`bg-${exam.status === 'success' ? '[#335708]' : 'gray-200'} rounded-2xl w-full h-full flex flex-col`}>
                            <div className={`w-full h-full text-[1.2vw] max-xl:text-[1.7vw] max-md:text-[1rem] max-sm:[2.8vw] max-lg:text-[1.9vw] max-w-[1rem] font-semibold text-${exam.status === 'success' ? 'white' : '[#335708]'} pt-2 pb-4 pl-3`}>{exam.syntax}</div>
                            <div className={`w-full h-1 bg-${exam.status === 'success' ? '[#86EE03]' : '[#335708]'} `} />
                            <p className={`w-full h-full   max-xl:text-[1.2vw] max-md:text-[2vw] font-semibold text-${exam.status === 'success' ? '[#86EE03]' : '[#335708]'} text-[1.2vw] max-xl:text-[1.4vw] flex justify-end items-end pb-2 pt-2  pr-2`}><span className="text-4xl pr-0.5">{exam.score}</span>/100</p>
                        </div>

                    ))}
                </div>
            </div>


        </div>
    )
}

export default ExamsComponent;