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
              Hei! Jeg heter Oda og jobber i skjæringspunktet mellom grafisk design og front-end-utvikling. <br></br> Jeg bor i et lite rosa hus ved en norsk fjord – omgitt av skog, blomster og masse kreativt driv.
            </p>
            <p className="mb-4">
              Jeg brenner for å utvikle visuelle opplevelser som både <em>føles</em> riktige og <em>fungerer</em> sømløst. Med sans for struktur, estetikk og detaljer, bygger jeg digitale grensesnitt som er rene, inspirerende og enkle å bruke – alltid med brukeren i sentrum. Jeg kombinerer det tekniske og det visuelle for å lage løsninger som både fungerer i praksis og føles naturlige å møte.
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
            I’m passionate about crafting visual experiences that <em>feel</em> right and <em>function</em> beautifully. With an eye for structure, aesthetics, and detail, I build clean, inspiring interfaces that are intuitive and user-centered.
            I bring together technical knowledge and visual thinking to create digital solutions that work in practice and feel natural to engage with.
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



