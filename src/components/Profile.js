import { ReactComponent as ArrowGreen } from "../assets/ArrowGreen.svg";

import ExamsComponent from "./profile/exams";
import ProfilePicComponent from "./profile/profilePic";

const Profile = () => {
    return (
        <div className="max-2xl:overflow-hidden w-screen bg-[#F8F3EB] h-screen  px-10 space-y-8">
            <div className="rounded-2xl w-full h-1/4  flex space-x-5 flex-row ">
                <ProfilePicComponent/>
                <ExamsComponent />
                <div className="bg-white  h-full w-3/12 rounded-2xl  border-2">
                    <p className="text-xl font-semibold text-[#782e97] mt-3 ml-4">Organizasyonlar</p>
                    <div className="w-full h-0.5 bg-gray-200 mt-3"></div>
                </div>
            </div>

            <div className="rounded-2xl w-full h-1/4 flex flex-row space-x-5">

                <div className="bg-white h-full w-4/12 rounded-2xl  border-2">
                    <p className="text-xl font-semibold text-[#782e97] mt-3 ml-4">Sertifikalar</p>
                    <div className="w-full h-0.5 bg-gray-200 mt-3"></div>

                </div>
                <div className="bg-white  h-full w-5/12 rounded-2xl  border-2">
                    <p className="text-xl font-semibold text-[#335708] mt-3 ml-4">Deneyimler</p>
                    <div className="w-full h-0.5 bg-gray-200 mt-3"></div>

                </div>
                <div className="bg-white  h-full w-3/12 rounded-2xl  border-2">
                    <p className="text-xl font-semibold text-[#782e97] mt-3 ml-4">Diller</p>
                    <div className="w-full h-0.5 bg-gray-200 mt-3"></div>

                </div>

            </div>
            <div className="rounded-2xl w-full h-1/4  flex flex-row space-x-5">
                <div className="h-full w-4/12 rounded-2xl  space-y-1">
                    <div className="bg-white w-full h-1/2 rounded-2xl border-2">

                    </div>
                    <div className="bg-[#335708] w-full h-1/2 rounded-2xl border-[#86EE03] flex justify-center items-center">
                        <p className="absolute text-[5.5rem] font-semibold text-center text-[#86EE03]">ESTP</p>

                        <div className="w-full pb-5 pr-5 flex justify-end items-end h-full">
                            <div className="flex h-5 justify-end items-end ">
                                <ArrowGreen />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="bg-white  h-full w-5/12 rounded-2xl  border-2">
                    <p className="text-xl font-semibold text-[#335708] mt-3 ml-4">Projeler</p>
                    <div className="w-full h-0.5 bg-gray-200 mt-3"></div>

                </div>
                <div className="bg-white  h-full w-3/12 rounded-2xl  border-2">
                    <p className="text-xl font-semibold text-[#782e97] mt-3 ml-4">Skiller</p>
                    <div className="w-full h-0.5 bg-gray-200 mt-3"></div>

                </div>

            </div>


        </div>
    );
}

export default Profile;