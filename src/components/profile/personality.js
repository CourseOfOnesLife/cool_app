import { ReactComponent as ArrowGreen } from "../../assets/ArrowGreen.svg";


const Personality = () => {
    return (
        <div className="bg-[#335708] w-full h-28 max-sm:h-32 rounded-2xl border-[#86EE03] flex justify-center items-center">
            <p className="absolute text-[5.5rem] font-semibold text-center text-[#86EE03]">ESTP</p>

            <div className="w-full pb-5 pr-5 flex justify-end items-end h-full">
                <div className="flex h-5 justify-end items-end ">
                    <ArrowGreen />
                </div>
            </div>
        </div>
    )
}

export default Personality;
