import { ReactComponent as Search } from "../assets/Search.svg";
import { ReactComponent as Light } from "../assets/Light.svg";


function Aside() {
  return (
    <div className="aside flex justify-center p-9 items-center col-start-13 col-end-17 bg-[#F8F3EB] row-start-1 row-end-17">

      <div className=" h-full w-full">
        <div className="flex flex-row justify-between space-x-4">
        {/* input */}
        <div className="flex flex-row justify-between items-center w-full ">
          <div className="w-6 absolute p-3">
            <Search />
          </div>
          <input
            type="text"
            className="pl-10 w-full focus:outline-[#582270] h-12 border-2 border-[#DFDCDC] rounded-2xl"
            placeholder="Ara"
          />
        </div>
        <div className="w-14 h-12 border-2 flex justify-center items-center bg-white  border-[#DFDCDC] rounded-2xl">
          <Light />

        </div>
        </div>


      </div>



    </div>
  );
}

export default Aside;
