import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";




const Links = () => {

        const location = useLocation();


    return (
        <div className="max-xl:hidden flex flex-row space-x-4">
                
                <Link to="/"
                        className={`transition-all my-1 px-14 py-2 cursor-pointer flex items-center
                        rounded-full font-medium text-sm border-2 border-[#582270]
                        bg-${location.pathname === '/' ? '[#582270]' : '[#F8F3EB]'} 
                        text-${location.pathname === '/' ? '[#F8F3EB]' : '[#582270]'} `}>Ana Sayfa</Link>
                

                
                <Link to="/exams"
                        className={`transition-all my-1 px-14 py-2 cursor-pointer flex items-center
                        rounded-full  font-medium text-sm border-2 border-[#582270]
                        bg-${location.pathname === '/exams' ? '[#582270]' : '[#F8F3EB]'} 
                        text-${location.pathname === '/exams' ? '[#F8F3EB]' : '[#582270]'}`}>Sınavlar</Link>



                <Link to="/profile"

                        className={`transition-all my-1 px-14 py-2 cursor-pointer flex items-center
                        rounded-full  font-medium text-sm border-2 border-[#582270]
                        bg-${location.pathname === '/profile' ? '[#582270]' : '[#F8F3EB]'}  
                        text-${location.pathname === '/profile' ? '[#F8F3EB]' : '[#582270]'}`}>Profil</Link>
                


            </div>
    )

}

export default Links