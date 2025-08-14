import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import levelUpB from "../assets/images/lvlbanner.png";
import levelUpV from "../assets/videos/lvlupgif-3.gif";
import { Link } from "react-router-dom";

function LoadingTitle() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-press text-xl md:text-3xl text-[#F9EED6] text-center pb-10">
      Loading{dots}
    </h1>
  );
}

function Levelup({ language }) {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <div className="bg-[#3F3F3E] my-6 mx-2 md:mx-10 rounded-3xl flex flex-col">
        <section className="pt-24">
          <img
            src={levelUpV}
            alt="Level up Lounge animation"
            className="max-w-[750px] px-6 pb-8 w-full h-auto mx-auto pointer-events-none"
          />
          <h1 className="font-press text-xl md:text-3xl text-[#F9EED6] text-center py-20">
            Ready to level up?
          </h1>
          <h2 className="text-[#F9EED6] text-center text-md font-jura px-10 md:px-40 lg:px-48 whitespace-pre-line">
            {language === "en"
              ? `Level Up Lounge er en retro spillbibliotek-app utviklet med React, Vite og Tailwind CSS.
Appen henter data fra et API og lar brukeren utforske et utvalg klassiske spill. Man kan lese detaljer om hvert spill, søke etter spill basert på navn eller utgivelsesdato, og legge spill til sine favoritter for enkel tilgang senere.
Prosjektet ble laget som en del av faget JavaScript Frameworks på Noroff, og fokuserte på bruk av komponentbasert arkitektur, state-håndtering og integrasjon mot eksterne API-er.`
              : `Level Up Lounge is a retro game library app built with React, Vite, and Tailwind CSS.
The app fetches data from an API, allowing users to explore a selection of classic games. Users can view detailed information about each game, search by name or release date, and save games as favorites for easy access later.
This project was created as part of the JavaScript Frameworks course at Noroff, focusing on component-based architecture, state management, and API integration.`}
          </h2>
        </section>

        <section className="pt-20 md:pt-32">
          <LoadingTitle />
          <h2 className="text-[#F9EED6] text-center text-md font-jura px-10 md:px-40 lg:px-48 whitespace-pre-line">
            {language === "en"
              ? `Designet i Level Up Lounge er inspirert av den nostalgiske estetikken fra klassiske retrospill, kombinert med en moderne og ryddig presentasjon. Brukergrensesnittet er enkelt, gjenkjennbart og intuitivt, slik at brukeren raskt forstår hvordan man navigerer i appen. Det er lagt vekt på universell utforming med hensyn til WCAG-retningslinjer – blant annet gjennom bevisste valg av kontrast, farger og tekststørrelser for å sikre god tilgjengelighet for alle.`
              : `The design of Level Up Lounge draws inspiration from the nostalgic aesthetics of classic retro games, paired with a modern and clean presentation. The user interface is simple, familiar, and intuitive, ensuring users can easily navigate the app. Special attention has been given to WCAG accessibility guidelines, with deliberate choices in contrast, colors, and text sizes to ensure the experience is accessible to all users.`}
          </h2>

          <img
            src={levelUpB}
            className="max-w-[900px] px-6 pt-10 md:pt-20 w-full h-auto mx-auto"
          />
        </section>

        <section>
          <h1 className="font-press text-xl md:text-2xl text-[#F9EED6] text-center pb-10 pt-20 md:pt-32">
          {language === "no" ? "Ready to see more?" : "Vil du se mer?"}
          </h1>

          <div className="flex flex-wrap justify-center gap-6 pb-40 px-10">
            <a
              href="https://levellounge.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 inline-block font-jura font-medium rounded border-2 border-[#7B558F] bg-[#F9EED6] px-10 py-4  text-xl text-black shadow-btnsolid transition hover:bg-[#D6B8BD]">
                Website
              </button>
            </a>
            <a
              href="https://github.com/NoroffFEU/javascript-frameworks-resit-1-Kittypoda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 inline-block font-jura font-medium rounded border-2 border-[#7B558F] bg-[#F9EED6] px-10 py-4  text-xl text-black shadow-btnsolid transition hover:bg-[#D6B8BD]">
                Github
              </button>
            </a>
            <Link to="/work">
          <button className="mt-4 inline-block font-jura font-medium rounded border-2 border-[#7B558F] bg-[#D6B8BD] px-10 py-4  text-xl text-black shadow-btnsolid transition hover:bg-[#D6B8BD]">
            {language === "no" ? " Or go back to see more work" : "Eller gå tilbake til prosjektene"}
          </button>
        </Link>
          </div>
        </section>
      </div>

      <div className="px-6 md:px-20">
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="text-black font-alexandria font-light text-md"
        >
          <FontAwesomeIcon icon={faLink} />{" "}
          {language === "en" ? "Kopier lenke" : "Copy link"}
        </button>
      </div>

      {copied && (
        <p className="font-alexandria text-black text-sm px-6 md:px-20">
          {language === "en" ? "Lenke kopiert!" : "Link copied!"}
        </p>
      )}
    </>
  );
}

export default Levelup;
