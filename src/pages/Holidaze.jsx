import { useState } from "react";
import { Link } from "react-router-dom";
import holidazeBanner from "../assets/images/holidazebanner.png";
import holidazeDesktop from "../assets/images/holdazedesktop.png";

function Holidaze({ language }) {
  const [copied, setCopied] = useState(false);

  return (
    <main className=" mx-8">
     <section className="relative rounded-3xl rounded-tr-none overflow-hidden min-h-[850px] text-white">
  {/* Bakgrunnsbilde med zoom */}
  <div className="absolute inset-0 w-[100%] lg:-translate-x-1/2 lg:animate-float-x ">
  <img
    src={holidazeBanner}
    alt="Holidaze banner"
    className="absolute inset-0 w-full h-full object-cover object-[center_25%] scale-[190%] md:scale-[160%] z-0"
  />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-overlaygreen bg-opacity-50 z-10"></div>
 


  {/* Tekstinnhold */}
  <div className="relative z-10 px-6 md:px-20 py-20 max-w-4xl">
    <h1 className=" font-logo text-[50px] text-white md:text-[60px] mb-6">
     Holidaze
    </h1>

    <p className="font-alexandria font-extralight text-xs [text-shadow:1px_1px_3px_rgba(0,0,0,0.6)] lg:text-sm">
      {language === "no" ? (
        <>
        Holidaze is a digital booking universe designed to make it easy, inspiring, and intuitive to discover – or offer – unique places to stay.
        This website was developed as my final exam project, with a focus on building a solution that combines functionality, aesthetics, and clear role-based navigation.
        <br /><br />
        The platform supports three distinct user types:
        <br />
        <strong>Visiter</strong> – a guest who can browse available venues and explore details<br />
        <strong>Traveler</strong> – a logged-in user who can make bookings<br />
        <strong>Venue Manager</strong> – a host who can create, edit, and manage their own listings
        <br /><br />
        Holidaze is built using <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>React Router</strong>, and connects to a <strong>REST API</strong> to handle everything from user authentication to booking logic and data display.
        The calendar is powered by <strong>react-datepicker</strong>, with a clear visual indication of available and booked dates.
        <br /><br />
        The design is clean, modern, and inspired by nature, calm, and clarity – aiming to give users a sense of control, trust, and curiosity.
        <br /><br />
        I focused on accessibility, responsive layouts, and a component-based structure that is easy to scale.
        This project gave me the opportunity to think holistically about user experience, role management, and visual identity – and to create a solution that both looks good and feels good to use.
      </>
      
      ) : (
        <>
        Holidaze er et digitalt bookingunivers designet for å gjøre det enkelt, inspirerende og intuitivt å finne – eller tilby – unike steder å bo.
        Nettsiden er utviklet som mitt avsluttende eksamensprosjekt, med fokus på å bygge en løsning som kombinerer funksjonalitet, estetikk og tydelig rollefordeling.
        <br /><br />
        Plattformen støtter tre forskjellige brukertyper:
        <br />
        <strong>Visiter</strong> – en besøkende som kan bla gjennom tilbud og utforske detaljer<br />
        <strong>Traveler</strong> – en innlogget bruker som kan legge inn bookinger<br />
        <strong>Venue Manager</strong> – en utleier som kan opprette, redigere og administrere sine egne steder
        <br /><br />
        Holidaze er bygget med <strong>React</strong>, <strong>Tailwind CSS</strong> og <strong>React Router</strong>, og kobles opp mot et <strong>REST API</strong> for å håndtere alt fra brukerautentisering til bookingsystem og datavisning.
        For bookingkalenderen benyttes <strong>react-datepicker</strong>, med tydelig visuell markering av ledige og opptatte datoer.
        <br /><br />
        Designet er rent, moderne og inspirert av natur, ro og oversiktlighet – med mål om å gi brukeren en følelse av kontroll, tillit og lyst til å utforske.
        <br /><br />
        Jeg har jobbet bevisst med tilgjengelighet, responsive tilpasninger og et komponentbasert design som enkelt kan skaleres.
        Prosjektet har gitt meg muligheten til å tenke helhetlig rundt både brukeropplevelse, rollestyring og visuell identitet – og å bygge en løsning som både ser bra ut og føles bra å bruke.
      </>
      )}
    </p>
    <div className="font-alexandria text-4xl pt-20">A bed for every adventure</div>
    <div className="font-alexandria font-extralight text-3xl flex pt-6">Explore
    <a
                href="#search-section"
                className="text-white pl-6 group-hover:animate-bounce transform transition-transform duration-300"
                aria-label="Scroll to venues"
              >
                <svg
                  className=" h-10 md:h-20"
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
</section>
<section className="bg-blackish my-6 rounded-3xl flex flex-col">
  <h1 className=" pt-6 md:pt-20 pb-10 px-6 md:px-20 text-white font-alexandria font-light">Resposiveness</h1>
  <div>
  <img
    src={holidazeDesktop}
    alt="Holidaze desktop"
    className="max-w-[1250px] w-full h-auto mx-auto px-6 md:px-20"></img>
  </div>
  <p className="font-alexandria font-extralight text-xs max-w-[800px] pt-6 pb-12 lg:text-sm px-6 md:px-20">
      {language === "no" ? (
        <>
        Holidaze is built with a mobile-first approach and adapts seamlessly to different screen sizes.
        Layout, navigation, and interactions are optimized to provide a smooth experience across mobile, tablet, and desktop.
      </>
      
      ) : (
        <>
       Holidaze er designet med et mobil-først-prinsipp og tilpasser seg sømløst til ulike skjermstørrelser.
        Både layout, navigasjon og interaksjoner er optimalisert for å gi en god opplevelse på mobil, nettbrett og desktop.
      </>
      )}
    </p>
</section>


    </main>
  );
}

export default Holidaze;
