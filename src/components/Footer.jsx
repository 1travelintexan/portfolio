import reactImg from "../assets/react.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import tsImg from "../assets/ts.png";
import nodeImg from "../assets/nodeJsLogo.png";
import gitImg from "../assets/git.png";
import viteImg from "../assets/vite.png";
import DeleteIcon from "@mui/icons-material/Delete";
import Icon from "@mui/material/Icon";
import personalImg from "../assets/personal-pic.png";
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
        <svg data-testid={DeleteIcon}></svg>
      </div>
    </div>
  );
}

export default Footer;
