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
    <header className="relative flex flex-col m-[10px] md:p-3">
    <h3 className="text-[#9A0D0F]">PORTFOLIO</h3>
    <h3 className="text-[#9A0D0F]">Oda Rolstad Verbeke</h3>
    <h3 className="text-[#9A0D0F]">2025</h3>
  
    <div className="slider absolute top-1 right-2  md:right-6 mt-2 mr-2">
      <input
        type="checkbox"
        id="languageToggle"
        className="slider-checkbox"
        checked={isNorwegian}
        onChange={handleToggle}
      />
      <label htmlFor="languageToggle" className="slider-label border border-[#9A0D0F]">
      <span className={`slider-text font-normal text-[#9A0D0F] hover:text-white ${isNorwegian ? 'opacity-0' : 'opacity-100'}`}>
      English
    </span>
    <span className={`slider-text font-normal text-[#9A0D0F] hover:text-white about ${isNorwegian ? 'opacity-100' : 'opacity-0'}`}>
      Norwegian
</span>

      </label>
    </div>
  </header>
  
  );
}

export default Header;


