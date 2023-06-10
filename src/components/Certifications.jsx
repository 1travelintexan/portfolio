import udemyImg from "../assets/udemy.png";
import fccImg from "../assets/freeCodeCamp.png";
import { Link } from "react-router-dom";

function Certifications() {
  return (
    <div className="certification-container">
      <div className="certification-card">
        <img src={udemyImg} alt="udemy logo" className="certification-img" />
        <section>
          <h4>Next JS</h4>
          <Link
            target="_blank"
            to="https://www.udemy.com/certificate/UC-cc327c18-95a1-431e-8e41-1a9d7262c836/"
          >
            See Certificate
          </Link>
        </section>
      </div>
      <div className="certification-card">
        <img src={udemyImg} alt="udemy logo" className="certification-img" />
        <section>
          <h4>Ubuntu Linux</h4>
          <Link
            target="_blank"
            to="https://www.udemy.com/certificate/UC-c0a9cd5c-00c2-439b-bde0-f1bbc7d5deab/"
          >
            See Certificate
          </Link>
        </section>
      </div>
      <div className="certification-card">
        <img src={udemyImg} alt="udemy logo" className="certification-img" />
        <section>
          <h4>Linux Command Line</h4>
          <Link
            target="_blank"
            to="https://www.udemy.com/certificate/UC-b73d0e66-e0fd-4c3f-89cb-f0c74dff29a9/"
          >
            See Certificate
          </Link>
        </section>
      </div>
      <div className="certification-card">
        <img src={udemyImg} alt="udemy logo" className="certification-img" />
        <section>
          <h4>Git & Github</h4>
          <Link
            target="_blank"
            to="https://www.udemy.com/certificate/UC-cc327c18-95a1-431e-8e41-1a9d7262c836/"
          >
            See Certificate
          </Link>
        </section>
      </div>
      <div className="certification-card">
        <img
          src={fccImg}
          alt="free code camp logo"
          className="certification-img"
        />
        <section>
          <h4>Responsive Web Design</h4>
          <Link
            target="_blank"
            to="https://www.freecodecamp.org/certification/1travelintexan/responsive-web-design"
          >
            See Certificate
          </Link>
        </section>
      </div>
      <div className="certification-card">
        <img
          src={fccImg}
          alt="free code camp logo"
          className="certification-img"
        />
        <section>
          <h4>Backend Development</h4>
          <Link
            target="_blank"
            to="https://www.freecodecamp.org/certification/1travelintexan/back-end-development-and-apis"
          >
            See Certificate
          </Link>
        </section>
      </div>
      <div className="certification-card">
        <img
          src={fccImg}
          alt="free code camp logo"
          className="certification-img"
        />
        <section>
          <h4>Javacript Algorithms</h4>
          <Link
            target="_blank"
            to="https://www.freecodecamp.org/certification/1travelintexan/javascript-algorithms-and-data-structures"
          >
            See Certificate
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Certifications;
