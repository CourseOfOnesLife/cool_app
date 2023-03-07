import { Link } from "react-router-dom";
import { useState } from 'react';


const Links = () => {

    const [selectedButton, setSelectedButton] = useState(0);

    return (
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
    )

}

export default Links