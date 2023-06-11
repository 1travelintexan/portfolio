import lifesABeachImg from "../assets/life-a-beach.png";
import starWarsImg from "../assets/starWars.png";
import spotifyImg from "../assets/spotify.png";
import MediaCard from "../components/MediaCard";

function SsrProjects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <article>SSR Projects</article>
      </div>
      <div className="projects-container">
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
          image={spotifyImg}
          info={["SSR", "Express", "Auth", "Handlebars", "Rest API (Spotify) "]}
          title="Josh-ify"
          url="https://josh-ify.adaptable.app/"
          github="https://github.com/1travelintexan/lab-express-spotify"
        />
        <MediaCard
          image={starWarsImg}
          info={[
            "Next JS",
            "Deployed with Vercel",
            "Rest API",
            "Custom Routes",
            "Star Wars Theme",
          ]}
          title="Star Wars API"
          url="https://star-wars-app-beta.vercel.app/"
          github="https://github.com/1travelintexan/Nextjs-starWarsApp"
        />
      </div>
    </div>
  );
}

export default SsrProjects;
