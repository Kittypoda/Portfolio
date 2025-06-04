import { useNavigate } from "react-router-dom";
import bidzyBanner from "../assets/images/bidzybanner.png";

function Bidzy({ language }) {
  const navigate = useNavigate();

  return (
    <main className="bg-[#E9E5ED] mx-8 rounded-xl shadow-md">
      <section className="px-4 md:px-6 pt-8 flex justify-center">
        <div className="max-w-5xl">
          <img src={bidzyBanner} alt="banner" className="w-full h-auto" />
        </div>
      </section>

      <section>
        <div className="px-6 md:px-20">
          <h1 className="font-baloo font-extrabold text-[30px] md:text-[45px]">
           
            Out with the old, <br></br>in with the cash
             
          </h1>

          <p className="font-baloo text-black text-md md:text-lg max-w-[700px]">
            {language === "no" ? (
              <>
                An old auction house filled with the smell of cigarettes, shrimp sandwiches, and burnt coffee? Average age 78.5? A man with a gavel mumbling at lightning speed? <br></br>
                Not anymore.
                Bidzy is here to make auctions cool again.<br></br> <br></br>
                <p className="font-baloo text-black text-md md:text-lg max-w-[700px]">
                This playful, down-to-earth auction site is designed for a young audience that loves sustainability, style, and smooth digital experiences. I focused on creating an effortless user journey paired with a fresh, inspiring interface – proving that auctions can be fun, modern, and beautifully intuitive.
                </p>
              </>
            ) : (
              <>
                Et gammelt auksjonshus med lukt av sigaretter, rekesmørbrød og sur kaffe?
                Gjennomsnittsalder på 78,5? En mann med hammer som snakker uforståelig i 110 km/t?
                <br />
                Å nei da.
                Bidzy gjør auksjon trendy igjen!
                <br /><br />
                Bidzy er et lekent og jordnært auksjonsnettsted for en ung målgruppe som elsker gjenbruk, design og digitale løsninger som bare flyter.
                Jeg har fokusert på å skape en effortless brukeropplevelse kombinert med et inspirerende og moderne grensesnitt – for å vise at auksjon kan være både gøy, tilgjengelig og estetisk.
              </>
            )}
          </p>

          <br />

          <p className="font-baloo text-black text-md md:text-lg max-w-[700px]">
            {language === "no" ? (
              <>
                This project was developed as part of a front-end development exam at Noroff.
                I built Bidzy using Vite as the development environment, React for component-based structure, and Tailwind CSS for fast and flexible styling.
                The site communicates with an external REST API for handling users, products, and bids.
                The focus has been on an accessible and responsive user experience, and the project is structured to be easily extended or scaled.
              </>
            ) : (
              <>
                Dette prosjektet er utviklet som en del av en eksamensoppgave i front-end-utvikling ved Noroff.
                Jeg har bygget Bidzy med Vite som utviklingsmiljø, React for komponentbasert struktur og Tailwind CSS for rask og fleksibel styling.
                Nettsiden kommuniserer med et eksternt REST API for håndtering av brukere, produkter og bud.
                Fokuset har vært på en tilgjengelig og responsiv brukeropplevelse, og jeg har strukturert prosjektet slik at det enkelt kan videreutvikles eller skaleres.
              </>
            )}
          </p>
        </div>
      </section>
    </main>
  );
}

export default Bidzy;




