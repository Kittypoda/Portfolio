function Slider() {
  return (
    <section className="slider-index">
      <div className="slider">
        <input type="checkbox" id="slider" className="slider-checkbox" />
        <label htmlFor="slider" className="slider-label">
          <span className="slider-text">My Work</span>
        </label>
      </div>
    </section>
  );
}

export default Slider;
