import Navbar from "./Navbar";
import Content from "./MainContent";
import Aside from "./Aside";



function Home() {
  return (
    <div>
    <div className="z-10 top-0 grid grid-rows-16 grid-cols-16 h-screen w-fit">
      <Navbar/>
      <Content/>
      <Aside/>

     
    </div>
    </div>

  );
}

export default Home;
