import { ReactComponent as Search } from "../../assets/Search.svg";
import { ReactComponent as DropDown } from "../../assets/dropdown.svg";
import { useState } from "react";



function SearchBar() {

    const [dropDown, setdropDown] = useState(true)

    const changeButton = () => {
        console.log("clicked")
        setdropDown(!dropDown)
    }



    return (
        <div className="flex flex-row space-x-3 w-full pr-10 max-xl:pr-0">
            {/* Search Bar */}
            <div className="flex flex-row  justify-between items-center  w-full max-sm:w-[40vw] max-md:w-[38vw] max-xl:w-[33vw]">
                <div className="max-sm:w-10  absolute p-3 max-md:w-11 max-lg:w-[2.8rem] max-xl:w-[2.7rem] w-[2.8rem]">
                    <Search />
                </div>
                <input
                    type="text"
                    className="transition-all pl-10 w-full bg-white  focus:outline-[#582270] max-sm:h-10  h-12 max-md:h-11 border-2 border-[#DFDCDC] rounded-2xl"
                    placeholder="Ara"
                />
            </div>
            {/* Dark/Light mode Button */}
            <div id="lightButton" className="max-xl:hidden transition-all  px-[13px] w-fit h-12 border-2 flex justify-center items-center dark  bg-white  border-[#DFDCDC] pt-1 rounded-2xl" onClick={changeButton}>
                <DropDown />
            </div>


            
        </div>
    );
}

export default SearchBar;