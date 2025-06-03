import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Slider({ language }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setChecked] = useState(location.pathname === "/work");

  useEffect(() => {
    setChecked(location.pathname === "/work");
  }, [location.pathname, language]);

  const handleToggle = () => {
    setChecked(!checked);
  
    // Vent med navigering til animasjonen har spilt (300-400ms)
    setTimeout(() => {
      const newPath = checked ? "/" : "/work";
      navigate(newPath);
    }, 400); // Juster etter overgangstiden i CSS
  };
  

  return (
    <section className="slider fixed bottom-20 lg:bottom-40 left-1/2 transform -translate-x-1/2 z-20">
      <input
        type="checkbox"
        id="workToggle"
        className="slider-checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <label htmlFor="workToggle" className="slider-label  border border-[#E2C5D0] bg-[#D1AABA]">
        <span className={`slider-text ${checked ? 'opacity-0' : 'opacity-100'}`}>
          {language === "en" ? "My Work" : "Prosjekter"}
        </span>
        <span className={`slider-text about ${checked ? 'opacity-100' : 'opacity-0'}`}>
          {language === "en" ? "About" : "Om meg"}
        </span>
      </label>
    </section>
  );
}

export default Slider;







