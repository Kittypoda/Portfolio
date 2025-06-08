import SlickSlider from "react-slick";
import { Link } from "react-router-dom";
import bidzycard from "../assets/images/bidzycard.png";
import holidazecard from "../assets/images/holidazecard.png";
import lvlcard from "../assets/images/lvlcard.png";
import Slider from "../components/Slider";

function Work({ language }) {
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "15%",
    appendDots: (dots) => (
      <div className="pt-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className=" w-4 h-4 rounded-full bg-white hover:bg-[#FFF2D7] transition" />
    ),
  };

  const cards = [
    {
      src: holidazecard,
      alt: "Holidaze",
      link: "/holidaze",
      description: {
        no: "Find your next adventure! A booking platform with the user in focus",
        en: "Finn neste eventyr! En bookingplattform med brukeren i sentrum",
      },
    },
    {
      src: bidzycard,
      alt: "Bidzy",
      link: "/bidzy",
      description: {
        no: "A modern auction house for lovers of secondhand gems.",
        en: "Et moderne auksjonshus for deg som elsker gjenbruk.",
      },
    },
    {
      src: lvlcard,
      alt: "Level Up",
      link: "/leveluplounge",
      description: {
        no: "Discover, read, and collect your favorite games in one place.",
        en: "Finn, les om og samle dine favorittspill på ett sted.",
      },
    },
  ];

  return (
    <main>
      {/* Mobil og mellomstor skjerm: Karusell */}
      <section className="block md:hidden py-8">
        <SlickSlider {...mobileSettings}>
          {cards.map((card, index) => (
            <div key={index}>
              <Link to={card.link}>
                <div className="mx-auto max-w-[95%] sm:max-w-[85%] aspect-[4/5]">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="rounded-3xl shadow-md w-full h-full object-cover"
                  />
                </div>
              </Link>
              <p className="text-white text-center mt-2 px-6">
                {card.description[language]}{" "}
                <Link
                  to={card.link}
                  className=" underline whitespace-nowrap"
                >
                  {language === "en" ? "Les mer" : "Read more"}
                </Link>
              </p>
            </div>
          ))}
        </SlickSlider>
      </section>

      {/* Desktop: Grid */}
      <section className="hidden md:grid grid-cols-3 gap-6 px-10 py-12 max-w-[1400px] mx-auto">
        {cards.map((card, index) => (
          <div key={index}>
            <Link
              to={card.link}
              className="rounded-3xl shadow-md overflow-hidden block"
            >
              <div className="aspect-[4/5]">
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <p className="text-white mt-4 px-2">
              {card.description[language]}{" "}
              <Link
                to={card.link}
                className=" underline whitespace-nowrap"
              >
                {language === "en" ? "Les mer" : "Read more"}
              </Link>
            </p>
          </div>
        ))}
      </section>

      {/* Toggle slider (About / Work) */}
      <Slider language={language} />
    </main>
  );
}

export default Work;
















