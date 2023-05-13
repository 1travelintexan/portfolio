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
          info="Full-Stack(MERN), React, Express, Mongoose, Bcrypt, MongoDB"
          title="Kook-Club"
          url="https://kook-club.netlify.app/"
          github="https://github.com/1travelintexan/Calloqui-server"
        />
        <MediaCard
          image={lifesABeachImg}
          info="SSR,Templating Engine (Handlebars) Designed to help users plan and budget for their dream vacation. "
          title="Life's a Beach"
          url="https://lifesabeach.adaptable.app/"
          github="https://github.com/1travelintexan/LifeIsABeach"
        />
        <MediaCard
          image={rippenBrahImg}
          info="Fun 2D 80's theme game, created with vanilla Javascript, HTML, CSS and Canvas."
          title="Rippin Brah!!!"
          url="https://1travelintexan.github.io/Rippin-Brah-/"
          github="https://github.com/1travelintexan/Rippin-Brah-"
        />

        <MediaCard
          image={joshASketchImg}
          info="App that simulates a fun childhood game, Etch-a-Sketch"
          title="Josh-A-Sketch"
          url="https://1travelintexan.github.io/etch-a-sketch/"
          github="https://github.com/1travelintexan/etch-a-sketch"
        />
        <MediaCard
          image={tronImg}
          info="Tic Tac Toe game with the logic written from scratch adn made in Vite with Tron theme"
          title="Tic-Tac-Tron"
          url="https://tic-tac-tron.netlify.app/"
          github="https://github.com/1travelintexan/tic-tac-toe"
        />
        <MediaCard
          image={moveItImg}
          info="Chess game written with no help from external libraries, with a time limit of 5 seconds a move"
          title="Move it or Lose it"
          url="https://move-it-or-lose-it.netlify.app/"
          github="https://github.com/1travelintexan/Chess-Game"
        />
        <MediaCard
          image={spotifyImg}
          info="App using the spotify api to display data on any artist that Spotify offers"
          title="Josh-ify"
          url="https://josh-ify.adaptable.app/"
          github="https://github.com/1travelintexan/lab-express-spotify"
        />
        <MediaCard
          image={rockImg}
          info="Matrix themed Rock...Paper...Scissors game"
          title="Rock Paper Scissors"
          url="https://1travelintexan.github.io/Rock-Paper-Scissors/"
          github="https://github.com/1travelintexan/Rock-Paper-Scissors"
        />
        <MediaCard
          image={massageImg}
          info="Freelance SPA for a local massuese"
          title="Massage Benedict"
          url="https://massage-benedict.netlify.app/"
          github="https://github.com/1travelintexan/Benito"
        />
      </div>
    </div>
  );
}

export default Projects;
