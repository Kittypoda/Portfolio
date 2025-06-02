import { useState } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Work from "./pages/Work";
import Bidzy from "./pages/Bidzy";
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
          <Route
            path="/"
            element={
              <>
                <About language={language} />
                <Slider language={language} /> 
              </>
            }
          />
          <Route
            path="/work"
            element={
              <>
                <Work language={language} />
              </>
            }
          />
            <Route
            path="/bidzy"
            element={
              <>
                <Bidzy language={language} />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;



