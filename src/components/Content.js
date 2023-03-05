import ProfileContent from "./content/profileContent";
import ExamsContent from "./content/examsContent";
import Suggestions from "./content/Suggestions";


function Content() {
  return (
    <div className="bg-[#F8F3EB] max-xl:w-screen w-full h-full space-y-4 row-start-3  row-end-17 col-start-1 col-end-13 pb-2 px-12">
      <ProfileContent />
      <ExamsContent />
      <Suggestions />
    </div>
  );
}

export default Content;