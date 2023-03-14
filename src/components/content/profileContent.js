import profileData from "../../data/profileContent.json";
const splittedData = profileData.slice(0,4)


const profileContent = () => {
  

        return (
            <div className=" bg-white border-2 border-[#F1EDE7] h-56  max-md:h-[22rem] w-full rounded-2xl pb-16 pt-8">

                <div  className="grid grid-flow-col max-md:grid-flow-dense max-md:grid-cols-2  gap-2 h-full items-center px-6 pb-6">
                    {/* if window width is 720px then take data from splittedData */}
                    {window.innerWidth < 720 ? splittedData.map((item) => {
                        return (
                            <div key={item.id} className="bg-[#335708] odd:bg-[#E8E8E8] odd:text-[#335708]  h-full w-full rounded-2xl flex pl-4 pt-3 items-start max-lg:text-[1rem] max-sm:text-[0.8rem] max-md:text-[1rem]  max-xl:text-[1.15rem] text-[1rem] text-start font-semibold text-[#86EE03] ">
                                 <div className=" max-sm:max-w-[7rem] max-lg:max-w-[8rem]"> {item.syntax}</div>
                            </div>
                        );
                    }) : profileData.map((item) => {
                        return (
                            <div  key={item.id} className="bg-[#335708] odd:bg-[#E8E8E8] odd:text-[#335708] h-full w-full rounded-2xl flex pl-4 pt-3 max-md:items-center max-md:text-center items-start max-lg:text-[0.9rem] max-xl:text-[1rem] max-md:text-[0.8rem] text-[1rem] text-start font-semibold text-[#86EE03] ">
                               <div className="max-w-[9rem] max-md:max-w-[12rem] max-lg:max-w-[8rem]"> {item.syntax}</div>
                            </div>
                        );
                    }) }


                    

                </div>
                <div className="w-full h-0.5 bg-[#F1EDE7]"></div>
                <p className=" text-[#335708] max-sm:text-[3.5vw] max-md:text-[1.4rem]  text-end pr-6 text-2xl font-bold py-3">Profiliniz %45 Tamamlandı</p>
            </div>
        );
    }


    export default profileContent;
