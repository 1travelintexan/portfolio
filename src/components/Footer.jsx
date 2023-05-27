import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <h4>Joshua George</h4>
        <h6>Full-Stack MERN Developer</h6>
        <h6>Web Dev Remote Bootcamp Lead Teacher</h6>
        <h5 className="motto">
          It's the cave we most fear to enter, that holds the treasure we
          seek...
        </h5>
      </div>
      <div className="footer-section">
        Contact:
        <div className="footer-icons-contact-container">
          <Link
            to="https://www.linkedin.com/in/-joshua-george/"
            target="_blank"
            className="footer-icon-contact"
          >
            <LinkedInIcon sx={{ fontSize: 60 }} />
          </Link>
          <Link
            to="https://github.com/1travelintexan"
            target="_blank"
            className="footer-icon-contact"
          >
            <GitHubIcon sx={{ fontSize: 60 }} />
          </Link>
          <Link
            onClick={() => (window.location = "mailto:horheyinc8@gmail.com")}
            className="footer-icon-contact"
          >
            <EmailRoundedIcon sx={{ fontSize: 60 }} />
          </Link>
          <Link className="footer-icon-contact">
            <WhatsAppIcon sx={{ fontSize: 60 }} />
            <p>+34 662 572 121</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
