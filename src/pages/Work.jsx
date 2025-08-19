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
    // FIX: manglet bindestrek i hover:bg-[#9A0D0F]
    customPaging: () => (
      <div className="w-4 h-4 rounded-full bg-white hover:bg-[#9A0D0F] transition" />
    ),
  };

  const desktopSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    centerPadding: "0px",
    appendDots: (dots) => (
      <div className="pt-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-4 h-4 rounded-full bg-white hover:bg-[#9A0D0F] transition" />
    ),
  };

  // Pastell-farger for tags (juster fritt senere)
  const tagColors = {
    dev: "bg-blue-200 text-blue-800",
    "ui/ux": "bg-green-200 text-green-800",
    design: "bg-[#FCCCCC] text-[#8D130A]",
  };

  const cards = [
    {
      src: bidzycard,
      alt: "Bidzy",
      link: "/bidzy",
      tags: ["dev", "design"],
      description: {
        no: "A modern auction house for lovers of secondhand gems.",
        en: "Et moderne auksjonshus for deg som elsker gjenbruk.",
      },
    },
    {
      src: lvlcard,
      alt: "Level Up",
      link: "/leveluplounge",
      tags: ["dev", "design"],
      description: {
        no: "Discover, read, and collect your favorite games in one place.",
        en: "Finn, les om og samle dine favorittspill på ett sted.",
      },
    },
    {
      src: holidazecard,
      alt: "Holidaze",
      link: "/holidaze",
      tags: ["dev", "design"],
      description: {
        no: "Find your next adventure! A booking platform with the user in focus",
        en: "Finn neste eventyr! En bookingplattform med brukeren i sentrum",
      },
    },
  ];

  return (
    <main>
      {/* Mobil */}
      <section className="block md:hidden py-8">
        <SlickSlider {...mobileSettings}>
          {cards.map((card, index) => (
            <div key={index} className="relative px-2">
              <Link
                to={card.link}
                className="relative block rounded-3xl overflow-hidden"
              >
                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2 z-10">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs font-medium rounded-full shadow ${tagColors[tag]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="aspect-[4/5]">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
                  />
                </div>
              </Link>

              <p className="text-[#9A0D0F] text-center mt-2 px-6">
                {card.description[language]}{" "}
                <Link
                  to={card.link}
                  className="underline whitespace-nowrap text-[#9A0D0F]"
                >
                  {language === "en" ? "Les mer" : "Read more"}
                </Link>
              </p>
            </div>
          ))}
        </SlickSlider>
      </section>

      {/* Desktop */}
      <section className="hidden md:block px-10 py-12 max-w-[1400px] mx-auto">
        <SlickSlider {...desktopSettings}>
          {cards.map((card, index) => (
            <div key={index} className="px-2 relative">
              <Link
                to={card.link}
                className="relative rounded-3xl shadow-md overflow-hidden block transition duration-300 hover:shadow-xl"
              >
                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2 z-10">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs font-medium rounded-full shadow ${tagColors[tag]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="aspect-[4/5]">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-full object-cover transform transition duration-300 md:hover:scale-105"
                  />
                </div>
              </Link>

              <p className="text-[#9A0D0F] text-center mt-4 px-2">
                {card.description[language]}{" "}
                <Link
                  to={card.link}
                  className="underline text-[#9A0D0F] whitespace-nowrap"
                >
                  {language === "en" ? "Les mer" : "Read more"}
                </Link>
              </p>
            </div>
          ))}
        </SlickSlider>
      </section>

      {/* Toggle slider (About / Work) */}
      <Slider language={language} />
    </main>
  );
}

export default Work;
