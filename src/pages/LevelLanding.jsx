import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LevelLogo from "../assets/images/level.png";
import LevelJoy from "../assets/images/gamingjoystick.png";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("levelupSeen") === "1") {
      navigate("/leveluplounge/details", { replace: true });
    }
  }, [navigate]);

  function handleStart() {
    sessionStorage.setItem("levelupSeen", "1");
    navigate("/leveluplounge/details");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1E1E1E] to-[#565656] px-4 py-10 text-center">
      <div className="w-full max-w-[500px]">
        <img src={LevelLogo} alt="Level up Lounge logo" className="h-auto w-full" />
      </div>

      <div className="mt-6 w-full max-w-[500px]">
        <img src={LevelJoy} alt="Gaming joystick" className="h-auto w-full" />
      </div>

      <p className="my-4 text-lg font-jura text-[#F9EED6] md:text-xl">Ready to level up?</p>

      <button
        onClick={handleStart}
        className="mt-4 inline-block font-jura font-medium rounded border-2 border-[#7B558F] bg-[#F9EED6] px-10 py-4 text-xl text-black shadow-btnsolid transition hover:bg-[#D6B8BD]"
      >
        GAME ON
      </button>
    </div>
  );
}

