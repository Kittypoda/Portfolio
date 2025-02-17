function About({ language }) {
  return (
    <section className="imoda">
      <h1>{language === "en" ? "Hei, jeg heter Oda" : "Hi, I'm Oda"}</h1>
      {language === "en" ? (
        <p>
          Jeg bor i et lite rosa hus, omringet av skog, like ved en norsk fjord, hvor jeg studerer front-end utvikling og bygger videre på min bakgrunn i grafisk design.
          <br />
          <br />
          Jeg brenner for å skape vakre og intuitive brukeropplevelser, med et sterkt fokus på rene og inspirerende digitale grensesnitt som føles naturlige og enkle å bruke. 
          Med et skarpt øye for detaljer og en lidenskap for estetikk, forener jeg design og utvikling for å skape sømløse, tilgjengelige og engasjerende løsninger.
          <br />
          <br />
          Har du spørsmål? Ta gjerne kontakt på{" "}
          <a href="mailto:odakrolstad@gmail.com">odakrolstad@gmail.com</a>.
        </p>
      ) : (
        <p>
        I live in a pink house, tucked away in a forest by a Norwegian fjord, where I study front-end development and build on my background in graphic design.
          <br />
          <br />
          I’m passionate about crafting beautiful and intuitive user experiences, focusing on designing clean, inspiring digital interfaces that feel effortless to use. With a keen eye for detail and a deep appreciation for aesthetics, I bridge the gap between design and development, ensuring seamless, accessible, and engaging interactions.
          <br />
          <br />
          Feel free to reach out at{" "}
          <a href="mailto:odakrolstad@gmail.com">odakrolstad@gmail.com</a>.
        </p>
      )}
    </section>
  );
}

export default About;


