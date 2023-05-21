import kookClubImg from "../assets/kook-club.png";
import lifesABeachImg from "../assets/life-a-beach.png";
import rippenBrahImg from "../assets/rippen-brah.png";
import tronImg from "../assets/tron.png";
import moveItImg from "../assets/moveIt.png";
import spotifyImg from "../assets/spotify.png";
import massageImg from "../assets/massage.png";
import joshASketchImg from "../assets/joshASketch.png";
import rockImg from "../assets/rock.png";
import MediaCard from "../components/MediaCard";
import React from "react";

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <article>Projects</article>
      </div>
      <div className="projects-container">
        <MediaCard
          image={kookClubImg}
          info={[
            "Full-Stack(MERN)",
            "Auth",
            "React Hooks",
            "Express",
            "MongoDB",
          ]}
          title="Kook-Club"
          url="https://kook-club.netlify.app/"
          github="https://github.com/1travelintexan/Calloqui-server"
        />
        <MediaCard
          image={lifesABeachImg}
          info={[
            "SSR(Server Side Rendered)",
            "Auth",
            "Templating Engine(Handlebars)",
            "Cloudinary",
            "MongoDB",
          ]}
          title="Life's a Beach"
          url="https://lifesabeach.adaptable.app/"
          github="https://github.com/1travelintexan/LifeIsABeach"
        />
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
          image={tronImg}
          info={[
            "Vanilla Javascript",
            "HTML",
            "Complex JS Logic for win/lose",
            "Sound Effects",
            "Made with Vite",
          ]}
          title="Tic-Tac-Tron"
          url="https://tic-tac-tron.netlify.app/"
          github="https://github.com/1travelintexan/tic-tac-toe"
        />
        <MediaCard
          image={moveItImg}
          info={[
            "Complex movement logic written from scratch",
            "Vanilla Javascript",
            "HTML",
            "React Hooks",
            "Premove functionality",
          ]}
          title="Move it or Lose it"
          url="https://move-it-or-lose-it.netlify.app/"
          github="https://github.com/1travelintexan/Chess-Game"
        />
        <MediaCard
          image={spotifyImg}
          info={[
            "SSR",
            "Express",
            "Auth",
            "Handlebars",
            "Using Spotify Api for data",
          ]}
          title="Josh-ify"
          url="https://josh-ify.adaptable.app/"
          github="https://github.com/1travelintexan/lab-express-spotify"
        />
        <MediaCard
          image={rockImg}
          info={[
            "Math.random method for computer moves",
            "Vanilla JS",
            "HTML",
            "Restart Functionality",
            "Hover Effects",
          ]}
          title="Rock Paper Scissors"
          url="https://1travelintexan.github.io/Rock-Paper-Scissors/"
          github="https://github.com/1travelintexan/Rock-Paper-Scissors"
        />
        <MediaCard
          image={massageImg}
          info={[
            "Made with create-react-app",
            "Bootstrap",
            "React Router Dom",
            "onClick event listeners",
            "Responsive Design",
          ]}
          title="Massage Benedict"
          url="https://massage-benedict.netlify.app/"
          github="https://github.com/1travelintexan/Benito"
        />
      </div>
    </div>
  );
}

export default Projects;
