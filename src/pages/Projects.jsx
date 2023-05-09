import kookClubImg from "../assets/kook-club.png";
import lifesABeachImg from "../assets/life-a-beach.png";
import rippenBrahImg from "../assets/rippen-brah.png";
import tronImg from "../assets/tron.png";
import moveItImg from "../assets/moveIt.png";
import spotifyImg from "../assets/spotify.png";
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
        />
        <MediaCard
          image={lifesABeachImg}
          info="Server side rendered project, using Handlebars js as a templating engine. Designed to help users plan and budget for their dream vacation. "
          title="Life's a Beach"
        />
        <MediaCard
          image={rippenBrahImg}
          info="Fun 2D 80's theme game, created with vanilla Javascript, HTML, CSS and Canvas."
          title="Rippin Brah!!!"
        />
        <MediaCard
          image={tronImg}
          info="Tic Tac Toe game with the logic written from scratch adn made in Vite with Tron theme"
          title="Tic-Tac-Tron"
        />
        <MediaCard
          image={moveItImg}
          info="Chess game written with no help from external libraries, with a time limit of 5 seconds a move"
          title="Move it or Lose it"
        />
        <MediaCard
          image={spotifyImg}
          info="App using the spotify api to display data on any artist that Spotify offers"
          title="Josh-ify"
        />
      </div>
    </div>
  );
}

export default Projects;
