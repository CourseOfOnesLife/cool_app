import { ReactComponent as CoolSuggestion } from "../../assets/CoolSuggestion.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const Suggestions = () => {
    return (
        <div className="max-lg:h-48 max-xl:h-56 bg-white border-2 border-[#F1EDE7] h-64 w-full rounded-2xl pb-16 pt-8">
            <div className="flex flex-row  space-x-6  h-full items-center px-6 pb-6">
                
                <div className="bg-[#335708] h-full w-screen rounded-2xl flex justify-between items-start text-lg text-start pl-5 font-semibold text-[#86EE03] ">
                    <div className="pt-3">
                        Cool profilinizi dilediğiniz<br /> zaman isteğinize göre<br /> değiştirip özgeçmişiniz<br />
                        olarak kullanabilirsiniz.
                    </div>

                    <div className="p-0 flex justify-end items-end h-full max-lg:w-24  max-xl:w-28  w-36">
                        <div className= "">
                            <CoolSuggestion />
                        </div>
                        <div className="absolute fill-[#86EE03] pb-5 pr-5">
                            <Arrow />
                        </div>
                    </div>

                </div>

                <div className="bg-[#E8E8E8] h-full w-full rounded-2xl flex pl-4 pt-3 justify-between items-start text-md text-start font-semibold text-[#335708]">
                Özgeçmişini güçlendirmek <br/> için yapılması gerekenler
                
                <div className= "fill-[#335708] pb-5 pr-5">
                <Arrow />
                </div>
                </div>
                <div className="bg-[#335708] h-full w-full rounded-2xl  flex justify-center items-center text-md text-center font-semibold text-[#86EE03]">
                    Github hesabını<br /> eklemedin!
                </div>

            </div>
            <div className="w-full h-0.5 bg-[#F1EDE7]"></div>
            <p className=" text-[#335708] text-end pr-6 text-2xl font-bold py-3"><span className="italic">Yeni!</span> Profilinizden Özgeçmiş Oluşturun!</p>
        </div>
    )
}

export default Suggestions;