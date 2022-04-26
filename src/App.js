import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
// import { useState } from "react";

function App() {
  // const [theme, setTheme] = useState("home");

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
