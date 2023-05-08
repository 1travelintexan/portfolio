import Technologies from "./components/Technologies";
import OutlinedCard from "./components/AboutCard";
import Footer from "./components/Footer";
import BasicExample from "./components/Navbar";
import personalPic from "./assets/personal-pic.png";
import CollapsibleExample from "./components/Navbar";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="page">
      <nav className="my-nav">
        <div className="personal-container">
          <img
            src={personalPic}
            alt="personal picture"
            className="personal-pic"
          />
          <h4 className="link">Joshua George</h4>
          <h5 className="title">Full-stack Web Developer (MERN)</h5>
        </div>
      </nav>
      <CollapsibleExample />
      <Technologies />
      <OutlinedCard />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
