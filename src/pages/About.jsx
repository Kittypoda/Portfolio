import odaImage from '../assets/images/oda.png';

function About({ language }) {
  return (
    <>
      <section>
        <img
          src={odaImage}
          alt="Oda"
          className="max-w-[700px] pt-10 px-8 content-center w-full h-auto block mx-auto"
        />
      </section>

      <section className="flex flex-col items-center px-6 text-center mx-auto pt-12 max-w-[90%] md:max-w-[1250px]">
        {language === "en" ? (
          <>
            <p className="mb-4">
            Hei! Jeg heter Oda og jobber i skjæringspunktet mellom grafisk design og front-end-utvikling. <br />
            Jeg bor i et lite rosa hus ved en norsk fjord – omgitt av skog, blomster og masse kreativt driv.
  </p>
          <p className="mb-4">
            Jeg liker å utvikle visuelle opplevelser som både <em>føles</em> riktige og <em>fungerer</em> godt.  
            Med interesse for estetikk og detaljer forsøker jeg å lage løsninger som er rene, inspirerende og enkle å bruke – helst med et snev av lekenhet og personlighet.  
          </p>
          
            <p>
              Har du spørsmål? Ta gjerne kontakt på{" "}
              <a href="mailto:odakrolstad@gmail.com">odakrolstad@gmail.com</a>.
            </p>
          </>
        ) : (
          <>
            <p className="mb-4">
            Hi! I’m Oda, and I work at the intersection of graphic design and front-end development.<br></br> I live in a small pink house by a Norwegian fjord – surrounded by forest, flowers, and creative energy.
            </p>
            <p className="mb-4">
              I enjoy creating visual experiences that both <em>feel</em> right and <em>function</em> well.  
              With an interest in aesthetics, and detail, I aim to build solutions that are clean, inspiring, and easy to use – Preferably with a detail that adds a bit of edge or surprise.  
            </p>
            <p>
              Feel free to reach out at{" "}
              <a href="mailto:odakrolstad@gmail.com">odakrolstad@gmail.com</a>.
            </p>
          </>
        )}
      </section>
    </>
  );
}

export default About;



