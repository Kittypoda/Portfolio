import odaImage from '../assets/images/pinkoda.png';

function About({ language }) {
  return (
    <>
      <section>
        <img
          src={odaImage}
          alt="Oda"
          className="max-w-[950px] pt-10 px-8 content-center w-full h-auto block mx-auto"
        />
      </section>

      <section className="flex flex-col items-center px-6 text-center mx-auto pt-12 max-w-[90%] md:max-w-[1250px]">
        {language === "en" ? (
          <>
            <p className="mb-4 text-[#8D130A]">
            Hei! Jeg er Oda, og jeg trives best med å jobbe i skjæringspunktet mellom design og utvikling.
  </p>
          <p className="mb-4 text-[#8D130A]">
            Jeg liker å utvikle visuelle opplevelser som både <em>føles</em> riktige og <em>fungerer</em> godt.  
            Med interesse for estetikk og detaljer forsøker jeg å lage løsninger som er rene, inspirerende og enkle å bruke – helst med et snev av lekenhet og personlighet.  
          </p>
          
            <p className='text-[#8D130A]'>
              Har du spørsmål? Ta gjerne kontakt på{" "}
              <a className='text-[#8D130A]' href="mailto:odakrolstad@gmail.com">odakrolstad@gmail.com</a>.
            </p>
          </>
        ) : (
          <>
            <p className="mb-4 text-[#8D130A]">
            Hi! I'm Oda, and I thrive working at the intersection of design and development.
            </p>
            <p className="mb-4 text-[#8D130A]">
              I enjoy creating visual experiences that both <em>feel</em> right and <em>function</em> well.  
              With an interest in aesthetics, and detail, I aim to build solutions that are clean, inspiring, and easy to use – Preferably with a detail that adds a bit of edge or surprise.  
            </p>
            <p className='text-[#8D130A]'>
              Feel free to reach out at{" "}
              <a className='text-[#8D130A]' href="mailto:odakrolstad@gmail.com">odakrolstad@gmail.com</a>.
            </p>
          </>
        )}
      </section>
    </>
  );
}

export default About;



