import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const SmallLinks = () => {


    const location = useLocation();


    const [openDropdown, setOpenDropdown] = useState(false);
    const [changeDropdown, setChangeDropdown] = useState('Ana Sayfa');

    const handleDropdown = () => {
        setOpenDropdown(!openDropdown);
    }


    useEffect(() => {
        if (location.pathname === '/') {
            setChangeDropdown('Ana Sayfa');
        } else if (location.pathname === '/exams') {
            setChangeDropdown('Sınavlar');
        } else if (location.pathname === '/profile') {
            setChangeDropdown('Profil');
        }
    }, [location.pathname])


    return (

        <div className="hidden max-xl:block flex-col space-y-5">
            <div className="relative inline-block text-left">
                <div onClick={handleDropdown}>
                    <button type="button" className="transition-all inline-flex w-full justify-center gap-x-5 rounded-full bg-[#582270] px-4 py-2 text-sm  font-semibold text-[#F8F3EB]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        {changeDropdown}
                        <svg className="-mr-1 h-5 w-5 text-[#F8F3EB]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {openDropdown && (
                    <div className=" transition-all absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg border-2 border-[#DFDCDC] bg-white shadow-2xl focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1  divide-y divide-[#DFDCDC]" role="none">

                            <Link to='/'  className="text-[#582270] block px-4 py-2 font-semibold text-md" role="menuitem" tabIndex="-1" id="menu-item-0">Ana Sayfa</Link>
                            <Link to='/exams' className="text-[#582270] block px-4 py-2 font-semibold text-md" role="menuitem" tabIndex="-1" id="menu-item-1">Sınavlar</Link>
                            <Link to='/profile'  className="text-[#582270] block px-4 py-2 font-semibold text-md" role="menuitem" tabIndex="-1" id="menu-item-2">Profil</Link>

                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}

export default SmallLinks;