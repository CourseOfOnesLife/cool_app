import ProfileContent from "./content/profileContent";
import ExamsContent from "./content/examsContent";
import Suggestions from "./content/Suggestions";
import { useLocation } from "react-router-dom";





function Content() {


  // capture the location of link
  const location = useLocation();


  return (
    <div className={`bg-[#F8F3EB] max-xl:w-screen max-xl:h-screen w-${location.pathname  === '/'? 'full' : 'screen'} 
                    w-full h-full flex flex-col space-y-4 row-start-1 row-end-17 col-start-1 col-end-13 max-xl:pt-2 pb-4 px-12`}>
      <ProfileContent />
      <ExamsContent />
      <Suggestions />
    </div>
  );
}

export default Content;