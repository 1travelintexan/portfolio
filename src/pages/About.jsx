import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import personalPic from "../assets/personal-pic.png";
import Certifications from "../components/Certifications";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="projects-header">
        <article className="dark">About:</article>
      </div>
      <CardContent className="about-card">
        <Typography
          variant="h2"
          component="section"
          color="white"
          sx={{ mb: 3 }}
        >
          Hi, I'm Joshua:
        </Typography>
        <div className="row-about">
          <img src={personalPic} alt="personal picture" className="about-pic" />
          <section>
            <Typography sx={{ mb: 2 }} color="white" variant="h6">
              -Ironhack Full-Stack Web Development Graduate(2020)
            </Typography>
            <Typography sx={{ mb: 2 }} color="white" variant="h6">
              -Freelancer / Web Dev Lead Teacher with a passion for helping
              others & learning new tech stacks.
            </Typography>
            <Typography sx={{ mb: 2 }} color="white" variant="h6">
              -Specializing in HTML, CSS, Javascript, Restful API's and React
              with experience in Next JS & Typescript.
            </Typography>
            <Typography sx={{ mb: 2 }} color="white" variant="h6">
              -2 years of educating future MERN developers. I have
              conceptualized, debugged and help deploy over 200 team projects.
            </Typography>
            <Typography sx={{ mb: 2 }} color="white" variant="h6">
              -A forever student of programming, languages/cultures & life in
              general.
            </Typography>
          </section>
        </div>
        <Typography
          variant="h3"
          component="section"
          color="white"
          sx={{ mb: 3 }}
        >
          Certifications:
        </Typography>
        <div className="certifications-container">
          <Certifications />
        </div>
      </CardContent>
    </div>
  );
}
