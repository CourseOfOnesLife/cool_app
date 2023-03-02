import Profile from "./aside/Profile";
import Poll from "./aside/PollSection";
import SearchBar from "./aside/SearchBar"



function Aside() {

  return (
    <div className="aside flex justify-center pl-1 pr-10 py-9 items-center col-start-13 col-end-17 bg-[#F8F3EB] row-start-1 row-end-17">
      <div className="h-full w-full space-y-7">
        <SearchBar />
        <Profile />
        <Poll />
      </div>
    </div>
  );
}

export default Aside;
