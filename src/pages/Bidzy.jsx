import { useNavigate } from "react-router-dom";
import bidzyBanner from "../assets/images/bidzybanner.png";
import bidzyResponsive from "../assets/images/bidzyresponsive.png";
import bidzySome from "../assets/images/bidzysome.png";
import bidzyMobile from "../assets/images/bidzymobile.png";

function Bidzy({ language }) {
  return (
    <main className="bg-[#E9E5ED] mx-8 rounded-xl shadow-md py-12">
     <section className="px-4 md:px-20 py-12 flex flex-col lg:flex-row items-center gap-8">
  {/* Banner image */}
  <div className="w-full lg:w-3/5">
  <img
    src={bidzyMobile}
    alt="Bidzy mobile banner"
    className="w-full h-auto block md:hidden"
  />

  {/* Desktopversjon av banner */}
  <img
    src={bidzyBanner}
    alt="Bidzy desktop banner"
    className="w-full h-auto hidden md:block"
  />
  </div>

  {/* Text content */}
  <div className="w-full lg:w-2/6">
    <h1 className="font-baloo font-extrabold text-[27px] md:text-[45px] mb-6">
      Out with the old,<br />in with the cash
    </h1>

    <p className="font-baloo text-black text-md md:text-lg max-w-[700px]">
      {language === "no" ? (
        <>
          An old auction house filled with the smell of cigarettes, shrimp sandwiches, and burnt coffee?
          Average age 78.5? A man with a gavel mumbling at lightning speed?
          <br />
          Not anymore. Bidzy is here to make auctions cool again!
          <br /><br />
          This playful, down-to-earth auction site is designed for a young audience that loves sustainability, style, and smooth digital experiences.
          I focused on creating an effortless user journey paired with a fresh, inspiring interface – proving that auctions can be fun, modern, and beautifully intuitive.
        </>
      ) : (
        <>
          Et gammelt auksjonshus med lukt av sigaretter, rekesmørbrød og sur kaffe?
          Gjennomsnittsalder på 78,5? En mann med hammer som snakker uforståelig i 110 km/t?
          <br />
          Å nei da. Bidzy gjør auksjon trendy igjen!
          <br /><br />
          Bidzy er et lekent og jordnært auksjonsnettsted for en ung målgruppe som elsker gjenbruk, design og digitale løsninger som bare flyter.
          Jeg har fokusert på å skape en effortless brukeropplevelse kombinert med et inspirerende og moderne grensesnitt – for å vise at auksjon kan være både gøy, tilgjengelig og estetisk.
        </>
      )}
    </p>
  </div>
</section>

<section className="pt-8 px-6 md:px-20">
  <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-start">
    {/* Responsiveness */}
    <div className="w-full">
      <h2 className="font-baloo font-bold text-3xl">Responsiveness</h2>
      <img
        src={bidzyResponsive}
        alt="desktop and mobile"
        className="w-full h-auto pt-6"
      />
      <p className="font-baloo text-black pt-4 text-md md:text-lg">
        Bidzy er designet for å fungere sømløst på både mobil, nettbrett og desktop.
        Layout, navigasjon og innhold tilpasses skjermstørrelsen for å sikre en optimal opplevelse – uansett hvilken enhet brukeren velger.
      </p>
    </div>

    {/* Social media */}
    <div className="w-full">
      <h2 className="font-baloo font-bold text-3xl">Social media</h2>
      <img
        src={bidzySome}
        alt="social media feed"
        className="w-full h-auto"
      />
      <p className="font-baloo text-black pt-6 text-md md:text-lg">
        For å visualisere hvordan Bidzys identitet fungerer i ulike flater,
        har jeg utviklet en serie sosiale medier-thumbnails.
      </p>
    </div>
  </div>
</section>


    </main>
  );
}

export default Bidzy;




