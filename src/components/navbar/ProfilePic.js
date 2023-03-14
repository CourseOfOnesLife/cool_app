import Example from "../../assets/example.png";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ReactComponent as DownDropdown } from "../../assets/DownDropdown.svg";
import { useEffect, useState } from "react";
import './DropdownStyle.css'
import { Link } from "react-router-dom";

const name = "Tayfun Sönmez";

const ProfilePic = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        window.innerWidth <= 768 ? setSmallScreen(true) : setSmallScreen(false);
    }, []);


    const handleShow = () => {
        smallScreen ? setShowDropdown(!showDropdown) : setShowDropdown(false);
        document.body.style.overflow = showDropdown ? "auto" : "hidden";
    };

    return (
        <div className="z-50">
            <div onClick={handleShow} className="hidden max-xl:block">
                <div className="flex flex-row space-x-5 max-lg:space-x-3 items-center">
                    <img
                        alt="Profile Pic"
                        src={Example}
                        className="max-sm:h-[2.5rem] h-12 max-lg:h-11 rounded-full border-2 border-[#DFDCDC]"
                    />
                    <DownDropdown className="h-auto w-[1rem]" />
                </div>
            </div>

            <TransitionGroup>
                {showDropdown && (
                    <CSSTransition classNames="slide" timeout={300}>
                        <div className="h-full w-screen absolute left-0 top-0">
                            <div className="absolute max-md:w-1/2 max-sm:w-2/3 shadow-2xl drop-shadow-2xl right-0 top-0 bg-[#F8F3EB] h-screen border-l-2 border-[#DFDCDC]">
                                <div className="flex flex-row space-x-5 max-sm:justify-end max-md:justify-center max-sm:pl-0 max-md:pl-8 max-md:pr-10  pt-8 items-center">
                                    <img alt="Profile Pic" src={Example} className="h-14 rounded-full border-2 border-[#DFDCDC]" />
                                    <div className="text-2xl flex  font-semibold text-[#582270]">{name}</div>
                                </div>
                                <div className="w-full h-0.5 bg-[#DFDCDC] mt-8" />
                                <div className="flex flex-col text-3xl font-semibold text-[#582270] text-end justify-end space-y-10 pt-20 pr-10">
                                    <Link onClick={handleShow} to={'/'}>Ana Sayfa</Link>
                                    <Link onClick={handleShow} to={'exams'}>Sınavlar</Link>
                                    <Link onClick={handleShow} to={'profile'}>Profil</Link>
                                    <Link onClick={handleShow} to={'settings'}>Ayarlar</Link>
                                </div>
                            </div>
                            <div
                                onClick={handleShow}
                                className="absolute w-1/3 max-md:w-1/2 left-0 top-0opacity-0 h-screen"
                            ></div>
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};


export default ProfilePic;