import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import SmltLogo from "../assets/images/smltlogo.png";
import SmltGif from "../assets/videos/smltshop.gif";
import SmltSome from "../assets/images/smltsome.png";

function Smlt({ language }) {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <section className="bg-[#E9E9C7] rounded-t-2xl p-10 2xl:flex mx-4 mt-4 2xl:mt-6 2xl:mx-4">
        <div>
          <img src={SmltLogo} alt="Smlt logo" className="md:max-w-[600px] pt-6 md:pl-6" />
        </div>
        <p className="text-black max-w-[1300px] text-md font-jura whitespace-pre-line pt-6 2xl:pt-0 md:px-10">
          {language === "en"
            ? `Smlt.no er et gründerprosjekt jeg grunnla under pandemien, da interessen for DIY eksploderte på Instagram og TikTok. Jeg ønsket å tilby et mer miljøvennlig alternativ til hobbyinteresserte – giftfri og bærekraftig voks til lysstøping og kosmetikk. Tanken var at alle produkter skulle være kortreiste, naturlige og gode for både helsen og miljøet.

              Alt rundt Smlt har jeg gjort selv: fra logo, nettside og emballasjedesign til produktbilder, tekst, markedsføring i sosiale medier og drift av nettbutikken. Prosjektet ga meg muligheten til å bruke alle de kreative og visuelle ferdighetene mine, samtidig som jeg fikk prøve meg på alt fra design og utvikling til markedsføring i praksis.
              Målgruppen var jenter i alderen 15–25, med stor tilstedeværelse på sosiale medier. Derfor bygde jeg merkevaren med en tydelig visuell identitet som speilet trender, uttrykk og estetikk fra Instagram og TikTok.

              Gjennom Smlt oppdaget jeg hva jeg virkelig brenner for – det visuelle, digitale og kreative – og hva som kanskje ikke er mine sterkeste sider (som økonomi og logistikk). Prosjektet ble derfor en utrolig verdifull erfaring i å både utforske og spisse kompetansen min videre.`
            : `Smlt.no is a startup project I founded during the pandemic, when the DIY trend was booming on Instagram and TikTok. My goal was to offer a more eco-friendly alternative for hobby enthusiasts — non-toxic, sustainable wax for candle making and cosmetics. All products were intended to be locally sourced, natural, and safe for both health and the environment.

              I handled every aspect of Smlt myself: from logo design, website development, and packaging design to product photography, copywriting, social media marketing, and running the online store. The project allowed me to apply all my creative and visual skills while gaining hands-on experience across design, development, branding, and marketing.
              The target audience was girls aged 15–25, highly active on social media. With that in mind, I built a brand identity inspired by the visual language, trends, and aesthetics of Instagram and TikTok.

              Through Smlt I discovered what I truly love working with — the visual, digital, and creative side — and I also identified areas that weren’t my strongest (like finance and logistics). This made Smlt an incredibly valuable experience for exploring my strengths and refining my skills.`}
        </p>
      </section>

      {/* Sentret GIF-seksjon */}
      <section className="bg-[#95C6F0] mx-4 2xl:mx-4 ">
  <div>
    <p className="bg-[#E9E9C7] text-black text-lg font-bold font-jura py-4 rounded-b-lg px-10 inline-block">
      Web
    </p>
  </div>
  <div className="grid place-items-center xl:px-96">
    <img src={SmltGif} alt="" className="block max-w-full h-auto" />
  </div>
</section>

<section className="bg-[#FAF4E8] mx-4 2xl:mx-4 ">
  <div>
    <p className="text-black text-lg font-bold font-jura py-2 md:py-8 rounded-b-lg px-10 inline-block">
      SoMe
    </p>
  </div>
  <div className="grid place-items-center 2xl:px-96 lg:px-80 px-20 py-4 md:py-10">
    <img src={SmltSome} alt="" className="block max-w-full h-auto" />
  </div>
</section>

<section className="bg-[#C7DDD9] mx-4 2xl:mx-4 rounded-b-xl ">
  <div>
    <p className="text-black bg-[#FAF4E8] text-lg font-bold font-jura py-4 rounded-b-2xl px-10 inline-block">
      Print
    </p>
  </div>
  <div className="grid place-items-center 2xl:px-96 lg:px-80 px-20 py-10">
    <h2 className="font-jura">{language === "en"
            ? `Kommer snart - takk for tålmodigheten ♡`
            : `Coming soon — thank you for your patience ♡`}</h2>
  </div>
 <div className="text-center pb-6">
  <Link to="/work">
            <button className="font-jura underline text-black text-lg">
              {language === "no"
                ? "← Go back to see more work"
                : "← Tilbake til prosjektene"}
            </button>
          </Link>
          </div>
</section>


      <div className=" pt-6 px-2 md:px-10">
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="text-[#9A0D0F] border border-[#9A0D0F] py-3 px-5 shadow-md font-inter rounded-full font-light text-md bg-[#FCCCCC]"
        >
          <FontAwesomeIcon icon={faLink} />{" "}
          {language === "en" ? "Kopier lenke" : "Copy link"}
        </button>
      </div>

      {copied && (
        <p className="font-inter text-[#9A0D0F] pt-2 text-sm px-6 md:px-10">
          {language === "en" ? "Lenke kopiert!" : "Link copied!"}
        </p>
      )}
    </>
  );
}

export default Smlt;

