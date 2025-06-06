import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import levelUp from "../assets/images/level.png";

function Levelup({ language }) {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <section className="bg-blackish my-6 mx-2 md:mx-10 rounded-3xl flex flex-col">
        <div>
          <img
            src={levelUp}
            alt=""
            className="max-w-[600px] px-6 pt-20 w-full h-auto mx-auto"
          />
          <h2 className="text-[#F9EED6] text-center text-xl md:text-3xl font-alexandria pb-10">
            {language === "en" ? "Kommer snart.." : "Coming soon.."}
          </h2>
        </div>

        <div className="flex justify-center pb-20">
          <a
            href="https://github.com/Kittypoda/Js-frameworks-LevelupLounge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-10 py-3 font-alexandria text-xs md:text-sm text-black shadow-lg transition bg-[#F9EED6]">
              Github
            </button>
          </a>
        </div>
      </section>

      <div className="px-6 md:px-20">
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="text-black font-alexandria font-light text-md"
        >
          <FontAwesomeIcon icon={faLink} />{" "}
          {language === "en" ? "Kopier lenke" : "Copy link"}
        </button>
      </div>

      {copied && (
        <p className="font-alexandria text-black text-sm px-6 md:px-20">
          {language === "en" ? "Lenke kopiert!" : "Link copied!"}
        </p>
      )}
    </>
  );
}

export default Levelup;

