import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import "./assets/css/style.scss";
import Navbar from "./Components/Navbar";
import Licenta from "./Pages/Licenta";
import Doctoract from "./Pages/Doctoract";
import Dotari from "./Pages/Dotari";
import SCSS from "./Pages/SCSS";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/licenta" element={<Licenta />} />
        <Route path="/doctorat" element={<Doctoract />} />
        <Route path="/dotari" element={<Dotari/>} />
        <Route path="/scss" element={<SCSS/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
