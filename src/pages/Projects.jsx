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
          info="Full-Stack(MERN),Auth,Protected Routes, React Hooks, Express, Mongoose, Bcrypt, MongoDB"
          title="Kook-Club"
          url="https://kook-club.netlify.app/"
          github="https://github.com/1travelintexan/Calloqui-server"
        />
        <MediaCard
          image={lifesABeachImg}
          info="SSR,Templating Engine(Handlebars), Auth, Bootstrap CSS, Cloudinary "
          title="Life's a Beach"
          url="https://lifesabeach.adaptable.app/"
          github="https://github.com/1travelintexan/LifeIsABeach"
        />
        <MediaCard
          image={rippenBrahImg}
          info="Fun 2D 80's theme surfing game, Vanilla Javascript, HTML, CSS and Canvas, Easter Eggs"
          title="Rippin Brah!!!"
          url="https://1travelintexan.github.io/Rippin-Brah-/"
          github="https://github.com/1travelintexan/Rippin-Brah-"
        />

        <MediaCard
          image={joshASketchImg}
          info="Vanilla Javascript, HTML, CSS, Hover Events, Classic theme"
          title="Josh-A-Sketch"
          url="https://1travelintexan.github.io/etch-a-sketch/"
          github="https://github.com/1travelintexan/etch-a-sketch"
        />
        <MediaCard
          image={tronImg}
          info="All functions written from scratch, Tron Theme, Made with Vite, Sound Effects "
          title="Tic-Tac-Tron"
          url="https://tic-tac-tron.netlify.app/"
          github="https://github.com/1travelintexan/tic-tac-toe"
        />
        <MediaCard
          image={moveItImg}
          info="All functionality written from scratch, drag & drop, extra features"
          title="Move it or Lose it"
          url="https://move-it-or-lose-it.netlify.app/"
          github="https://github.com/1travelintexan/Chess-Game"
        />
        <MediaCard
          image={spotifyImg}
          info="SSR, Express, Auth, Spotify Api, Audio Tags for song preview"
          title="Josh-ify"
          url="https://josh-ify.adaptable.app/"
          github="https://github.com/1travelintexan/lab-express-spotify"
        />
        <MediaCard
          image={rockImg}
          info="Matrix theme, Logic written from scratch, Math.random function implemented"
          title="Rock Paper Scissors"
          url="https://1travelintexan.github.io/Rock-Paper-Scissors/"
          github="https://github.com/1travelintexan/Rock-Paper-Scissors"
        />
        <MediaCard
          image={massageImg}
          info="Creat React App, Bootstrap Styles, Ericiera Portugal themed "
          title="Massage Benedict"
          url="https://massage-benedict.netlify.app/"
          github="https://github.com/1travelintexan/Benito"
        />
      </div>
    </div>
  );
}

export default Projects;
