import { ReactComponent as ExamDesc } from '../assets/ExamDesc.svg';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import ExamsData from '../data/exams.json';





const ExamsMainContent = () => {
    return (
        <div className='bg-[#F8F3EB]  max-sm:h-fit max-md:h-full max-xl:h-screen
        w-full h-full flex flex-col  space-y-10 row-start-1 row-end-17 col-start-1 col-end-13 max-xl:pt-2 pb-4 px-10'>
            <div className=" w-full pt-1 bg-[#335708] flex justify-between max-md:justify-center items-center rounded-2xl border-2 border-[#F1EDE7] shadow-md">

                <div className='flex items-start text-[#86EE03] max-md:text-xl px-6 pb-2 text-2xl max-md:items-center max-md:text-center text-start font-semibold max-w-[38rem] max-xl:max-w-[30rem] max-lg:text-xl max-lg:max-w-[25rem]'>
                    cool sınavları sayesinde sahip olduğun yetkinlikleri sizi arayan şirketler için ispatlamış olursunuz.
                    Bu sayede şirketler bir pozisyonda yetenek avına çıktığında sizi daha kolay bulabilir.
                </div>

                <div className='pt-6 mr-6 w-[17rem] h-auto max-md:hidden'>
                    <ExamDesc />
                </div>

            </div>

            <div className=' px-1 flex flex-col max-md:items-center space-y-5'>
                <div className='text-[#582270] font-semibold text-3xl max-md:text-center'>Sınavlar</div>
               
                <div className='grid grid-rows-4 space grid-cols-5 max-xl:grid-cols-3  max-sm:grid-cols-1 max-md:grid-cols-2 gap-5 max-xl:gap-5 max-lg:gap-6 p-4 place-content-around'>
                {ExamsData.map((exam) => (
                    
                        <div key={exam.id} className='right-0 h-full bg-[#F1EDE7] border-2 border-[#d6d3ce] rounded-2xl shadow-md max-sm:w-[15rem]  w-[15rem]'>
                            <div className='text-start font-medium text-2xl max-w-[10rem] pb-3 pt-2 px-3 text-[#582270]'>
                                {exam.syntax}
                            </div>

                            <div className='relative'>
                            <div className='w-full h-0.5 bg-[#582270]'> </div>

                            <div className='flex flex-row justify-end items-center py-1 px-2'>
                                <div className='text-end text-lg font-medium text-[#582270]'>Başla</div>
                                <Arrow className='fill-[#582270] w-[0.8rem] ml-2 mt-0.5' />
                            </div>
                            </div>
                        </div>
                    
                ))}
                </div>

            </div>



        </div>
    )
}


export default ExamsMainContent;