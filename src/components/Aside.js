import Profile from "./aside/Profile";
import Poll from "./aside/PollSection";
import Notification from "./aside/Notification";



function Aside() {

  return (
   
    <div className="max-xl:hidden aside flex justify-center  pl-1 pr-10 pb-9  items-center col-start-13 col-end-17 bg-[#F8F3EB] row-start-3 row-end-17">
      <div className="h-full w-full space-y-7">
        <Profile />
        <Poll />
        <Notification />

      </div>
    </div>
  );
}

export default Aside;
