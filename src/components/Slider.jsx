import { useNavigate } from "react-router-dom";

function Slider() {
  const navigate = useNavigate();

  const handleToggle = (event) => {
    if (event.target.checked) {
      navigate("/work");
    } else {
      navigate("/");
    }
  };

  return (
    <section className="slider-index">
      <div className="slider">
        <input
          type="checkbox"
          id="slider"
          className="slider-checkbox"
          onChange={handleToggle}
        />
        <label htmlFor="slider" className="slider-label">
          <span className="slider-text">My Work</span>
        </label>
      </div>
    </section>
  );
}

export default Slider;

