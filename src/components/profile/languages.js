import LanguagesData from "../../data/languages.json";




const Languages = () => {
    return (
        <div className="bg-white  h-full w-3/12 rounded-2xl  border-2">
            <p className="text-xl font-semibold text-[#582270] mt-3 ml-4">Diller</p>
            <div className="w-full h-0.5 bg-gray-200 mt-3 flex justify-center items-center"></div>
            <div className="w-full h-full p-4  pb-[4.5rem] space-y-3">
                {LanguagesData.map((language,index) => (
                    <div key={index} className="h-12 w-full bg-[#582270] rounded-2xl justify-between  flex flex-row ">
                    <p className="text-white text-lg font-semibold pt-2 pl-3">{language.syntax}</p>
                    <div className="flex justify-end content-end text-white font-semibold text-lg  pt-2 pr-3">{language.level} Seviye</div>
                </div>
                ))}


            </div>

        </div>
    )
}

export default Languages;