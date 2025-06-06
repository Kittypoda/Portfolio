import { useState } from "react";
import { Link } from "react-router-dom";
import holidazeBanner from "../assets/images/holidazebanner.png";
import holidazeDesktop from "../assets/images/holdazedesktop.png";
import holidazeMobile from "../assets/images/holidazemobile.png";
import holidazeUi from "../assets/images/holidazeui.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Holidaze({ language }) {
  const [copied, setCopied] = useState(false);

  return (
    <main className=" mx-2 md:mx-8">
      <section className="relative rounded-3xl rounded-tr-none overflow-hidden min-h-[850px] text-white">
        {/* Bakgrunnsbilde med zoom */}
        <div className="absolute inset-0 w-[100%] lg:-translate-x-1/2 lg:animate-float-x ">
          <img
            src={holidazeBanner}
            alt="Holidaze banner"
            className="absolute inset-0 w-full h-full object-cover object-[center_25%] hidden md:block scale-[190%] md:scale-[160%] z-0"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#5C797E] md:bg-overlaygreen md:bg-opacity-50 z-10"></div>

        {/* Tekstinnhold */}
        <div className="relative z-10 px-6 md:px-20 py-20 max-w-4xl">
          <h1 className=" font-logo text-[50px] text-white md:text-[60px] mb-6">
            Holidaze
          </h1>

          <p className="font-alexandria font-extralight text-sm md:[text-shadow:1px_1px_3px_rgba(0,0,0,0.2)]">
            {language === "no" ? (
              <>
                Holidaze is a digital booking universe designed to make it easy,
                inspiring, and intuitive to discover – or offer – unique places
                to stay. This website was developed as my final exam project,
                with a focus on building a solution that combines functionality,
                aesthetics, and clear role-based navigation.
                <br />
                <br />
                The platform supports three distinct user types:
                <br />
                <strong>Visiter</strong> – a guest who can browse available
                venues and explore details
                <br />
                <strong>Traveler</strong> – a logged-in user who can make
                bookings
                <br />
                <strong>Venue Manager</strong> – a host who can create, edit,
                and manage their own listings
                <br />
                <br />
                Holidaze is built using <strong>React</strong>,{" "}
                <strong>Tailwind CSS</strong>, and <strong>React Router</strong>
                , and connects to a <strong>REST API</strong> to handle
                everything from user authentication to booking logic and data
                display. The calendar is powered by{" "}
                <strong>react-datepicker</strong>, with a clear visual
                indication of available and booked dates.
                <br />
                <br />
                The design is clean and modern, with inspiration from movement, lightness, and a sense of exploration. The goal is to make the experience feel clear, engaging, and easy to navigate.
                <br />
                <br />I focused on accessibility, responsive layouts, and a
                component-based structure that is easy to scale. This project
                gave me the opportunity to think holistically about user
                experience, role management, and visual identity – and to create
                a solution that both looks good and feels good to use.
              </>
            ) : (
              <>
                Holidaze er et digitalt bookingunivers designet for å gjøre det
                enkelt, inspirerende og intuitivt å finne – eller tilby – unike
                steder å bo. Nettsiden er utviklet som mitt avsluttende
                eksamensprosjekt, med fokus på å bygge en løsning som kombinerer
                funksjonalitet, estetikk og tydelig rollefordeling.
                <br />
                <br />
                Plattformen støtter tre forskjellige brukertyper:
                <br />
                <strong>Visiter</strong> – en besøkende som kan bla gjennom
                tilbud og utforske detaljer
                <br />
                <strong>Traveler</strong> – en innlogget bruker som kan legge
                inn bookinger
                <br />
                <strong>Venue Manager</strong> – en utleier som kan opprette,
                redigere og administrere sine egne steder
                <br />
                <br />
                Holidaze er bygget med <strong>React</strong>,{" "}
                <strong>Tailwind CSS</strong> og <strong>React Router</strong>,
                og kobles opp mot et <strong>REST API</strong> for å håndtere
                alt fra brukerautentisering til bookingsystem og datavisning.
                For bookingkalenderen benyttes <strong>react-datepicker</strong>
                , med tydelig visuell markering av ledige og opptatte datoer.
                <br />
                <br />
                Designet er rent og moderne, inspirert av bevegelse, letthet og nysgjerrighet. Målet er å gjøre opplevelsen tydelig, engasjerende og enkel å bruke.
                <br />
                <br />
                Jeg har jobbet bevisst med tilgjengelighet, responsive
                tilpasninger og et komponentbasert design som enkelt kan
                skaleres. Prosjektet har gitt meg muligheten til å tenke
                helhetlig rundt både brukeropplevelse, rollestyring og visuell
                identitet – og å bygge en løsning som både ser bra ut og føles
                bra å bruke.
              </>
            )}
          </p>
          <div className="font-alexandria text-4xl pt-20">
            A bed for every adventure
          </div>
          <div className="font-alexandria font-extralight text-3xl flex pt-6 items-center">
            Explore
            <div className="group pl-6">
              <a
                href="#search-section"
                className="text-white"
                aria-label="Scroll to venues"
              >
                <svg
                  className=" pt-12 h-32 animate-slow-bounce md:animate-none md:group-hover:animate-bounce transform transition-transform"
                  width="14"
                  height="60"
                  viewBox="0 0 16 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.2929 70.7071C7.68342 71.0976 8.31659 71.0976 8.70711 70.7071L15.0711 64.3431C15.4616 63.9526 15.4616 63.3195 15.0711 62.9289C14.6805 62.5384 14.0474 62.5384 13.6569 62.9289L8 68.5858L2.34315 62.9289C1.95262 62.5384 1.31946 62.5384 0.928935 62.9289C0.538411 63.3195 0.538411 63.9526 0.928935 64.3431L7.2929 70.7071ZM7 4.37114e-08L7 70L9 70L9 -4.37114e-08L7 4.37114e-08Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="#search-section"
        className="bg-blackish my-6 rounded-3xl flex flex-col"
      >
        <h1 className=" pt-6 md:pt-20 pb-10 px-6 md:px-20 text-white font-alexandria font-light">
          Resposiveness
        </h1>
        <div>
          <img
            src={holidazeDesktop}
            alt="Holidaze desktop"
            className="max-w-[1250px] w-full h-auto mx-auto md:block hidden px-6 md:px-20"
          ></img>

          <img
            src={holidazeMobile}
            alt="Holidaze desktop"
            className="max-w-[1250px] w-full h-auto mx-auto block md:hidden px-6 md:px-20"
          ></img>
        </div>
        <p className="font-alexandria font-extralight max-w-[800px] pt-6 pb-12  text-sm px-6 md:px-20">
          {language === "no" ? (
            <>
              Holidaze is built with a mobile-first approach and adapts
              seamlessly to different screen sizes. Layout, navigation, and
              interactions are optimized to provide a smooth experience across
              mobile, tablet, and desktop.
            </>
          ) : (
            <>
              Holidaze er designet med et mobil-først-prinsipp og tilpasser seg
              sømløst til ulike skjermstørrelser. Både layout, navigasjon og
              interaksjoner er optimalisert for å gi en god opplevelse på mobil,
              nettbrett og desktop.
            </>
          )}
        </p>
      </section>
      <section className="bg-[#CED6D5] py-20 rounded-3xl">
        <div>
          <img
            src={holidazeUi}
            alt="Holidaze desktop"
            className="max-w-[950px] w-full h-auto mx-auto px-2 md:px-6 md:px-20"
          ></img>
        </div>
        <div>
          <h1 className=" pt-6 md:pt-0 px-6 md:px-20 font-alexandria text-3xl">
            Clarity & comfort
          </h1>
        </div>
        <p className="font-alexandria text-black font-extralight max-w-[800px] pt-6 pb-6 text-sm px-6 md:px-20">
          {language === "no" ? (
            <>
              In Holidaze, I focused on creating a user experience that feels
              safe, intuitive, and easy to navigate – no matter what role the
              user takes. Clear confirmations, warnings, and feedback messages
              help users understand what's happening and what their options are.
              Visual clarity and predictable interaction patterns support a
              sense of flow and trust throughout the platform. The goal has been
              to lower the barrier to entry while building confidence through
              consistent design, structure, and interaction logic.
            </>
          ) : (
            <>
              I Holidaze har jeg lagt stor vekt på å skape en opplevelse som
              føles trygg og intuitiv – uansett hvilken rolle brukeren har.
              Klare bekreftelser, varsler og tilbakemeldinger gjør det enkelt å
              forstå hva som skjer, og hvilke valg som er tilgjengelige. Visuell
              tydelighet og forutsigbarhet er gjennomgående i både design og
              interaksjon, slik at brukeren alltid føler seg trygg på neste
              steg. Målet har vært å senke terskelen for å bruke plattformen –
              og samtidig bygge tillit gjennom god struktur, enkel navigasjon og
              konsistente handlinger.
            </>
          )}
        </p>
      </section>

      <section className="bg-[#EEEDEB] py-10 my-6 rounded-3xl">
        <div className="font-alexandria font-light text-2xl px-6 md:px-20 pt-8">
          {language === "no" ? "Want to see more?" : "Vil du se mer?"}
        </div>
        <div className="text-2xl px-6 md:px-20 pt-6">
          <a href="https://holiholidaze.netlify.app" target="_blank" rel="noopener noreferrer">
            <button className="mr-4 px-10 md:py-3 py-3 rounded-md font-alexandria text-xs md:text-sm text-white shadow-lg transition bg-dustygreen hover:bg-mintgreen hover:text-blackish">
              Webside
            </button>
          </a>
          <a href="https://github.com/Kittypoda/Project-Exam-2" target="_blank" rel="noopener noreferrer">
            <button className="px-10 md:py-3 py-3 rounded-md font-alexandria text-xs md:text-sm text-white shadow-lg transition bg-dustygreen hover:bg-mintgreen hover:text-blackish">
              Github
            </button>
          </a>
        </div>
      

      <div className="px-6 md:px-20 py-8">
        <Link to="/work">
          <button className="font-alexandria underline text-black">
            {language === "no" ? "← Go back to see more work" : "← Tilbake til prosjektene"}
          </button>
        </Link>
      </div>

      {/* Share button */}
      <div className="px-6 md:px-20">
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-black font-alexandria font-light text-md"
            > 
            <FontAwesomeIcon icon={faLink} />
               {language === "no" ? "Copy link" : "Kopier lenke"}
               
            </button>
          </div>

          {copied && (
            <p className=" font-alexandria text-black text-sm px-6 md:px-20">
              {language === "no" ? "Link copied!" : "Lenke kopiert!"}
            </p>
          )}
          </section>
    </main>
  );
}

export default Holidaze;
