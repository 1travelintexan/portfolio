import kookClubImg from "../assets/kook-club.png";
import tronImg from "../assets/tron.png";
import moveItImg from "../assets/moveIt.png";
import massageImg from "../assets/massage.png";
import MediaCard from "../components/MediaCard";

function ReactProjects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <article>React Projects</article>
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
          image={tronImg}
          info={[
            "Vanilla Javascript",
            "HTML",
            "JS Logic for win/lose",
            "Sound Effects",
            "Vite",
          ]}
          title="Tic-Tac-Tron"
          url="https://tic-tac-tron.netlify.app/"
          github="https://github.com/1travelintexan/tic-tac-toe"
        />
        <MediaCard
          image={moveItImg}
          info={[
            "Complex movement",
            "No chess library",
            "Drag & Drop",
            "React Hooks",
            "Premove functionality",
          ]}
          title="Move it or Lose it"
          url="https://move-it-or-lose-it.netlify.app/"
          github="https://github.com/1travelintexan/Chess-Game"
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

export default ReactProjects;
