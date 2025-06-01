import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import Slider from "../components/Slider";
import bidzycard from "../assets/images/bidzycard.png";

function Work({ language }) {
  const navigate = useNavigate();

  return (
    <main>
      <section className="work-cards">
        <Link
          to="/bidzy"
          className="item item1"
          style={{ backgroundImage: `url(${bidzycard})` }}
        ></Link>
        <Link to="/osm" className="item item2"></Link>
        <Link to="/rainy" className="item item3"></Link>
      </section>

     
      <Slider language={language} />
    </main>
  );
}

export default Work;

