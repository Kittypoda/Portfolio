import odaImage from '../assets/images/oda.png';

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#DFB6D9]">
      <img
        src={odaImage}
        alt="Oda logo spinner"
        className="w-42 h-42 animate-spin-slow opacity-80"
      />
    </div>
  );
}

export default Loader;

