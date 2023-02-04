import "./App.css";
import { AboutMe, Technologies, Landing, Navbar,Portfolio ,Contact} from "./screens/allComp";

function App() {
  return (
    <div >
      <Navbar />
      <Landing />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <Contact/>

    </div>
  );
}

export default App;
