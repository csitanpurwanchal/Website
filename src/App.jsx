import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar";
import NoticesBar from "./component/noticesBar";
import InfoBar from "./component/infoBar";
import Home from "./screens/home/home";
import About from "./screens/about/about";
import Contact from "./screens/contact/contact";
import Service from "./screens/services/service";

function App() {
  return (
    <>
      <Router>
        <InfoBar />
        <Navbar />
        <NoticesBar />
        <Routes>
          {/* Routes to pages/screens */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
