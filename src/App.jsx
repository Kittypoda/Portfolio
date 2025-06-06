import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Work from "./pages/Work";
import Holidaze from "./pages/Holidaze";
import Bidzy from "./pages/Bidzy";
import Levelup from "./pages/Levelup";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./styles/slider.css";
import "./styles/layout.css";
import "./index.css";

function App() {
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
              <Route path="/work" element={<Work language={language} />} />
              <Route path="/bidzy" element={<Bidzy language={language} />} />
              <Route path="/holidaze" element={<Holidaze language={language} />} />
              <Route path="/leveluplounge" element={<Levelup language={language} />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;





