import SlickSlider from "react-slick";
import { Link } from "react-router-dom";
import bidzycard from "../assets/images/bidzycard.png";
import Slider from "../components/Slider"; // husk å importere

function Work({ language }) {
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "20px",
    appendDots: dots => (
      <div className="pt-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-4 h-4 rounded-full bg-white hover:bg-[#FFF2D7] transition"></div>
    ),
  };

  return (
    <main>
      {/* Mobil: slider */}
      <section className="block md:hidden px-4 py-8">
        <SlickSlider {...mobileSettings}>
          <Link to="/bidzy">
            <img
              src={bidzycard}
              alt="Bidzy"
              className="rounded-lg shadow-md max-h-[500px]"
            />
          </Link>
          <div className="bg-gray-200 rounded-lg shadow-md h-[500px] flex items-center justify-center text-gray-500 text-lg">
            <span>{language === "en" ? "Coming Soon" : "Kommer snart"}</span>
          </div>
          <div className="bg-gray-200 rounded-lg shadow-md h-[500px] flex items-center justify-center text-gray-500 text-lg">
            <span>{language === "en" ? "Coming Soon" : "Kommer snart"}</span>
          </div>
        </SlickSlider>
      </section>

      {/* Desktop: grid */}
      <section className="hidden md:grid grid-cols-3 gap-6 px-8 py-12">
        <Link to="/bidzy">
          <img
            src={bidzycard}
            alt="Bidzy"
            className="rounded-lg shadow-md max-h-[500px] w-full object-cover"
          />
        </Link>
        <div className="bg-gray-200 rounded-lg shadow-md h-[500px] flex items-center justify-center text-gray-500 text-lg">
          <span>{language === "en" ? "Coming Soon" : "Kommer snart"}</span>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md h-[500px] flex items-center justify-center text-gray-500 text-lg">
          <span>{language === "en" ? "Coming Soon" : "Kommer snart"}</span>
        </div>
      </section>

      {/* About/Work-toggle slider (fikset!) */}
      <Slider language={language} />
    </main>
  );
}

export default Work;








