import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Achievements from "./pages/Achievement/Achievements";
import Info from "./pages/Info/Info";
import Skills from "./pages/Skills/Skills";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
