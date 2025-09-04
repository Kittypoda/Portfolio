import { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Work from "./pages/Work";
import Holidaze from "./pages/Holidaze";
import Bidzy from "./pages/Bidzy";
import Levelup from "./pages/Levelup";
import Smlt from "./pages/Smlt";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import LevelLanding from "./pages/LevelLanding";
import "./styles/slider.css";
import "./styles/layout.css";
import "./index.css";

function App() {
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const firstNav = useRef(true);
  useEffect(() => {
    if (firstNav.current) {
      firstNav.current = false;
      return;
    }
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(t);
  }, [location.pathname, location.search, location.hash]);

  const isLevelLanding = location.pathname === "/leveluplounge";

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {!isLevelLanding && <Header setLanguage={setLanguage} />}
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
              <Route path="/work" element={<Work language={language} />} />
              <Route path="/smlt" element={<Smlt language={language} />} />
              <Route path="/bidzy" element={<Bidzy language={language} />} />
              <Route path="/holidaze" element={<Holidaze language={language} />} />
              <Route path="/leveluplounge/details" element={<Levelup language={language} />} />
              <Route path="/leveluplounge" element={<LevelLanding />} />
            </Routes>
          </main>
          {!isLevelLanding && <Footer />}
        </div>
      )}
    </>
  );
}

export default App;








