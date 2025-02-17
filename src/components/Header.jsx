import { useState, useEffect } from "react";

function Header({ setLanguage }) {
  const [isNorwegian, setIsNorwegian] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "no") {
      setIsNorwegian(true);
      setLanguage("no");
    }
  }, [setLanguage]);

  const handleToggle = () => {
    const newLanguage = isNorwegian ? "en" : "no";
    setIsNorwegian(!isNorwegian);
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <header className="header">
      <h3>PORTFOLIO</h3>
      <h3>Oda Rolstad Verbeke</h3>
      <h3>2025</h3>

    {/* Unik styling for språk-slideren */}
    <div className="language-toggle">
        <input type="checkbox" id="languageToggle" checked={isNorwegian} onChange={handleToggle} />
        <label htmlFor="languageToggle" className="language-slider-label">
          <span className="language-slider-text">{isNorwegian ? "Norwegian" : "English"}</span>
        </label>
      </div>
    </header>
  );
}

export default Header;


