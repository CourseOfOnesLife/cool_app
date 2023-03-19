import { ReactComponent as ArrowGreen } from "../assets/ArrowGreen.svg";



import ExamsComponent from "./profile/exams";
import OrganizationsComponent from "./profile/organizations";
import ProfilePicComponent from "./profile/profilePic";
import CertificationsComponent from "./profile/certifications";
import ExperienceComponent from "./profile/experiences";

const Profile = () => {
    return (
        <div className="max-2xl:overflow-hidden w-screen bg-[#F8F3EB] h-screen  px-10 space-y-8">
            <div className="rounded-2xl w-full h-1/4  flex space-x-5 flex-row ">
                <ProfilePicComponent />
                <ExamsComponent />
                <OrganizationsComponent />
            </div>

            <div className="rounded-2xl w-full h-1/4 flex flex-row space-x-5">
                <CertificationsComponent />
                <ExperienceComponent />
                <div className="bg-white  h-full w-3/12 rounded-2xl  border-2">
                    <p className="text-xl font-semibold text-[#582270] mt-3 ml-4">Diller</p>
                    <div className="w-full h-0.5 bg-gray-200 mt-3"></div>
                    <div className="w-full h-full p-4 pb-[4.5rem] space-y-3">
                        <div className="h-12 w-full bg-[#335708] rounded-2xl justify-between  flex flex-row ">
                            <p className="text-white text-lg font-semibold pt-2 pl-3">Türkçe</p>
                            <div className="flex justify-end content-end text-[#86EE03] font-semibold text-xl  pt-2 pr-3">C2</div>
                        </div>
                        <div className="h-12 w-full bg-[#335708] rounded-2xl justify-between  flex flex-row">
                            <p className="text-white text-lg font-semibold pt-2 pl-3">İngilizce</p>
                            <div className="flex justify-end content-end text-[#86EE03] font-semibold text-xl  pt-2 pr-3">B2</div>
                        </div>


                    </div>

                </div>

            </div>
            <div className="rounded-2xl w-full h-1/4  flex flex-row space-x-5">
                <div className="h-full w-4/12 rounded-2xl space-y-3 ">
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
                    <p className="text-xl font-semibold text-[#582270] mt-3 ml-4">Skiller</p>
                    <div className="w-full h-0.5 bg-gray-200 mt-3"></div>

                </div>

            </div>


        </div>
    );
}

export default Profile;