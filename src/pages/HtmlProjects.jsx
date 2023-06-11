import rippenBrahImg from "../assets/rippen-brah.png";
import joshASketchImg from "../assets/joshASketch.png";
import rockImg from "../assets/rock.png";
import MediaCard from "../components/MediaCard";

function HtmlProjects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <article>HTML Projects</article>
      </div>
      <div className="projects-container">
        <MediaCard
          image={rippenBrahImg}
          info={[
            "Fun 2D 80's theme surfing game",
            "Vanilla Javascript",
            "HTML",
            "Canvas",
            "Hover Effects",
          ]}
          title="Rippin Brah!!!"
          url="https://1travelintexan.github.io/Rippin-Brah-/"
          github="https://github.com/1travelintexan/Rippin-Brah-"
        />
        <MediaCard
          image={joshASketchImg}
          info={[
            "Vanilla Javascript",
            "HTML",
            "Complex JS Logic",
            "Multiple Hover Effects",
            "Easter Eggs",
          ]}
          title="Josh-A-Sketch"
          url="https://1travelintexan.github.io/etch-a-sketch/"
          github="https://github.com/1travelintexan/etch-a-sketch"
        />
        <MediaCard
          image={rockImg}
          info={[
            "Math.random()",
            "Vanilla JS",
            "HTML",
            "Restart Functionality",
            "Hover Effects",
          ]}
          title="Rock Paper Scissors"
          url="https://1travelintexan.github.io/Rock-Paper-Scissors/"
          github="https://github.com/1travelintexan/Rock-Paper-Scissors"
        />
      </div>
    </div>
  );
}

export default HtmlProjects;
