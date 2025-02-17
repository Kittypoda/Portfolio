import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Slider() {
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setChecked] = useState(location.pathname === "/work");

  // Oppdater slider-posisjonen når URL endres
  useEffect(() => {
    setChecked(location.pathname === "/work");
  }, [location.pathname]);

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
          id="slider"
          className="slider-checkbox"
          checked={checked}
          onChange={handleToggle}
        />
        <label htmlFor="slider" className="slider-label">
          <span className="slider-text">{checked ? "About" : "My Work"}</span>
        </label>
      </div>
    </section>
  );
}

export default Slider;
