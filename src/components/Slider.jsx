import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Slider({ language }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setChecked] = useState(location.pathname === "/work");

  useEffect(() => {
    setChecked(location.pathname === "/work");
  }, [location.pathname, language]); // ✅ Nå reagerer den også på språkbytte

  const handleToggle = () => {
    const newPath = checked ? "/" : "/work";
    setChecked(!checked);
    navigate(newPath);
  };

  return (
    <section className="slider">
      <div className="slider-wrapper">
        <input
          type="checkbox"
          id="workToggle"
          className="slider-checkbox"
          checked={checked}
          onChange={handleToggle}
        />
        <label htmlFor="workToggle" className="slider-label">
          <span className="slider-text">
            {checked ? (language === "en" ? "Om meg" : "About") : (language === "en" ? "Mitt arbeid" : "My Work")}
          </span>
        </label>
      </div>
    </section>
  );
}

export default Slider;






