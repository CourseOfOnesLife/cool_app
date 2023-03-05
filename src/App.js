import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Aside from "./components/Aside";



function App() {
  return (

    <div className="grid grid-rows-16 grid-cols-16 h-screen w-screen">
      <Navbar/>
      <Content/>
      <Aside/>
     
    </div>

  );
}

export default App;
