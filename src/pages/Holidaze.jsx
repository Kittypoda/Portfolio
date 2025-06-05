import { useState } from "react";
import { Link } from "react-router-dom";
import holidazeBanner from "../assets/images/holidazebanner.png";

function Holidaze({ language }) {
  const [copied, setCopied] = useState(false);

  return (
    <main className=" mx-8">
     <section className="relative rounded-3xl rounded-tr-none overflow-hidden h-[900px] text-white">
  {/* Bakgrunnsbilde med zoom */}
  <img
    src="/src/assets/images/holidazebanner.png"
    alt="Holidaze banner"
    className="absolute inset-0 w-full h-full object-cover scale-[180%] md:scale-[165%] z-0"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-overlaygreen bg-opacity-50 z-10"></div>
 


  {/* Tekstinnhold */}
  <div className="relative z-10 px-6 md:px-20 py-16 max-w-4xl">
    <h1 className=" font-logo text-[50px] text-white md:text-[60px] mb-6">
     Holidaze
    </h1>

    <p className="font-alexandria font-extralight text-xs lg:text-sm">
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
  </div>
</section>

    </main>
  );
}

export default Holidaze;
