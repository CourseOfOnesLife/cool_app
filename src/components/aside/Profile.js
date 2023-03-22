import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import Example from "../../assets/example.png";
import {Link} from 'react-router-dom'


function Profile() {

    return (
       
         <div className="bg-white border-2 border-[#F1EDE7] p-3  h-24 w-full rounded-2xl">
         <Link to={'/profile'} className="h-full w-full flex flex-row">
           {/* Profile Picture */}
           <img alt="Profile Pic" src={Example} className="h-16 rounded-full border-2  border-[#DFDCDC]" />

           {/* Profile Name and Progress Bar */}
           <div className="flex pl-4 justify-start flex-col w-full space-y-2">
             {/* Profile Name */}
             <div className="flex flex-row items-center justify-between">
               <div className="font-medium text-[#582270] text-[1.2vw]">Selam, Mert!</div>

               <div className="pr-2 w-[1.6vh]">
                 <Arrow /> 
               </div>

             </div>
             {/* Progress Bar */}
             <div className="w-full bg-[#F1EDE7] rounded-full h-0.5 mb-4">
               <div className="bg-[#582270] h-0.5 rounded-full" style={{ width: '45%' }}></div>
             </div>
             {/* Progress Bar Text */}
             <div className="font-medium italic text-[0.8vw] text-[#585858]">
               Deneyimlerini eklemeyi unutma!
             </div>
           </div>
         </Link>
       </div>
    );
}

export default Profile;