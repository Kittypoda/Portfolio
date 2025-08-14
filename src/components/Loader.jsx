import odaodaImage from '../assets/images/groupoda.png';

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-(114deg, #F392A5 1.18%, #A72225 100.81%)">
      <img
        src={odaodaImage}
        alt="Oda logo spinner"
        className="w-42 h-42 animate-spin-slow opacity-80"
      />
    </div>
  );
}

export default Loader;

