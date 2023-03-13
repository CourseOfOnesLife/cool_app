import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as SmLogo } from "../assets/smallScreenLogo.svg";

import { Link } from "react-router-dom";


import SearchBar from './navbar/SearchBar'
import SmallLinks from './navbar/SmallLinks';
import Links from './navbar/Links';
import Notification from "./navbar/Notification";
import ProfilePic from "./navbar/ProfilePic";



const Navbar = () => {

    return (
        <div className='col-start-1 col-end-17 row-start-1 row-end-3 top-0   grid grid-rows-16 grid-cols-16 w-full h-32'>

            <div className="bg-[#F8F3EB] max-xl:w-screen  col-start-1 col-end-13 row-start-1 row-end-17 flex flex-row  justify-between items-center px-12">

                {/* Logo */}
                <Link to={'/'} className="max-xl:hidden w-12">
                    <Logo />
                </Link>

                {/* Small Screen Logo */}
                <Link to={'/'} className="hidden max-xl:block pl-2 w-12">
                    <SmLogo />
                </Link>

                
                <Notification />
                

                <div className="hidden max-xl:block pl-5">
                    <SearchBar />
                </div>

               

                {/* Small Screen Links */}
                <SmallLinks />


                {/* Tablet and Phone Screen Notification */}



                {/* Profile Pic */}
                <ProfilePic />



                {/* Links */}

                <Links />

                {/* Search Bar */}


            </div>
            <div className="max-xl:hidden  col-start-13 col-end-17 row-start-1 row-end-17 bg-[#F8F3EB] flex flex-row  items-center justify-between ">
                <SearchBar />
            </div>
        </div>
    );
};

export default Navbar;
