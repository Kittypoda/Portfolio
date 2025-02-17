import { useNavigate } from "react-router-dom";

function Work({ language }) {
  const navigate = useNavigate();

  return (
    <main>
      <section className="work-cards">
        <a href="/hungry" className="item item1"></a>
        <a href="/osm" className="item item2"></a>
        <a href="/rainy" className="item item3"></a>
      </section>

      <section className="slider-section">
        <div className="slider">
          <input
            type="checkbox"
            id="slider"
            className="slider-checkbox"
            onChange={() => navigate("/")}
            checked
          />
          <label htmlFor="slider" className="slider-label">
            <span className="slider-text">
              {language === "en" ? "Om meg" : "About"}
            </span>
          </label>
        </div>
      </section>
    </main>
  );
}

export default Work;


