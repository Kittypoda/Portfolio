import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./pages/Work";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./styles/assets.css";
import "./styles/headerToggle.css";
import "./styles/layout.css";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <Header setLanguage={setLanguage} />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <About language={language} />
              <Slider /> 
            </>
          } />
          <Route path="/work" element={
            <>
              <Work language={language} />
              <Slider />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;



