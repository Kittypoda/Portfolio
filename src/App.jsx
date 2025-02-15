import Header from "./components/Header";
import About from "./components/About";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Slider />
      </main>
      <Footer />
    </div>
  );
}

export default App;

