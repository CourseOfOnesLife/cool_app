import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Aside from "./components/Aside";



function App() {
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

export default App;
