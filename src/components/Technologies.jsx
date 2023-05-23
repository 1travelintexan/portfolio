import reactImg from "../assets/react.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import tsImg from "../assets/ts.png";
import nodeImg from "../assets/nodeJsLogo.png";
import gitImg from "../assets/git.png";
import viteImg from "../assets/vite.png";
import mongoImg from "../assets/mongoDB.png";
import nextImg from "../assets/nextjs.png";

function Technologies() {
  return (
    <div className="logos-container">
      <div className="logos-div">
        {" "}
        <img src={reactImg} alt="react logo" className="logo" />
        <img src={tsImg} alt="ts logo" className="logo" />
        <img src={mongoImg} alt="mongoDB logo" className="logo" />
        <img src={htmlImg} alt="html logo" className="logo" />
        <img src={cssImg} alt="css logo" className="logo" />
        <img src={nodeImg} alt="node logo" className="logo" />
        <img src={gitImg} alt="git logo" className="logo" />
        <img src={viteImg} alt="vite logo" className="logo" />
        <img src={nextImg} alt="next logo" className="logo" />
      </div>
    </div>
  );
}

export default Technologies;
