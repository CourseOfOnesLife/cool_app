import Example from "../../assets/example.png";
import { ReactComponent as DownDropdown } from "../../assets/DownDropdown.svg";
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
                <div>
                    <div className="absolute w-1/2 shadow-2xl right-0 top-0 bg-[#F8F3EB] h-screen  border-l-2 border-[#DFDCDC]">

                    </div>
                    <div onClick={handleShow} className="absolute w-1/2 left-0 top-0 bg-black opacity-50 h-screen"></div>
                </div>
            )}

        </div>

    )
}

export default ProfilePic;