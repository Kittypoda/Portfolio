import odaodaImage from '../assets/images/oda.png';

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#F392A5] to-[#A72225]">
      <img
        src={odaodaImage}
        alt="Oda logo spinner"
        className="w-full h-80 animate-spin opacity-80"
      />
    </div>
  );
}

export default Loader;


