import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as SmLogo } from "../assets/smallScreenLogo.svg";
import { Link } from "react-router-dom";
import { useState } from 'react';



const Navbar = () => {
    const [selectedButton, setSelectedButton] = useState(0);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [changeDropdown, setChangeDropdown] = useState('Ana Sayfa');

    const handleDropdown = () => {
        setOpenDropdown(!openDropdown);
    }

    const handleChangeDropdown = (e) => {
        setChangeDropdown(e.target.innerText);
        setOpenDropdown(!openDropdown);
    }





    return (
        <nav className="bg-[#F8F3EB] max-xl:w-screen  col-start-1 col-end-13 row-start-1 row-end-3 flex flex-row justify-between items-center px-12">

            {/* Logo */}
            <div className="max-xl:hidden w-12">
                <Logo />
            </div>



            {/* Small Screen Logo */}
            <div className="hidden max-xl:block pl-2 w-12">
                <SmLogo />
            </div>


            {/* Small Screen Links */}

            <div className="hidden max-xl:block flex-col space-y-4">
                <div className="relative inline-block text-left">
                    <div onClick={handleDropdown}>
                        <button type="button" className="transition-all inline-flex w-full justify-center gap-x-5 rounded-full bg-[#582270] px-4 py-2 text-sm font-semibold text-[#F8F3EB]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            {changeDropdown}
                            <svg className="-mr-1 h-5 w-5 text-[#F8F3EB]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {openDropdown && (
                        <div className=" transition-all absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg border-2 border-[#DFDCDC] bg-white shadow-2xl focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                            <div className="py-1  divide-y divide-[#DFDCDC]" role="none">

                                <Link to='/' onClick={handleChangeDropdown} className="text-[#582270] block px-4 py-2 font-semibold text-md" role="menuitem" tabIndex="-1" id="menu-item-0">Ana Sayfa</Link>
                                <Link to='/exams' onClick={handleChangeDropdown} className="text-[#582270] block px-4 py-2 font-semibold text-md" role="menuitem" tabIndex="-1" id="menu-item-1">Sınavlar</Link>
                                <Link to='/profile' onClick={handleChangeDropdown} className="text-[#582270] block px-4 py-2 font-semibold text-md" role="menuitem" tabIndex="-1" id="menu-item-2">Profil</Link>

                            </div>
                        </div>
                    )}
                </div>
            </div>



            {/* Links */}
            <div className="max-xl:hidden flex flex-row space-x-4">
                <Link to="/">
                    <div
                        onClick={() => setSelectedButton(0)}
                        className={`transition-all my-1 px-14 py-2 cursor-pointer flex items-center
                        rounded-full font-medium text-sm border-2 border-[#582270]
                        bg-${selectedButton === 0 ? '[#582270]' : '[#F8F3EB]'} 
                        text-${selectedButton === 0 ? '[#F8F3EB]' : '[#582270]'} `}>Ana Sayfa</div>
                </Link>

                <Link to="/exams">
                    <div
                        onClick={() => setSelectedButton(1)}
                        className={`transition-all my-1 px-14 py-2 cursor-pointer flex items-center
                        rounded-full  font-medium text-sm border-2 border-[#582270]
                        bg-${selectedButton === 1 ? '[#582270]' : '[#F8F3EB]'} 
                        text-${selectedButton === 1 ? '[#F8F3EB]' : '[#582270]'}`}>Sınavlar</div>
                </Link>


                <Link to="/profile">
                    <div
                        onClick={() => setSelectedButton(2)}
                        className={`transition-all my-1 px-14 py-2 cursor-pointer flex items-center
                        rounded-full  font-medium text-sm border-2 border-[#582270]
                        bg-${selectedButton === 2 ? '[#582270]' : '[#F8F3EB]'}  
                        text-${selectedButton === 2 ? '[#F8F3EB]' : '[#582270]'}`}>Profil</div>
                </Link>


            </div>
        </nav>
    );
};

export default Navbar;
