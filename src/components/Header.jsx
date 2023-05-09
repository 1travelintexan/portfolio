import personalPic from "../assets/personal-pic2.png";

function Header() {
  return (
    <nav className="my-nav">
      <div className="personal-container">
        <img
          src={personalPic}
          alt="personal picture"
          className="personal-pic-header"
        />
        <h4 className="title-header">Joshua George</h4>
        <h4 className="title-header">Full-stack Web Developer (MERN)</h4>
      </div>
    </nav>
  );
}

export default Header;
