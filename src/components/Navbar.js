

import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as SmLogo } from "../assets/smallScreenLogo.svg";


import  SearchBar from './navbar/SearchBar'
import SmallLinks from './navbar/SmallLinks';
import Links from './navbar/Links';



const Navbar = () => {

    return (
        <div className='col-start-1 col-end-17 row-start-1 row-end-3 top-0  justify-between grid grid-rows-16 grid-cols-16 w-full'>
        <div className="bg-[#F8F3EB] max-xl:w-screen  col-start-1 col-end-13 row-start-1 row-end-17 flex flex-row justify-between items-center px-12">

            {/* Logo */}
            <div className="max-xl:hidden w-12">
                <Logo />
            </div>

            {/* Small Screen Logo */}
            <div className="hidden max-xl:block pl-2 w-12">
                <SmLogo />
            </div>
            {/* Small Screen Links */}

            <SmallLinks />

            {/* Links */}

            <Links />

            {/* Search Bar */}
            
           
        </div>

            <SearchBar />
        </div>
    );
};

export default Navbar;
