import Example from "../../assets/example.png";
import { ReactComponent as DownDropdown } from "../../assets/DownDropdown.svg";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";


const ProfilePic = () => {
    const [ShowDropdown, setShowDropdown] = useState(false);

    const handleShow = () => {
        setShowDropdown(!ShowDropdown);
    };


    return (
        <div>
            <div onClick={handleShow} className="hidden max-xl:block">
                <div className=" flex flex-row space-x-5 max-lg:space-x-3 items-center">
                    <img alt="Profile Pic" src={Example} className="h-12 max-lg:h-11 rounded-full border-2  border-[#DFDCDC]" />
                    <DownDropdown className=" h-auto w-[2vh]" />
                </div>
            </div>

            {ShowDropdown && (
                <DropdownMenu />
            )}

        </div>

    )
}

export default ProfilePic;