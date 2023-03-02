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
        <div className="flex flex-row justify-between space-x-3">
            {/* Search Bar */}
            <div className="flex flex-row justify-between items-center w-full ">
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
            <div id="lightButton" className="transition-all w-14 h-12 border-2 flex justify-center items-center dark  bg-white  border-[#DFDCDC] pt-1 rounded-2xl" onClick={changeButton}>
                <DropDown />
            </div>
        </div>
    );
}

export default SearchBar;