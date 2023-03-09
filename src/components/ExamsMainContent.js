import {ReactComponent as ExamDesc} from '../assets/ExamDesc.svg';
import {ReactComponent as Arrow} from '../assets/arrow.svg';



const ExamsMainContent = () => {
    return (
        <div className='bg-[#F8F3EB] max-xl:w-screen max-xl:h-screen
        w-screen h-full flex flex-col space-y-10 row-start-1 row-end-17 col-start-1 col-end-13 max-xl:pt-2 pb-4 px-12'>
            <div className=" w-full pt-1 bg-[#335708] flex justify-between items-center rounded-2xl border-2 border-[#F1EDE7] shadow-md">
                
                <div className='items-start text-[#86EE03] px-6 pb-2 text-2xl font-semibold max-w-[38rem]'>
                cool sınavları sayesinde sahip olduğun yetkinlikleri sizi arayan şirketler için ispatlamış olursunuz.
                 Bu sayede şirketler bir pozisyonda yetenek avına çıktığında sizi daha kolay bulabilir.
                </div>
                
                <div className='pt-6 mr-6 w-[17rem] h-auto'>
                <ExamDesc />
                </div>

            </div>

            <div className=' px-1 flex flex-col space-y-5'>
                <div className='text-[#582270] font-semibold text-3xl'>Sınavlar</div>
                <div className='bg-[#D9D9D9] border-2 border-[#F1EDE7] rounded-2xl shadow-md  w-[15rem]'>
                    <div className='text-start font-medium text-2xl max-w-[10rem] py-3 px-3'>
                        Javascript temelleri
                    </div>
                    <div className='w-full h-0.5 bg-[#582270]'> </div>

                    <div className='flex flex-row justify-end items-center py-1 px-2'>
                    <div className='text-end text-lg font-medium text-[#582270]'>Başla</div>
                    <Arrow className='fill-[#582270] w-[0.9rem] ml-2'/>
                    </div>
                </div>

            </div>



        </div>
    )
}


export default ExamsMainContent;