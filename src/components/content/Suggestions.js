import { ReactComponent as CoolSuggestion } from "../../assets/CoolSuggestion.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

import SuggestionsData from '../../data/suggestions.json'

const FirstElementofData = SuggestionsData[0]
const SlicedData = SuggestionsData.slice(1,)
const SmallScreenData = SuggestionsData.slice(1, 2)

const Suggestions = () => {
    return (
        <div className="bg-white border-2 border-[#F1EDE7] max-sm:h-[16rem] max-md:h-[19rem] h-64 w-full rounded-2xl pb-16 pt-8">
            <div className="flex flex-row space-x-6  h-full items-center px-6 pb-6">
                {/* First element of array with cool logo */}
                <div className="bg-[#335708] max-lg:text-[1.6vw] max-xl:text-[1.8vh] h-full w-screen rounded-2xl flex items-start max-md:text-[1rem]  max-sm:text-[2.5vw]  max-xl:text-md text-[1.1rem] text-start max-sm:pl-2 pl-5 font-semibold text-[#86EE03] ">
                    <div className="absolute pt-3  max-sm:max-w-[8rem] max-md:max-w-[10rem] max-lg:max-w-[12rem] max-xl:max-w-[14rem] max-w-[13rem]">
                        {FirstElementofData.syntax}
                    </div>
                    <div className=" w-full p-0 flex justify-end items-end h-full">
                        <div className="max-lg:w-[140px] max-sm:w-[20vw] max-xl:w-[145px] w-[150px]">
                            <CoolSuggestion />
                        </div>
                        <div className="absolute fill-[#86EE03] w-[4.5vh] pb-5 pr-5">
                            <Arrow />
                        </div>
                    </div>

                </div>
                
                {window.innerWidth > 720 ? SlicedData.map((item) => {
                    return (

                        <div key={item.id} className="odd:bg-[#335708] bg-[#E8E8E8] max-lg:text-[1.7vw] max-xl:text-[2vh] h-full w-full rounded-2xl flex pl-4 pt-3 justify-between items-start max-md:text-[1rem] max-xl:text-md text-[1.1rem] text-start font-semibold odd:text-[#E8E8E8] text-[#335708]">
                        <div className=" max-md:max-w-[10rem] max-lg:max-w-[12rem] max-xl:max-w-[14rem] max-w-[13rem]">
                            {item.syntax}
                        </div>
    
                    </div>

                    )

                }
                ) : SmallScreenData.map((item) => {
                    return (
                        <div key={item.id} className=" odd:bg-[#335708] bg-[#E8E8E8] max-sm:text-[2.5vw] max-lg:text-[1.7vw] max-xl:text-[2vh] h-full w-full rounded-2xl flex pl-4 pt-3 justify-between items-start max-md:text-[1rem] max-xl:text-md text-[1.1rem] text-start font-semibold odd:text-[#E8E8E8] text-[#335708]">
                        <div className=" max-md:max-w-[10rem] max-lg:max-w-[12rem] max-xl:max-w-[14rem] max-w-[13rem]">
                            {item.syntax}
                        </div>
                    </div>
                    )
                })}

            </div>
            <div className="w-full h-0.5 bg-[#F1EDE7]"></div>
            <p className=" text-[#335708] max-sm:text-[3vw] max-md:text-[1.4rem] text-end pr-6 text-2xl font-bold py-3"><span className="italic">Yeni!</span> Profilinizden Özgeçmiş Oluşturun!</p>
        </div>
    )
}

export default Suggestions;