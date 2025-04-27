import "./LandingPage.css";
import dabbaImage from "/src/assets/Dabba-r.png";
import tomatoImage from "/src/assets/tomato.png";
import tomImage from "/src/assets/tom.png";
import dhaniyaImage from "/src/assets/dhaniya.png";
import mirchiImage from "/src/assets/mirchi.png";
import lalImage from "/src/assets/lal.png";
import carrotImage from "/src/assets/carrot.png";

const LandingPage = () => {


  return (
    <section className="home_section">
      <div className="home__container">
        
        <div className="home__data">
          <h1 className="home__title">
            Ghar Jaisa<br />Khana,<br />Har Din Naya
          </h1>
          <p className="home__description">
            Delicious homemade meals delivered to<br />
            your doorstep. Fresh, healthy, and affordable.
          </p>
        </div>

        
        <div className="home__images">
          <div className="home__circle">
            <div className="home__subcircle"></div>
            <img src={dabbaImage} alt="Dabba" className="home__image" />
            <img src={tomatoImage} alt="Tomato" className="home__tomato" />
            <img src={lalImage} alt="lal" className="home__lal" />
            <img src={carrotImage} alt="carrot" className="home__carrot" />
            <img src={tomImage} alt="Tom" className="home__tom" />
            <img src={dhaniyaImage} alt="Dhaniya" className="home__dhaniya" />
            <img src={mirchiImage} alt="Mirchi" className="home__mirchi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;