import './App.css';
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from './components/Projects';

const App=()=>{
  return(
    <div>
      <Banner/>
      <Navbar/>
      <About/>
      <Projects/>
    </div>
  )
}  
export default App;
