import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <h4>Joshua George</h4>
        <h6>Full-Stack MERN Developer</h6>
        <h6>Ironhack Graduate</h6>
        <h6>Web Dev Lead Teacher</h6>
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
        </div>
        <p>Email: Horheyinc@gmail.com</p>
        <p>Whatsapp: +34 662 572 121</p>
      </div>
    </div>
  );
}

export default Footer;
