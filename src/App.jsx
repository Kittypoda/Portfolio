import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Work from "./pages/Work";
import "./styles/assets.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          {/* Hjemmesiden */}
          <Route path="/" element={
            <>
              <About />
              <Slider />
            </>
          } />
          {/* Arbeid-siden */}
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


