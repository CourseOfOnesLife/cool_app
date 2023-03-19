
import Content from "./MainContent";
import Aside from "./Aside";



function Home() {
  return (
    <div>
    <div className="overflow-hidden max-md:pb-10 bg-[#F8F3EB] transition-all  max-md:h-full max-md:w-screen z-10 top-0 grid grid-rows-16 grid-cols-16 h-screen w-fit">
      <Content/>
      <Aside/>
    </div>
    
    </div>

  );
}

export default Home;
