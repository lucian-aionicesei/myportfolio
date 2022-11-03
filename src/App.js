import "./App.css";
import Home from "./Home";
import About from "./About";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Carbon-tracker" element={<Project1 />} />
          <Route path="/Akva-jewellery" element={<Project2 />} />
          <Route path="/Silfen-bags" element={<Project3 />} />
          <Route path="/Student-Joe" element={<Project4 />} />
          <Route path="/Asgaard-fest" element={<Project5 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
