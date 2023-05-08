import personalPic from "../assets/personal-pic.png";

function Header() {
  return (
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
  );
}

export default Header;
