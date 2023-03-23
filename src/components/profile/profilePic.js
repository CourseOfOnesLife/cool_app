import ProfilePicture from "../../assets/profilePic.jpg";

const ProfilePic = () => {
    return (
        <div className="bg-white  h-full w-[22rem]  max-xl:w-3/12 max-xl:h-[17rem] rounded-2xl border-2 flex justify-center items-center overflow-hidden transition-all  filter grayscale-0 hover:grayscale-[20%] ">
            <img className="object-cover aspect-square h-full  w-full" src={ProfilePicture} alt="Profile Pic" />
            <div className="z-50 absolute flex flex-col w-full h-full  justify-end items-end  pb-4 pr-4">
                <p className="text-lg  text-white font-semibold transition-all ">Tayfun Sönmez, 24</p>
                <p className="text-sm  text-white font-light transition-all ">Front-end Developer</p>
            </div>
            <div className="absolute bottom-0 h-20  w-full bg-gradient-to-t  from-[#782e97] to-transparent"></div>
        </div>
    )
}

export default ProfilePic;