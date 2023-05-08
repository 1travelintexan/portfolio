import reactImg from "../assets/react.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import tsImg from "../assets/ts.png";
import nodeImg from "../assets/nodeJsLogo.png";
import gitImg from "../assets/git.png";
import viteImg from "../assets/vite.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import personalImg from "../assets/personal-pic.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <img
          src={personalImg}
          alt="self logo"
          className="footer-personal-img"
        />
        <h4>Joshua George</h4>
        <h6>Full-Stack MERN Developer</h6>
      </div>
      <div className="footer-section">
        <div>Technologies:</div>
        <section className="footer-icons">
          <img src={reactImg} alt="footer react icon" className="footer-icon" />
          <img src={htmlImg} alt="footer react icon" className="footer-icon" />
          <img src={cssImg} alt="footer react icon" className="footer-icon" />
          <img src={tsImg} alt="footer react icon" className="footer-icon" />
          <img src={nodeImg} alt="footer react icon" className="footer-icon" />
          <img src={gitImg} alt="footer react icon" className="footer-icon" />
          <img src={viteImg} alt="footer react icon" className="footer-icon" />
        </section>
      </div>
      <div className="footer-section">
        Contact:
        <div className="footer-icons-contact-container">
          <Link
            to="https://www.linkedin.com/in/-joshua-george/"
            target="_blank"
            className="footer-icon-contact"
          >
            <LinkedInIcon sx={{ fontSize: 80 }} />
          </Link>
          <Link
            to="https://github.com/1travelintexan"
            target="_blank"
            className="footer-icon-contact"
          >
            <GitHubIcon sx={{ fontSize: 80 }} />
          </Link>
          <Link
            to="https://www.instagram.com/1travelintexan/"
            target="_blank"
            className="footer-icon-contact"
          >
            <InstagramIcon sx={{ fontSize: 80 }} />
          </Link>
          {/* <Link
            to="javascript:void(0)"
            onClick={() => (window.location = "horheyinc8@gmail.com")}
          >
            Contact Me
          </Link> */}
          {/* <Link
          onClick={(e) => {
            window.location.href = "horheyinc8@gmail.com";
          }}
        >
          <MailIcon sx={{ fontSize: 80 }} />
        </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
