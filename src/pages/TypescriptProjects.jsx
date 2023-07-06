import MediaCard from "../components/MediaCard";
import kindleflixImg from "../assets/kindleflix.png";

function TypescriptProjects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <article>Typescript Projects</article>
      </div>
      <div className="projects-container">
        <MediaCard
          image={kindleflixImg}
          info={[
            "Full-Stack(MERN)",
            "Typescript",
            "Auth",
            "React Hooks",
            "Express",
            "MongoDB",
          ]}
          title="Kindleflix"
          url="https://read-a-book-and-chill.netlify.app/"
          github="https://github.com/1travelintexan/read-more-client"
        />
      </div>
    </div>
  );
}

export default TypescriptProjects;
