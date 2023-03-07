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
        <div className="flex flex-row space-x-3 w-full pr-10">
            {/* Search Bar */}
            <div className="flex flex-row justify-between items-center w-full max-xl:w-[33vw]">
                <div className="w-6 absolute p-3">
                    <Search />
                </div>
                <input
                    type="text"
                    className="transition-all pl-10 w-full focus:outline-[#582270] h-12 border-2 border-[#DFDCDC] rounded-2xl"
                    placeholder="Ara"
                />
            </div>
            {/* Dark/Light mode Button */}
            <div id="lightButton" className="max-xl:hidden transition-all px-3 w-fit h-12 border-2 flex justify-center items-center dark  bg-white  border-[#DFDCDC] pt-1 rounded-2xl" onClick={changeButton}>
                <DropDown />
            </div>
        </div>
    );
}

export default SearchBar;