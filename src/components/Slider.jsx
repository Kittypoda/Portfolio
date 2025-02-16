import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/assets.css"

function Slider() {
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setChecked] = useState(location.pathname === "/work");

  useEffect(() => {
    setChecked(location.pathname === "/work");
  }, [location.pathname]);

  const handleToggle = () => {
    setChecked(!checked);
    navigate(checked ? "/" : "/work");
  };

  return (
    <section className="slider">
      <input
        type="checkbox"
        id="slider"
        className="slider-checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <label htmlFor="slider" className="slider-label">
        <span className={`slider-text ${checked ? "about" : "work"}`}>
          {checked ? "About" : "My Work"}
        </span>
      </label>
    </section>
  );
}

export default Slider;



