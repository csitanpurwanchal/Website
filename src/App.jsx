import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar";
import NoticesBar from "./component/noticesBar";
import InfoBar from "./component/infoBar";
import Home from "./screens/home/home";
import About from "./screens/about/about";

function App() {
  return (
    <>
      <Router>
        <InfoBar />
        <Navbar />
        <NoticesBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
